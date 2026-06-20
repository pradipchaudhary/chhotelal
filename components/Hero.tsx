"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Newspaper,
  Globe,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ffa092]/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur-md shadow-sm text-sm text-gray-700">
            Nepal's Modern Knowledge Hub
          </div>
        </div>

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Discover Nepal's
            <span className="block bg-gradient-to-r from-[#ff7b66] to-[#ffb38a] bg-clip-text text-transparent">
              News, Knowledge & Insights
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Explore informative articles, technology updates, educational
            resources, business trends, government notices, travel guides,
            and valuable insights from Nepal and around the world.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-black text-white font-medium hover:shadow-xl transition-all"
            >
              Explore Articles
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </Link>

            <Link
              href="/categories"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all"
            >
              Browse Categories
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            {
              icon: <Newspaper size={18} />,
              title: "News",
            },
            {
              icon: <BookOpen size={18} />,
              title: "Education",
            },
            {
              icon: <Globe size={18} />,
              title: "Travel",
            },
            {
              icon: <TrendingUp size={18} />,
              title: "Technology",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/80 border border-gray-200 backdrop-blur-sm"
            >
              {item.icon}
              <span className="text-sm font-medium text-gray-700">
                {item.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}