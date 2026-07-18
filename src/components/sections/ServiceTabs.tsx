"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Compass, Layers, Sparkles, Route, ArrowRight } from "lucide-react";

const services = [
  {
    id: "consultoria-ux",
    label: "Diagnóstico de Producto",
    href: "/servicios/consultoria-ux",
    icon: Compass,
  },
  {
    id: "diseno-producto-complejo",
    label: "Diseño End-to-End",
    href: "/servicios/diseno-producto-complejo",
    icon: Layers,
  },
  {
    id: "diseno-ia",
    label: "Design Engineering",
    href: "/servicios/diseno-ia",
    icon: Sparkles,
  },
  {
    id: "ux-writing-elearning",
    label: "User Flows & Onboarding",
    href: "/servicios/ux-writing-elearning",
    icon: Route,
  },
];

interface ServiceTabsProps {
  current: string;
}

export function ServiceTabs({ current }: ServiceTabsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => {
        const isActive = service.id === current;
        const Icon = service.icon;
        return (
          <Link
            key={service.id}
            href={service.href}
            className={cn(
              "group flex items-center justify-between rounded-2xl border p-4 transition-all duration-300",
              isActive
                ? "border-accent bg-accent text-bg"
                : "border-border bg-elevated/20 text-primary hover:border-accent/30 hover:bg-elevated/30"
            )}
          >
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-xl",
                  isActive ? "bg-bg/20" : "bg-elevated/50 text-accent"
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold leading-tight">
                {service.label}
              </span>
            </div>
            <ArrowRight
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                isActive
                  ? "translate-x-0.5 text-bg"
                  : "text-secondary group-hover:translate-x-0.5 group-hover:text-accent"
              )}
            />
          </Link>
        );
      })}
    </div>
  );
}
