"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { config } from "@/lib/config";
import Image from "next/image";
import {
  Compass,
  Layers,
  Sparkles,
  Route,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

export interface Option {
  label: string;
  value: string;
  isOther?: boolean;
}

export interface Question {
  id: string;
  question: string;
  subtitle?: string;
  type: "pills" | "dropdown";
  options: Option[];
}

interface QualifyingFormProps {
  questions: Question[];
  serviceId: string;
  serviceLabel?: string;
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  hub: Compass,
  "consultoria-ux": Compass,
  "diseno-producto-complejo": Layers,
  "diseno-ia": Sparkles,
  "ux-writing-elearning": Route,
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

export function QualifyingForm({ questions, serviceId, serviceLabel }: QualifyingFormProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [otherOpen, setOtherOpen] = useState(false);
  const [otherText, setOtherText] = useState("");
  const [showContact, setShowContact] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const totalSteps = questions.length;
  const isFinal = step >= totalSteps;
  const currentQuestion = questions[step];
  const progressPercent = totalSteps > 0 ? (Math.min(step, totalSteps) / totalSteps) * 100 : 0;

  const Icon = SERVICE_ICONS[serviceId] || Compass;
  const displayLabel = serviceLabel || "Leandro Designs";

  function handleSelect(option: Option) {
    if (option.isOther) {
      if (!otherOpen) {
        setOtherOpen(true);
        return;
      }
      if (!otherText.trim()) return;
      setAnswers({ ...answers, [currentQuestion.id]: `Otro: ${otherText.trim()}` });
      setOtherText("");
      setOtherOpen(false);
      setStep(step + 1);
      return;
    }

    setAnswers({ ...answers, [currentQuestion.id]: option.label });
    setOtherOpen(false);
    setOtherText("");
    setStep(step + 1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStatus("submitting");
    setErrorMessage("");

    const answersText = questions
      .map((q) => `• ${q.question}\n  → ${answers[q.id] || "—"}`)
      .join("\n\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: `[Formulario de calificación — ${displayLabel}]\n\n${answersText}`,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setStatus("error");
        setErrorMessage(data.error || "Error al enviar.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión. Intentá de nuevo.");
    }
  }

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-bg">
      <div className="grid lg:grid-cols-[2fr_3fr]">
        {/* ── Image panel ── */}
        {serviceId === "hub" ? (
          <div className="relative min-h-[220px] overflow-hidden bg-elevated/20 lg:min-h-full">
            <svg
              className="absolute inset-0 h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern id="qf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#qf-grid)" />
            </svg>
            <Image
              src="/SERVICIOS.png"
              alt="Servicios Leandro Balbian"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        ) : (
          <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-elevated/20 lg:min-h-full">
            <svg
              className="absolute inset-0 h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern id="qf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#qf-grid)" />
            </svg>
            <div className="relative z-10 flex flex-col items-center gap-4 p-8">
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                <Icon className="h-10 w-10" />
              </span>
              <p className="text-center font-mono text-xs uppercase tracking-widest text-accent">
                {displayLabel}
              </p>
            </div>
          </div>
        )}

        {/* ── Content panel ── */}
        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          {/* Brand + progress */}
          <div className="mb-8 flex items-center justify-between">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              Leandro Designs
            </span>
            {totalSteps > 0 && (
              <span className="font-mono text-xs text-secondary">
                {isFinal ? "Listo" : `${step + 1} / ${totalSteps}`}
              </span>
            )}
          </div>

          {/* Progress bar */}
          <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-elevated/50">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          <AnimatePresence mode="wait">
            {/* ── Question step ── */}
            {!isFinal && currentQuestion && (
              <motion.div
                key={`q-${step}`}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-balance text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">
                    {currentQuestion.question}
                  </h3>
                  {currentQuestion.subtitle && (
                    <p className="text-sm text-secondary">{currentQuestion.subtitle}</p>
                  )}
                </div>

                {currentQuestion.type === "dropdown" ? (
                  <div className="flex flex-col gap-2">
                    <select
                      value={answers[currentQuestion.id] || ""}
                      onChange={(e) => {
                        const opt = currentQuestion.options.find((o) => o.value === e.target.value);
                        if (opt) handleSelect(opt);
                      }}
                      className="min-h-[52px] w-full rounded-2xl border border-border bg-elevated/20 px-5 py-3 text-sm font-medium text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option value="" disabled>
                        Seleccioná una opción
                      </option>
                      {currentQuestion.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {currentQuestion.options.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleSelect(opt)}
                        className={cn(
                          "min-h-[52px] w-full rounded-2xl border px-5 py-3 text-left text-sm font-medium transition-all duration-200",
                          answers[currentQuestion.id] === opt.label
                            ? "border-accent bg-accent text-bg"
                            : "border-border bg-elevated/10 text-primary hover:border-accent/40 hover:bg-accent/5"
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}

                    {/* "Otro" text input */}
                    {otherOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="overflow-hidden"
                      >
                        <input
                          type="text"
                          autoFocus
                          value={otherText}
                          onChange={(e) => setOtherText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && otherText.trim()) {
                              const ot = currentQuestion.options.find((o) => o.isOther);
                              if (ot) handleSelect(ot);
                            }
                          }}
                          placeholder="Escribí tu respuesta..."
                          className="mt-2 min-h-[52px] w-full rounded-2xl border border-border bg-elevated/20 px-5 py-3 text-sm text-primary placeholder:text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {/* ── Final step: two CTAs ── */}
            {isFinal && !showContact && status !== "success" && (
              <motion.div
                key="final"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-balance text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">
                    ¿Cómo querés seguir?
                  </h3>
                  <p className="text-sm text-secondary">
                    Elegí la opción que mejor se adapte a tu momento.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowContact(true)}
                  className="min-h-[52px] w-full rounded-2xl bg-accent px-5 py-3 text-left text-sm font-semibold text-bg transition-all duration-200 hover:bg-accent/90"
                >
                  Quiero que me contacten
                </button>

                <a
                  href={config.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[52px] w-full items-center justify-between rounded-2xl border border-border bg-elevated/10 px-5 py-3 text-sm font-medium text-primary transition-all duration-200 hover:border-accent/40 hover:bg-accent/5"
                >
                  <span>Agendar una reunión</span>
                  <ArrowUpRight className="h-4 w-4 text-secondary" />
                </a>
              </motion.div>
            )}

            {/* ── Contact form ── */}
            {isFinal && showContact && status !== "success" && (
              <motion.div
                key="contact"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-balance text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">
                      Dejame tus datos
                    </h3>
                    <p className="text-sm text-secondary">
                      Te respondo en menos de 24 horas.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="qf-name" className="text-xs font-medium uppercase tracking-widest text-secondary">
                      Nombre <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="qf-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="min-h-[48px] w-full rounded-2xl border border-border bg-elevated/20 px-5 py-3 text-sm text-primary placeholder:text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="qf-email" className="text-xs font-medium uppercase tracking-widest text-secondary">
                      Correo <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="qf-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="min-h-[48px] w-full rounded-2xl border border-border bg-elevated/20 px-5 py-3 text-sm text-primary placeholder:text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={cn(
                      "min-h-[52px] w-full rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-bg transition-all duration-200 hover:bg-accent/90",
                      status === "submitting" && "cursor-not-allowed opacity-60"
                    )}
                  >
                    {status === "submitting" ? "Enviando..." : "Enviar y recibir respuesta"}
                  </button>

                  {status === "error" && (
                    <div role="alert" className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-primary">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                </form>
              </motion.div>
            )}

            {/* ── Success ── */}
            {status === "success" && (
              <motion.div
                key="success"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center gap-4 py-8 text-center"
              >
                <CheckCircle className="h-12 w-12 text-accent" />
                <h3 className="text-2xl font-bold text-primary">Recibido</h3>
                <p className="max-w-sm text-sm text-secondary">
                  Te respondo en menos de 24 horas. Mientras tanto, podés explorar
                  los casos de estudio en la sección de proyectos.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
