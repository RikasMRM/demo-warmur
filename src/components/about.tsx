"use client";

import Image from "next/image";

import { logo } from "@/constants/data";

export default function About() {
  return (
    <>
      <>
        <section className="body-font">
          <div className="max-w-7xl mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
            <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
              <Image
                className="w-80 md:ml-1 ml-24"
                alt="logo"
                src={logo}
              ></Image>
            </div>
            <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
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
          <p className="mb-4 xl:w-3/4  text-lg m-auto">
            Warmur understand the unique needs of individual Warmur can provide
            you with <br />
            a bespoke soltion your home. home. It is easy, try our calculator
            now.
            <br />
            Warmur understand the unique needs of individual Warmur can provide
            you with <br />a bespoke soltion your home. home. It is easy, try
            our calculator now.
          </p>
        </section>
      </>
    </>
  );
}
