"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { services, successCases, impactMetrics } from "@/data/services";
import { motion } from "framer-motion";

function LogoPlaceholder() {
  return (
    <div className="flex h-10 w-24 items-center justify-center rounded-md border border-border bg-elevated/50">
      <span className="text-[10px] font-medium uppercase tracking-widest text-secondary">
        Logo
      </span>
    </div>
  );
}

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32">
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
            [03] — Servicios
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Metodología, herramientas e impacto
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
          >
            No diseño páginas: resuelvo problemas de negocio complejos y los
            aterrizo en productos digitales claros, medibles y escalables.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.article
              key={service.number}
              variants={fadeUp}
              className="group flex flex-col rounded-3xl border border-border bg-elevated/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 sm:p-8"
            >
              <span className="font-mono text-4xl font-bold text-accent sm:text-5xl">
                {service.number}
              </span>

              <h3 className="mt-6 text-xl font-bold leading-tight tracking-tight text-primary sm:text-2xl">
                {service.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-secondary sm:text-base">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Success cases */}
        <motion.div
          className="mt-24 md:mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
              Casos de éxito
            </p>
            <h3 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
              Impacto real, medible
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
              Empresas donde la metodología se tradujo en resultados concretos
              para el negocio.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {successCases.map((item, index) => (
              <motion.article
                key={item.name}
                variants={fadeUp}
                custom={index}
                className="flex flex-col rounded-3xl border border-border bg-elevated/20 p-6 transition-all duration-300 hover:border-accent/30 sm:p-8"
              >
                <LogoPlaceholder />

                <div className="mt-6">
                  <div className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                    {item.result}
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {item.metricLabel}
                  </p>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-secondary">
                  {item.description}
                </p>

                <p className="mt-6 text-xs font-medium uppercase tracking-widest text-secondary">
                  {item.industry}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Impact metrics */}
        <motion.div
          className="mt-24 md:mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 divide-x divide-border border-y border-border py-8 sm:grid-cols-4"
          >
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="px-2 py-4 text-center first:pl-0 last:pr-0 sm:px-4"
              >
                <div className="text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
                  {metric.value}
                </div>
                <div className="mt-1 text-xs leading-tight text-secondary sm:text-sm">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
