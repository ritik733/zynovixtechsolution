import type { Metadata } from "next";
import CareerHero from "@/components/careers/CareerHero";
import WhyJoin from "@/components/careers/WhyJoin";
import Benefits from "@/components/careers/Benefits";
import OpenPositions from "@/components/careers/OpenPositions";
import HiringProcess from "@/components/careers/HiringProcess";
import ApplicationForm from "@/components/careers/ApplicationForm";
import FAQ from "@/components/careers/FAQ";
import { HeroAtmosphereGlow } from "@/components/ui/TechPattern";

export const metadata: Metadata = {
  title: "Careers & Open Engineering Positions | Zynovix",
  description:
    "Build high-impact software products. Explore engineering and consulting careers at Zynovix Tech Solutions in Next.js, Frappe ERPNext, and cloud architectures.",
  keywords: [
    "Zynovix careers",
    "software engineer jobs",
    "Next.js developer jobs",
    "ERPNext developer careers",
    "tech hiring Udaipur",
    "full-stack software engineer vacancies",
  ],
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers & Open Positions | Zynovix Tech Solutions",
    description:
      "Build high-impact software products. Explore engineering and consulting careers at Zynovix Tech Solutions in Next.js, Frappe ERPNext, and cloud architectures.",
    url: "https://zynovixtechsolutions.com/careers",
    type: "website",
    images: [
      {
        url: "/images/hero-final-preview.png",
        width: 1200,
        height: 630,
        alt: "Zynovix Tech Solutions Careers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Open Positions | Zynovix Tech Solutions",
    description:
      "Build high-impact software products. Explore engineering and consulting careers at Zynovix Tech Solutions in Next.js, Frappe ERPNext, and cloud architectures.",
    images: ["/images/hero-final-preview.png"],
  },
};

const careersSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://zynovixtechsolutions.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Careers",
          item: "https://zynovixtechsolutions.com/careers",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://zynovixtechsolutions.com/careers/#webpage",
      url: "https://zynovixtechsolutions.com/careers",
      name: "Careers & Open Engineering Positions | Zynovix Tech Solutions",
      description:
        "Build high-impact software products. Explore engineering and consulting careers at Zynovix Tech Solutions in Next.js, Frappe ERPNext, and cloud architectures.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://zynovixtechsolutions.com/#website",
      },
    },
  ],
};

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-hidden dark:bg-[#050816] dark:text-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(careersSchema).replace(/</g, "\\u003c"),
        }}
      />
      {/* Background Decor - Exact match to Homepage Hero */}
      <HeroAtmosphereGlow />
      <CareerHero />
      <WhyJoin />
      <Benefits />
      <OpenPositions />
      <HiringProcess />
      <ApplicationForm />
      <FAQ />
    </main>
  );
}
