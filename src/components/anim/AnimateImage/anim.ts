import { Variants } from "motion/react";

export const revealAnimate = ({ delay }: { delay: number }) => {
  const revealAnimate: Variants = {
    hidden: { y: "0%" },
    visible: {
      y: "100%",
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 2,
        delay: delay,
      },
    },
  };
  return { revealAnimate };
};
