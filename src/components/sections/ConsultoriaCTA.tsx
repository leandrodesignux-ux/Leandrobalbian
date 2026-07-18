"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { ConsultoriaContactForm } from "./ConsultoriaContactForm";

export function ConsultoriaCTA() {
  return (
    <section id="contacto" className="bg-accent py-24 md:py-32">
      <Container>
        <motion.div
          className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* Left */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary/70">
              Siguiente paso
            </p>
            <h2 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              Diagnóstico UX
            </h2>
            <p className="max-w-md text-base text-primary/80 md:text-lg">
              Agendá una sesión de diagnóstico. Revisamos tu situación actual,
              definimos qué mide realmente tu producto, y te muestro por dónde
              empezar.
            </p>
          </motion.div>

          {/* Right — form card */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-primary/10 bg-bg p-6 shadow-2xl sm:p-8"
          >
            <ConsultoriaContactForm />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
