import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundCanvasWrapper from "@/components/three/BackgroundCanvasWrapper";
import Cursor3D from "@/components/three/Cursor3D";

export const metadata: Metadata = {
  title: "Zynovix Tech Solutions | AI & Cloud Innovations",
  description:
    "Cutting-edge AI-powered software, machine learning, cloud SaaS, and modern digital engineering solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#030712] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden relative">
        {/* 3D Global Interactive Background Canvas */}
        <BackgroundCanvasWrapper />

        {/* 3D Trailing Cyber Cursor */}
        <Cursor3D />

        {/* Lenis Smooth Scroll Engine */}
        <SmoothScroll />

        {/* Global Navigation */}
        <Navbar />

        {/* Page Content */}
        <div className="relative z-10">{children}</div>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}