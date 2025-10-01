import "@/styles/globals.css";
import "@/styles/style.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "motion/react";
import { useRouter } from "next/router";
import localFont from "next/font/local";

const letterOfLearners = localFont({
  src: "../../public/fonts/Letters for Learners.ttf",
});

export const metadata = {
  title: "itsMalik",
  description: "My personal website",
  icons: {
    icon: "logo.jpeg",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </Head>
      <div className={letterOfLearners.className}>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    </>
  );
}
