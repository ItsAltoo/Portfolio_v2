import styles from "./styles.module.scss";
import React from "react";
import SplitWord from "@/components/anim/SplitWord/SplitWord";

const Heading = () => {
  return (
    <div className={styles.headingContent}>
      <SplitWord className={styles.root}>
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
