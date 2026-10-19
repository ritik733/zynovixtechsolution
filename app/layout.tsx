import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeControls from "@/components/ThemeControls";
import MouseGlow from "@/components/MouseGlow";

export const metadata: Metadata = {
  metadataBase: new URL("https://zynovixtechsolutions.com"),
  title: {
    default: "Zynovix Tech Solutions | Modern Web, ERP & Custom Software",
    template: "%s",
  },
  description: "Modern software solutions for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 dark:bg-[#050816] dark:text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-400">
        <ThemeProvider>
          <MouseGlow />
          <Navbar />
          {children}
          <Footer />
          <ThemeControls />
        </ThemeProvider>
      </body>
    </html>
  );
}