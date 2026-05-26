"use client";

import Link from "next/link";
import { Search } from "lucide-react";

const blogs = [
  {
    title: "Understanding Next.js App Router",
    desc: "Learn how App Router works in Next.js 13+ with real-world examples.",
    tag: "Next.js",
    date: "May 2026",
    slug: "nextjs-app-router",
  },
  {
    title: "Modern UI Design Principles",
    desc: "How to build clean and modern interfaces using spacing, typography, and hierarchy.",
    tag: "UI/UX",
    date: "April 2026",
    slug: "ui-design-principles",
  },
  {
    title: "JavaScript Performance Tips",
    desc: "Optimize your JS code for better performance in real applications.",
    tag: "JavaScript",
    date: "March 2026",
    slug: "js-performance-tips",
  },
  {
    title: "Building Scalable React Apps",
    desc: "Architecture patterns for large scale React applications.",
    tag: "React",
    date: "Feb 2026",
    slug: "scalable-react-apps",
  },
];

const categories = ["All", "Next.js", "JavaScript", "UI/UX", "React"];

export default function BlogPage() {
  return (
    <div className="w-full min-h-screen">

      {/* Header Section */}
      <section className="text-center max-w-3xl mx-auto pt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Blog
        </h1>

        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Thoughts, tutorials, and insights about web development, design,
          and modern engineering.
        </p>

        {/* Search */}
        <div className="mt-6 flex items-center gap-2 max-w-md mx-auto bg-white/70 backdrop-blur-xl border border-gray-200 rounded-xl px-4 py-2">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>
      </section>

      {/* Categories */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-1.5 text-sm rounded-full bg-white/70 border border-gray-200 text-gray-600 hover:bg-black hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-6 mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={`/blogs/${blog.slug}`}
            className="group rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-xl p-6 hover:shadow-lg transition"
          >

            {/* Tag */}
            <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
              {blog.tag}
            </span>

            {/* Title */}
            <h2 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-black">
              {blog.title}
            </h2>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-600 line-clamp-3">
              {blog.desc}
            </p>

            {/* Footer */}
            <div className="mt-5 text-xs text-gray-400">
              {blog.date}
            </div>

          </Link>
        ))}

      </section>

    </div>
  );
}