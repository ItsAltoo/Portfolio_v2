import React from "react";
import Footer from "@/components/footer/Footer";
import { MarqueeContent } from "./components/MarqueeContent";
import styles from "./style.module.scss";
import { useIsMobile } from "@/lib/services/useIsMobile";

const ProjectView = () => {
  const yearsNow = new Date().getFullYear();
  const { isMobile } = useIsMobile();

  return (
    <div>
      <div>
        <MarqueeContent />
      </div>

      <div
        className={`${styles.containerHeader} ${isMobile ? styles.mobile : ""}`}
      >
        <h1 className={styles.title}>Selected Projects</h1>
        <h1 className={styles.subtitle}>(2024 - {yearsNow})</h1>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectView;
