"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.601 3.918 5.354 1.786h2.328zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: LinkedInIcon,
  },
  {
    name: "Youtube",
    href: "#",
    icon: YouTubeIcon,
  },
  {
    name: "Behance",
    href: "#",
    icon: BehanceIcon,
  },
];

function SocialCard({
  link,
}: {
  link: (typeof socialLinks)[number];
}) {
  const Icon = link.icon;

  return (
    <motion.a
      variants={fadeUp}
      href={link.href}
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl border border-border bg-elevated/30 p-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-8",
        "min-h-[180px] hover:-translate-y-1 hover:border-accent/30 hover:bg-elevated/50 hover:shadow-[0_0_40px_-12px_rgba(200,255,0,0.1)]"
      )}
    >
      <span className="text-base font-semibold text-primary sm:text-lg">
        {link.name}
      </span>

      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-elevated text-primary transition-colors duration-300 group-hover:bg-accent/15 group-hover:text-accent sm:h-12 sm:w-12">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </span>
    </motion.a>
  );
}

export function Contacto() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const patternY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Geometric pattern background */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ y: patternY }}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M100 100 L400 500 L700 200"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          <path
            d="M300 50 L900 550"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
          <path
            d="M600 0 L1100 400 L900 600"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
          <path
            d="M50 300 L350 100 L650 350"
            stroke="rgba(200,255,0,0.06)"
            strokeWidth="1"
          />
          <circle
            cx="850"
            cy="150"
            r="120"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
          <circle
            cx="200"
            cy="450"
            r="80"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          className="mb-12 max-w-3xl md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 font-mono text-xs uppercase tracking-widest text-accent"
          >
            [07] — Contacto
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
          >
            También puedes encontrarme aquí
          </motion.h2>
        </motion.div>

        {/* Social cards */}
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {socialLinks.map((link) => (
            <SocialCard key={link.name} link={link} />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.a
            variants={fadeUp}
            href="mailto:hola@leandro.design"
            className="group relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-3xl bg-accent p-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_0_60px_-16px_rgba(200,255,0,0.3)] sm:min-h-[220px] sm:p-8 lg:max-w-[calc(33.333%-11px)]"
          >
            <span className="text-xl font-bold text-bg sm:text-2xl">Contacto</span>

            <span className="self-end rounded-full bg-bg/15 p-2 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:translate-y-1">
              <ArrowDownRight className="h-6 w-6 text-bg sm:h-7 sm:w-7" />
            </span>
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
