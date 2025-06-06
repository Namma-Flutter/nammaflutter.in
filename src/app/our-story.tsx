import React from "react";
import { getFilesFromDir } from "../utils/getFiles";

export async function getStaticProps() {
  const stories: StoryFile[] = getFilesFromDir("src/app/our-story/[slug]", [".tsx"]);
  return { props: { stories } };
}

type StoryFile = { filename: string; slug: string };

interface OurStoryPageProps {
  stories: StoryFile[];
}

const OurStoryPage: React.FC<OurStoryPageProps> = ({ stories }) => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E3F2FD] via-[#FFFDE7] to-[#B3E5FC] py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto bg-white/80 rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-[#02569B] mb-6 text-center drop-shadow">Our Story</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#039BE5] mb-4">Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stories.map((story: StoryFile) => (
              <div key={story.slug} className="bg-white rounded-2xl shadow-md p-4">
                <h3 className="text-xl font-semibold text-[#02569B]">{story.filename}</h3>
                <a href={`/our-story/${story.slug}`} className="mt-2 inline-block text-[#02569B] hover:underline font-medium">Read More</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurStoryPage;
