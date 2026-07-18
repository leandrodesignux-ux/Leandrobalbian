"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const howItWorks = [
  {
    number: "01",
    title: "Reencuadre ambiguo → pregunta medible",
    description: "Traduzco el pedido en un problema concreto.",
  },
  {
    number: "02",
    title: "Sistema de medición",
    description: "Armo la infraestructura antes de sacar conclusiones.",
  },
  {
    number: "03",
    title: "Cruce con stakeholders",
    description: "1:1 con cada área para entender el 'por qué' detrás del dato.",
  },
  {
    number: "04",
    title: "Palanca + hipótesis + métrica + fecha",
    description: "Una sola recomendación ejecutable, blindada.",
  },
];

export function ConsultoriaSection02() {
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
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-secondary">
              Cómo funciona el diagnóstico
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
              Adaptamos el modelo a tu realidad, no al revés.
            </p>
          </motion.div>

          {/* Right — text */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <span className="font-mono text-7xl font-bold text-accent/30 sm:text-8xl">
              02
            </span>

            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
              Cruce con la{" "}
              <em className="font-serif not-italic text-accent">Realidad</em>
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-secondary md:text-lg">
              Los números dicen qué pasa; la gente que opera cada parte del
              negocio dice por qué. No confundo &ldquo;medir más&rdquo; con &ldquo;decidir mejor&rdquo;
              — el análisis existe para terminar en una decisión ejecutable.
            </p>

            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Honestidad con los datos
                  </h4>
                  <p className="text-sm text-secondary">
                    Cuando un número que me convenía resultó falso al verificarlo,
                    lo corregí antes de presentarlo.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Una sola palanca, no un mapa infinito
                  </h4>
                  <p className="text-sm text-secondary">
                    De todo el análisis, destilo una recomendación sistémica y
                    ejecutable, no una lista interminable de posibles mejoras.
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="/servicios#casos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
            >
              Ver caso real
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
