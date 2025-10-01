"use client";
import { motion, Variants } from "motion/react";
import React from "react";

interface AnimatedWordsProps {
  text: string;
  className?: string;
}

const AnimatedWords = ({ text, className }: AnimatedWordsProps) => {
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.5 * i },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: "100%",
      transition: {
        ease: [0.16, 1, 0.3, 1],
        damping: 12,
        stiffness: 100,
        duration: 1,
      },
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        ease: [0.16, 1, 0.3, 1],
        damping: 12,
        stiffness: 100,
        duration: 1,
      },
    },
  };

  const words = text.split(" ");

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
          }}
        >
          <motion.span style={{ display: "inline-block" }} variants={child}>
            {word}
          </motion.span>
          <span>&nbsp;</span>
        </span>
      ))}
    </motion.div>
  );
};

export default AnimatedWords;
