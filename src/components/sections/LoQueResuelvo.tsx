"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { resuelvoItems } from "@/data/lo-que-resuelvo";
import { ResuelvoCard } from "./ResuelvoCard";
import { motion } from "framer-motion";

export function LoQueResuelvo() {
  return (
    <section id="lo-que-resuelvo" className="py-24 md:py-32">
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
            [04] · Lo que resuelvo
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
          >
            ¿Tu plataforma existe,{" "}
            <strong className="font-extrabold">pero tu equipo la evita</strong>?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
          >
            Trabajo con equipos que tienen sistemas complejos funcionando pero
            con fricciones críticas. No hago páginas bonitas — rediseño la
            lógica de uso.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {resuelvoItems.map((item) => (
            <ResuelvoCard key={item.number} {...item} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
