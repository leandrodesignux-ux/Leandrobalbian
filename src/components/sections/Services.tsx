"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Marquee } from "@/components/ui/Marquee";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { LogoMark } from "@/components/ui/LogoMark";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  services,
  processSteps,
  successCases,
  principles,
  impactMetrics,
  marqueeItems,
} from "@/data/services";
import { Plus, Minus, ArrowRight } from "lucide-react";

function MethodologyCard({
  service,
  isOpen,
  onToggle,
}: {
  service: (typeof services)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "group relative flex flex-col rounded-3xl border bg-elevated/30 p-6 transition-all duration-300 sm:p-8",
        isOpen
          ? "border-accent/50 shadow-[0_0_40px_-12px_rgba(200,255,0,0.2)]"
          : "border-border hover:border-accent/40 hover:shadow-[0_0_30px_-12px_rgba(200,255,0,0.12)]"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-4xl font-bold text-accent sm:text-5xl">
          {service.number}
        </span>
        <button
          type="button"
          onClick={onToggle}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:border-accent/30 hover:text-accent"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar detalle" : "Ver detalle"}
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </button>
      </div>

      <h3 className="mt-6 text-xl font-bold leading-tight tracking-tight text-primary sm:text-2xl">
        {service.title}
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
        {service.description}
      </p>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-secondary sm:text-base">
              {service.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-[10px]">
            {tag}
          </Badge>
        ))}
      </div>
    </motion.article>
  );
}

function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Connecting line — desktop */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-border lg:left-1/2 lg:-ml-px" />

      <div className="flex flex-col gap-8 lg:gap-12">
        {processSteps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className={cn(
                "relative flex items-start gap-6 lg:grid lg:grid-cols-2 lg:gap-16",
                isEven ? "lg:text-right" : "lg:text-left"
              )}
            >
              {/* Number node */}
              <div
                className={cn(
                  "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent bg-bg font-mono text-sm font-bold text-accent lg:mx-auto",
                  isEven ? "lg:order-2" : "lg:order-1"
                )}
              >
                {step.number}
              </div>

              {/* Content */}
              <div
                className={cn(
                  "flex flex-col",
                  isEven ? "lg:order-1 lg:pr-16" : "lg:order-2 lg:pl-16"
                )}
              >
                <h4 className="text-lg font-bold text-primary sm:text-xl">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-secondary sm:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function SuccessCaseCard({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof successCases)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "group flex min-h-[320px] flex-col rounded-3xl border p-6 transition-all duration-300 sm:p-8",
        isOpen
          ? "border-accent/50 bg-elevated/30 shadow-[0_0_40px_-12px_rgba(200,255,0,0.15)]"
          : "border-border bg-elevated/20 hover:border-accent/30"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <LogoMark initials={item.initials} />
          <span className="text-sm font-semibold text-primary">{item.name}</span>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:border-accent/30 hover:text-accent"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar caso" : "Ver caso completo"}
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </button>
      </div>

      <div className="mt-6">
        <span
          className={cn(
            "inline-block text-2xl font-bold tracking-tight sm:text-3xl",
            item.isMetric ? "text-accent" : "text-primary"
          )}
        >
          {item.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold leading-tight text-primary sm:text-xl">
        {item.name}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary">
        {item.shortDescription}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 border-t border-border pt-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Problema
                  </h5>
                  <p className="mt-1 text-sm leading-relaxed text-secondary">
                    {item.story.problem}
                  </p>
                </div>
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Qué hice
                  </h5>
                  <p className="mt-1 text-sm leading-relaxed text-secondary">
                    {item.story.whatIDid}
                  </p>
                </div>
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Resultado
                  </h5>
                  <p className="mt-1 text-sm leading-relaxed text-secondary">
                    {item.story.result}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export function Services() {
  const [openMethodology, setOpenMethodology] = useState<string | null>(null);
  const [openCase, setOpenCase] = useState<string | null>(null);

  return (
    <>
      {/* Marquee */}
      <Marquee items={marqueeItems} />

      {/* Methodology */}
      <section id="metodologia" className="py-24 md:py-32">
        <Container>
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
              Metodología
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
            >
              ¿Cómo pienso un problema?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
            >
              Tomo problemas ambiguos, los convierto en sistemas de investigación
              medibles y los aterrizo en palancas ejecutables.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {services.map((service) => (
              <MethodologyCard
                key={service.number}
                service={service}
                isOpen={openMethodology === service.number}
                onToggle={() =>
                  setOpenMethodology(
                    openMethodology === service.number ? null : service.number
                  )
                }
              />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-y border-border py-24 md:py-32">
        <Container>
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
              Proceso
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Cómo lo ejecuto en el tiempo
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
            >
              Cada fase tiene un entregable claro. Del encargo ambiguo al cierre
              del ciclo, sin perderme en análisis.
            </motion.p>
          </motion.div>

          <ProcessTimeline />
        </Container>
      </section>

      {/* Success cases */}
      <section className="py-24 md:py-32">
        <Container>
          <motion.div
            className="mb-12 max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 font-mono text-xs uppercase tracking-widest text-accent"
            >
              Casos de éxito
            </motion.p>
            <motion.h3
              variants={fadeUp}
              className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl"
            >
              Impacto real, medible
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
            >
              Empresas donde la metodología se tradujo en resultados concretos
              para el negocio.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {successCases.map((item) => (
              <SuccessCaseCard
                key={item.id}
                item={item}
                isOpen={openCase === item.id}
                onToggle={() =>
                  setOpenCase(openCase === item.id ? null : item.id)
                }
              />
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 flex justify-center"
          >
            <Link
              href="/proyectos"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-primary transition-colors hover:border-accent/30 hover:text-accent"
            >
              Ver todos los proyectos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Principles */}
      <section className="border-y border-border py-24 md:py-32">
        <Container>
          <motion.div
            className="mb-12 max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 font-mono text-xs uppercase tracking-widest text-accent"
            >
              Postura
            </motion.p>
            <motion.h3
              variants={fadeUp}
              className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl"
            >
              Principios que no negocio
            </motion.h3>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {principles.map((principle) => (
              <motion.div
                key={principle.number}
                variants={fadeUp}
                className="flex items-baseline gap-4 sm:gap-6"
              >
                <span className="font-mono text-sm font-bold text-accent">
                  {principle.number}
                </span>
                <p className="text-xl font-medium leading-relaxed text-primary sm:text-2xl md:text-3xl">
                  {principle.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Impact metrics */}
      <section className="py-24 md:py-32">
        <Container>
          <motion.div
            className="grid grid-cols-2 divide-x divide-border border-y border-border py-8 sm:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {impactMetrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={fadeUp}
                className="px-2 py-4 text-center first:pl-0 last:pr-0 sm:px-4"
              >
                <div className="text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
                  <AnimatedCounter
                    value={metric.numericValue}
                    suffix={metric.suffix}
                  />
                </div>
                <div className="mt-1 text-xs leading-tight text-secondary sm:text-sm">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
