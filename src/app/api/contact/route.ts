import { NextResponse } from "next/server";

interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      message,
      website,
      turnstileToken,
    }: {
      name?: string;
      email?: string;
      message?: string;
      website?: string;
      turnstileToken?: string;
    } = body;

    // Honeypot: bots usually fill this invisible field
    if (website && typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Verificación de seguridad requerida." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "leandrodesign.ux@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        {
          error:
            "El envío de emails no está configurado. Agregá RESEND_API_KEY en las variables de entorno de Vercel para activarlo.",
        },
        { status: 503 }
      );
    }

    if (!turnstileSecret) {
      return NextResponse.json(
        { error: "Verificación de seguridad no configurada." },
        { status: 503 }
      );
    }

    // Verify Turnstile token
    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: turnstileToken,
        }),
      }
    );

    const turnstileData =
      (await turnstileResponse.json()) as TurnstileVerifyResponse;

    if (!turnstileData.success) {
      return NextResponse.json(
        { error: "Verificación de seguridad fallida, intentá de nuevo." },
        { status: 400 }
      );
    }

    // Send internal notification email
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Portfolio <${fromEmail}>`,
        to: [toEmail],
        subject: `Nuevo mensaje de ${name} desde el portfolio`,
        reply_to: email,
        text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.message || "Error al enviar el mensaje." },
        { status: 500 }
      );
    }

    // Send confirmation email to the user (non-blocking)
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Leandro Designs <${fromEmail}>`,
          to: [email],
          subject: "Recibí tu mensaje — Leandro Designs",
          text: `Hola ${name},\n\nGracias por contactarte. Tu mensaje fue recibido y lo estoy revisando.\n\nTe respondo en 24-48hs hábiles.\n\nSaludos,\nLeandro Designs`,
          html: `<p>Hola ${name},</p><p>Gracias por contactarte. Tu mensaje fue recibido y lo estoy revisando.</p><p>Te respondo en 24-48hs hábiles.</p><p>Saludos,<br>Leandro Designs</p>`,
        }),
      });
    } catch (confirmationError) {
      console.error("Error al enviar email de confirmación:", confirmationError);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error inesperado al procesar el mensaje." },
      { status: 500 }
    );
  }
}
