import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://zegs.me/",
  author: "zegevlier",
  desc: "Blog",
  title: "zegevliers's blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerPage: 20,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/zegevlier",
    linkTitle: `Find me on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:me@zegs.me",
    linkTitle: `Send me an email`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/269867330526248960",
    linkTitle: `Find me on Discord`,
    active: true,
  },
];
