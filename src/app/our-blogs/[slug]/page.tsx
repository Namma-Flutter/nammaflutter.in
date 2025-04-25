import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

// Helper to get all projects from MDX files
function getAllProjects() {
  const projectsDir = path.join(process.cwd(), 'data', 'projects');
  const files = fs.readdirSync(projectsDir);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const fullPath = path.join(projectsDir, file);
      const source = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(source);
      return {
        ...data,
        mdx: file,
        slug: data.slug || file.replace(/\.mdx$/, ''),
        title: data.title || file.replace(/\.mdx$/, ''),
      };
    });
}

// Helper to get all blogs from MDX files
function getAllBlogs() {
  const blogsDir = path.join(process.cwd(), 'data', 'blogs');
  const files = fs.readdirSync(blogsDir);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const fullPath = path.join(blogsDir, file);
      const source = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(source);
      return {
        ...data,
        mdx: file,
        slug: data.slug || file.replace(/\.mdx$/, ''),
        title: data.title || file.replace(/\.mdx$/, ''),
        date: data.date,
        excerpt: data.excerpt,
        author: data.author,
      };
    });
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  const blogs = getAllBlogs();
  return [...projects.map((project) => ({ slug: project.slug })), ...blogs.map((blog) => ({ slug: blog.slug }))];
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const projects = getAllProjects();
  const project = projects.find((p) => p.slug === slug);
  if (project) {
    const mdxPath = path.join(process.cwd(), 'data', 'projects', project.mdx);
    const source = fs.readFileSync(mdxPath, 'utf8');
    const { content, data } = matter(source);

    return (
      <main className="min-h-screen bg-[#F5F7FA] py-12 px-4 flex justify-center items-center">
        <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-[#E3F2FD]">
          <header className="mb-10 border-b pb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#02569B] mb-2 tracking-tight leading-tight text-center drop-shadow-lg">{data.title || project.title}</h1>
            <div className="flex flex-wrap gap-4 items-center justify-center text-base text-gray-500 mb-2">
              {data.date && <span>{new Date(data.date).toLocaleDateString()}</span>}
            </div>
          </header>
          <article className="prose prose-blue prose-lg text-black mx-auto">
            <MDXRemote source={content} />
          </article>
        </div>
      </main>
    );
  } else {
    const blogs = getAllBlogs();
    const blog = blogs.find((b) => b.slug === slug);
    if (!blog) return <div className="text-center text-red-600">Page not found.</div>;
    const mdxPath = path.join(process.cwd(), 'data', 'blogs', blog.mdx);
    const source = fs.readFileSync(mdxPath, 'utf8');
    const { content, data } = matter(source);

    return (
      <main className="min-h-screen bg-[#F5F7FA] py-12 px-4 flex justify-center items-center">
        <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-[#E3F2FD]">
          <header className="mb-10 border-b pb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#02569B] mb-2 tracking-tight leading-tight text-center drop-shadow-lg">{data.title || blog.title}</h1>
            <div className="flex flex-wrap gap-4 items-center justify-center text-base text-gray-500 mb-2">
              {data.author && <span className="font-semibold text-[#0277BD]">By {data.author}</span>}
              {data.date && <span>{new Date(data.date).toLocaleDateString()}</span>}
            </div>
            {data.excerpt && <div className="text-[#039BE5] text-lg md:text-xl mt-2 italic font-medium text-center max-w-2xl mx-auto">{data.excerpt}</div>}
          </header>
          <article className="prose prose-blue prose-lg text-black mx-auto">
            <MDXRemote source={content} />
          </article>
        </div>
      </main>
    );
  }
}
