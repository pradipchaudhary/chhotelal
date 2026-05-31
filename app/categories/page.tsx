"use client";

import Link from "next/link";
import {
  Code2,
  Palette,
  Rocket,
  Layers3,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    name: "Next.js",
    count: 12,
    description: "App Router, Server Components, SEO and deployment.",
    icon: <Rocket size={24} />,
    slug: "nextjs",
  },
  {
    name: "JavaScript",
    count: 18,
    description: "Modern JavaScript concepts, tips and performance.",
    icon: <Code2 size={24} />,
    slug: "javascript",
  },
  {
    name: "React",
    count: 15,
    description: "Hooks, architecture, patterns and best practices.",
    icon: <Layers3 size={24} />,
    slug: "react",
  },
  {
    name: "UI/UX",
    count: 9,
    description: "Design systems, interfaces and user experience.",
    icon: <Palette size={24} />,
    slug: "ui-ux",
  },
];

export default function CategoriesPage() {
  return (
    <div className="w-full min-h-screen">

      {/* Hero */}
      <section className="max-w-3xl mx-auto text-center pt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Categories
        </h1>

        <p className="mt-4 text-gray-600">
          Explore articles grouped by technologies, design,
          and development topics.
        </p>
      </section>

      {/* Categories Grid */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Gradient Glow */}
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-gray-100 blur-2xl opacity-50" />

              {/* Icon */}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-800">
                {category.icon}
              </div>

              {/* Content */}
              <div className="relative mt-5">
                <h2 className="text-lg font-semibold text-gray-900">
                  {category.name}
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                  {category.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {category.count} Articles
                  </span>

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>

            </Link>
          ))}

        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <div className="rounded-3xl border border-gray-200 bg-white/60 backdrop-blur-xl p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-3xl font-bold">54+</h3>
              <p className="text-sm text-gray-500 mt-1">Articles</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">4</h3>
              <p className="text-sm text-gray-500 mt-1">Categories</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="text-sm text-gray-500 mt-1">Readers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">2026</h3>
              <p className="text-sm text-gray-500 mt-1">Started</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}