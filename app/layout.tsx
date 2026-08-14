import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeControls from "@/components/ThemeControls";

export const metadata: Metadata = {
  title: "Zynovix tech solutions",
  description: "Modern software solutions for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <ThemeControls />
        </ThemeProvider>
      </body>
    </html>
  );
}