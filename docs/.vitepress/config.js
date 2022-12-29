export default {
  title: "Sunday Code Camp",
  description: "Sunday Code Camp .",
  themeConfig: {
    logo: "https://avatars.githubusercontent.com/u/118237819?v=4",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Docs", link: "/chapter/1" },
      {
        text: "Changelog",
        items: [
          { text: "Version 1.0", link: "/" }
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/ProJS-UNIRA" },
      { icon: "youtube", link: "https://twitter.com/victorekea" },
      { icon: "discord", link: "..." },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "What is Sunday Code Camp?", link: "/guide/" }],
      },
      {
        text: "Getting Started",
        items: [{ text: "How to join?", link: "/guide/join" }],
      },
      {
        text: "Documentations",
        items: [
          { text: "Chapter 1", link: "/chapter/1" },
          { text: "Chapter 2", link: "/chapter/2" },
          { text: "Chapter 3", link: "/chapter/3" },
          { text: "Chapter 4", link: "/chapter/4" },
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022 ~ ProJs Universitas Madura",
    },
  },
};
