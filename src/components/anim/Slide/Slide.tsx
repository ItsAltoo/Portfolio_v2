import { motion, Variants } from "motion/react";
import React from "react";

interface SlideProps {
  direction?: "up" | "down" | "left" | "right";
  children: React.ReactNode;
  className?: string;
}

export const Slide = ({
  direction = "left",
  children,
  className,
}: SlideProps) => {
  
  const anim = (variants: Variants) => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    variants: variants,
  });

  if (direction === "up") {
    const SlideVariants: Variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
    };
    return (
      <motion.div className={className} {...anim(SlideVariants)}>
        {children}
      </motion.div>
    );
  }

  if (direction === "right") {
    const SlideVariants: Variants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
    };

    return (
      <motion.div className={className} {...anim(SlideVariants)}>
        {children}
      </motion.div>
    );
  }

  if (direction === "left") {
    const SlideVariants: Variants = {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
    };

    return (
      <motion.div className={className} {...anim(SlideVariants)}>
        {children}
      </motion.div>
    );
  }

  if (direction === "down") {
    const SlideVariants: Variants = {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
    };

    return (
      <motion.div className={className} {...anim(SlideVariants)}>
        {children}
      </motion.div>
    );
  }
};
