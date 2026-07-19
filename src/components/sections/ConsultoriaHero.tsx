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

export function ConsultoriaHero() {
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
                <PalancaBadge id="conversion" />
              </div>

              <h1 className="text-balance text-5xl font-medium leading-[1.05] tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl">
                Diagnóstico{" "}
                <em className="font-serif not-italic text-accent">
                  de Producto
                </em>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-secondary md:text-xl">
                Tu producto pierde conversión y no sabés exactamente por qué. Antes
                de rediseñar, medí. Diagnóstico causal para founders y Product
                Leads que necesitan una palanca ejecutable, no un informe lleno
                de hipótesis.
              </p>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contacto"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg shadow-[0_0_40px_-12px_rgba(200,255,0,0.35)] transition-all duration-300 hover:shadow-[0_0_60px_-12px_rgba(200,255,0,0.5)]"
                >
                  Solicitar diagnóstico
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bg text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
                <a
                  href="#metodologia"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-6 py-3.5 text-sm font-medium text-primary transition-colors duration-200 hover:border-accent/30 hover:text-accent"
                >
                  Ver metodología
                </a>
              </div>
            </motion.div>

            {/* Right — placeholder for visual */}
            <motion.div
              variants={fadeUp}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border"
            >
              <Image
                src="/DIAGNOSTICO DE PRODUCTO.png"
                alt="Diagnóstico de Producto"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          <motion.div variants={fadeUp}>
            <ServiceTabs current="consultoria-ux" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
