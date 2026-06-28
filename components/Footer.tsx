import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-zinc-200 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-black dark:border-zinc-800">

      {/* Decorative Blur */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ffa092] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center text-xl font-bold tracking-tight"
            >
              Chhotelal
              <span className="text-[#ffa092]">.</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              A personal blog focused on web development, JavaScript,
              Next.js, UI/UX design, and modern software engineering.
              Sharing practical knowledge, tutorials, and real-world
              experiences.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-black dark:border-zinc-700 dark:bg-zinc-900"
              >
                <FaGithub className="text-zinc-600 group-hover:text-black dark:text-zinc-400 dark:group-hover:text-white" />
              </a>

              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-blue-500 dark:border-zinc-700 dark:bg-zinc-900"
              >
                <FaLinkedin className="text-zinc-600 group-hover:text-blue-500 dark:text-zinc-400" />
              </a>

              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-sky-500 dark:border-zinc-700 dark:bg-zinc-900"
              >
                <FaTwitter className="text-zinc-600 group-hover:text-sky-500 dark:text-zinc-400" />
              </a>

              <a
                href="mailto:hello@chhotelal.com"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-red-500 dark:border-zinc-700 dark:bg-zinc-900"
              >
                <HiOutlineMail className="text-zinc-600 group-hover:text-red-500 dark:text-zinc-400" />
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
              Resources
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                Stay Updated
              </h3>

              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Get the latest articles about Next.js, React, JavaScript,
                and software engineering.
              </p>

              <Link
                href="/contact"
                className="mt-4 inline-flex rounded-xl bg-black px-4 py-2 text-sm text-white transition hover:opacity-90 dark:bg-white dark:text-black"
              >
                Subscribe →
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-zinc-200 pt-6 dark:border-zinc-800">

          <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between">

            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Chhotelal. All rights reserved.
            </p>

            <p className="text-sm text-zinc-500">
              Crafted with ❤️ using Next.js 16 & Tailwind CSS 4
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
}