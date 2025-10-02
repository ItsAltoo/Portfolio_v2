"use client";
import { motion, Variants } from "motion/react";
import React from "react";
import { child, container } from "./anim";

interface AnimatedWordsProps {
  text: string;
  className?: string;
}

const AnimatedWords = ({ text, className }: AnimatedWordsProps) => {

  const anim = (variants: Variants) => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.6 },
    variants,
  });
  
  const words = text.split(" ");

  return (
    <motion.div className={className} {...anim(container)}>
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
