"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { TrendingUp, UserX, FileText, BookOpen } from "lucide-react";

const differentials = [
  {
    icon: TrendingUp,
    title: "+30% de satisfacción confirmada",
    description: "Con track record real en e-learning para banca digital.",
  },
  {
    icon: UserX,
    title: "Reduce abandono temprano",
    description: "Comunicación clara que genera confianza, no fricción.",
  },
  {
    icon: FileText,
    title: "Traduce lo técnico a claro",
    description: "Sin perder precisión, sin sonar a manual.",
  },
  {
    icon: BookOpen,
    title: "Aplica principios de aprendizaje",
    description: "Narrativa visual y psicología aplicada, no solo estética.",
  },
];

export function UserFlowsWhy() {
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
            — ¿Por qué User Flows & Onboarding?
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl"
          >
            La activación no debería depender de que el usuario lea
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
          >
            Ideal si tu producto tiene buena adquisición pero mala activación — los
            usuarios se registran y no vuelven al día 2.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-5"
          >
            <p className="text-sm font-semibold text-accent">Impacto en el negocio:</p>
            <p className="mt-2 text-sm leading-relaxed text-primary">
              Mejora directa en tasa de activación (<strong className="text-accent">Conversión</strong>){", "}
              y reducción de abandono temprano (<strong className="text-accent">Retención</strong>){", "}
              mediante onboarding y lenguaje que no dependen de que el usuario lea un manual.
            </p>
          </motion.div>
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
