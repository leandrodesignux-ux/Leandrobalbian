"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo se integra esto con nuestro proceso de desarrollo actual?",
    answer:
      "El prototipo funcional es un paso previo a tu pipeline de desarrollo normal — no lo reemplaza, reduce el riesgo de construir algo que no valida la lógica.",
  },
  {
    question: "¿Cuánto tiempo de desarrollo nos ahorra en la práctica?",
    answer:
      "El track record confirmado es +25% de eficiencia de equipo al integrar IA en el proceso de diseño — el ahorro exacto en tu caso depende de la complejidad del flujo a validar.",
  },
  {
    question: "¿Cómo deciden qué decisiones de un agente de IA necesitan supervisión humana?",
    answer:
      "Se mapean los puntos de mayor riesgo del flujo (Supervisión por Excepción) y se diseña fricción calibrada solo ahí, sin frenar la automatización en el resto.",
  },
  {
    question: "¿Puedo ver un prototipo funcional real antes de contratar?",
    answer:
      "Sí, el caso del Supply Agent de WhatsApp (Spot2) está disponible como referencia.",
  },
];

export function DisenoIAFAQ() {
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
            <em className="font-serif not-italic text-accent">Design Engineering</em>
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
