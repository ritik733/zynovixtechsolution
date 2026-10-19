export interface ServiceItem {
  id: number;
  slug: string;
  href: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  primaryKeyword: string;
  seoTitle: string;
  seoDescription: string;
}

export const services: ServiceItem[] = [
  {
    id: 1,
    slug: "custom-website-development",
    href: "/services/custom-website-development",
    title: "Custom Website Development",
    short:
      "Modern, high-performance websites and web apps built with Next.js and React.",
    description:
      "High-performance websites, corporate portals, and responsive web applications designed to engage visitors and drive conversions. Built with Next.js, React, and modern UI frameworks.",
    icon: "Globe",
    primaryKeyword: "Custom website development",
    seoTitle: "Custom Website Development Services | Zynovix",
    seoDescription:
      "Get a custom, responsive website tailored to your business goals. Explore website development, redesign and custom web application services from Zynovix.",
  },

  {
    id: 2,
    slug: "frappe-erpnext-solutions",
    href: "/services/frappe-erpnext-solutions",
    title: "Frappe & ERPNext Solutions",
    short:
      "End-to-end ERP implementation with custom modules and automated workflows.",
    description:
      "Complete Frappe ERPNext implementations covering accounting, inventory, HR, and custom Doctypes — with automated business workflows tailored to your operations.",
    icon: "Code",
    primaryKeyword: "Frappe ERPNext solutions",
    seoTitle: "Frappe & ERPNext Implementation and Customization | Zynovix",
    seoDescription:
      "Explore ERPNext implementation, Frappe customization, business workflow automation and system integration solutions for your operations.",
  },

  {
    id: 3,
    slug: "hotel-management-software",
    href: "/services/hotel-management-software",
    title: "Hotel Management Software",
    short:
      "All-in-one hospitality software for bookings, billing, and front desk.",
    description:
      "Purpose-built hospitality tools for room reservations, guest check-in/out, POS billing, housekeeping management, and front-desk operations — designed for hotels and resorts.",
    icon: "Workflow",
    primaryKeyword: "Hotel management software",
    seoTitle: "Hotel Management Software for Reservations & Front Desk | Zynovix",
    seoDescription:
      "Explore hotel management software for room reservations, guest records, check-in/check-out, billing and daily hospitality operations.",
  },

  {
    id: 4,
    slug: "custom-business-software",
    href: "/services/custom-business-software",
    title: "Custom Business Software",
    short:
      "Tailor-made software engineered around your unique workflows.",
    description:
      "Bespoke software applications built around your operational bottlenecks — from internal admin dashboards and workflow automation to role-based access systems.",
    icon: "Cpu",
    primaryKeyword: "Custom business software development",
    seoTitle: "Custom Business Software Development Services | Zynovix",
    seoDescription:
      "Build custom business software, internal dashboards and workflow applications designed to simplify operations and support business processes.",
  },

  {
    id: 5,
    slug: "api-system-integrations",
    href: "/services/api-system-integrations",
    title: "API & System Integrations",
    short:
      "Seamless connectivity between ERPNext, websites, and third-party tools.",
    description:
      "Connect your ERPNext, website, payment gateways, and SaaS tools with reliable REST APIs and webhook sync — so your systems talk to each other automatically.",
    icon: "Cloud",
    primaryKeyword: "API integration services",
    seoTitle: "API Integration Services & System Connectivity | Zynovix",
    seoDescription:
      "Connect ERP systems, websites, payment gateways and third-party platforms with API integration, data synchronization and workflow automation.",
  },

  {
    id: 6,
    slug: "cloud-hosting-maintenance",
    href: "/services/cloud-hosting-maintenance",
    title: "Cloud Hosting & Maintenance",
    short:
      "Reliable hosting, monitoring, backups, and 24/7 technical support.",
    description:
      "Cloud infrastructure setup, Frappe & web server hosting, performance monitoring, automated backups, and dedicated 24/7 technical maintenance for your systems.",
    icon: "Brain",
    primaryKeyword: "Cloud hosting and maintenance services",
    seoTitle: "Cloud Hosting & Website Maintenance Services | Zynovix",
    seoDescription:
      "Explore cloud hosting setup, application deployment, backups, monitoring and ongoing website and server maintenance for business applications.",
  },
];