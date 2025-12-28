import { motion, Variants } from "motion/react";
import React, { useMemo } from "react";

interface SlideProps {
  direction?: "up" | "down" | "left" | "right";
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const Slide = ({
  direction = "left",
  children,
  className,
  delay = 0.5,
  duration = 0.5,
}: SlideProps) => {

  const variants: Variants = useMemo(() => {
    const directionOffsets = {
      up: { y: 50, x: 0 },
      down: { y: -100, x: 0 },
      left: { x: 100, y: 0 },
      right: { x: -100, y: 0 },
    };

    const { x, y } = directionOffsets[direction];

    return {
      hidden: {
        opacity: 0,
        x,
        y,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    };
  }, [direction, delay, duration]);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
