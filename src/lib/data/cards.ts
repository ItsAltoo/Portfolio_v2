import { cardProps } from "../types/card";

interface datasType {
  website_datas: cardProps[];
  poster_datas: cardProps[];
}

export const cardDatas: datasType = {
  // website
  website_datas: [
    {
      title: "First Portfolio",
      subTitle: "Vite, ShadcnUI, 2025",
      src: "/projects/website/project_1.webp",
      href: "https://itsmalik-v-1.vercel.app/",
    },
    {
      title: "Archa-Log",
      subTitle: "Vite, Framer Motion, 2025",
      src: "/projects/website/project_2.webp",
      href: "https://archa-log-kappa.vercel.app/",
    },
    {
      title: "AltNime",
      subTitle: "Django, TailwindCSS, 2025",
      src: "/projects/website/project_3.webp",
      href: "https://altnime-v1.vercel.app/",
    },
    {
      title: "AltNime 2.0",
      subTitle: "NextJS, ShadcnUI, 2025",
      src: "/projects/website/project_4.webp",
      href: "https://altnime.itsmalik.tech/",
    },
  ],
  // poster
  poster_datas: [
    {
      title: "Book Design 1",
      subTitle: "Poster Design",
      src: "/projects/poster/book1.webp",
      href: "",
    },
    {
      title: "Book Design 2",
      subTitle: "Poster Design",
      src: "/projects/poster/book2.webp",
      href: "",
    },
    {
      title: "Burger Poster",
      subTitle: "Poster Design",
      src: "/projects/poster/burger.webp",
      href: "",
    },
    {
      title: "Matcha Poster",
      subTitle: "Poster Design",
      src: "/projects/poster/matcha.webp",
      href: "",
    },
    {
      title: "Pizza Poster",
      subTitle: "Poster Design",
      src: "/projects/poster/pizza_poster.webp",
      href: "",
    },
    {
      title: "Bakso Poster",
      subTitle: "Poster Design",
      src: "/projects/poster/Poster_Bakso.webp",
      href: "",
    },
    {
      title: "Strawberry Ice",
      subTitle: "Poster Design",
      src: "/projects/poster/strawberryice.webp",
      href: "",
    },
    {
      title: "The Moon",
      subTitle: "Poster Design",
      src: "/projects/poster/themoon.webp",
      href: "",
    },
  ],
};
