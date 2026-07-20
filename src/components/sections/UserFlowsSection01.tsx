"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function UserFlowsSection01() {
  return (
    <section id="flujo-lenguaje" className="py-24 md:py-32">
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
              <em className="not-italic text-accent">Flujo</em> y
              Lenguaje de Activación
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-secondary md:text-lg">
              Cuando el copy de un flujo no se entiende en los primeros 5
              segundos, no perdés un usuario que &ldquo;no leyó bien&rdquo; —
              perdés una activación que ya pagaste en adquisición.
            </p>

            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Menos abandono, más confianza
                  </h4>
                  <p className="text-sm text-secondary">
                    En IMPACT, la estrategia de UX writing redujo las tasas de
                    abandono y fortaleció la percepción de marca como una consultora
                    que realmente se preocupa por sus clientes.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Mapas de empatía como base
                  </h4>
                  <p className="text-sm text-secondary">
                    Antes de escribir una palabra, entiendo qué piensa, qué frustra y
                    qué motiva a quien va a leerla.
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="/proyectos/impact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
            >
              Ver caso IMPACT
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Right — dark panel */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-border bg-elevated/30 p-6 sm:p-8"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
              MÉTRICA CONFIRMADA
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-6xl font-bold text-accent sm:text-7xl">
                  +30%
                </span>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Satisfacción de usuario
                </span>
              </div>

              <p className="text-sm leading-relaxed text-secondary sm:text-base">
                Liderando el departamento de UX para plataformas de e-learning en
                banca digital, minería y telecomunicaciones (IMPACT, 2019–2023).
              </p>

              <div className="mt-4 border-t border-border pt-4">
                <p className="text-sm text-secondary">
                  <span className="font-semibold text-accent">+25%</span> de eficiencia del equipo al integrar IA en el proceso de diseño. Aceleración del tiempo de comercialización de nuevos productos.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
