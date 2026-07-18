"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { Brain, Smartphone, FlaskConical, UserCheck } from "lucide-react";

const differentials = [
  {
    icon: Brain,
    title: "Reducción de carga cognitiva",
    description:
      "Simplifico sin quitarle poder a la herramienta. La información crítica se lee primero.",
  },
  {
    icon: Smartphone,
    title: "Consistencia entre plataformas",
    description:
      "Un mismo sistema de diseño en web y móvil, con los mismos tokens y componentes.",
  },
  {
    icon: FlaskConical,
    title: "Prototipos que se sienten reales",
    description:
      "Pruebo lógica y estados antes de construir. Menos sorpresas en desarrollo.",
  },
  {
    icon: UserCheck,
    title: "Diseño centrado en el operador",
    description:
      "La prioridad es quien usa el sistema todos los días, no la estética de portfolio.",
  },
];

export function DisenoProductoWhy() {
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
            — ¿Por qué este enfoque?
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl"
          >
            Menos carga cognitiva, más decisiones correctas
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
          >
            Ideal si tu equipo ya reportó quejas de usuarios internos, alto costo
            de soporte, o una interfaz que &ldquo;todos saben usar mal&rdquo;.
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
