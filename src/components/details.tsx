import React from "react";
import Subscribe from "./atoms/subscribe";
import { Digit, Dog, Graph, BoldMan } from "@/constants/data";
import Image from "next/image";

export default function Details() {
  return (
    <>
      <section className="body-font h-full w-full bg-gray-300 pt-20 flex flex-col gap-5">
        <div className=" relative max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <p className="my-4 text-lg">Create a warmur home</p>
          <p className="mb-4 text-lg">
            witha few questions and less than 5 minutes of your time.
            <br />
            Warmur can provide you with a bespoke soltion your home.
            <br />
            home. It is easy, try our calculator now.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 font-medium transition duration-500 ease-in-out transform bg-transparent border border-mate-black rounded-full bg-gray-900"
              href="https://www.warmur.co.uk/"
            >
              <span className="justify-center">See your savings</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 md:grid-rows-8 gap-4 w-full max-w-3xl mx-auto h-auto md:h-[800px] p-10 md:p-0">
          <div className="md:row-span-4 md:col-start-1 md:row-start-2 relative h-[500px]  md:h-auto">
            <Image src={Digit} fill alt="digit" className="object-cover" />
          </div>
          <div className="md:row-span-3 md:col-start-1 md:row-start-6 relative h-[500px]  md:h-auto">
            <Image src={Dog} fill alt="digit" className="object-cover" />
          </div>
          <div className="md:row-span-3 md:col-start-2 md:row-start-1 relative h-[500px]  md:h-auto">
            <Image src={BoldMan} fill alt="digit" className="object-cover" />
          </div>
          <div className="md:row-span-4 md:col-start-2 md:row-start-4 relative h-[500px]  md:h-auto">
            <Image src={Graph} fill alt="digit" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
