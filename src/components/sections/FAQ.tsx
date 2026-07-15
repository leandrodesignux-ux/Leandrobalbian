"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqItems)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "rounded-2xl border bg-elevated/30 transition-colors duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isOpen
          ? "border-accent/30 bg-elevated/50"
          : "border-border hover:border-accent/20 hover:bg-elevated/50"
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
        aria-expanded={isOpen}
      >
        <span className="flex items-start gap-3 sm:gap-4">
          <span className="mt-0.5 font-mono text-sm font-semibold text-accent sm:text-base">
            {item.number}/
          </span>
          <span className="text-base font-semibold text-primary sm:text-lg">
            {item.question}
          </span>
        </span>

        <span
          className={cn(
            "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] sm:h-9 sm:w-9",
            isOpen ? "bg-accent/15 text-accent" : "bg-elevated text-primary"
          )}
        >
          <Plus
            className={cn(
              "h-4 w-4 transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isOpen && "rotate-45"
            )}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
              <p className="max-w-3xl pl-7 text-sm leading-relaxed text-secondary sm:pl-8 sm:text-base">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32">
      <Container>
        {/* Header */}
        <motion.div
          className="mb-12 max-w-3xl text-center md:mx-auto md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 font-mono text-xs uppercase tracking-widest text-accent"
          >
            [06] — FAQ
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
          >
            ¿Tienes preguntas?
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="mx-auto flex max-w-4xl flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.number}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
