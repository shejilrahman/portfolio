import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shejil Rahman | JavaScript & Next.js Developer Portfolio",
  description:
    "Explore the portfolio of Shejil Rahman, a passionate JavaScript and Next.js developer. Projects, blogs, and coding tutorials showcasing frontend expertise.",
  keywords: [
    "Shejil Rahman",
    "Next.js developer",
    "JavaScript developer",
    "Frontend developer",
    "React developer portfolio",
    "Web developer India",
  ],
  authors: [{ name: "Shejil Rahman" }],
  openGraph: {
    title: "Shejil Rahman | JavaScript & Next.js Developer",
    description:
      "Portfolio of Shejil Rahman, a JavaScript and Next.js developer. Projects, blogs, and coding tutorials.",
    url: "https://shejil.tech",
    siteName: "Shejil Portfolio",
    images: [
      {
        url: "https://shejil.tech/og_image.png", // 🔑 Keep this image
        width: 1200,
        height: 630,
        alt: "Shejil Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // must be in /public
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
