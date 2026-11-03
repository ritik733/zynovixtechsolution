import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeControls from "@/components/ThemeControls";
import MouseGlow from "@/components/MouseGlow";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://zynovixtechsolutions.com/#organization",
  name: "Zynovix Tech Solutions",
  alternateName: "Zynovix",
  url: "https://zynovixtechsolutions.com",
  logo: "https://zynovixtechsolutions.com/images/logo/Zynovix-logo-Z.webp",
  description:
    "Engineering modern websites, Frappe ERPNext implementations, hotel management systems, and bespoke business software.",
  email: "work@zynovixtechsolutions.com",
  telephone: "+91 6367500528",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd Floor, 12 Amrit Nagar, Opposite of Pacific University, Debari",
    addressLocality: "Udaipur",
    addressRegion: "Rajasthan",
    postalCode: "313024",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 6367500528",
    contactType: "customer service",
    email: "work@zynovixtechsolutions.com",
    availableLanguage: ["English", "Hindi"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://zynovixtechsolutions.com/#website",
  url: "https://zynovixtechsolutions.com",
  name: "Zynovix Tech Solutions",
  description:
    "Modern Websites, Frappe ERPNext Implementation & Custom Business Software.",
  publisher: {
    "@id": "https://zynovixtechsolutions.com/#organization",
  },
  inLanguage: "en-US",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zynovixtechsolutions.com"),
  title: {
    default: "Zynovix Tech Solutions | Modern Web, ERP & Custom Software",
    template: "%s | Zynovix Tech Solutions",
  },
  description:
    "We develop high-performance websites, customized Frappe ERPNext solutions, and specialized business tools like hotel management systems to streamline your operations.",
  keywords: [
    "Custom website development",
    "Frappe ERPNext solutions",
    "ERPNext implementation",
    "ERPNext customization",
    "Hotel management software",
    "Custom business software development",
    "API integration services",
    "Cloud hosting and maintenance services",
    "Next.js web development",
    "Zynovix Tech Solutions",
  ],
  authors: [{ name: "Zynovix Tech Solutions", url: "https://zynovixtechsolutions.com" }],
  creator: "Zynovix Tech Solutions",
  publisher: "Zynovix Tech Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zynovixtechsolutions.com",
    siteName: "Zynovix Tech Solutions",
    title: "Zynovix Tech Solutions | Modern Web, ERP & Custom Software",
    description:
      "Modern websites, Frappe ERPNext implementations, hotel management systems, and bespoke business software engineered for scale.",
    images: [
      {
        url: "/images/hero-final-preview.png",
        width: 1200,
        height: 630,
        alt: "Zynovix Tech Solutions - Modern Web, ERP & Custom Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zynovix Tech Solutions | Modern Web, ERP & Custom Software",
    description:
      "Modern websites, Frappe ERPNext implementations, hotel management systems, and bespoke business software engineered for scale.",
    images: ["/images/hero-final-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        {/* Global Structured Data (Organization & WebSite) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
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
