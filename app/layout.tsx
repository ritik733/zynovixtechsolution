import "./globals.css";
import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050816" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Speculative Loading for sub-second page transitions */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prefetch: [
                {
                  where: {
                    and: [
                      { href_matches: "/*" },
                      { not: { href_matches: "/api/*" } },
                    ],
                  },
                  eagerness: "moderate",
                },
              ],
            }),
          }}
        />
      </head>
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
