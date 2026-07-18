"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { Code, RefreshCw, TrendingUp, Target } from "lucide-react";

const differentials = [
  {
    icon: Code,
    title: "Prototipos que se comportan real",
    description: "No solo se ven bien, funcionan.",
  },
  {
    icon: RefreshCw,
    title: "Menos ida y vuelta con ingeniería",
    description: "El hand-off llega con la lógica ya validada.",
  },
  {
    icon: TrendingUp,
    title: "Track record medido",
    description: "+25% de eficiencia de equipo con IA integrada, no una promesa.",
  },
  {
    icon: Target,
    title: "Criterio de diseño, no solo generación",
    description: "La IA acelera la construcción; las decisiones siguen siendo intencionales.",
  },
];

export function DisenoIAWhy() {
  return (
    <section className="py-24 md:py-32">
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
            — ¿Por qué diseñar con IA?
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl"
          >
            Validar antes de construir
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
          >
            Ideal si tu equipo de ingeniería es un recurso escaso y no se puede dar
            el lujo de construir algo completo solo para descubrir que la lógica no
            funciona.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-3xl border border-border bg-elevated/20 p-6 transition-colors duration-300 hover:border-accent/30 sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-elevated/50 text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
