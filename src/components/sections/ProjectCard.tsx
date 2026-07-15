"use client";

import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectPreview() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-elevated">
      {/* Subtle gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

      {/* Abstract dashboard grid */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
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
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Horizontal bars */}
        <rect x="8%" y="28%" width="35%" height="6%" rx="4" fill="rgba(255,255,255,0.06)" />
        <rect x="8%" y="40%" width="25%" height="6%" rx="4" fill="rgba(255,255,255,0.04)" />
        <rect x="55%" y="28%" width="37%" height="42%" rx="8" fill="rgba(255,255,255,0.04)" />

        {/* Accent dot */}
        <circle cx="14%" cy="74%" r="6" fill="#c8ff00" opacity="0.9" />
        <rect x="20%" y="70%" width="28%" height="5%" rx="4" fill="rgba(200,255,0,0.15)" />
      </svg>
    </div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      variants={fadeUp}
      className="group grid gap-8 lg:grid-cols-2 lg:gap-12"
    >
      {/* Preview — rendered first on mobile */}
      <Link
        href={project.href}
        className={cn(
          "order-1 block overflow-hidden rounded-3xl transition-transform duration-300 hover:scale-[1.01]",
          isEven ? "lg:order-2" : "lg:order-1"
        )}
        aria-label={`Ver proyecto ${project.title}`}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <ProjectPreview />
        </motion.div>
      </Link>

      {/* Content */}
      <div
        className={cn(
          "order-2 flex flex-col justify-center",
          isEven ? "lg:order-1" : "lg:order-2"
        )}
      >
        <span className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
          {project.label}
        </span>

        <h3 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
          {project.title}
        </h3>

        {project.status && (
          <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {project.status}
          </span>
        )}

        <p className="mt-5 max-w-lg text-base leading-relaxed text-secondary md:text-lg">
          {project.description}
        </p>

        {project.stats && project.stats.length > 0 && (
          <div className="mt-8 grid grid-cols-3 divide-x divide-border border-y border-border py-4 sm:py-5">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="px-2 text-center first:pl-0 last:pr-0 sm:px-4"
              >
                <div className="text-lg font-bold tracking-tight text-primary sm:text-xl md:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] leading-tight text-secondary sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <Link
          href={project.href}
          className="group/link mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
        >
          {project.cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
