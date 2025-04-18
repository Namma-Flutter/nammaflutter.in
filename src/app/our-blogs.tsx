import React from "react";
import { getFilesFromDir } from "../utils/getFiles";
import Image from "next/image";

export async function getStaticProps() {
  const blogs = getFilesFromDir("src/app/our-blogs/[slug]", [".tsx"]);
  return { props: { blogs } };
}

export default function OurBlogsPage({ blogs }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFFDE7] via-[#E3F2FD] to-[#B3E5FC] py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#02569B] mb-8 text-center drop-shadow">Our Blogs</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map(blog => (
            <div key={blog.slug} className="bg-white/80 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col">
              <div className="mb-4 rounded-lg overflow-hidden aspect-[16/9] bg-[#E3F2FD]">
                {blog.thumbnail && <Image src={blog.thumbnail} alt={blog.filename} width={400} height={225} className="object-cover w-full h-full" />}
              </div>
              <h2 className="text-xl font-bold text-[#02569B] mb-2">{blog.filename}</h2>
              <p className="text-gray-700 mb-4 flex-1">{blog.snippet}</p>
              <div className="text-xs text-gray-500">{blog.date}</div>
              <a href={`/our-blogs/${blog.slug}`} className="mt-4 inline-block text-[#02569B] hover:underline font-medium">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
