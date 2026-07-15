"use client";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import {
  timeline,
  stats,
  skills,
  sectors,
} from "@/data/experience";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Trayectoria() {
  return (
    <section id="trayectoria" className="py-24 md:py-32">
      <Container>
        {/* Header */}
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
            [03] — Trayectoria & Credenciales
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
          >
            7 años resolviendo problemas{" "}
            <strong className="font-extrabold">
              que los equipos evitan tocar
            </strong>
            .
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-sm text-secondary"
          >
            {sectors.join(" · ")}
          </motion.p>
        </motion.div>

        {/* Main grid */}
        <div className="grid gap-16 lg:grid-cols-[1fr_380px] lg:gap-20">
          {/* Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="relative"
          >
            <div className="space-y-12">
              {timeline.map((entry, index) => (
                <motion.div
                  key={`${entry.title}-${index}`}
                  variants={fadeUp}
                  className="grid grid-cols-[auto_1fr] gap-4 sm:grid-cols-[100px_auto_1fr] sm:gap-6"
                >
                  {/* Period */}
                  <div className="hidden text-sm font-medium text-accent sm:block">
                    {entry.period}
                  </div>

                  {/* Timeline rail */}
                  <div className="relative flex flex-col items-center pt-1">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {index < timeline.length - 1 && (
                      <span className="mt-2 w-px flex-1 bg-border" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <span className="mb-1 text-sm font-medium text-accent sm:hidden">
                      {entry.period}
                    </span>
                    <h3 className="text-lg font-semibold text-primary md:text-xl">
                      {entry.title}{" "}
                      <span className="text-secondary">· {entry.sector}</span>
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-secondary md:text-base">
                      {entry.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-4">
              <a
                href="#"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-primary"
              >
                + Ver trabajo UX clásico
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-elevated p-5"
                >
                  <div className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs leading-relaxed text-secondary sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </motion.div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
