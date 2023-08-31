import React from "react";

import warmurLogo from "../../public/warmur-logo.png";
import logo from "../../public/logo.png";
import menu from "../../public/hamburger.svg";
import close from "../../public/close.svg";
import home from "../../public/home-screen.jpg";
import facebook from "../../public/facebook.svg";
import instagram from "../../public/instagram.svg";
import twitter from "../../public/twitter.svg";
import copyrightSign from "../../public/copyright-sign.svg";

export const navLinks = [
  { href: "", label: "Home" },
  { href: "calculator", label: "Calculator" },
  { href: "posts", label: "Posts" },
];

// Images
export {
  warmurLogo,
  logo,
  menu,
  home,
  close,
  facebook,
  instagram,
  twitter,
  copyrightSign,
};

export const footerLinks = [
  {
    title: "Home",
    links: [
      { name: "Home", link: "/" },
      { name: "Get warmur", link: "/" },
      { name: "Products", link: "/" },
      { name: "Our Calculator", link: "/" },
      ,
    ],
  },
  {
    title: "About",
    links: [
      { name: "About", link: "/" },
      { name: "The Team", link: "/" },
      { name: "Installation", link: "/" },
      { name: "Contact", link: "/" },
    ],
  },
  {
    title: "FAQs",
    links: [
      { name: "FAQs", link: "/" },
      { name: "Cookies", link: "/" },
      { name: "Privacy Policy", link: "/" },
      { name: "T&Cs", link: "/" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
