import { Variants } from "motion";

export const firstVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: "-100%",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

export const secondVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: "-100%",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};
