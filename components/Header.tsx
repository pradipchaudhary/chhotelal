"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto">

        {/* Glass Navbar (Clean Version) */}
        <div className="flex items-center justify-between backdrop-blur-xl bg-white/60 rounded-2xl px-6 py-4">

          {/* Logo (Bigger) */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 tracking-tight"
          >
            Chhotelal<span className="text-[#ffa092]">.</span>
          </Link>

          {/* Right Side (Menu + Search) */}
          <div className="flex items-center gap-6">

            {/* Menu */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600 font-medium">

              <Link href="/" className="relative group">
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link href="/blogs" className="relative group">
                Blogs
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link href="/categories" className="relative group">
                Categories
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link href="/about" className="relative group">
                About
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
              </Link>

            </nav>

            {/* Search Icon */}
            <button className="p-2 rounded-xl bg-white/70 text-gray-500 hover:text-black transition hover:scale-105">
              <Search size={18} />
            </button>

          </div>
        </div>

      </div>
    </header>
  );
}