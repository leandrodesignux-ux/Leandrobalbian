"use client";

import { Badge } from "@/components/ui/Badge";
import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export type ResuelvoCardProps = {
  badge: string;
  number: string;
  title: string;
  body: string;
  idealPara: string;
  ctaText: string;
  ctaHref: string;
};

export function ResuelvoCard({
  badge,
  number,
  title,
  body,
  idealPara,
  ctaText,
  ctaHref,
}: ResuelvoCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-elevated/30 p-6 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-accent/30 sm:p-8"
    >
      {/* Background number */}
      <span
        className="pointer-events-none absolute left-3 top-2 font-mono text-8xl font-bold tracking-tighter text-secondary sm:text-9xl"
        style={{
          maskImage: "linear-gradient(to bottom, black 25%, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 25%, transparent 80%)",
          opacity: 0.18,
        }}
        aria-hidden="true"
      >
        {number}
      </span>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col">
        <Badge variant="outline" className="w-fit">
          {badge}
        </Badge>

        <h3 className="mt-8 text-xl font-bold leading-tight tracking-tight text-primary sm:text-2xl">
          {title}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-secondary sm:text-base">
          {body}
        </p>

        <div className="mt-8">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary sm:text-xs">
            Ideal para
          </p>
          <p className="mt-2 text-sm text-secondary">{idealPara}</p>
        </div>

        <Link
          href={ctaHref}
          className="group/link mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-primary"
        >
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
          {ctaText}
        </Link>
      </div>
    </motion.article>
  );
}
