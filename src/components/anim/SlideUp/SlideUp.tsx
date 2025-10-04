import { motion, Variants } from "motion/react";
import React from "react";

const SlideUp = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const anim = (variants: Variants) => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    variants: variants,
  });

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <motion.div className={className} {...anim(slideUpVariants)}>
      {children}
    </motion.div>
  );
};

export default SlideUp;
