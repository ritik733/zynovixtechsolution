import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Stats from "@/components/sections/Stats";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import ProjectEstimator from "@/components/interactive/ProjectEstimator";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Zynovix Tech Solutions | Modern Web, ERP & Custom Software",
  description:
    "We develop high-performance websites, customized Frappe ERPNext solutions, and specialized business tools like hotel management systems to streamline your operations and grow your enterprise.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zynovix Tech Solutions | Modern Web, ERP & Custom Software",
    description:
      "Modern websites, Frappe ERPNext implementations, hotel management systems, and bespoke business software engineered for scale.",
    url: "https://zynovixtechsolutions.com",
    type: "website",
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
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://zynovixtechsolutions.com/#webpage",
      url: "https://zynovixtechsolutions.com",
      name: "Zynovix Tech Solutions | Modern Web, ERP & Custom Software",
      description:
        "Modern websites, Frappe ERPNext implementations, hotel management systems, and bespoke business software engineered for scale.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://zynovixtechsolutions.com/#website",
      },
      about: {
        "@id": "https://zynovixtechsolutions.com/#organization",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://zynovixtechsolutions.com/#service",
      name: "Zynovix Tech Solutions",
      url: "https://zynovixtechsolutions.com",
      image: "https://zynovixtechsolutions.com/images/hero-final-preview.png",
      telephone: "+91 6367500528",
      email: "work@zynovixtechsolutions.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2nd Floor, 12 Amrit Nagar, Opposite of Pacific University, Debari",
        addressLocality: "Udaipur",
        addressRegion: "Rajasthan",
        postalCode: "313024",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      areaServed: ["India", "Global"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Website Development",
              url: "https://zynovixtechsolutions.com/services/custom-website-development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Frappe & ERPNext Solutions",
              url: "https://zynovixtechsolutions.com/services/frappe-erpnext-solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hotel Management Software",
              url: "https://zynovixtechsolutions.com/services/hotel-management-software",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Business Software",
              url: "https://zynovixtechsolutions.com/services/custom-business-software",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "API & System Integrations",
              url: "https://zynovixtechsolutions.com/services/api-system-integrations",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud Hosting & Maintenance",
              url: "https://zynovixtechsolutions.com/services/cloud-hosting-maintenance",
            },
          },
        ],
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <TrustBar />
      <Stats />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <ProjectEstimator />
      <CTA />
    </main>
  );
}
