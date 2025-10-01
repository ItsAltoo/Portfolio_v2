"use client";
import { motion, AnimatePresence, Variants } from "motion/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  navLinkItemVariants,
  navbarVariants,
  logoVariants,
  mobileMenuVariants,
  navLinksContainerVariants,
  underlineVariants,
} from "@/components/navbar/navAnim";
import styles from "./style.module.scss";

const Navbar = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const animate = (variants: Variants) => ({
    initial: "initial",
    animate: animationStarted ? "enter" : "initial",
    exit: "exit",
    variants,
  });

  return (
    <motion.div className={styles.navbar} {...animate(navbarVariants)}>
      <div className={styles.container}>
        <motion.h1 {...animate(logoVariants)} className={styles.logo}>
          <span>MALIK S.AKBAR</span>
        </motion.h1>

        {/* Tombol hamburger */}
        <motion.button
          className={styles.menuButton}
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          animate={{ rotate: isMobileOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Desktop nav */}
        <motion.nav
          {...animate(navLinksContainerVariants)}
          className={styles.navLinks}
        >
          <ul>
            {["Index", "About", "Projects", "Contact"].map((item) => (
              <motion.li key={item} variants={navLinkItemVariants}>
                <motion.div
                  className={styles.navItem}
                  whileHover="visible"
                  initial="hidden"
                >
                  <Link
                    href={item === "Index" ? "/" : `/${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                  <motion.span
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {isMobileOpen && (
          <motion.nav
            {...animate(mobileMenuVariants)}
            className={styles.mobileMenu}
          >
            <ul>
              {["Index", "About", "Projects", "Contact"].map((item) => (
                <motion.li key={item} variants={navLinkItemVariants}>
                  <Link
                    href={item === "Index" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
