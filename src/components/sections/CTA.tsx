"use client";

import { Container } from "@/components/ui/Container";
import { GeometricBackground } from "@/components/ui/GeometricBackground";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  const email = "leandrodesign.ux@gmail.com";

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <GeometricBackground intensity="medium" />

      <Container className="relative z-10">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* Left column — headline */}
          <motion.div variants={fadeUp}>
            <h2 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              Hagamos que tus usuarios entiendan y conecten.
            </h2>
            <p className="mt-6 max-w-md text-base text-secondary md:text-lg">
              Diseño claro para usuarios que quieren entender.
            </p>
          </motion.div>

          {/* Right column — contact card */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-start lg:items-start"
          >
            {/* Avatar + name */}
            <div className="flex items-center gap-4">
              <span className="group relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-elevated text-lg font-semibold text-accent ring-1 ring-border transition-all duration-300 hover:ring-accent/50 hover:ring-offset-2 hover:ring-offset-bg">
                {/* Replace with real image when available */}
                <span className="transition-transform duration-300 group-hover:scale-105">
                  LB
                </span>
              </span>
              <div>
                <p className="text-base font-semibold text-primary">
                  Leandro Balbian
                </p>
                <p className="text-sm text-secondary">Diseñador UX/UI</p>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-widest text-secondary">
                Contacto
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-2 block text-2xl font-semibold text-primary transition-colors hover:text-accent sm:text-3xl"
              >
                {email}
              </a>
            </div>

            <p className="mt-6 max-w-sm text-base leading-relaxed text-secondary">
              ¿Buscás un diseñador confiable que convierta ideas en experiencias
              claras y funcionales? Escribime.
            </p>

            {/* CTA button */}
            <motion.a
              href={`mailto:${email}`}
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
        </motion.div>
      </Container>
    </section>
  );
}
