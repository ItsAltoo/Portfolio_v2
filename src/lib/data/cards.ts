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
      images: "/projects/website/project_1.png",
      projectUrl: "https://itsmalik-v-1.vercel.app/",
    },
    {
      title: "Archa-Log",
      subTitle: "Vite, Framer Motion, 2025",
      images: "/projects/website/project_2.png",
      projectUrl: "https://archa-log-kappa.vercel.app/",
    },
    {
      title: "AltNime",
      subTitle: "Django, TailwindCSS, 2025",
      images: "/projects/website/project_3.png",
      projectUrl: "https://altnime-v1.vercel.app/",
    },
    {
      title: "AltNime 2.0",
      subTitle: "NextJS, ShadcnUI, 2025",
      images: "/projects/website/project_4.png",
      projectUrl: "https://altnime.itsmalik.tech/",
    },
  ],
  // poster
  poster_datas: [
    {
      title: "Book Design 1",
      subTitle: "Poster Design",
      images: "/projects/poster/book1.png",
      projectUrl: "",
    },
    {
      title: "Book Design 2",
      subTitle: "Poster Design",
      images: "/projects/poster/book2.png",
      projectUrl: "",
    },
    {
      title: "Burger Poster",
      subTitle: "Poster Design",
      images: "/projects/poster/burger.jpg",
      projectUrl: "",
    },
    {
      title: "Matcha Poster",
      subTitle: "Poster Design",
      images: "/projects/poster/matcha.jpg",
      projectUrl: "",
    },
    {
      title: "Pizza Poster",
      subTitle: "Poster Design",
      images: "/projects/poster/pizza_poster.jpg",
      projectUrl: "",
    },
    {
      title: "Bakso Poster",
      subTitle: "Poster Design",
      images: "/projects/poster/Poster_Bakso.jpg",
      projectUrl: "",
    },
    {
      title: "Strawberry Ice",
      subTitle: "Poster Design",
      images: "/projects/poster/strawberryice.jpg",
      projectUrl: "",
    },
    {
      title: "The Moon",
      subTitle: "Poster Design",
      images: "/projects/poster/themoon.jpg",
      projectUrl: "",
    },
  ],
};
