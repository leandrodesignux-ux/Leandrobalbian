"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const drawLine = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const drawVerticalLine = {
  hidden: { scaleY: 0, originY: 1 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function BiografiaSection() {
  return (
    <section className="relative flex flex-1 items-center py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
          {/* Photo with L-frame */}
          <motion.div
            className="relative mx-auto w-full max-w-sm lg:mx-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-elevated"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/BIOGRAFIA.jpg"
                alt="Leandro Balbian — Senior Product Designer"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
            </motion.div>

            {/* L-frame */}
            <motion.div
              className="absolute -bottom-3 -left-3 h-24 w-[60%] rounded-full bg-accent md:-bottom-4 md:-left-4 md:h-32"
              variants={drawLine}
            />
            <motion.div
              className="absolute -bottom-3 -left-3 h-[70%] w-6 rounded-full bg-accent md:-bottom-4 md:-left-4 md:w-8"
              variants={drawVerticalLine}
            />
          </motion.div>

          {/* Text column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {/* Availability badge */}
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-elevated/60 px-4 py-1.5 text-sm text-primary"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Disponible para proyectos
            </motion.div>

            {/* Label */}
            <motion.div
              variants={fadeUp}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                [01] — Biografía
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Diseño que tus usuarios entienden y valoran.
            </motion.h1>

            {/* Paragraphs */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
            >
              Diseñador UX/UI Senior con más de 7 años de experiencia ayudando a
              empresas a transformar plataformas internas, sistemas de
              capacitación y herramientas complejas en experiencias digitales
              claras, usables y efectivas.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
            >
              He diseñado cursos interactivos para bancos, cápsulas educativas
              animadas para retail, interfaces administrativas más accesibles, y
              liderado mejoras funcionales en productos SaaS. Desde e-learning
              hasta auditorías de usabilidad, combino diseño, pedagogía visual y
              empatía para que tus usuarios no solo usen una herramienta, sino
              que la entiendan y la valoren.
            </motion.p>

            {/* Contact block */}
            <motion.div
              variants={fadeUp}
              className="mt-10 rounded-2xl border border-border bg-elevated/30 p-5 sm:p-6"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-secondary">
                Contacto
              </p>
              <a
                href="mailto:leandrodesign.ux@gmail.com"
                className="mt-2 block text-lg font-semibold text-primary transition-colors hover:text-accent sm:text-xl"
              >
                leandrodesign.ux@gmail.com
              </a>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-secondary">
                Prefiero empezar el contacto por correo para entender bien tu
                proyecto y sus necesidades. Luego, si avanzamos, podemos
                coordinar reuniones más rápidas por WhatsApp o video llamadas.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.a
              variants={fadeUp}
              href="https://forms.gle/uyrXzkoKfmhKomzMA"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg shadow-[0_0_40px_-12px_rgba(200,255,0,0.35)] transition-all duration-300 hover:shadow-[0_0_60px_-12px_rgba(200,255,0,0.5)] sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Comenzar un proyecto
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bg text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
