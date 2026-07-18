"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { DisenoProductoContactForm } from "./DisenoProductoContactForm";

export function DisenoProductoCTA() {
  return (
    <section className="bg-accent py-24 text-background md:py-32">
      <Container>
        <motion.div
          className="mx-auto max-w-5xl rounded-3xl bg-background p-6 shadow-2xl shadow-background/20 sm:p-10 md:p-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
                Hagamos que tu plataforma compleja sea usable
              </h2>
              <p className="text-base leading-relaxed text-secondary md:text-lg">
                Contame sobre tu producto y te preparo una propuesta con foco en
                reducir carga cognitiva, ordenar la arquitectura de información y
                construir un sistema de diseño que escale.
              </p>

              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-primary">
                  Incluye:
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Diagnóstico inicial de la arquitectura",
                    "Propuesta de jerarquía visual",
                    "Estimación de alcance y sistema de diseño",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-secondary">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <DisenoProductoContactForm />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
