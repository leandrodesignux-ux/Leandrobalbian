"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { Search, Shield, Target, Users } from "lucide-react";

const differentials = [
  {
    icon: Search,
    title: "Causa antes que número",
    description:
      "No entrego una métrica sin el mecanismo que la explica. Cada hallazgo se lleva hasta su causa raíz.",
  },
  {
    icon: Shield,
    title: "Honestidad sobre comodidad",
    description:
      "Prefiero un dato incómodo y cierto que uno cómodo y falso. La confianza se construye con rigor.",
  },
  {
    icon: Target,
    title: "Ejecutable, no infinito",
    description:
      "De todo el análisis destilo una sola palanca con hipótesis, métrica y fecha. No un backlog de posibles mejoras.",
  },
  {
    icon: Users,
    title: "Aporto sin invadir",
    description:
      "Cuando el hallazgo toca la cancha de otro equipo, sumo como dato, no como dueño.",
  },
];

export function ConsultoriaWhy() {
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
              — ¿Por qué diagnóstico antes que rediseño?
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl"
            >
              El diagnóstico que tu equipo necesita antes de construir
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
            >
              Si ya tenés equipo de producto o diseño pero el roadmap se basa en
              hipótesis no validadas, necesitás dirección estratégica con causa
              raíz, no más features.
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
