"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Qué incluye la consultoría UX?",
    answer:
      "Diagnóstico causal de tu producto: análisis del sistema de medición actual (o su construcción si no existe), cruce con stakeholders internos, y una palanca ejecutable con hipótesis, métrica y fecha.",
  },
  {
    question: "¿En qué se diferencia esto de un rediseño tradicional?",
    answer:
      "No empiezo por la interfaz. Empiezo por entender qué decisión de negocio se está tratando de mover, y solo llego al diseño cuando el diagnóstico lo justifica.",
  },
  {
    question: "¿Trabajás con mi equipo interno de diseño/producto?",
    answer:
      "Sí, mi rol es aportar el diagnóstico causal y la dirección; la ejecución puede quedar en tu equipo o en mí, según lo que definamos.",
  },
  {
    question: "¿Cuánto dura un diagnóstico?",
    answer:
      "Depende de la complejidad del sistema, pero el sistema de medición y el primer hallazgo causal suelen estar en 2-3 semanas.",
  },
];

export function ConsultoriaFAQ() {
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
            <em className="font-serif not-italic text-accent">Consultoría UX</em>
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
