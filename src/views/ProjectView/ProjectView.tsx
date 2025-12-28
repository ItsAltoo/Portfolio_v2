import React from "react";
import Footer from "@/components/footer/Footer";
import { MarqueeContent } from "./components/MarqueeContent";
import styles from "./style.module.scss";
import { useIsMobile } from "@/lib/services/useIsMobile";
import Image from "next/image";

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

        <Image
          src={"/Umaru.gif"}
          width={160}
          height={130}
          alt="Umaru"
          unoptimized
          className={styles.mascot}
        />
      </div>

      <Footer />
    </div>
  );
};

export default ProjectView;
