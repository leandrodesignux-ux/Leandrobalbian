"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Biografía", href: "/biografia" },
  { label: "Contacto", href: "#contacto" },
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "sticky top-0 z-50 border-b border-transparent transition-colors duration-300",
          scrolled && "border-border bg-bg/80 backdrop-blur-md"
        )}
      >
        <Container as="nav" className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-primary"
          >
            Leandro Designs
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.slice(1, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href="mailto:hola@leandro.design"
              className="text-sm text-secondary transition-colors hover:text-primary"
            >
              hola@leandro.design
            </a>
            <Button href="#contacto" variant="primary">
              Contacto
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-accent/30 hover:text-accent md:hidden"
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
              className="fixed inset-0 z-[60] bg-bg/80 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-xs flex-col bg-bg p-6 shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-tight text-primary">
                  Leandro Designs
                </span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-accent/30 hover:text-accent"
                  aria-label="Cerrar menú"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-12 flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-medium text-primary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4 border-t border-border pt-6">
                <a
                  href="mailto:hola@leandro.design"
                  className="text-sm text-secondary transition-colors hover:text-primary"
                >
                  hola@leandro.design
                </a>
                <Button href="#contacto" variant="primary" onClick={() => setIsOpen(false)}>
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
