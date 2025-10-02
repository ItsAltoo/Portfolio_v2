import { motion, Variants } from "motion/react";
import React from "react";

interface AnimateImageProps {
  src: string;
  alt: string;
  className?: string;
}

const AnimateImage = ({ src, alt, className }: AnimateImageProps) => {
  const anim = (variants: Variants) => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    variants,
  });

  const imageAnimate: Variants = {
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

  return (
    <motion.div style={{ overflow: "hidden" }}>
      <motion.div
        style={{ backgroundImage: `url(${src})` }}
        className={className}
      />
    </motion.div>
  );
};

export default AnimateImage;
