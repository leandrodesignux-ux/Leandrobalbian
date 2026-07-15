"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  rotation?: number;
  variant?: "filled" | "outline";
}

export function Badge({
  children,
  className,
  rotation = 0,
  variant = "filled",
}: BadgeProps) {
  return (
    <motion.span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm",
        variant === "filled" &&
          "bg-accent/15 font-semibold text-accent",
        variant === "outline" &&
          "border border-border text-secondary",
        className
      )}
      style={{ rotate: `${rotation}deg` }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.span>
  );
}
