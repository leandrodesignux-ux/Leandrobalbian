"use client";

import { Container } from "@/components/ui/Container";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

export function ServicesCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden py-24 md:py-32">
      <NetworkBackground className="opacity-30" />

      <Container className="relative z-10">
        <motion.div
          className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* Left column — headline */}
          <motion.div variants={fadeUp}>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
              Siguiente paso
            </p>
            <h2 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              Hagamos que tus usuarios entiendan y conecten.
            </h2>
            <p className="mt-6 max-w-md text-base text-secondary md:text-lg">
              Contame sobre tu proyecto. En 24 horas te respondo con un plan
              concreto para empezar.
            </p>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-border bg-elevated/30 p-6 sm:p-8"
          >
            <ContactForm />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
