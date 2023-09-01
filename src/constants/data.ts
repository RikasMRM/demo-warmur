import React from "react";

import warmurLogo from "../../public/warmur-logo.png";
import logo from "../../public/logo.png";
import Understanding from "../../public/understanding.jpeg";
import Whatwedo from "../../public/whatwedo.jpeg";
import Digit from "../../public/digit.jpeg";
import Graph from "../../public/graph.jpeg";
import Dog from "../../public/dog.jpeg";
import BoldMan from "../../public/boldman.jpeg";
import Heat from "../../public/heat.jpeg";
import Solar from "../../public/solar.jpeg";
import menu from "../../public/hamburger.svg";
import close from "../../public/close.svg";
import home from "../../public/home-screen.jpg";
import facebook from "../../public/facebook.svg";
import instagram from "../../public/instagram.svg";
import twitter from "../../public/twitter.svg";
import copyrightSign from "../../public/copyright-sign.svg";
import iphone from "../../public/iPhone-12-Mockup.png";
import homeimg from "../../public/home.jpg";

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
  iphone,
  homeimg,
  Understanding,
  Whatwedo,
  Digit,
  BoldMan,
  Graph,
  Dog,
  Heat,
  Solar,
};

export const footerLinks = [
  {
    title: "Home",
    links: [
      { title: "Home", url: "/" },
      { title: "Get Warmur", url: "/" },
      { title: "Products", url: "/" },
      { title: "Our Calculator", url: "/" },
    ],
  },
  {
    title: "About",
    links: [
      { title: "About", url: "/" },
      { title: "The Team", url: "/" },
      { title: "Installation", url: "/" },
      { title: "Contact", url: "/" },
    ],
  },
  {
    title: "FAQs",
    links: [
      { title: "FAQs", url: "/" },
      { title: "Cookies", url: "/" },
      { title: "Privacy", url: "/" },
      { title: "T&Cs", url: "/" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
