import Layout from "@/components/layout/Layout";
import styles from "./style.module.scss";
import AnimatedWords from "@/components/anim/AnimateWords/AnimateWords";

export default function Home() {
  return (
    <Layout>
      <div className="h-screen">
        <AnimatedWords
          className={styles.textAnim}
          text="Hello, I'm Matheus, a passionate front-end developer."
          />
        
      </div>
      <div className="h-screen"></div>
    </Layout>
  );
}
