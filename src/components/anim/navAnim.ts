import { Variants } from "motion/react";

export const navbarVariants: Variants = {
  initial: { opacity: 0, y: -50 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const logoVariants: Variants = {
  initial: { x: -100, opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.6, type: "spring" },
  },
};

export const navLinksContainerVariants: Variants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

export const navLinkItemVariants: Variants = {
  initial: { x: -20, opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    transition: { ease: "easeOut" },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      ease: "easeIn",
    },
  },
};

export const underlineVariants: Variants = {
  hidden: { width: 0, left: "50%" },
  visible: {
    width: "100%",
    left: "0%",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const mobileMenuVariants: Variants = {
  initial: { opacity: 0, y: -10, height: 0 },
  enter: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    height: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};
