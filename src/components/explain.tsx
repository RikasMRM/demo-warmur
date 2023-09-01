"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionHeading from "./section-heading";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { Heat, Solar } from "@/constants/data";

export default function Explain() {
  return (
    <>
      <div className="text-center w-full bg-orange-400 py-10">
        <div className=" relative">
          <div className="flex flex-col justify-center items-start max-w-7xl mx-auto">
            <p>Want to dive deeper</p>
            <h1 className=" text-4xl">Let's explain more</h1>
          </div>

          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper my-10"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            spaceBetween={40}
          >
            <SwiperSlide>
              <div className="w-full h-[400px] relative">
                <Image src={Heat} fill alt="heat" />
                <div className="w-full h-full bg-black opacity-50 absolute"></div>
                <div className="absolute bottom-5 w-full px-4">
                  <div className="flex flex-row justify-between">
                    <h4 className="text-white">Heat Pumps</h4>
                    <button className="text-black px-3 bg-white rounded-2xl">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[400px] relative mx-10">
                <Image src={Solar} fill alt="heat" />
                <div className="w-full h-full bg-black opacity-50 absolute"></div>
                <div className="absolute bottom-5 w-full px-4">
                  <div className="flex flex-row justify-between">
                    <h4 className="text-white">Heat Pumps</h4>
                    <button className="text-black px-3 bg-white rounded-2xl">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[400px] relative">
                <Image src={Solar} fill alt="heat" />
                <div className="w-full h-full bg-black opacity-50 absolute"></div>
                <div className="absolute bottom-5 w-full px-4">
                  <div className="flex flex-row justify-between">
                    <h4 className="text-white">Heat Pumps</h4>
                    <button className="text-black px-3 bg-white rounded-2xl">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[400px] relative">
                <Image src={Heat} fill alt="heat" />
                <div className="w-full h-full bg-black opacity-50 absolute"></div>
                <div className="absolute bottom-5 w-full px-4">
                  <div className="flex flex-row justify-between">
                    <h4 className="text-white">Heat Pumps</h4>
                    <button className="text-black px-3 bg-white rounded-2xl">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[400px] relative">
                <Image src={Solar} fill alt="heat" />
                <div className="w-full h-full bg-black opacity-50 absolute"></div>
                <div className="absolute bottom-5 w-full px-4">
                  <div className="flex flex-row justify-between">
                    <h4 className="text-white">Heat Pumps</h4>
                    <button className="text-black px-3 bg-white rounded-2xl">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
