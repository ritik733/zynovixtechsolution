import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Lock, ShieldCheck } from "lucide-react";
import PortfolioClient from "@/components/portfolio/PortfolioClient";
import { portfolioProjects } from "@/data/portfolio";
import { HeroAtmosphereGlow } from "@/components/ui/TechPattern";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Production Software Deployments",
  description:
    "Explore our battle-tested portfolio across custom Frappe ERPNext implementations, sub-second Next.js web applications, and enterprise automation engines.",
  keywords: [
    "Zynovix portfolio",
    "ERPNext case studies",
    "Next.js web applications",
    "custom enterprise software",
    "hotel management software portfolio",
    "Frappe ERP implementation examples",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio & Case Studies | Zynovix Tech Solutions",
    description:
      "Explore our battle-tested portfolio across custom Frappe ERPNext implementations, sub-second Next.js web applications, and enterprise automation engines.",
    url: "https://zynovixtechsolutions.com/portfolio",
    type: "website",
    images: [
      {
        url: "/images/hero-final-preview.png",
        width: 1200,
        height: 630,
        alt: "Zynovix Tech Solutions Case Studies and Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | Zynovix Tech Solutions",
    description:
      "Explore our battle-tested portfolio across custom Frappe ERPNext implementations, sub-second Next.js web applications, and enterprise automation engines.",
    images: ["/images/hero-final-preview.png"],
  },
};

const portfolioSchema = {
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
          name: "Portfolio",
          item: "https://zynovixtechsolutions.com/portfolio",
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": "https://zynovixtechsolutions.com/portfolio/#webpage",
      url: "https://zynovixtechsolutions.com/portfolio",
      name: "Portfolio & Case Studies | Zynovix Tech Solutions",
      description:
        "Explore our battle-tested portfolio across custom Frappe ERPNext implementations, sub-second Next.js web applications, and enterprise automation engines.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://zynovixtechsolutions.com/#website",
        name: "Zynovix Tech Solutions",
        url: "https://zynovixtechsolutions.com",
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: portfolioProjects.map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `https://zynovixtechsolutions.com/portfolio/${p.slug || p.id}`,
          name: p.title,
        })),
      },
    },
  ],
};

export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden bg-white text-slate-900 min-h-screen dark:bg-[#050816] dark:text-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Background Decor */}
      <HeroAtmosphereGlow />

      {/* Client-side Tabs & Filtered Grid */}
      <PortfolioClient projects={portfolioProjects} />

      {/* Bottom CTA Card */}
      <section className="relative py-20 pb-28 text-center">
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-white/95 p-8 sm:p-14 text-center backdrop-blur-2xl shadow-2xl text-slate-900 dark:border-violet-500/30 dark:bg-slate-900/80 dark:text-white dark:shadow-[0_20px_60px_rgba(110,80,255,0.15)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              <Sparkles size={14} /> Turn Ideas Into Production Reality
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Have an Enterprise Project in Mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              Whether you need an enterprise Frappe ERPNext implementation, a custom Next.js web application, or hospitality software, our engineers are ready to build.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white transition hover:scale-105 shadow-lg shadow-cyan-500/25 text-base"
              >
                Let&apos;s Build Together
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-slate-300 bg-white/80 text-slate-800 px-8 py-4 font-semibold transition hover:border-cyan-500 hover:bg-slate-100 dark:border-slate-700 dark:bg-transparent dark:text-white dark:hover:bg-slate-800 text-base"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Guarantees Row */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Zap size={14} className="text-cyan-500" />
                <span>&lt; 24-Hour Discovery Response</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock size={14} className="text-blue-500" />
                <span>Strict NDA & Code IP Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>Zero-Downtime Data Migration</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
