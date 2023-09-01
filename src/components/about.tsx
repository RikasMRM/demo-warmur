"use client";

import Image from "next/image";

import { Whatwedo } from "@/constants/data";

export default function About() {
  return (
    <>
      <section className="body-font container mx-auto">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-5 md:py-32 gap-5 justify-center items-center">
          <div className=" mr-0 md:mr-20 p-5 md:p-0">
            <Image
              className="h-[500px] ml-0 md:ml-0 object-cover"
              alt="logo"
              src={Whatwedo}
            ></Image>
          </div>
          <div className="w-full flex flex-col items-start order-1 p-5 md:p-0">
            <p className="my-4 xl:w-3/4  text-lg">What we do</p>
            <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2">
              Solar & Heat Pumps <br />
              made simple
            </h1>
            <p className="mb-4 xl:w-3/4  text-lg">
              Warmur understand the unique needs of individual
              <br />
              Warmur can provide you with a bespoke soltion your home.
              <br />
              home. It is easy, try our calculator now.
            </p>
            <div className="flex justify-center">
              <a
                className="inline-flex items-center px-5 py-3 mt-2 font-medium transition duration-500 ease-in-out transform bg-transparent border border-primary-orange rounded-full bg-gray-900"
                href="https://www.warmur.co.uk/"
              >
                <span className="justify-center">how its work</span>
              </a>
            </div>
          </div>
        </div>
        <p className="mb-4 xl:w-3/4  text-lg m-auto p-5 md:p-0">
          Warmur understand the unique needs of individual Warmur can provide
          you with <br />
          a bespoke soltion your home. home. It is easy, try our calculator now.
          <br />
          Warmur understand the unique needs of individual Warmur can provide
          you with <br />a bespoke soltion your home. home. It is easy, try our
          calculator now.
        </p>
      </section>
    </>
  );
}
