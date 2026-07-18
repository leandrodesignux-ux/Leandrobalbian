import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const reducedFadeUp: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export const reducedStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0 },
  },
};

export const viewportOnce = {
  once: true,
  margin: "-100px" as const,
};

export function getAccessibleVariants(reducedMotion: boolean) {
  return {
    fadeUp: reducedMotion ? reducedFadeUp : fadeUp,
    staggerContainer: reducedMotion ? reducedStaggerContainer : staggerContainer,
  };
}
