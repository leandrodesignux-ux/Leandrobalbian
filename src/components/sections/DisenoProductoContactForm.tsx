"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function DisenoProductoContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "",
    description: "",
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
          message: `Plataforma/URL: ${formData.platform}\n\nDescripción:\n${formData.description}\n\nSolicitud de auditoría de plataforma desde /servicios/diseno-producto-complejo`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Error al enviar el mensaje.");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", platform: "", description: "" });
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
            htmlFor="name"
            className="text-xs font-medium uppercase tracking-widest text-secondary"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="rounded-xl border border-border bg-elevated/30 px-4 py-3 text-sm text-primary placeholder:text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Tu nombre"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs font-medium uppercase tracking-widest text-secondary"
          >
            Correo
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="rounded-xl border border-border bg-elevated/30 px-4 py-3 text-sm text-primary placeholder:text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="platform"
          className="text-xs font-medium uppercase tracking-widest text-secondary"
        >
          Plataforma / URL
        </label>
        <input
          id="platform"
          type="text"
          value={formData.platform}
          onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
          className="rounded-xl border border-border bg-elevated/30 px-4 py-3 text-sm text-primary placeholder:text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="https://tuplataforma.cl"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="description"
          className="text-xs font-medium uppercase tracking-widest text-secondary"
        >
          Descripción breve
        </label>
        <textarea
          id="description"
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="rounded-xl border border-border bg-elevated/30 px-4 py-3 text-sm text-primary placeholder:text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Contame sobre tu plataforma..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-accent transition-all hover:bg-primary/90",
          status === "submitting" && "opacity-70"
        )}
      >
        {status === "submitting" ? "Enviando..." : "Solicitar auditoría"}
        <Send className="h-4 w-4" />
      </button>

      {status === "success" && (
        <div className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm text-primary">
          <CheckCircle className="h-4 w-4 text-accent" />
          Solicitud enviada. Te respondo en menos de 24 horas.
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-primary">
          <AlertCircle className="mt-0.5 h-4 w-4 text-red-500" />
          <span>{errorMessage}</span>
        </div>
      )}

      <p className="text-center text-xs text-secondary">
        Auditoría inicial · Respuesta en 24h
      </p>
    </form>
  );
}
