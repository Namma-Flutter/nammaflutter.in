import React from "react";
import { getFilesFromDir } from "../utils/getFiles";

export async function getStaticProps() {
  const projects = getFilesFromDir("src/app/our-projects/[slug]", [".tsx"]);
  return { props: { projects } };
}

type ProjectFile = { filename: string; slug: string };

interface OurProjectsPageProps {
  projects: ProjectFile[];
}

const OurProjectsPage: React.FC<OurProjectsPageProps> = ({ projects }) => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E3F2FD] via-[#FFFDE7] to-[#B3E5FC] py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#02569B] mb-8 text-center drop-shadow">Our Projects</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <div key={project.slug} className="bg-white/80 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col">
              <h2 className="text-xl font-bold text-[#02569B] mb-2">{project.filename}</h2>
              <a href={`/our-projects/${project.slug}`} className="mt-4 inline-block text-[#02569B] hover:underline font-medium">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OurProjectsPage;
