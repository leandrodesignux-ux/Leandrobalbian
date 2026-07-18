"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Biografía", href: "/biografia" },
  { label: "Contacto", href: "/servicios#contacto" },
];

const menuVariants = {
  closed: {
    x: "100%",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
  open: {
    x: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const overlayVariants = {
  closed: { opacity: 0, transition: { duration: 0.3 } },
  open: { opacity: 1, transition: { duration: 0.3 } },
};

const itemVariants = {
  closed: { opacity: 0, x: 24 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 + i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={reducedMotion ? { opacity: 1 } : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "sticky top-0 z-50 border-b border-transparent transition-colors duration-300",
          scrolled && "border-border bg-bg/80 backdrop-blur-md"
        )}
      >
        <Container as="nav" className="flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className="text-sm font-semibold tracking-tight text-primary"
          >
            Leandro Designs
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.slice(1, 4).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  isActive(link.href) ? "text-primary" : "text-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href="mailto:hola@leandro.design"
              className="text-sm text-secondary transition-colors hover:text-primary"
            >
              hola@leandro.design
            </a>
            <Button href="/servicios#contacto" variant="primary">
              Contacto
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-accent/30 hover:text-accent md:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
        </Container>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsOpen(false)}
              transition={{ duration: reducedMotion ? 0 : 0.3 }}
              className="fixed inset-0 z-[60] bg-bg/80 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: reducedMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-xs flex-col bg-bg p-6 shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold tracking-tight text-primary"
                >
                  Leandro Designs
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-accent/30 hover:text-accent"
                  aria-label="Cerrar menú"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-12 flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={cn(
                        "text-2xl font-medium transition-colors hover:text-accent",
                        isActive(link.href) ? "text-accent" : "text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4 border-t border-border pt-6">
                <a
                  href="mailto:hola@leandro.design"
                  className="text-sm text-secondary transition-colors hover:text-primary"
                >
                  hola@leandro.design
                </a>
                <Button href="/servicios#contacto" variant="primary" onClick={() => setIsOpen(false)}>
                  Contacto
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
