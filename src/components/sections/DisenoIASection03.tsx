"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { Shield, GitBranch, SlidersHorizontal } from "lucide-react";

const governanceItems = [
  {
    icon: Shield,
    title: "Supervisi\u00f3n por Excepci\u00f3n",
    description:
      "No todo necesita un humano atr\u00e1s. Mapeo los puntos de mayor riesgo del flujo y dise\u00f1o intervenci\u00f3n solo ah\u00ed — el resto opera aut\u00f3nomo.",
  },
  {
    icon: GitBranch,
    title: "Decision Lineage",
    description:
      "Cada decisi\u00f3n del agente de IA deja un rastro auditable. Si un cliente pregunta \"\u00bfpor qu\u00e9 se rechaz\u00f3 mi solicitud?\", el sistema puede responder.",
  },
  {
    icon: SlidersHorizontal,
    title: "Calibrated Friction",
    description:
      "El agente aut\u00f3nomo opera libre hasta que algo se sale de par\u00e1metro — ah\u00ed se detiene y pide aprobaci\u00f3n. Dise\u00f1o esa transici\u00f3n para que no frene la operaci\u00f3n, la proteja.",
  },
];

export function DisenoIASection03() {
  return (
    <section className="py-24 md:py-32">
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
              03
            </span>

            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
              <em className="not-italic text-accent">Gobernanza</em>{" "}
              de IA / HITL
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-secondary md:text-lg">
              Cuando tu producto integra un agente autónomo, el riesgo no es solo
              técnico — es de negocio. Si un cliente no puede auditar por qué la
              IA tomó una decisión, no confía en el sistema, y no confía en vos.
              Diseño esa capa de auditoría antes de que sea un incidente.
            </p>

            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Capacidad / Metodología — sin caso de cliente confirmado
            </p>
          </motion.div>

          {/* Right — dark panel */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-border bg-elevated/30 p-6 sm:p-8"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
              CAPAS DE CONFIANZA
            </p>

            <div className="flex flex-col gap-6">
              {governanceItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-elevated/50 text-accent">
                      <Icon className="h-5 w-5" />
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
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
