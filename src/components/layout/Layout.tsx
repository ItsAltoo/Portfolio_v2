import React from "react";
import { motion, Variants } from "motion/react";
import { opacity, expand } from "./anim";
import styles from "./style.module.scss";
import Navbar from "@/components/navbar/Navbar";
import { useIsMobile } from "@/lib/services/useIsMobile";

interface LayoutProps {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}

export default function Layout({
  children,
  backgroundColor,
  className,
}: LayoutProps) {
  const { isMobile } = useIsMobile();

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
  const nbOfColumnsMobile = 5;

  return (
    <div
      className={`${styles.stairs} ${className}`}
      style={{ backgroundColor }}
    >
      <motion.div {...anim(opacity)} className={styles.transitionBackground} />
      <div className={styles.transitionContainer}>
        {/* for mobile */}
        {isMobile && (
          <>
            {[...Array(nbOfColumnsMobile)].map((_, i) => {
              return (
                <motion.div key={i} {...anim(expand, nbOfColumnsMobile - i)} />
              );
            })}
          </>
        )}

        {/* for desktop */}
        {!isMobile && (
          <>
            {[...Array(nbOfColumns)].map((_, i) => {
              return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />;
            })}
          </>
        )}
      </div>
      <Navbar />
      {children}
    </div>
  );
}
