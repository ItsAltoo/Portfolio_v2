import "@/styles/globals.css";
import "@/styles/style.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter_Tight } from "next/font/google";
import Layout from "@/components/layout";

const inter = Inter_Tight({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "itsMalik",
  description: "My personal website",
  icons: {
    icon: "logo.jpeg",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </Head>
      <Layout className={inter.className}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
