"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative flex items-center justify-center px-6 overflow-hidden bg-[#fef9f7]">

      {/* Background Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating Blur Shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#ffa092]/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-[#fff4e4]/40 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full text-center">

        {/* Glass Card */}
        <div className=" rounded-3xl p-8">

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image
              src="/logo.png"
              alt="Chhotelal Logo"
              width={280}
              height={150}
              priority
              className="object-contain"
            />
          </div>

          {/* Title */}
          {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Chhotelal
          </h1> */}

          {/* Tagline */}
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Building modern digital experiences with creativity, performance,
            and clean design.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <button className="px-5 py-2 rounded-xl bg-black text-white text-sm hover:opacity-90 transition">
              View Projects
            </button>

            <button className="px-5 py-2 rounded-xl border border-gray-300 text-sm hover:bg-gray-100 transition">
              Contact Me
            </button>
          </div>

        </div>

        {/* Footer Note */}
        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Chhotelal. All rights reserved.
        </p>

      </div>
    </main>
  );
}