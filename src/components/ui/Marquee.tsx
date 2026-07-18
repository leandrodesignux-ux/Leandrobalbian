"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  separator?: string;
}

export function Marquee({
  items,
  className,
  separator = "◆",
}: MarqueeProps) {
  const content = items.join(` ${separator} `);

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden border-y border-border bg-elevated/30 py-4",
        className
      )}
    >
      <div className="animate-marquee flex whitespace-nowrap will-change-transform motion-reduce:animate-none">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="px-8 font-mono text-sm uppercase tracking-widest text-secondary"
          >
            {content} {separator}
          </span>
        ))}
      </div>
    </div>
  );
}
