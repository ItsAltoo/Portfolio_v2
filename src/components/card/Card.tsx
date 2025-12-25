import React from "react";
import styles from "./style.module.scss";
import { useIsMobile } from "@/lib/services/useIsMobile";
import Image from "next/image";
import Button from "../button/Button";
import { cardProps } from "@/lib/types/card";

const Card = ({
  images = "/Gojo.jpeg",
  title = "Title",
  subTitle = "subTitle",
  projectUrl = "https://altnime.itsmalik.tech",
  classname,
  imageHeight,
  imageWidth,
  linkTarget,
}: cardProps) => {
  const { isMobile } = useIsMobile();

  return (
    <div
      className={`${styles.container} ${isMobile ? styles.mobile : ""} ${
        classname || ""
      }`}
    >
      <Image
        src={images}
        width={imageWidth}
        height={imageHeight}
        alt={title}
        className={styles.image}
        unoptimized
      />
      <span className={styles.subTitle}>{subTitle}</span>
      <p className={styles.title}>{title}</p>
      <Button href={projectUrl} target={linkTarget} className={styles.visitButton}>
        VISIT
      </Button>
    </div>
  );
};

export default Card;
