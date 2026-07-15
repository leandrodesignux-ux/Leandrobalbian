"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

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
      </Container>
    </section>
  );
}
