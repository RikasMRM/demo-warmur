import React from "react";
import SectionHeading from "./section-heading";

import { Understanding } from "@/constants/data";
import Image from "next/image";

export default function HowWorks() {
  return (
    <>
      <section className="relative w-full mt-20">
        <div
          className="absolute inset-0 top-1/4 md:mt-24 lg:mt-0 bg-gray-300 pointer-events-none"
          aria-hidden="true"
        ></div>
        <div className="relative max-w-6xl mx-auto px-0 sm:px-6">
          <div className="py-12 md:py-20">
            <div className=" absolute top-0 max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              <div className="relative flex flex-col items-center rounded shadow-xl col-start-3">
                <Image
                  className="w-80 h-96 md:ml-1 ml-24 object-cover"
                  alt="logo"
                  src={Understanding}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center pb-12 md:pb-20 flex items-start">
          <div className=" text-left mt-10">
            <p className="text-lg">How it works</p>
            <h1 className="mb-5 sm:text-6xl text-5xl items-center">
              Understanding <br />
              your home
            </h1>
            <p className="mb-4  text-lg">
              Warmur understand the unique needs of individual
              <br />
              Warmur can provide you with a bespoke soltion your home.
              <br />
              home. It is easy, try our calculator now.
            </p>
            <div className="flex justify-start">
              <a
                className="inline-flex items-center px-5 py-3 mt-2 font-medium transition duration-500 ease-in-out transform bg-transparent border border-primary-orange rounded-full bg-gray-900"
                href="https://www.warmur.co.uk/"
              >
                <span className="justify-center">how its work</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
