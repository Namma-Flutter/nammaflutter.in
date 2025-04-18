import React from "react";
import { getFilesFromDir } from "../../utils/getFiles";

// Use a more descriptive type for blogs
interface BlogFile {
  filename: string;
  slug: string;
  title?: string;
  date?: string;
  excerpt?: string;
}

export default async function OurBlogsPage() {
  const blogs: BlogFile[] = getFilesFromDir("data/blogs", [".mdx"]);
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E0C3FC] via-[#8EC5FC] to-[#B3E5FC] py-16 px-4 sm:px-8 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-10 border border-[#B3E5FC] relative overflow-hidden">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-tr from-[#039BE5] to-[#B3E5FC] rounded-full blur-2xl opacity-40"></div>
        <h1 className="text-5xl font-black text-[#02569B] mb-4 text-center drop-shadow-lg tracking-tight">Community Events & Blogs</h1>
        <p className="text-center text-lg text-[#0277BD] mb-12">Discover our latest community happenings, stories, and event highlights!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-gradient-to-br from-[#E3F2FD] to-[#FFFDE7] rounded-xl shadow-lg border border-[#B3E5FC] p-6 flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-20 h-20 bg-gradient-to-br from-[#B3E5FC] to-[#039BE5] rounded-full blur-2xl opacity-25 z-0"></div>
              <h2 className="text-2xl font-bold text-[#039BE5] mb-3 z-10 group-hover:text-[#01579B] transition-colors duration-200">
                {blog.title || blog.filename.replace(/\.mdx$/, "")}
              </h2>
              <div className="text-xs text-gray-500 mb-2 z-10">
                {blog.date ? new Date(blog.date).toLocaleDateString() : "Upcoming Event"}
              </div>
              <p className="text-gray-700 mb-4 z-10 line-clamp-3">
                {blog.excerpt || "Join us for our latest event or read our community stories!"}
              </p>
              <a
                href={`/our-blogs/${blog.slug}`}
                className="mt-auto inline-block bg-gradient-to-r from-[#039BE5] to-[#B3E5FC] text-white font-semibold py-2 px-5 rounded-lg shadow hover:from-[#01579B] hover:to-[#81D4FA] hover:scale-105 transition-all duration-200 z-10"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
