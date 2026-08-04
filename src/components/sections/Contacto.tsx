"use client";

import { Container } from "@/components/ui/Container";
import { GeometricBackground } from "@/components/ui/GeometricBackground";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { QualifyingForm } from "./QualifyingForm";
import { hubQuestions } from "@/lib/qualifying-questions";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Contacto() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <GeometricBackground intensity="subtle" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          className="mb-12 max-w-3xl md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 font-mono text-xs uppercase tracking-widest text-accent"
          >
            [07] — Contacto
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Hablemos de tu proyecto
          </motion.h2>
        </motion.div>

        {/* Qualifying form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-8 max-w-2xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
              [08] — Formulario
            </p>
            <h3 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl">
              Con estas preguntas te puedo ayudar mejor. Es cortito, te lo prometo.
            </h3>
          </motion.div>
          <QualifyingForm
            questions={hubQuestions}
            serviceId="hub"
            serviceLabel="Servicios"
          />
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          className="mt-12 flex items-center gap-3 md:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.a
            variants={fadeUp}
            href="https://www.linkedin.com/in/leodisenofreelance/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-sm text-secondary transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-elevated/30 text-primary transition-colors group-hover:border-accent/30 group-hover:text-accent">
              <LinkedInIcon className="h-4 w-4" />
            </span>
            Puedes encontrarme aquí
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
