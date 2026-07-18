"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const diagnosticSteps = [
  { label: "Reencuadro del encargo", time: "Semana 1" },
  { label: "Sistema de medición", time: "Semana 1-2" },
  { label: "Cruce con stakeholders", time: "Semana 2-3" },
  { label: "Palanca ejecutable", time: "Continuo" },
];

export function ConsultoriaSection01() {
  return (
    <section id="metodologia" className="py-24 md:py-32">
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
              <em className="font-serif not-italic text-accent">Reencuadre</em>{" "}
              y Sistema de Medición
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-secondary md:text-lg">
              Cuando el encargo es &ldquo;cuestioná todo&rdquo;, no salgo a tocar botones.
              Primero traduzco el pedido ambiguo en una pregunta concreta y
              medible, y armo la infraestructura de datos necesaria para
              responderla.
            </p>

            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Reencuadre estratégico
                  </h4>
                  <p className="text-sm text-secondary">
                    No presento una métrica sin el mecanismo que la explica.
                    Cada hallazgo se lleva hasta su causa raíz.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Sistema de medición cruzado
                  </h4>
                  <p className="text-sm text-secondary">
                    Cruzo comportamiento en el sitio, base de negocio y
                    grabaciones de sesión para seguir a un usuario de punta a
                    punta.
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="#proceso"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
            >
              Ver el proceso completo
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Right — dark panel */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-border bg-elevated/30 p-6 sm:p-8"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-secondary">
              Proceso de diagnóstico
            </p>

            <div className="flex flex-col gap-4">
              {diagnosticSteps.map((step, index) => (
                <div
                  key={step.label}
                  className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-primary sm:text-base">
                      {step.label}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-secondary">
                    {step.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
