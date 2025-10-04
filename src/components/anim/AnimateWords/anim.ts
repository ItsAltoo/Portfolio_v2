import { Variants } from "motion/react";

export const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.5 * i },
    }),
  };

export const child: Variants = {
    hidden: {
      y: "100%",

    },
    visible: {
      y: "0%",
      transition: {
        ease: [0.16, 1, 0.3, 1],
        damping: 12,
        stiffness: 100,
        duration: 1.5,
      },
    },
  };