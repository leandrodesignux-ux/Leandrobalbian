"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { projectsList } from "@/data/projects-list";
import { ProjectCardLarge } from "./ProjectCardLarge";
import { motion } from "framer-motion";

export function ProjectsContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <Container>
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              [01] — Proyectos
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Plataformas en producción, no mockups.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-secondary md:text-lg"
            >
              Casos de diseño donde la complejidad operativa se tradujo en
              claridad para quienes toman decisiones cada día.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Projects list */}
      <section className="pb-24 md:pb-32">
        <Container>
          <motion.div
            className="flex flex-col gap-8 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {projectsList.map((project, index) => (
              <ProjectCardLarge
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
