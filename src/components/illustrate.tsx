import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";

import { homeimg } from "@/constants/data";

export default function Illustration() {
  return (
    <>
      <div className="text-center w-full bg-gray-300">
        <SectionHeading>illustrate</SectionHeading>
        <div>
          <div
            className="relative flex justify-center mb-8"
            data-aos="zoom-y-out"
            data-aos-delay="450"
          >
            <div className="flex flex-col justify-center">
              <Image className="" alt="main background image" src={homeimg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
