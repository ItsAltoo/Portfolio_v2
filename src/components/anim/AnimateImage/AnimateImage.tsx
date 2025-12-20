import { motion, Variants } from "motion/react";
import React from "react";
import styles from "./style.module.scss";
import { revealAnimate } from "./anim";

interface AnimateImageProps {
  delay?: number;
  src: string;
  alt: string;
  className?: string;
}

const AnimateImage = ({ src, alt, className, delay = 0.4 }: AnimateImageProps) => {
  const anim = (variants: Variants) => ({
    initial: "hidden",
    animate: "visible",
    variants,
  });

  return (
    <div className={`${styles.container} ${className}`}>
      <img src={src} alt={alt} />
      <motion.div
        className={styles.imageReveal}
        {...anim(revealAnimate({ delay }).revealAnimate)}
      />
    </div>
  );
};

export default AnimateImage;
