"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type BaseButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
};

type AnchorButtonProps = BaseButtonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type NativeButtonProps = BaseButtonProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type ButtonProps = AnchorButtonProps | NativeButtonProps;

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
    variant === "primary" &&
      "border border-border bg-elevated text-primary hover:bg-primary hover:text-bg",
    variant === "ghost" && "text-secondary hover:text-primary",
    className
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, target, rel, onClick, ...rest } = props;
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  const { type, disabled, onClick, ...rest } = props;
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
