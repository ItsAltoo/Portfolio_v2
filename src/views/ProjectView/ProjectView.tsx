import React from "react";
import styles from "./style.module.scss";
import Card from "@/components/card/Card";
import Marquee from "react-fast-marquee";
import { cardDatas } from "@/lib/data/cards";
import { FadeIn } from "@/components/anim/FadeIn/FadeIn";
import Footer from "@/components/footer/Footer";

const ProjectView = () => {
  return (
    <div>
      <div>
        <Marquee pauseOnClick direction="right" speed={70}>
          {cardDatas.website_datas.map((items, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <Card
                images={items.images}
                projectUrl={items.projectUrl}
                subTitle={items.subTitle}
                title={items.title}
                imageWidth={200}
                imageHeight={200}
                linkTarget="_blank"
              />
            </FadeIn>
          ))}
        </Marquee>
        <span className={styles.label}>Website</span>
        <Marquee pauseOnClick direction="left" speed={70}>
          {cardDatas.poster_datas.map((items, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <Card
                key={i}
                images={items.images}
                projectUrl={items.projectUrl}
                subTitle={items.subTitle}
                title={items.title}
                imageWidth={300}
                imageHeight={300}
              />
            </FadeIn>
          ))}
        </Marquee>
        <span className={styles.label}>Poster</span>
      </div>

      <div>

      </div>

      <Footer/>
    </div>
  );
};

export default ProjectView;
