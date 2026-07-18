"use client";

import { Container } from "@/components/ui/Container";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { ServiceTabs } from "./ServiceTabs";
import { getAccessibleVariants } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function UxWritingHero() {
  const reducedMotion = useReducedMotion();
  const { fadeUp, staggerContainer } = getAccessibleVariants(reducedMotion);

  return (
    <section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">
      <NetworkBackground className="opacity-40" />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-12"
        >
          <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                — SERVICIOS
              </p>

              <h1 className="text-balance text-5xl font-medium leading-[1.05] tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl">
                Contenido que se{" "}
                <em className="font-serif not-italic text-accent">Entiende</em> a la
                Primera
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-secondary md:text-xl">
                Traduzco funciones técnicas complejas en comunicación clara —
                interfaces, onboarding, cápsulas educativas — para que la adopción
                no dependa de que el usuario lea un manual.
              </p>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <a
                  href="#proyectos"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg shadow-[0_0_40px_-12px_rgba(200,255,0,0.35)] transition-all duration-300 hover:shadow-[0_0_60px_-12px_rgba(200,255,0,0.5)]"
                >
                  Ver casos
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bg text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-6 py-3.5 text-sm font-medium text-primary transition-colors duration-200 hover:border-accent/30 hover:text-accent"
                >
                  Agendar consulta
                </a>
              </div>
            </motion.div>

            {/* Right — visual placeholder */}
            <motion.div
              variants={fadeUp}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-elevated/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              <svg
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="ux-grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ux-grid)" />
                {/* Chat bubbles */}
                <rect
                  x="12%"
                  y="25%"
                  width="60%"
                  height="12%"
                  rx="12"
                  fill="rgba(255,255,255,0.06)"
                />
                <rect
                  x="22%"
                  y="41%"
                  width="66%"
                  height="12%"
                  rx="12"
                  fill="rgba(200,255,0,0.12)"
                />
                <rect
                  x="12%"
                  y="57%"
                  width="50%"
                  height="12%"
                  rx="12"
                  fill="rgba(255,255,255,0.04)"
                />
                <rect
                  x="18%"
                  y="73%"
                  width="58%"
                  height="12%"
                  rx="12"
                  fill="rgba(255,255,255,0.05)"
                />
                {/* Checkmark */}
                <circle cx="85%" cy="47%" r="12" fill="#c8ff00" opacity="0.9" />
                <path
                  d="M 80% 46% L 83.5% 50% L 90% 44%"
                  fill="none"
                  stroke="#0a0a0a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>

          <motion.div variants={fadeUp}>
            <ServiceTabs current="ux-writing-elearning" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
