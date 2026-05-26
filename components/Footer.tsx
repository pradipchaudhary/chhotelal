import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-24">

      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900">
              Chhotelal<span className="text-[#ffa092]">.</span>
            </h2>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md">
              A personal blog focused on web development, JavaScript, Next.js,
              UI/UX design, and modern software engineering practices.
              Sharing practical knowledge and real-world insights.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">

              <a
                href="https://github.com/your-username"
                target="_blank"
                className="text-gray-500 hover:text-black transition"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://twitter.com/your-username"
                target="_blank"
                className="text-gray-500 hover:text-sky-500 transition"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="mailto:your@email.com"
                className="text-gray-500 hover:text-red-500 transition"
              >
                <HiOutlineMail size={18} />
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Navigation
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-black">Home</Link></li>
              <li><Link href="/blogs" className="hover:text-black">Blogs</Link></li>
              <li><Link href="/categories" className="hover:text-black">Categories</Link></li>
              <li><Link href="/about" className="hover:text-black">About</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Resources
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/privacy" className="hover:text-black">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-black">Terms</Link></li>
              <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">

          <p>
            © {new Date().getFullYear()} Chhotelal. All rights reserved.
          </p>

          <p>
            Built with Next.js & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}