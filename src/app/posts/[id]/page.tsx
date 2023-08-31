import axios from "axios";
import Image from "next/image";
import React from "react";

const strapiURL = process.env.STRAPI_URL;

const page = async ({ params }: any) => {
  let id = params.id;
  console.log(id);
  let data = await axios.get(
    `http://localhost:1337/api/posts/${id}?populate=*`
  );
  let response = data.data.data;
  let content = response.attributes.content;
  console.log("rikas", content);

  return (
    <div className="container mx-auto xl:max-w-[1100px] pt-[15px]">
      <div className="h-[100%] w-full">
        <Image
          src={`${strapiURL}${response.attributes.image.data.attributes.url}`}
          alt=""
          width={1000}
          height={500}
          className="w-full h-[100%] object-cover"
        />
      </div>
      <p className="text-[24px] font-bold">{response.attributes.content}</p>
      <div
        className="text-white pt-[20px] pb-[40px]"
        dangerouslySetInnerHTML={{ __html: `${content}` }}
      ></div>
    </div>
  );
};

export default page;
