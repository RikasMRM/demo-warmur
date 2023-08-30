import React from "react";
import SectionHeading from "@/components/section-heading";

import Link from "next/link";

import { getPosts } from "@/services/postService";

export default async function Blogs() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <SectionHeading>Blogs</SectionHeading>
        <div>
          {posts.map((post: any) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
