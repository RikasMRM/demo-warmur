"use client";

import Image from "next/image";

import { logo } from "@/constants/data";

export default function About() {
  return (
    <>
      <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
        <div className="xl:flex-[1.5] flex justify-end items-end w-full ">
          <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
            <Image src={logo} alt="hero" fill className="object-contain" />
          </div>

          <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
        </div>
        <div className="flex-1 pt-16 padding-x">
          <h1 className="2xl:text-[22px] sm:text-[14px] text-[10px] font-bold">
            What we do
          </h1>

          <p className="text-[27px] text-black-100 font-semibold mt-5">
            Solar & Heat Pumps <br />
            made simple
          </p>
          <p className="text-[17px] text-black-100 font-light mt-5">
            Warmur is a solar and heat pump company that makes it easy for you
            to
          </p>
          {/* <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        /> */}
        </div>
      </div>
      <div className="flex pt-16 padding-x">
        <h1 className="text-[17px] text-black-100 font-light mt-5">
          Warmur is a solar and heat pump company that makes it easy for you to{" "}
          <br />
          Warmur is a solar and heat pump company that makes it easy for you to{" "}
          <br />
          Warmur is a solar and heat pump company that makes it easy for you to{" "}
          <br />
        </h1>
      </div>
    </>
  );
}
