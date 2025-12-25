import { motion, Variants } from "motion/react";
import React from "react";
import styles from "./style.module.scss";
import { revealAnimate } from "./anim";
import Image from "next/image";

interface AnimateImageProps {
  delay?: number;
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const AnimateImage = ({ src, alt, className, delay = 0.4, width, height }: AnimateImageProps) => {
  const anim = (variants: Variants) => ({
    initial: "hidden",
    animate: "visible",
    variants,
  });

  return (
    <div className={`${styles.container} ${className}`}>
      <Image src={src} alt={alt} width={width} height={height} />
      <motion.div
        className={styles.imageReveal}
        {...anim(revealAnimate({ delay }).revealAnimate)}
      />
    </div>
  );
};

export default AnimateImage;
