"use client";

import { cn } from "@/lib/utils";
import { Filter, Repeat2, Zap } from "lucide-react";

const ICONS = {
  conversion: Filter,
  retencion: Repeat2,
  velocidad: Zap,
} as const;

const PALANCA_MAP = {
  conversion: {
    label: "Conversión",
    description: "Por qué no completa la acción",
  },
  retencion: {
    label: "Retención",
    description: "Por qué no vuelve",
  },
  velocidad: {
    label: "Velocidad de desarrollo",
    description: "Por qué construir tarda más de lo que debería",
  },
} as const;

type PalancaId = keyof typeof PALANCA_MAP;

interface PalancaBadgeProps {
  id: PalancaId;
  className?: string;
}

export function PalancaBadge({ id, className }: PalancaBadgeProps) {
  const palanca = PALANCA_MAP[id];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent",
        className
      )}
      title={palanca.description}
    >
      {palanca.label}
    </span>
  );
}

interface PalancasStripProps {
  className?: string;
}

export function PalancasStrip({ className }: PalancasStripProps) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-3", className)}>
      {(
        Object.entries(PALANCA_MAP) as [
          PalancaId,
          (typeof PALANCA_MAP)[PalancaId]
        ][]
      ).map(([id, palanca]) => {
        const Icon = ICONS[id];
        return (
          <div
            key={id}
            className="rounded-2xl border border-border bg-elevated/20 p-6 transition-colors hover:border-accent/30"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-primary">
              {palanca.label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary">
              {palanca.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
