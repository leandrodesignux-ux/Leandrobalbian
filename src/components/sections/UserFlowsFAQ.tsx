"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Trabajan con nuestro equipo de producto o con el de marketing?",
    answer:
      "Con el de producto, principalmente — el foco es el flujo dentro del producto (onboarding, activación), no comunicación externa.",
  },
  {
    question: "¿Cómo miden el impacto en activación o retención?",
    answer:
      "Con testing de comprensión con usuarios reales antes de lanzar, y métricas de adopción cuando el proyecto lo permite. El track record confirmado es +30% de satisfacción de usuario en una plataforma de e-learning para banca digital.",
  },
  {
    question: "¿Hacen solo texto de interfaz o también contenido de onboarding (video, tutoriales)?",
    answer:
      "Ambos — desde microcopy de producto hasta cápsulas educativas completas, según qué necesite tu tasa de activación.",
  },
  {
    question: "¿Cuánto tarda un proyecto de rediseño de onboarding?",
    answer:
      "Depende de la complejidad del flujo actual, pero el mapa de fricción y la primera propuesta de flujo suelen estar en 2-3 semanas.",
  },
];

export function UserFlowsFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="border-y border-border py-24 md:py-32">
      <Container>
        <motion.div
          className="mb-12 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 font-mono text-xs uppercase tracking-widest text-accent"
          >
            Preguntas frecuentes
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl"
          >
            Todo sobre{" "}
            <em className="not-italic text-accent">User Flows & Onboarding</em>
          </motion.h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-elevated/20"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-base font-semibold text-primary sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-secondary">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-secondary sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
