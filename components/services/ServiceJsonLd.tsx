import { FAQItem } from "./ServiceFAQAccordion";

interface ServiceJsonLdProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  faqs?: FAQItem[];
}

export default function ServiceJsonLd({
  serviceName,
  serviceDescription,
  serviceUrl,
  faqs = [],
}: ServiceJsonLdProps) {
  const fullUrl = `https://zynovixtechsolutions.com${serviceUrl}`;

  // 1. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Services",
        item: "https://zynovixtechsolutions.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: serviceName,
        item: fullUrl,
      },
    ],
  };

  // 2. Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    url: fullUrl,
    provider: {
      "@type": "Organization",
      name: "Zynovix Tech Solutions",
      url: "https://zynovixtechsolutions.com",
      logo: "https://zynovixtechsolutions.com/images/logo/Zynovix-logo-Z.webp",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 6367500528",
        contactType: "customer service",
        email: "work@zynovixtechsolutions.com",
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
  };

  // 3. FAQ Schema
  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
