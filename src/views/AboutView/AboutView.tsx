import React from "react";
import styles from "./styles.module.scss";
import Heading from "./components/heading/Heading";

const AboutView = () => {
  return (
    <>
      <div className={styles.textContainer}>
        <Heading />
      </div>
    </>
  );
};

export default AboutView;
