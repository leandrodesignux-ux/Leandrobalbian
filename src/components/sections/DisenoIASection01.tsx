"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function DisenoIASection01() {
  return (
    <section id="prototipado" className="py-24 md:py-32">
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
              <em className="not-italic text-accent">Prototipado</em>{" "}
              Funcional en Código
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-secondary md:text-lg">
              Un mockup no prueba nada sobre cómo se va a comportar un flujo en
              producción. Cuando tu equipo de ingeniería necesita saber si una
              lógica funciona antes de comprometerse a construirla, la pruebo en
              código real — no en una interpretación.
            </p>

            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Lógica real, no solo pantallas
                  </h4>
                  <p className="text-sm text-secondary">
                    Pruebo transiciones de estado, alertas, latencias de carga y
                    lógicas de permisos antes de tocar la arquitectura de
                    desarrollo final.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Menos fricción diseño-ingeniería
                  </h4>
                  <p className="text-sm text-secondary">
                    El equipo de desarrollo recibe algo que ya se comportó como el
                    producto final, no una interpretación.
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="/proyectos/supply-agent"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
            >
              Ver el prototipo del Supply Agent
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Right — dark panel */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-border bg-elevated/30 p-6 sm:p-8"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
              CASO REAL — SUPPLY AGENT (WHATSAPP)
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex gap-4">
                <span className="font-mono text-sm font-bold text-accent/50">●</span>
                <div>
                  <h4 className="text-sm font-semibold text-primary">Contexto</h4>
                  <p className="mt-1 text-sm text-secondary">
                    Spot2 necesitaba validar un flujo de creación de cuentas y
                    publicación de espacios vía WhatsApp.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-mono text-sm font-bold text-accent/50">●</span>
                <div>
                  <h4 className="text-sm font-semibold text-primary">Qué construí</h4>
                  <p className="mt-1 text-sm text-secondary">
                    Una simulación interactiva funcional en Next.js, no un mockup.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-mono text-sm font-bold text-accent/50">●</span>
                <div>
                  <h4 className="text-sm font-semibold text-primary">Por qué</h4>
                  <p className="mt-1 text-sm text-secondary">
                    Para probar la lógica del flujo antes de que se escribiera una
                    sola línea de producción.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
