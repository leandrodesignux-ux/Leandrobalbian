"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const howItWorks = [
  {
    number: "01",
    title: "Mapa de empatía y research",
    description: "Entiendo motivaciones, frustraciones y lenguaje real de quien va a aprender.",
  },
  {
    number: "02",
    title: "Redacción centrada en claridad",
    description: "Simplifico sin perder precisión técnica.",
  },
  {
    number: "03",
    title: "Formato según el contexto",
    description: "Interfaz, video-cápsula animada, o ambos, según qué necesita adopción.",
  },
  {
    number: "04",
    title: "Testing de comprensión",
    description: "Valido con usuarios reales, no doy por sentado que 'quedó claro'.",
  },
];

export function UserFlowsSection02() {
  return (
    <section id="onboarding" className="border-y border-border py-24 md:py-32">
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
              CÓMO DISEÑO PARA QUE SE ENTIENDA
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
              El objetivo no es que se vea bien, es que se entienda a la primera.
            </p>
          </motion.div>

          {/* Right — text */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <span className="font-mono text-7xl font-bold text-accent/30 sm:text-8xl">
              02
            </span>

            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
              <em className="font-serif not-italic text-accent">Onboarding</em>{" "}
              que No Necesita Manual
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-secondary md:text-lg">
              Un feature que tu equipo construyó pero que los usuarios no adoptan
              no es un problema de producto — es un problema de que nadie diseñó
              cómo se aprende a usarlo. Para Arcoprime/Copec, eso significó
              traducir funciones técnicas de un software de gestión en algo que un
              equipo de ventas entendía sin capacitación presencial.
            </p>

            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Narrativa visual, no manual técnico
                  </h4>
                  <p className="text-sm text-secondary">
                    Los conceptos técnicos se cuentan, no se listan.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Diseño centrado en el usuario aplicado a e-learning
                  </h4>
                  <p className="text-sm text-secondary">
                    Las mismas metodologías de UX research aplicadas a
                    experiencias de aprendizaje.
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="/proyectos/sckuba"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
            >
              Ver cápsulas Sckuba
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
