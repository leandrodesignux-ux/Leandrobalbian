"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "SIAC",
    description: "Sistema de monitoreo de activos en tiempo real. De pantallas fragmentadas a dashboard cohesivo.",
  },
  {
    name: "Mi SQM",
    description: "Rediseño de experiencia digital para operación minera.",
  },
  {
    name: "SQM Certificaciones",
    description: "De procesos manuales a vista unificada por trabajador.",
  },
  {
    name: "Clear Ticket",
    description: "Simplificación del flujo de asignación de tarjetas.",
  },
];

export function DisenoProductoSection01() {
  return (
    <section id="arquitectura" className="py-24 md:py-32">
      <Container>
        <motion.div
          className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* Left — text */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <span className="font-mono text-7xl font-bold text-accent/30 sm:text-8xl">
              01
            </span>

            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
              <em className="not-italic text-accent">Arquitectura</em>{" "}
              de la Información
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-secondary md:text-lg">
              Un dashboard que nadie entiende no es un problema estético — es
              soporte que factura horas, onboarding que se alarga, y usuarios
              internos que encuentran atajos riesgosos porque el sistema oficial
              los frena.
            </p>

            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Jerarquía visual sobre volumen de datos
                  </h4>
                  <p className="text-sm text-secondary">
                    Traduzco bases de datos complejas en estructuras que se
                    entienden de un vistazo.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Sistemas de iconografía y color con significado
                  </h4>
                  <p className="text-sm text-secondary">
                    Cada estado del sistema (activo, alarmado, bloqueado) tiene
                    una señal visual consistente y aprendible.
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="/proyectos/siac"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
            >
              Ver caso SIAC
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Right — dark panel */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-border bg-elevated/30 p-6 sm:p-8"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-secondary">
              Proyectos en sistemas complejos
            </p>

            <div className="flex flex-col gap-4">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="flex items-start gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <span className="font-mono text-sm font-bold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-primary sm:text-base">
                      {project.name}
                    </span>
                    <p className="mt-1 text-sm text-secondary">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
