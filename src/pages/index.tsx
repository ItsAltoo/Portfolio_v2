import Layout from "@/components/layout/Layout";
import styles from "./style.module.scss";
import AnimatedWords from "@/components/anim/AnimateWords/AnimateWords";
import AnimateImage from "@/components/anim/AnimateImage/AnimateImage";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <AnimatedWords
            className={styles.textAnim}
            text="My name is Malik S.Akbar."
          />

          <div className={styles.textProfession}>
            <AnimatedWords className={styles.textAnim} text="I am a" />
            <AnimatedWords
              className={styles.textAnim}
              text="Frontend Developer"
            />
          </div>
        </div>

        <AnimateImage src="/profile.jpg" alt="Logo" className={styles.profileImage} />
      </div>
      <div className="h-screen"></div>
    </Layout>
  );
}
