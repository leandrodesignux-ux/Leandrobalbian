"use client";

import { Container } from "@/components/ui/Container";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { ServiceTabs } from "./ServiceTabs";
import { PalancaBadge } from "./PalancaTags";
import { getAccessibleVariants } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function DisenoProductoHero() {
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
                — Servicios
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <PalancaBadge id="retencion" />
              </div>

              <h1 className="text-balance text-5xl font-medium leading-[1.05] tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl">
                <em className="not-italic text-accent">Diseño</em>{" "}
                End-to-End
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-secondary md:text-xl">
                Cuando tu plataforma crece sin dirección, la fricción se vuelve
                invisible hasta que aparece como churn o como tickets de soporte.
                Diseño el sistema completo — de la arquitectura de datos a la
                interfaz — para que tu equipo deje de perder usuarios por algo
                que nunca se vio.
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
                  Agendar auditoría
                </a>
              </div>
            </motion.div>

            {/* Right — visual placeholder */}
            <motion.div
              variants={fadeUp}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border"
            >
              <Image
                src="/END TO END.png"
                alt="Diseño End-to-End"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          <motion.div variants={fadeUp}>
            <ServiceTabs current="diseno-producto-complejo" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
