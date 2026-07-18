"use client";

import { cn } from "@/lib/utils";

const PALANCA_MAP = {
  conversion: {
    label: "Conversi\u00f3n",
    description: "Por qu\u00e9 no completa la acci\u00f3n",
  },
  retencion: {
    label: "Retenci\u00f3n",
    description: "Por qu\u00e9 no vuelve",
  },
  velocidad: {
    label: "Velocidad de desarrollo",
    description: "Por qu\u00e9 construir tarda m\u00e1s de lo que deber\u00eda",
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
      {(Object.entries(PALANCA_MAP) as [PalancaId, (typeof PALANCA_MAP)[PalancaId]][]).map(
        ([id, palanca]) => (
          <div
            key={id}
            className="rounded-2xl border border-border bg-elevated/20 p-5"
          >
            <span className="mb-2 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
              {palanca.label}
            </span>
            <p className="text-sm text-secondary">{palanca.description}</p>
          </div>
        )
      )}
    </div>
  );
}
