"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface GeometricBackgroundProps {
  className?: string;
  parallax?: boolean;
  intensity?: "subtle" | "medium";
}

export function GeometricBackground({
  className,
  parallax = true,
  intensity = "subtle",
}: GeometricBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? ["0%", "12%"] : ["0%", "0%"]
  );

  const opacity = intensity === "subtle" ? 0.15 : 0.25;

  return (
    <div ref={ref} className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className="absolute inset-[-10%] h-[120%] w-[120%]"
        style={{ y }}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Concentric partial circles */}
          <circle
            cx="200"
            cy="400"
            r="180"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
          <circle
            cx="200"
            cy="400"
            r="280"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
          <circle
            cx="200"
            cy="400"
            r="380"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />

          {/* Accent arc */}
          <path
            d="M 80 400 A 120 120 0 0 1 320 400"
            stroke={`rgba(200,255,0,${opacity * 0.6})`}
            strokeWidth="1"
            fill="none"
          />

          {/* Fine lines */}
          <line
            x1="0"
            y1="400"
            x2="1200"
            y2="400"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
          <line
            x1="200"
            y1="0"
            x2="200"
            y2="800"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="200"
            x2="500"
            y2="600"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="1"
          />

          {/* Right side elements */}
          <circle
            cx="1000"
            cy="250"
            r="100"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
          <circle
            cx="1000"
            cy="250"
            r="160"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
          <path
            d="M 900 250 A 100 100 0 0 1 1100 250"
            stroke={`rgba(200,255,0,${opacity * 0.5})`}
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
}
