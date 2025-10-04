import React from "react";
import { motion, Variants } from "motion/react";
import { opacity, expand } from "./anim";
import styles from "./style.module.scss";
import Navbar from "@/components/navbar/Navbar";

export default function Layout({
  children,
  backgroundColor,
  ...className
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}) {
  const anim = (variants: Variants, custom: number | null = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 10;

  return (
    <div className={styles.stairs} style={{ backgroundColor }} {...className}>
      <motion.div {...anim(opacity)} className={styles.transitionBackground} />
      <div className={styles.transitionContainer}>
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />;
        })}
      </div>
      <Navbar />
      {children}
    </div>
  );
}
