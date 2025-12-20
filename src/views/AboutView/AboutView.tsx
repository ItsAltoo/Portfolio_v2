import React from "react";
import styles from "./styles.module.scss";
import Heading from "./components/heading/Heading";
import SubHeading from "./components/subHeading/SubHeading";
import Footer from "@/components/footer/Footer";

const AboutView = () => {
  return (
    <>
      <div className={styles.subHeading}>
        <Heading />
        <SubHeading />
        <Footer />
      </div>
    </>
  );
};

export default AboutView;
