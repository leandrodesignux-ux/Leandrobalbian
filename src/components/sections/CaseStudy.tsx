"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CaseStudyData, CaseStudySection } from "@/data/case-studies";
import type { ProjectListItem } from "@/data/projects-list";

interface CaseStudyProps {
  study: CaseStudyData;
  related: ProjectListItem[];
}

function PlaceholderImage({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-border bg-elevated",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="case-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#case-grid)" />
        <rect
          x="8%"
          y="28%"
          width="35%"
          height="6%"
          rx="4"
          fill="rgba(255,255,255,0.06)"
        />
        <rect
          x="8%"
          y="40%"
          width="25%"
          height="6%"
          rx="4"
          fill="rgba(255,255,255,0.04)"
        />
        <rect
          x="55%"
          y="28%"
          width="37%"
          height="42%"
          rx="8"
          fill="rgba(255,255,255,0.04)"
        />
        <circle cx="14%" cy="74%" r="6" fill="#c8ff00" opacity="0.9" />
        <rect
          x="20%"
          y="70%"
          width="28%"
          height="5%"
          rx="4"
          fill="rgba(200,255,0,0.15)"
        />
      </svg>
    </div>
  );
}

function MetadataItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-medium uppercase tracking-widest text-secondary">
        {label}
      </span>
      <span className="text-sm text-primary">{value}</span>
    </div>
  );
}

function SectionNav({
  sections,
  activeId,
  onNavigate,
}: {
  sections: CaseStudySection[];
  activeId: string | null;
  onNavigate: (id: string) => void;
}) {
  return (
    <nav className="flex flex-col gap-3">
      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          onClick={() => onNavigate(section.id)}
          className={cn(
            "text-left text-xs font-medium uppercase tracking-widest transition-colors",
            activeId === section.id
              ? "text-primary"
              : "text-secondary hover:text-primary"
          )}
        >
          {section.title}
        </button>
      ))}
    </nav>
  );
}

export function CaseStudy({ study, related }: CaseStudyProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    study.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [study.sections]);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <article className="flex flex-1 flex-col">
      {/* Hero header */}
      <section className="pt-16 md:pt-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeUp}
              className="text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {study.title}
            </motion.h1>
          </motion.div>
        </Container>
      </section>

      {/* Two column layout */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
            {/* Sidebar */}
            <motion.aside
              className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-6 border-b border-border pb-8"
              >
                <MetadataItem label="Servicios" value={study.services} />
                <MetadataItem label="Categoría" value={study.category} />
                <MetadataItem label="Cliente" value={study.client} />
              </motion.div>

              <motion.div variants={fadeUp}>
                <SectionNav
                  sections={study.sections}
                  activeId={activeSection}
                  onNavigate={handleNavigate}
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
                >
                  Ver proyecto en producción
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-bg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </motion.div>
            </motion.aside>

            {/* Content */}
            <motion.div
              className="flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="text-xl font-medium leading-relaxed text-primary md:text-2xl"
              >
                {study.tagline}
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-3xl text-base leading-relaxed text-secondary md:text-lg"
              >
                {study.intro}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10">
                <PlaceholderImage className="aspect-video" />
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Sections */}
      {study.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-24 py-16 md:py-24"
        >
          <Container>
            <motion.div
              className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
                  {section.title}
                </h2>
              </motion.div>

              <div className="flex flex-col">
                {section.paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={fadeUp}
                    className="max-w-3xl text-base leading-relaxed text-secondary md:text-lg"
                  >
                    {paragraph}
                  </motion.p>
                ))}

                {section.bullets && section.bullets.length > 0 && (
                  <div className="flex flex-col gap-8">
                    {section.bullets.map((bulletGroup, groupIndex) => (
                      <motion.div
                        key={groupIndex}
                        variants={fadeUp}
                        className="max-w-3xl"
                      >
                        {bulletGroup.title && (
                          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                            {bulletGroup.title}
                          </h3>
                        )}
                        <ul className="flex flex-col gap-3">
                          {bulletGroup.items.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-base text-secondary"
                            >
                              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                )}

                {section.hasImage && (
                  <motion.div variants={fadeUp} className="mt-10">
                    <PlaceholderImage className="aspect-video" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </Container>
        </section>
      ))}

      {/* Metrics */}
      {study.metrics && study.metrics.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <motion.div
              className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
                  Impacto
                </h2>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className={cn(
                  "grid divide-x divide-border border-y border-border py-6",
                  study.metrics.length > 4
                    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
                    : "grid-cols-2 sm:grid-cols-4"
                )}
              >
                {study.metrics.map((stat) => (
                  <div
                    key={stat.label}
                    className="px-2 py-4 text-center first:pl-0 last:pr-0 sm:px-4"
                  >
                    <div className="text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs leading-tight text-secondary sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </Container>
        </section>
      )}

      {/* Related projects */}
      <section className="py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Últimos proyectos
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
                También puedes ver...
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  custom={index}
                >
                  <Link
                    href={project.href}
                    className="group flex flex-col gap-4 rounded-2xl border border-border bg-elevated/20 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:bg-elevated/30 hover:shadow-[0_0_60px_-20px_rgba(200,255,0,0.12)]"
                  >
                    <PlaceholderImage className="aspect-[16/10]" />
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-medium uppercase tracking-widest text-accent">
                        {project.label} · {project.sector}
                      </span>
                      <h3 className="text-xl font-bold text-primary transition-colors group-hover:text-accent">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-secondary line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors group-hover:text-primary">
                      Ver proyecto
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </article>
  );
}
