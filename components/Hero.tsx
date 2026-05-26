"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full flex items-center justify-center pt-10">
      <div className="max-w-3xl w-full text-center">

        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/60 border border-white/40 text-xs text-gray-600 shadow-sm">
          ✍️ Welcome to my blog
        </div>

        {/* Title */}
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
          Thoughts on <span className="text-[#ffa092]">tech</span>, design & modern web
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
          I write about JavaScript, Next.js, UI design, and building real-world web applications.
          Clean code. Simple ideas. Practical learning.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">

          <Link
            href="/blogs"
            className="px-6 py-3 rounded-xl bg-black text-white text-sm hover:scale-105 hover:shadow-lg transition-all"
          >
            Read Blogs
          </Link>

          <Link
            href="/categories"
            className="px-6 py-3 rounded-xl bg-white/70 border border-gray-200 text-gray-700 text-sm hover:bg-white hover:text-black transition-all"
          >
            Explore Categories
          </Link>

        </div>

        {/* Stats */}
        <div className="mt-10 flex items-center justify-center gap-10 text-center">

          <div>
            <p className="text-xl font-semibold text-gray-900">50+</p>
            <p className="text-xs text-gray-500">Articles</p>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-900">10k+</p>
            <p className="text-xs text-gray-500">Readers</p>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-900">Weekly</p>
            <p className="text-xs text-gray-500">Updates</p>
          </div>

        </div>

      </div>
    </section>
  );
}