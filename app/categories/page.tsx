"use client";

import Link from "next/link";
import {
  Code2,
  Palette,
  Rocket,
  Layers3,
  ArrowRight,
  Search,
  TrendingUp,
} from "lucide-react";

const categories = [
  {
    name: "Next.js",
    count: 12,
    color: "from-black to-gray-700",
    description:
      "App Router, Server Components, SEO optimization and deployment.",
    icon: Rocket,
    slug: "nextjs",
  },
  {
    name: "JavaScript",
    count: 18,
    color: "from-yellow-500 to-orange-500",
    description:
      "Modern JavaScript concepts, performance, patterns and tips.",
    icon: Code2,
    slug: "javascript",
  },
  {
    name: "React",
    count: 15,
    color: "from-cyan-500 to-blue-600",
    description:
      "Hooks, architecture, state management and best practices.",
    icon: Layers3,
    slug: "react",
  },
  {
    name: "UI / UX",
    count: 9,
    color: "from-pink-500 to-purple-600",
    description:
      "Design systems, user interfaces and user experience.",
    icon: Palette,
    slug: "ui-ux",
  },
];

export default function CategoriesPage() {
  return (
    <main className="w-full min-h-screen">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gray-200 bg-white text-sm text-gray-600">
          <TrendingUp size={14} />
          Explore Topics
        </span>

        <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
          Browse by
          <span className="block bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
            Categories
          </span>
        </h1>

        <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover articles, tutorials, coding guides, design insights
          and development resources organized by topic.
        </p>

        {/* Search */}
        <div className="max-w-xl mx-auto mt-10 relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search categories..."
            className="w-full pl-11 pr-4 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
      </section>

      {/* Featured Category */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-black to-gray-800 p-10 text-white">

          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]" />

          <div className="relative z-10">
            <span className="text-sm text-gray-300">
              Most Popular Category
            </span>

            <h2 className="text-4xl font-bold mt-3">
              JavaScript
            </h2>

            <p className="mt-4 max-w-2xl text-gray-300">
              Explore modern JavaScript concepts, ESNext features,
              performance optimization, asynchronous programming,
              and real-world development practices.
            </p>

            <Link
              href="/categories/javascript"
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl bg-white text-black font-medium"
            >
              Explore Category
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.color}`}
                />

                <div
                  className={`h-14 w-14 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {category.name}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {category.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.count} Articles
                  </span>

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-4 gap-6">

          {[
            ["54+", "Articles"],
            ["4", "Categories"],
            ["10K+", "Readers"],
            ["2026", "Started"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center"
            >
              <h3 className="text-4xl font-bold">{number}</h3>
              <p className="mt-2 text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto px-6 mt-24 pb-24">
        <div className="rounded-3xl bg-gradient-to-r from-gray-900 to-black p-10 text-center text-white">

          <h2 className="text-3xl font-bold">
            Stay Updated
          </h2>

          <p className="mt-3 text-gray-300">
            Get the latest articles, tutorials and developer insights
            delivered directly to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-black outline-none"
            />

            <button className="px-6 py-3 rounded-xl bg-white text-black font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}