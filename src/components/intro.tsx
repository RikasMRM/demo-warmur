import React from "react";
import Image from "next/image";

import { home } from "@/constants/data";

import Subscribe from "@/components/subscribe";

export default function Intro() {
  return (
    <div className="relative h-screen w-screen">
      <Image
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
        alt="main background image"
        src={home}
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 mx-auto text-center">
        <div>
          <p className="text-white text-base md:text-3xl lg:text-3xl font-light">
            we make it easy to
          </p>
          <h1 className="font-light text-white text-4xl mb-10 sm:text-4xl md:text-9xl ">
            Create a warmur home
          </h1>
          <Subscribe />
        </div>
      </div>
    </div>
  );
}
