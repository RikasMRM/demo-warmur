"use client";
import React, { useState } from "react";
import { navLinks, warmurLogo, menu, close } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full px-10">
        <nav className="flex justify-between items-center max-container">
          <Link href="/">
            <Image
              src={warmurLogo}
              alt="logo"
              width={129}
              height={29}
              className="m-0 w-[100%] h-[60px]"
            />
          </Link>
          <div className="flex flex-1 justify-end items-center">
            <div onClick={() => setToggle(!toggle)}>
              <Image
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
              />
            </div>
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.href}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.label ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.label);
                    }}
                  >
                    <a href={`${nav.href}`}>{nav.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
