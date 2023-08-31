import React from "react";
import SectionHeading from "./section-heading";

import { logo } from "@/constants/data";
import Image from "next/image";

export default function HowWorks() {
  return (
    <>
      <section className="relative w-full">
        <div
          className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-300 pointer-events-none"
          aria-hidden="true"
        ></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <Image
                  className="w-80 md:ml-1 ml-24"
                  alt="logo"
                  src={logo}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 mb-4">Explore the solutions</h2>
          <p className="text-xl text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 font-medium transition duration-500 ease-in-out transform bg-transparent border border-primary-orange rounded-full bg-gray-900"
              href="https://www.warmur.co.uk/"
            >
              <span className="justify-center">how its work</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
