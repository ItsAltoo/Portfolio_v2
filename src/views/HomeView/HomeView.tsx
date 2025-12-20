import styles from "./styles.module.scss";
import AnimateImage from "@/components/anim/AnimateImage/AnimateImage";
import SlideUp from "@/components/anim/SlideUp/SlideUp";
import Image from "next/image";
import Button from "@/components/button/Button";
import { useIsMobile } from "@/lib/services/useIsMobile";
import Marquee from "react-fast-marquee";
import SplitWord from "@/components/anim/SplitWord/SplitWord";

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
              <SlideUp>
                <p>Latest Projects</p>
              </SlideUp>

              <SlideUp>
                <div className={styles.projectsCard}>
                  <Image
                    src="./projects/website/project_4.png"
                    alt="Project Latest"
                    width={250}
                    height={150}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    unoptimized
                  />

                  <div className={styles.projectsInfo}>
                    <div>
                      <span>Next.js, Shadcn UI, Jikan API, 2025</span>
                      <p>ALTNIME LIST</p>
                    </div>

                    <Button href="/projects" className={styles.visitButton}>
                      VISIT ME
                    </Button>
                  </div>
                </div>
              </SlideUp>
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
              src="/profile/profile1.jpg"
              alt="Logo"
              className={styles.profileImage}
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
