import { cn } from "@/lib/utils";

interface LogoMarkProps {
  initials: string;
  className?: string;
}

export function LogoMark({ initials, className }: LogoMarkProps) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-elevated/50 font-mono text-sm font-bold uppercase tracking-wider text-primary",
        className
      )}
    >
      {initials}
    </div>
  );
}
