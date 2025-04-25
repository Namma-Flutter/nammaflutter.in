import React from "react";
import { getFilesFromDir } from "../../utils/getFiles";

interface StoryFile {
  filename: string;
  slug: string;
  title?: string;
  date?: string;
  excerpt?: string;
}

export default async function OurStoriesPage() {
  const stories: StoryFile[] = getFilesFromDir("data/stories", [".mdx"]);
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FFFDE7] to-[#B3E5FC] py-16 px-4 sm:px-8 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-10 border border-[#B3E5FC] relative overflow-hidden">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-tr from-[#039BE5] to-[#B3E5FC] rounded-full blur-2xl opacity-40"></div>
        <h1 className="text-5xl font-black text-[#02569B] mb-4 text-center drop-shadow-lg tracking-tight">Community Stories</h1>
        <p className="text-center text-lg text-[#0277BD] mb-12">Read inspiring stories and journeys from our vibrant community!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {stories.map((story) => (
            <div
              key={story.slug}
              className="bg-gradient-to-br from-[#E3F2FD] to-[#FFFDE7] rounded-xl shadow-lg border border-[#B3E5FC] p-6 flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-20 h-20 bg-gradient-to-br from-[#B3E5FC] to-[#039BE5] rounded-full blur-2xl opacity-25 z-0"></div>
              <h2 className="text-2xl font-bold text-[#039BE5] mb-3 z-10 group-hover:text-[#01579B] transition-colors duration-200">
                {story.title || story.filename.replace(/\.mdx$/, "")}
              </h2>
              <div className="text-xs text-gray-500 mb-2 z-10">
                {story.date ? new Date(story.date).toLocaleDateString() : "Story"}
              </div>
              <p className="text-gray-700 mb-4 z-10 line-clamp-3">
                {story.excerpt || "Discover the stories and journeys from our community members!"}
              </p>
              <a
                href={`/our-story/${story.slug}`}
                className="mt-auto inline-block bg-[#039BE5] text-white font-semibold py-2 px-5 rounded-lg shadow hover:bg-[#01579B] hover:scale-105 transition-all duration-200 z-10"
              >
                Read Story
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
