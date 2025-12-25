import styles from "./styles.module.scss";
import React from "react";
import SplitWord from "@/components/anim/SplitWord/SplitWord";
import { useIsMobile } from "@/lib/services/useIsMobile";

const Heading = () => {
  const { isMobile } = useIsMobile();

  return (
    <div className={styles.headingContent}>
      <SplitWord
        key={isMobile ? "mobile" : "desktop"}
        className={`${styles.root} ${isMobile ? styles.mobile : ""}`}
      >
        {"\b\b"}
        Saya seorang{" "}
        <span className={styles.sub}>
          mahasiswa Teknik Informatika
        </span> dan{" "}
        <span className={styles.sub}>memulai perjalanan kreatif saya</span> di
        dunia <span className={styles.sub}>desain multimedia.</span> Saya
        kemudian bertransisi ke bidang development, didorong oleh hasrat untuk{" "}
        <span className={styles.sub}>coding, desain web, dan front-end.</span>
      </SplitWord>
    </div>
  );
};

export default Heading;
