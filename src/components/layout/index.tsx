import React from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
import { opacity, expand } from "./anim";
import styles from "./styles.module.scss";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";

export default function Layout({
  children,
  backgroundColor,
  ...className
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}) {
  const router = useRouter();

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
    <AnimatePresence mode="wait">
      <div
        key={router.route}
        className={styles.stairs}
        style={{ backgroundColor }}
        {...className}
      >
        <motion.div
          {...anim(opacity)}
          className={styles.transitionBackground}
        />
        <div className={styles.transitionContainer}>
          {[...Array(nbOfColumns)].map((_, i) => {
            return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />;
          })}
        </div>
        <Navbar />

        {children}
      </div>
    </AnimatePresence>
  );
}
