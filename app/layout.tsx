import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          "antialiased bg-[#fef9f7]"
        )}
      >
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="px-6 pt-32">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}