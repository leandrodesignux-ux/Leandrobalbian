"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const howItWorks = [
  {
    number: "01",
    title: "Auditoría de la arquitectura actual",
    description: "Identifico dónde se fragmenta la información y por qué.",
  },
  {
    number: "02",
    title: "Jerarquía visual e iconografía",
    description: "Diseño un sistema de señales que se aprende una vez y se reconoce siempre.",
  },
  {
    number: "03",
    title: "Prototipo interactivo",
    description: "Pruebo la navegación y los estados antes de tocar desarrollo.",
  },
  {
    number: "04",
    title: "Sistema de diseño documentado",
    description: "Componentes reutilizables que escalan con el producto.",
  },
];

export function DisenoProductoSection02() {
  return (
    <section id="sistemas" className="border-y border-border py-24 md:py-32">
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
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-secondary">
              Cómo mejoro una plataforma densa
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
              Diseño para el operador que lo usa 8 horas al día, no para el portfolio.
            </p>
          </motion.div>

          {/* Right — text */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <span className="font-mono text-7xl font-bold text-accent/30 sm:text-8xl">
              02
            </span>

            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
              Sistemas de Diseño y{" "}
              <em className="not-italic text-accent">Consistencia</em>
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-secondary md:text-lg">
              Cada pantalla resuelta de forma aislada es deuda técnica de diseño
              que tu equipo de desarrollo paga después, en cada feature nueva que
              no encaja con las anteriores.
            </p>

            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <h4 className="font-semibold text-primary">Componentes documentados</h4>
                  <p className="text-sm text-secondary">
                    Un sistema de diseño que el equipo de desarrollo puede
                    consultar sin volver a preguntarme.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Prototipado funcional cuando hace falta
                  </h4>
                  <p className="text-sm text-secondary">
                    Cuando una idea necesita sentirse real, prototipo en código
                    antes de entregar solo un mockup estático.
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="/proyectos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
            >
              Ver sistemas de diseño
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
