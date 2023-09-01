import React from "react";
import SectionHeading from "@/components/section-heading";
import BlogPosts from "@/components/blog";

export default async function Blogs() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <SectionHeading>Blogs</SectionHeading>
        <BlogPosts />
      </div>
    </>
  );
}
