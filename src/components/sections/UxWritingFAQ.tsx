"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Qué es UX writing en este contexto?",
    answer:
      "Diseñar el lenguaje de una interfaz o experiencia con la misma intención que su estructura visual: claridad, empatía y reducción de fricción.",
  },
  {
    question: "¿Hacen solo texto o también video/animación?",
    answer:
      "Ambos, según lo que necesite el producto — desde microcopy de interfaz hasta cápsulas educativas animadas completas.",
  },
  {
    question: "¿Para qué industrias funciona mejor?",
    answer:
      "Cualquier producto con curva de aprendizaje: banca digital, software de gestión, plataformas técnicas B2B.",
  },
  {
    question: "¿Cómo miden el impacto?",
    answer:
      "Con testing de comprensión con usuarios reales y métricas de adopción/satisfacción cuando el proyecto lo permite.",
  },
];

export function UxWritingFAQ() {
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
            <em className="font-serif not-italic text-accent">UX Writing & E-learning</em>
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
