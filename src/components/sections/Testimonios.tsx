"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const RESUME_DELAY_MS = 2000;
const PX_PER_FRAME = 0.5;

function StarRating({ rating, animate }: { rating: number; animate: boolean }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const total = 5;

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} de 5 estrellas`}
    >
      <span className="mr-1 text-xs font-medium text-secondary">
        {rating.toFixed(1)}/5
      </span>
      {Array.from({ length: total }).map((_, i) => {
        const filled = i < fullStars || (i === fullStars && hasHalf);
        return (
          <motion.div
            key={i}
            initial={animate ? { opacity: 0, scale: 0.5 } : false}
            animate={animate ? { opacity: 1, scale: 1 } : false}
            transition={{
              delay: i * 0.08,
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Star
              className={cn(
                "h-3.5 w-3.5",
                filled ? "fill-accent text-accent" : "text-border"
              )}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  onHover,
}: {
  testimonial: (typeof testimonials)[number];
  onHover: (hovered: boolean) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isActive = useInView(cardRef, { amount: 0.3, once: false });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeUp}
      className="flex-shrink-0 px-3 md:px-4"
      style={{ width: "clamp(300px, 42vw, 520px)" }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHover(false);
      }}
      onTouchStart={() => onHover(true)}
      onTouchEnd={() => onHover(false)}
    >
      <article
        className={cn(
          "relative flex h-full flex-col rounded-3xl border bg-elevated/30 p-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-8",
          "border-border",
          isHovered &&
            "-translate-y-2 border-accent/30 shadow-[0_0_40px_-12px_rgba(200,255,0,0.12)]"
        )}
      >
        {/* Decorative quote */}
        <span
          className={cn(
            "absolute right-6 top-4 font-serif text-6xl leading-none transition-colors duration-300 sm:text-7xl",
            isHovered ? "text-accent/40" : "text-secondary/10"
          )}
          aria-hidden="true"
        >
          &ldquo;
        </span>

        {/* Rating */}
        <StarRating rating={testimonial.rating} animate={isActive} />

        {/* Quote */}
        <blockquote className="relative z-10 mt-6 flex-1 text-base leading-relaxed text-primary sm:text-lg">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="mt-8 flex items-center gap-3">
          {testimonial.avatar ? (
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
          ) : (
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-elevated text-sm font-semibold text-accent ring-1 ring-border">
              {testimonial.initials}
            </span>
          )}
          <div>
            <p className="text-sm font-semibold text-primary">
              {testimonial.name}
            </p>
            <p className="text-xs text-secondary">{testimonial.role}</p>
          </div>
        </div>
      </article>
    </motion.div>
  );
}

function MarqueeCarousel({
  children,
  isPaused,
}: {
  children: React.ReactNode;
  isPaused: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const lastInteractionRef = useRef<number>(0);
  const loopWidthRef = useRef<number>(0);
  const dragStartRef = useRef<{ x: number; translate: number } | null>(null);
  const velocityRef = useRef(PX_PER_FRAME);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        loopWidthRef.current = trackRef.current.scrollWidth / 2;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    let rafId: number;

    const animate = () => {
      setTranslateX((prev) => {
        if (isPaused || isDragging) return prev;
        if (Date.now() - lastInteractionRef.current < RESUME_DELAY_MS)
          return prev;

        const width = loopWidthRef.current;
        if (!width) return prev;

        let next = prev - velocityRef.current;
        if (Math.abs(next) >= width) {
          next = next + width;
        }
        return next;
      });
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused, isDragging]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      translate: translateX,
    };
    lastInteractionRef.current = Date.now();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !dragStartRef.current) return;
    const delta = e.clientX - dragStartRef.current.x;
    const width = loopWidthRef.current || 0;
    let next = dragStartRef.current.translate + delta;
    if (width) {
      next = ((next % width) + width) % width;
      if (next > 0) next -= width;
    }
    setTranslateX(next);
    lastInteractionRef.current = Date.now();
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    dragStartRef.current = null;
    lastInteractionRef.current = Date.now();
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div
        ref={trackRef}
        className={cn(
          "flex w-max will-change-transform",
          isDragging ? "cursor-grabbing" : "cursor-grab"
        )}
        style={{
          transform: `translateX(${translateX}px)`,
          touchAction: "pan-y",
        }}
      >
        {children}
        {children}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent md:w-32" />
    </div>
  );
}

export function Testimonios() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
    >
      <Container>
        {/* Header */}
        <motion.div
          className="mb-16 max-w-3xl text-center md:mx-auto md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 font-mono text-xs uppercase tracking-widest text-accent"
          >
            [05] — Testimonios
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Impacto real, del problema a la solución
          </motion.h2>
        </motion.div>
      </Container>

      {/* Marquee Carousel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative"
      >
        <MarqueeCarousel isPaused={isPaused}>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              onHover={setIsPaused}
            />
          ))}
        </MarqueeCarousel>
      </motion.div>

      {/* Note */}
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-center text-xs text-secondary"
        >
          Pasa el cursor sobre una card para leerla con calma
        </motion.p>
      </Container>
    </section>
  );
}
