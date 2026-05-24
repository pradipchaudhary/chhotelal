"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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
        <div className="rounded-3xl p-10 backdrop-blur-xl bg-white/60 border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-2xl bg-white shadow-md">
              <Image
                src="/logo.png"
                alt="Chhotelal Logo"
                width={220}
                height={120}
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Title (IMPORTANT — bring it back) */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Chhotelal
          </h1>

          {/* Tagline */}
          <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed max-w-md mx-auto">
            Building modern digital experiences with creativity, performance,
            and clean design.
          </p>

          {/* Social Links */}
          <div className="mt-8 flex justify-center items-center gap-4">

            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:text-black hover:border-black"
            >
              <FaGithub size={18} className="group-hover:rotate-6 transition" />
            </a>

            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:text-blue-600 hover:border-blue-600"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:text-sky-500 hover:border-sky-500"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="mailto:your@email.com"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:text-red-500 hover:border-red-500"
            >
              <HiOutlineMail size={18} />
            </a>

          </div>

        </div>

        {/* Footer Note */}
        <p className="mt-8 text-xs text-gray-500 tracking-wide">
          © {new Date().getFullYear()} Chhotelal. All rights reserved.
        </p>

      </div>
    </main>
  );
}