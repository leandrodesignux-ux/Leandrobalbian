"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Asterisk } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { useState } from "react";

const industries = ["PropTech", "FinTech", "Minería", "Banca digital"];

const stats = [
  "7+ años",
  "24+ proyectos",
  "98% tasa de resolución",
  "4 industrias",
];

const highlightNotes: Record<string, string> = {
  plataformas:
    "Sistemas con miles de datos en tiempo real, no landing pages.",
  decisiones:
    "Decisiones críticas que antes tomaban reuniones y ahora toman un clic.",
  segundos:
    "Medido en reducción real de tiempo de respuesta en SIAC y Sentinel OS.",
};

function segmentClass(isActive: boolean, hasActive: boolean) {
  return cn(
    "transition-colors duration-300",
    isActive ? "text-primary" : hasActive ? "text-primary/30" : "text-primary"
  );
}

export function Hero() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const hasActive = activeKey !== null;

  return (
    <section className="relative flex flex-1 items-center overflow-hidden py-12 md:py-24">
      <NetworkBackground className="opacity-40" />
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Main grid: identity, industries, headline, note/subtitle, buttons + photo */}
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Left column — text block */}
            <div className="flex flex-col">
              {/* Identity block */}
              <motion.div variants={fadeUp} className="mb-6 flex flex-col gap-3">
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-xs font-bold text-bg">
                    LB
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-primary">
                      Leandro Balbian
                    </span>
                    <span className="text-xs text-secondary">
                      Senior Product Designer
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm text-secondary">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                  Disponible para proyectos
                </span>
              </motion.div>

              {/* Industry tabs */}
              <motion.div
                variants={fadeUp}
                className="mb-8 flex flex-wrap items-center gap-3 text-xs tracking-wide text-secondary sm:text-sm"
              >
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="font-medium text-secondary"
                  >
                    {industry}
                  </span>
                ))}
              </motion.div>

              {/* Headline with hover isolate effect */}
              <motion.h1
                variants={fadeUp}
                className="text-balance text-4xl font-medium leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                <strong className={cn("font-bold", segmentClass(false, hasActive))}>
                  Diseño
                </strong>{" "}
                <span
                  className={cn(
                    "lg:cursor-pointer",
                    segmentClass(activeKey === "plataformas", hasActive)
                  )}
                  onMouseEnter={() => setActiveKey("plataformas")}
                  onMouseLeave={() => setActiveKey(null)}
                >
                  plataformas complejas
                </span>{" "}
                para que las{" "}
                <span
                  className={cn(
                    "lg:cursor-pointer",
                    segmentClass(activeKey === "decisiones", hasActive)
                  )}
                  onMouseEnter={() => setActiveKey("decisiones")}
                  onMouseLeave={() => setActiveKey(null)}
                >
                  decisiones
                </span>{" "}
                tomen{" "}
                <span
                  className={cn(
                    "lg:cursor-pointer",
                    segmentClass(activeKey === "segundos", hasActive)
                  )}
                  onMouseEnter={() => setActiveKey("segundos")}
                  onMouseLeave={() => setActiveKey(null)}
                >
                  <strong
                    className={cn(
                      "font-bold",
                      segmentClass(activeKey === "segundos", hasActive)
                    )}
                  >
                    segundos
                  </strong>
                  , no minutos
                </span>
                .
              </motion.h1>

              {/* Contextual note / subtitle */}
              <motion.div
                variants={fadeUp}
                className="mt-6 min-h-[3.5rem]"
              >
                <AnimatePresence mode="wait">
                  {activeKey ? (
                    <motion.div
                      key={activeKey}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-2"
                    >
                      <Asterisk className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <span className="max-w-2xl text-base italic leading-relaxed text-accent md:text-lg">
                        {highlightNotes[activeKey]}
                      </span>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="subtitle"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
                    >
                      Senior Product Designer especializado en sistemas de alta
                      complejidad, PropTech, FinTech, banca digital y minería.
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Buttons */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
              >
                <a
                  href="/proyectos"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent px-2 pl-5 py-2 text-sm font-semibold text-bg shadow-[0_0_40px_-12px_rgba(200,255,0,0.35)] transition-all duration-300 hover:shadow-[0_0_60px_-12px_rgba(200,255,0,0.5)]"
                >
                  Ver casos de estudio
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-primary transition-colors duration-200 hover:border-accent/30 hover:text-accent"
                >
                  Hablemos
                </a>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-xl text-sm text-secondary"
              >
                ¿Tienes una plataforma que tu equipo evita usar? Hablemos.
              </motion.p>
            </div>

            {/* Right column — photo */}
            <motion.div
              variants={fadeUp}
              className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-full bg-elevated ring-1 ring-border">
                <Image
                  src="/HERO.png"
                  alt="Leandro Balbian — Senior Product Designer"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 400px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-8 text-sm text-secondary md:mt-14"
          >
            {stats.map((stat, index) => (
              <span key={stat} className="flex items-center gap-4">
                <span className="font-medium text-primary">{stat}</span>
                {index < stats.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-secondary" />
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
