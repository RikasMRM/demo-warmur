"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


const strapiURL = process.env.STRAPI_URL;

export default function BlogPosts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `http://localhost:1337/api/posts?populate=*`
      );
      let response = data.data.data;
      console.log(response);
      setData(response);
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="container mx-auto xl:max-w-[1180px] pt-[40px] pb-[40px]">
      <h1 className="text-start text-[24px] font-bold">Latest Post</h1>
      <div className=" mt-[20px] grid grid-cols-3 gap-[20px]">
        {data?.map((item: any, index: number) => (
          // eslint-disable-next-line react/jsx-key
          <Link key={item.id} href={`posts/${item.id}`}>
            <div className="cursor-pointer w-full border border-[#2f3241]">
              <div className="py-10 h-[100%] w-full overflow-hidden">
                <Image
                  src={
                    `${strapiURL}${item.attributes.image.data.attributes.url}`
                      ? `http://localhost:1337${item.attributes.image.data.attributes.url}`
                      : `/warmur-logo.png`
                  }
                  alt=""
                  width={600}
                  height={200}
                  className="w-full h-[100%] object-cover hover:scale-[109%] transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="pt-[15px] pl-[8px] pb-[5px]">
                <h2 className="bg-[#4B6BFB]/[5%] inline-block text-[#4B6BFB] py-[2px] px-[4px] mb-[15px]">
                  {item.attributes.publishedAt}
                </h2>
                <p className="text-[24px] font-bold">{item.attributes.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center pt-[40px]"></div>
    </div>
  );
}
