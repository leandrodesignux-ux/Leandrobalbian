"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function DisenoIAContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    idea: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Idea a prototipar:\n${formData.idea}\n\nSolicitud de sesión de diseño con IA desde /servicios/diseno-ia`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Error al enviar el mensaje.");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", idea: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión. Intentá de nuevo.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="ia-name"
            className="text-xs font-medium uppercase tracking-widest text-secondary"
          >
            Nombre <span aria-hidden="true">*</span>
          </label>
          <input
            id="ia-name"
            type="text"
            required
            aria-required="true"
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="min-h-[44px] rounded-xl border border-border bg-elevated/30 px-4 py-3 text-sm text-primary placeholder:text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Tu nombre"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="ia-email"
            className="text-xs font-medium uppercase tracking-widest text-secondary"
          >
            Correo <span aria-hidden="true">*</span>
          </label>
          <input
            id="ia-email"
            type="email"
            required
            aria-required="true"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="min-h-[44px] rounded-xl border border-border bg-elevated/30 px-4 py-3 text-sm text-primary placeholder:text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="ia-idea"
          className="text-xs font-medium uppercase tracking-widest text-secondary"
        >
          ¿Qué querés prototipar?
        </label>
        <textarea
          id="ia-idea"
          rows={4}
          value={formData.idea}
          onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
          className="min-h-[88px] rounded-xl border border-border bg-elevated/30 px-4 py-3 text-sm text-primary placeholder:text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Contame la idea o flujo que querés validar..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "mt-2 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-accent transition-all hover:bg-primary/90",
          status === "submitting" && "cursor-not-allowed opacity-60"
        )}
      >
        {status === "submitting" ? "Enviando..." : "Agendar sesión"}
        <Send className="h-4 w-4" />
      </button>

      <div aria-live="polite" aria-atomic="true" className="flex flex-col gap-2">
        {status === "success" && (
          <div className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm text-primary">
            <CheckCircle className="h-4 w-4 text-accent" />
            Solicitud enviada. Te respondo en menos de 24 horas.
          </div>
        )}

        {status === "error" && (
          <div role="alert" className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-primary">
            <AlertCircle className="mt-0.5 h-4 w-4 text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>

      <p className="text-center text-xs text-secondary">
        Primera sesión de definición · Sin compromiso
      </p>
    </form>
  );
}
