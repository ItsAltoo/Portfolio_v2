import { FadeIn } from "@/components/anim/FadeIn/FadeIn";
import Card from "@/components/card/Card";
import { cardDatas } from "@/lib/data/cards";
import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./style.module.scss";
import { useIsMobile } from "@/lib/services/useIsMobile";

export const MarqueeContent = () => {
  const { isMobile } = useIsMobile();

  return (
    <>
      <Marquee pauseOnClick direction="right" speed={isMobile ? 50 : 70}>
        {cardDatas.website_datas.map((items, i) => (
          <FadeIn key={i} delay={(i + 1) * 0.2}>
            <Card
              images={items.images}
              projectUrl={items.projectUrl}
              subTitle={items.subTitle}
              title={items.title}
              imageWidth={isMobile ? 100 : 200}
              imageHeight={isMobile ? 100 : 200}
              linkTarget="_blank"
            />
          </FadeIn>
        ))}
      </Marquee>
      <FadeIn delay={1.4}>
        <span className={styles.label}>Website</span>
      </FadeIn>
      <Marquee pauseOnClick direction="left" speed={isMobile ? 50 : 70}>
        {cardDatas.poster_datas.map((items, i) => (
          <FadeIn key={i} delay={i * 0.2}>
            <Card
              key={i}
              images={items.images}
              projectUrl={items.projectUrl}
              subTitle={items.subTitle}
              title={items.title}
              imageWidth={isMobile ? 150 : 300}
              imageHeight={isMobile ? 150 : 300}
            />
          </FadeIn>
        ))}
      </Marquee>
      <FadeIn delay={1.4}>
        <span className={styles.label}>Poster</span>
      </FadeIn>
    </>
  );
};
