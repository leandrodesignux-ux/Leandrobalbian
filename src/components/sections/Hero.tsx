"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  "7+ años",
  "24+ proyectos",
  "PropTech · FinTech · Minería",
];

export function Hero() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden py-20 md:py-32">
      <Container>
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Top badge */}
          <motion.div
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-elevated/60 px-4 py-2 backdrop-blur-sm"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-bg">
              LB
            </span>
            <span className="text-sm text-primary">
              Leandro Balbian — Senior Product Designer
            </span>
            <span className="flex items-center gap-1.5 text-sm text-secondary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Disponible para proyectos
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Diseño plataformas{" "}
            <Badge rotation={-1.5}>AI Governance</Badge> complejas para que las
            decisiones <Badge rotation={1.5}>decisión crítica</Badge>{" "}
            <Badge rotation={-2}>misión crítica</Badge> tomen{" "}
            <strong className="font-extrabold text-primary">segundos</strong>,
            no minutos.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary md:text-xl"
          >
            Especializado en productos digitales complejos: dashboards de datos,
            flujos de aprobación, compliance y herramientas internas donde la
            claridad reduce riesgos.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="#proyectos" variant="primary">
              Ver casos de estudio
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-primary"
            >
              ¿Tienes una plataforma que tu equipo evita usar? Hablemos.
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-secondary"
          >
            {stats.map((stat, index) => (
              <span key={stat} className="flex items-center gap-4">
                <span>{stat}</span>
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
