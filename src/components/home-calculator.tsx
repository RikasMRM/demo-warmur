"use client";

import Image from "next/image";

import { iphone } from "@/constants/data";
import Subscribe from "./atoms/subscribe";

export default function HomeCalculator() {
  return (
    <>
      <section className="body-font w-full bg-gray-300">
        <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
            <Image
              className="w-80 md:ml-1 ml-24"
              alt="iPhone-12"
              src={iphone}
            ></Image>
          </div>
          <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
            <p className="my-4 xl:w-3/4  text-lg">Create a warmur home</p>
            <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2">
              Try Our free online <br />
              calculator
            </h1>
            <p className="mb-4 xl:w-3/4  text-lg">
              witha few questions and less than 5 minutes of your time.
              <br />
              Warmur can provide you with a bespoke soltion your home.
              <br />
              home. It is easy, try our calculator now.
            </p>
            <div className="flex justify-center">
            <Subscribe />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
