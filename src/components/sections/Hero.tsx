"use client";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const industries = ["PropTech", "FinTech", "Minería", "Banca digital"];

const stats = [
  "7+ años",
  "24+ proyectos",
  "98% tasa de resolución",
  "4 industrias",
];

export function Hero() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden py-16 md:py-24">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Top badge */}
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-border bg-elevated/60 px-4 py-2 backdrop-blur-sm"
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

          {/* Industry tabs */}
          <motion.div
            variants={fadeUp}
            className="mb-8 flex flex-wrap items-center gap-4 text-xs font-medium tracking-wide text-secondary sm:text-sm"
          >
            {industries.map((industry, index) => (
              <span
                key={industry}
                className={index === 0 ? "text-primary" : "text-secondary"}
              >
                {industry}
              </span>
            ))}
          </motion.div>

          {/* Main grid */}
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Left column — text */}
            <div className="flex flex-col">
              {/* Heading */}
              <motion.h1
                variants={fadeUp}
                className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Diseño plataformas{" "}
                <Badge rotation={-1.5}>AI Governance</Badge> complejas para que
                las decisiones <Badge rotation={1.5}>decisión crítica</Badge>{" "}
                <Badge rotation={-2}>misión crítica</Badge> tomen{" "}
                <strong className="font-extrabold text-primary">segundos</strong>
                , no minutos.
              </motion.h1>

              {/* Buttons */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
              >
                <a
                  href="/proyectos"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg shadow-[0_0_40px_-12px_rgba(200,255,0,0.35)] transition-all duration-300 hover:shadow-[0_0_60px_-12px_rgba(200,255,0,0.5)]"
                >
                  Ver casos de estudio
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
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
                className="mt-3 max-w-xl text-sm text-secondary"
              >
                ¿Tienes una plataforma que tu equipo evita usar? Hablemos.
              </motion.p>
            </div>

            {/* Right column — photo */}
            <motion.div
              variants={fadeUp}
              className="relative mx-auto aspect-square w-full max-w-[360px] lg:max-w-[420px]"
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
                  sizes="(max-width: 1024px) 360px, 420px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-8 text-sm text-secondary"
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
