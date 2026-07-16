"use client";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
    <section className="relative flex flex-1 items-center overflow-hidden py-12 md:py-24">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Identity block */}
          <motion.div
            variants={fadeUp}
            className="mb-6 flex flex-col gap-3"
          >
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

          {/* Main grid */}
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Left column — text */}
            <div className="flex flex-col">
              {/* Mobile headline without inline badges */}
              <motion.h1
                variants={fadeUp}
                className="text-balance text-4xl font-medium leading-[1.15] tracking-tight text-primary sm:text-5xl lg:hidden"
              >
                <strong className="font-bold text-primary">Diseño</strong>{" "}
                plataformas complejas para que las decisiones tomen{" "}
                <strong className="font-bold text-primary">segundos</strong>, no
                minutos.
              </motion.h1>

              {/* Desktop headline with inline badges */}
              <motion.h1
                variants={fadeUp}
                className="hidden text-balance text-5xl font-medium leading-[1.1] tracking-tight text-primary md:text-6xl lg:block lg:text-7xl"
              >
                <strong className="font-bold text-primary">Diseño</strong>{" "}
                plataformas{" "}
                <Badge rotation={-1.5}>AI Governance</Badge> complejas para que
                las decisiones <Badge rotation={1.5}>decisión crítica</Badge>{" "}
                <Badge rotation={-2}>misión crítica</Badge> tomen{" "}
                <strong className="font-bold text-primary">segundos</strong>
                , no minutos.
              </motion.h1>

              {/* Mobile badges row */}
              <motion.div
                variants={fadeUp}
                className="mt-5 flex flex-wrap gap-2 lg:hidden"
              >
                <Badge variant="filled" rotation={0} className="text-xs">
                  AI Governance
                </Badge>
                <Badge variant="filled" rotation={0} className="text-xs">
                  decisión crítica
                </Badge>
                <Badge variant="filled" rotation={0} className="text-xs">
                  misión crítica
                </Badge>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
              >
                Senior Product Designer especializado en sistemas de alta
                complejidad, PropTech, FinTech, banca digital y minería.
              </motion.p>

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
              className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[420px]"
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
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 420px"
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
