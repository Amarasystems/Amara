import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "AI X+ — Modern AI SaaS",
  description:
    "The easiest way to power up your business with AI. Modern, futuristic SaaS template.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b0f1a] text-slate-200 selection:bg-indigo-500/40 selection:text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
