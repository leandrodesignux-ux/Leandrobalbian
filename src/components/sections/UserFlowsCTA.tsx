"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { UserFlowsContactForm } from "./UserFlowsContactForm";

export function UserFlowsCTA() {
  return (
    <section id="contacto" className="bg-accent py-24 text-background md:py-32">
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
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Siguiente paso
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
                User Flows & Onboarding
              </h2>
              <p className="text-base leading-relaxed text-secondary md:text-lg">
                Contame qué parte de tu flujo de activación está perdiendo
                usuarios, y revisamos si el problema es de onboarding, de lenguaje
                de interfaz, o de ambos.
              </p>

              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-primary">Incluye:</p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Mapa de fricción del onboarding actual",
                    "Propuesta de flujo y lenguaje de activación",
                    "Plan de testing de comprensión con usuarios",
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
              <UserFlowsContactForm />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
