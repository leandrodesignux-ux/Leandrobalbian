"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden py-24 md:py-32">
      <NetworkBackground className="opacity-60" />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-end gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16"
        >
          {/* Left — big headline */}
          <motion.h1
            variants={fadeUp}
            className="text-balance text-5xl font-medium leading-[1.05] tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Tu producto tiene una{" "}
            <em className="italic text-accent">fuga</em>.
            <br className="hidden sm:block" />{" "}
            La encuentro, la explico, la resuelvo.
          </motion.h1>

          {/* Right — CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-start gap-3 sm:flex-row sm:items-center lg:justify-end lg:pb-4"
          >
            <Button href="#contacto" variant="primary">
              Agendar diagnóstico
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="/proyectos"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-primary transition-colors duration-200 hover:border-accent/30 hover:text-accent"
            >
              Ver proyectos
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
