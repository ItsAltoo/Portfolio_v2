import styles from "./styles.module.scss";
import AnimateImage from "@/components/anim/AnimateImage/AnimateImage";
import { Slide } from "@/components/anim/Slide/Slide";
import Image from "next/image";
import Button from "@/components/button/Button";
import { useIsMobile } from "@/lib/services/useIsMobile";
import Marquee from "react-fast-marquee";
import SplitWord from "@/components/anim/SplitWord/SplitWord";
import { cardDatas } from "@/lib/data/cards";

const HomeView = () => {
  const { isMobile } = useIsMobile();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div>
            <SplitWord className={styles.textAnim}>
              My name is Malik Sabarullah Akbar. I am a{" "}
              <span className={styles.subText}>Frontend Developer</span>
            </SplitWord>
          </div>

          {/* Latest Projects */}
          {!isMobile && (
            <div>
              <Slide direction="up">
                <p>Latest Projects</p>
              </Slide>

              <Slide direction="up">
                <div className={styles.projectsCard}>
                  <Image
                    src={cardDatas.website_datas[4].src}
                    alt={cardDatas.website_datas[4].title}
                    width={290}
                    height={150}
                    style={{
                      objectFit: "fill",
                      objectPosition: "center",
                    }}
                    unoptimized
                  />

                  <div className={styles.projectsInfo}>
                    <div>
                      <span>{cardDatas.website_datas[4].subTitle}</span>
                      <p>{cardDatas.website_datas[4].title}</p>
                    </div>

                    <Button href="/projects" className={styles.visitButton}>
                      VISIT ME
                    </Button>
                  </div>
                </div>
              </Slide>
            </div>
          )}
        </div>

        {isMobile && (
          <Marquee direction="right" speed={30} className={styles.marquee}>
            <p>Welcome to my website</p>
          </Marquee>
        )}

        <div className={styles.imageContainer}>
          {isMobile && (
            <Button href="/about" className={styles.aboutButton}>
              ABOUT ME
            </Button>
          )}

          <div className={styles.imageWrapper}>
            <AnimateImage
              src="/profile/profile1.webp"
              alt="Logo"
              className={styles.profileImage}
              width={isMobile ? 150 : 300}
              height={isMobile ? 150 : 300}
            />

            {isMobile && (
              <Marquee
                direction="right"
                speed={15}
                className={styles.imageMarquee}
              >
                <p>Welcome to my website</p>
              </Marquee>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
