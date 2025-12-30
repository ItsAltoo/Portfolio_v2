"use client";
import "@/styles/globals.css";
import "@/styles/style.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "motion/react";
import { useRouter } from "next/router";
import { Open_Sans } from "next/font/google";
import Lenis from "lenis";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "itsMalik",
  description: "My personal website",
  icons: {
    icon: "logo.webp",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </Head>
      <div className={open_sans.className}>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
      <Analytics />
    </>
  );
}
