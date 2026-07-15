"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { phases, impactLabels } from "@/data/process";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock } from "lucide-react";

function PhaseCard({
  phase,
  isActive,
  onNumberClick,
}: {
  phase: (typeof phases)[number];
  isActive: boolean;
  onNumberClick: () => void;
}) {
  const [expandedTag, setExpandedTag] = useState<string | null>(null);

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-3xl border bg-elevated/30 p-5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-6",
        isActive
          ? "border-accent/40 shadow-[0_0_40px_-12px_rgba(200,255,0,0.15)]"
          : "border-border opacity-70 hover:opacity-100"
      )}
    >
      {/* Number anchor */}
      <button
        onClick={onNumberClick}
        className="w-fit font-mono text-4xl font-bold text-accent transition-transform duration-200 hover:scale-105 sm:text-5xl"
        aria-label={`Ir a fase ${phase.name}`}
      >
        {phase.number}
      </button>

      {/* Phase badge */}
      <div className="mt-4">
        <Badge variant="outline" className="text-xs uppercase tracking-wider">
          {phase.name}
        </Badge>
      </div>

      {/* Headline */}
      <h3 className="mt-4 text-lg font-bold leading-tight tracking-tight text-primary sm:text-xl">
        {phase.headline}
      </h3>

      {/* Duration */}
      <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-secondary">
        <Clock className="h-3 w-3" />
        {phase.duration}
      </div>

      {/* Impact metric */}
      <div className="mt-6 flex-1">
        <div className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
          {phase.impact}
        </div>
        <p className="mt-1 text-xs leading-relaxed text-secondary sm:text-sm">
          {impactLabels[phase.number]}
        </p>
      </div>

      {/* Activity tags */}
      <div className="mt-6 space-y-2">
        {phase.activities.map((activity) => {
          const isExpanded = expandedTag === activity.title;
          return (
            <div key={activity.title}>
              <button
                onClick={() =>
                  setExpandedTag(isExpanded ? null : activity.title)
                }
                className={cn(
                  "text-left text-xs font-semibold transition-colors sm:text-sm",
                  isExpanded ? "text-accent" : "text-primary hover:text-accent"
                )}
                aria-expanded={isExpanded}
              >
                <span className="mr-1 text-accent">*</span>
                {activity.title}
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? "auto" : 0,
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="pt-1.5 text-xs leading-relaxed text-secondary sm:text-sm">
                  {activity.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export function Proceso() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(phases.length - 1, Math.floor(latest * phases.length));
    setActiveIndex(index);
  });

  const scrollToPhase = (index: number) => {
    const el = cardsRef.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <Container>
        {/* Header */}
        <motion.div
          className="mb-16 max-w-3xl md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 font-mono text-xs uppercase tracking-widest text-accent"
          >
            [04] — Proceso
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
          >
            ¿Cómo trabajo?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
          >
            Cada fase tiene un entregable claro y un impacto medible. No cobro por
            horas, cobro por problemas resueltos.
          </motion.p>
        </motion.div>

        {/* Stepper — desktop */}
        <div className="relative hidden lg:block">
          {/* Progress rail */}
          <div className="absolute left-0 right-0 top-[3.25rem] h-px bg-border">
            <motion.div
              className="h-full bg-accent"
              style={{ width: progressWidth }}
            />
          </div>

          <motion.div
            className="relative grid grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                variants={fadeUp}
              >
                <PhaseCard
                  phase={phase}
                  isActive={index === activeIndex}
                  onNumberClick={() => scrollToPhase(index)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stepper — mobile carousel */}
        <div className="lg:hidden">
          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="w-[85vw] flex-shrink-0 snap-center"
              >
                <PhaseCard
                  phase={phase}
                  isActive={index === activeIndex}
                  onNumberClick={() => scrollToPhase(index)}
                />
              </div>
            ))}
          </div>

          {/* Mobile progress dots */}
          <div className="mt-4 flex justify-center gap-2">
            {phases.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPhase(index)}
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-colors",
                  index === activeIndex ? "bg-accent" : "bg-border"
                )}
                aria-label={`Ir a fase ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Final CTA block */}
        <motion.div
          className="mt-20 rounded-3xl border border-border bg-elevated/30 p-8 text-center md:mt-28 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            ¿Cuánto cuesta no resolverlo?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-secondary md:text-base">
            Las fricciones que hoy parecen normales están consumiendo tiempo,
            errores y rotación de tu equipo. En 3–5 días te digo exactamente dónde
            y cuánto.
          </p>
          <Button href="#contacto" variant="primary" className="mt-6">
            Agendar diagnóstico
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
