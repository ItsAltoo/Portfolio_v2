import React from "react";
import styles from "./styles.module.scss";
import Heading from "./components/heading/Heading";
import SubHeading from "./components/subHeading/SubHeading";

const AboutView = () => {
  return (
    <>
      <Heading />
      <div className={styles.subHeading}>
        <SubHeading />
      </div>
    </>
  );
};

export default AboutView;
