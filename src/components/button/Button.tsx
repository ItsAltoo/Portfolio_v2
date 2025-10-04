import { motion } from "motion/react";
import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { firstVariants, secondVariants } from "./anim";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const Button = ({ children, href, className }: ButtonProps) => {
  return (
    <Link href={href} className={`${styles.button} ${className}`}>
      <motion.div
        className={styles.inner}
        initial="rest"
        animate="rest"
        whileHover="hover"
      >
        <motion.div className={styles.firstButton} variants={firstVariants}>
          {children}
        </motion.div>

        <motion.div className={styles.secondButton} variants={secondVariants}>
          {children}
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Button;
