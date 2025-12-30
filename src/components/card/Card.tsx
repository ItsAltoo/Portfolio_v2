import React from "react";
import styles from "./style.module.scss";
import { useIsMobile } from "@/lib/services/useIsMobile";
import Image from "next/image";
import Button from "../button/Button";
import { cardProps } from "@/lib/types/card";

const Card = ({
  src = "/Gojo.webp",
  title = "Title",
  subTitle = "subTitle",
  href = "https://altnime.itsmalik.tech",
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
        src={src}
        width={imageWidth}
        height={imageHeight}
        alt={title}
        className={styles.image}
        unoptimized
        loading="lazy"
      />
      <span className={styles.subTitle}>{subTitle}</span>
      <p className={styles.title}>{title}</p>
      <Button href={href} target={linkTarget} className={styles.visitButton}>
        VISIT
      </Button>
    </div>
  );
};

export default Card;
