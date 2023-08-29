import React from "react";
import Image from "next/image";

import { home } from "@/constants/data";

export default function Intro() {
  return (
    <div>
      <Image
        src={home}
        alt="logo"
        width={1920}
        height={1080}
        className="m-0 w-[100%] h-[100%]"
      />
    </div>
  );
}
