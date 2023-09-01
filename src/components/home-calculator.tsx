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
            <form className="relative font-secondary flex  justify-center items-center">
              <input
                className="relative px-10 py-3 border border-r-0 border-gray-300 rounded-3xl w-96 FF6452
            focus:outline-none focus:ring-1 focus:ring-red-500"
                // type="number"
                required
                placeholder="Enter your postcode"
              />
              <button
                type="submit"
                className={`absolute right-2 py-2 px-4 bg-orange-500 hover:bg-red-700 text-white text-sm sm:text-base font-semibold rounded-3xl border border-transparent 
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500`}
              >
                Go
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
