"use client";

import { useState, useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ProjectListItem } from "@/data/projects-list";

const tagRotations = [-4, 2, 5, -2, 3, -5, 4, -3];

function ProjectPreview() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-elevated">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="project-grid"
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
        <rect width="100%" height="100%" fill="url(#project-grid)" />
        <rect x="8%" y="28%" width="35%" height="6%" rx="4" fill="rgba(255,255,255,0.06)" />
        <rect x="8%" y="40%" width="25%" height="6%" rx="4" fill="rgba(255,255,255,0.04)" />
        <rect x="55%" y="28%" width="37%" height="42%" rx="8" fill="rgba(255,255,255,0.04)" />
        <circle cx="14%" cy="74%" r="6" fill="#c8ff00" opacity="0.9" />
        <rect x="20%" y="70%" width="28%" height="5%" rx="4" fill="rgba(200,255,0,0.15)" />
      </svg>
    </div>
  );
}

export function ProjectCardLarge({
  project,
  index,
}: {
  project: ProjectListItem;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLAnchorElement>(null);
  const isEven = index % 2 === 0;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.article variants={fadeUp}>
      <Link
        ref={cardRef}
        href={project.href}
        className={cn(
          "group relative grid gap-8 overflow-hidden rounded-3xl border border-border bg-elevated/20 p-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:grid-cols-2 lg:gap-12 lg:p-10",
          isHovered &&
            "-translate-y-2 border-accent/30 bg-elevated/30 shadow-[0_0_60px_-20px_rgba(200,255,0,0.12)]"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Floating cursor button */}
        {isHovered && (
          <motion.span
            className="pointer-events-none absolute left-0 top-0 z-30 hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg shadow-lg lg:inline-flex"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePos.x + 16,
              y: mousePos.y + 16,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
          >
            Ver caso completo
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        )}

        {/* Content */}
        <div
          className={cn(
            "flex flex-col justify-center",
            isEven ? "md:order-1" : "md:order-2"
          )}
        >
          <span className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            {project.label} · {project.sector}
          </span>

          <h3 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            {project.title}
          </h3>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-secondary md:text-lg">
            {project.description}
          </p>

          {project.stats && project.stats.length > 0 && (
            <div className="mt-6 grid grid-cols-3 divide-x divide-border border-y border-border py-4">
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
            {project.tags.map((tag, tagIndex) => (
              <Badge
                key={tag}
                variant="outline"
                rotation={tagRotations[tagIndex % tagRotations.length]}
                className={cn(
                  "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isHovered &&
                    "translate-x-1 -translate-y-1 border-accent/30 bg-elevated text-primary"
                )}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <span className="group/link mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-primary">
            {project.ctaText}
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
          </span>
        </div>

        {/* Preview */}
        <div
          className={cn(
            "overflow-hidden rounded-3xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isEven ? "md:order-2" : "md:order-1",
            isHovered && "scale-[1.03]"
          )}
        >
          <ProjectPreview />
        </div>
      </Link>
    </motion.article>
  );
}
