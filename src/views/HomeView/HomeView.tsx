import styles from "./style.module.scss";
import AnimatedWords from "@/components/anim/AnimateWords/AnimateWords";
import AnimateImage from "@/components/anim/AnimateImage/AnimateImage";
import SlideUp from "@/components/anim/SlideUp/SlideUp";
import Image from "next/image";
import Button from "@/components/button/Button";
import { useIsMobile } from "@/lib/services/useIsMobile";

const HomeView = () => {
  const { isMobile } = useIsMobile();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div>
            <AnimatedWords
              className={styles.textAnim}
              text="  My name is Malik S.Akbar."
            />

            <div className={styles.textProfession}>
              <AnimatedWords className={styles.textAnim} text="I am a" />
              <AnimatedWords
                className={styles.textAnim}
                text="Frontend Developer"
              />
            </div>
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

        <div className={styles.imageContainer}>
          {isMobile && (
            <Button href="/about" className={styles.aboutButton}>
              ABOUT ME
            </Button>
          )}

          <AnimateImage
            src="./profile.jpg"
            alt="Logo"
            className={styles.profileImage}
          />
        </div>
      </div>
    </>
  );
};

export default HomeView;
