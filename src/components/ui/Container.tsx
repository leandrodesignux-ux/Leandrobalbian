import { cn } from "@/lib/utils";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
}

export function Container({
  children,
  className,
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
