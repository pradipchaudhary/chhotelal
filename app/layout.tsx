import type { Metadata } from "next";
// import "./globals.css";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chhotelal",
    template: "%s | Chhotelal",
  },
  description: "Small name. Big potential.",
  metadataBase: new URL("https://www.chhotelal.com.np"),
  openGraph: {
    title: "Chhotelal",
    description: "Small name. Big potential.",
    url: "https://www.chhotelal.com.np",
    siteName: "Chhotelal",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          inter.variable,
          "antialiased text-black bg-white"
        )}
      >

        {/* 📦 Content Layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>

      </body>
    </html>
  );
}