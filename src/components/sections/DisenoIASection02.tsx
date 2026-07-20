"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const howItWorks = [
  {
    number: "01",
    title: "Idea → especificación",
    description: "Traduzco el problema en un prompt/spec claro antes de generar nada.",
  },
  {
    number: "02",
    title: "Prototipo funcional",
    description: "Construyo con herramientas de IA generativa en Next.js/Tailwind.",
  },
  {
    number: "03",
    title: "Prueba de estados y lógica real",
    description: "Reviso qué se rompe antes de que lo revise el usuario.",
  },
  {
    number: "04",
    title: "Handoff directo",
    description: "Entrego algo que ingeniería puede inspeccionar, no solo mirar.",
  },
];

export function DisenoIASection02() {
  return (
    <section id="proceso" className="border-y border-border py-24 md:py-32">
      <Container>
        <motion.div
          className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* Left — dark panel */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-border bg-elevated/30 p-6 sm:p-8"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
              CÓMO INTEGRO IA EN EL FLUJO
            </p>

            <div className="flex flex-col gap-5">
              {howItWorks.map((item) => (
                <div key={item.number} className="flex gap-4">
                  <span className="font-mono text-sm font-bold text-accent">
                    {item.number}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-primary sm:text-base">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 border-t border-border pt-4 text-sm italic text-secondary">
              La IA acelera la construcción; el criterio de diseño sigue siendo mío.
            </p>
          </motion.div>

          {/* Right — text */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <span className="font-mono text-7xl font-bold text-accent/30 sm:text-8xl">
              02
            </span>

            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
              Eficiencia con{" "}
              <em className="not-italic text-accent">Track Record</em>{" "}
              Real
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-secondary md:text-lg">
              No es una apuesta a que la IA generativa &ldquo;algún día&rdquo; acelere tu
              roadmap. Ya lo hice, con un equipo completo, con resultado medido.
            </p>

            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
              <p className="text-sm leading-relaxed text-primary sm:text-base">
                <strong className="text-accent">+25% de eficiencia del equipo</strong>
                , lograda al introducir integración de inteligencia artificial en
                los procesos de diseño durante mi etapa como Lead UX/UI en IMPACT
                (2019–2023), acelerando el tiempo de comercialización de nuevos
                productos.
              </p>
            </div>

            <a
              href="/biografia"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
            >
              Ver mi experiencia completa
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
