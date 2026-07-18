"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden py-24 md:py-32">
      <NetworkBackground className="opacity-60" />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-end gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left — big headline */}
          <motion.h1
            variants={fadeUp}
            className="text-balance text-5xl font-medium leading-[1.05] tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <strong className="font-bold">Diseño</strong> que
            <br />
            convierte complejidad
            <br />
            en <strong className="font-bold">decisiones claras.</strong>
          </motion.h1>

          {/* Right — context + CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-8 lg:pb-4"
          >
            <p className="max-w-xl text-lg leading-relaxed text-secondary md:text-xl">
              Tomo problemas ambiguos de negocio, los traduzco en sistemas de
              investigación medibles y los aterrizo en palancas ejecutables:
              plataformas operativas, gobernanza de IA y productos de
              compliance que tu equipo realmente usa.
            </p>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button href="#contacto" variant="primary">
                Agendar diagnóstico
                <ArrowRight className="h-4 w-4" />
              </Button>
              <a
                href="/proyectos"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-primary transition-colors duration-200 hover:border-accent/30 hover:text-accent"
              >
                Ver proyectos
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
