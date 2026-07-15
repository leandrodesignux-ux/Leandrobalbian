"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Biografía", href: "/biografia" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
          {navLinks.map((link) => (
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

        <Button
          href="#contacto"
          variant="primary"
          className="md:hidden"
          aria-label="Contacto"
        >
          Contacto
        </Button>
      </Container>
    </motion.header>
  );
}
