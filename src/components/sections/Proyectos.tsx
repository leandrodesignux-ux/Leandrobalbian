"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Proyectos() {
  return (
    <section id="proyectos" className="py-24 md:py-32">
      <Container>
        {/* Section header */}
        <motion.div
          className="mb-16 max-w-3xl md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 font-mono text-xs uppercase tracking-widest text-accent"
          >
            [02] · Proyectos destacados
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Plataformas de misión crítica.
            <br />
            <strong className="font-extrabold">Construidas</strong>, no
            prototipadas.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
          >
            Cada sistema resuelve una presión real del negocio. Diseño y código.
            Click para explorar el sistema completo.
          </motion.p>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="flex flex-col gap-20 md:gap-28"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 flex justify-center md:mt-20"
        >
          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg shadow-[0_0_40px_-12px_rgba(200,255,0,0.35)] transition-all duration-300 hover:shadow-[0_0_60px_-12px_rgba(200,255,0,0.5)]"
          >
            Ver todos los proyectos
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
