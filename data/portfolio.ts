export type PortfolioCategory = "ERP" | "Web App" | "Custom Software";

export interface PortfolioProject {
  id: string;
  title: string;
  category: PortfolioCategory;
  client?: string;
  image: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "erp-1",
    title: "Frappe ERPNext Enterprise Setup",
    category: "ERP",
    client: "Manufacturing Client",
    image: "/images/team/Zeno_ai.png",
    description:
      "Comprehensive ERPNext implementation with custom Doctypes, automated billing, multi-location inventory, and role-based permissions.",
    tags: ["Frappe", "ERPNext", "MariaDB", "Python"],
    featured: true,
  },
  {
    id: "erp-2",
    title: "Frappe Retail Management System",
    category: "ERP",
    client: "Retail Chain",
    image: "/images/portfolio/frappe-retail.png",
    description:
      "Complete retail solution built on Frappe — POS billing, multi-store inventory, customer loyalty, and real-time sales analytics.",
    tags: ["Frappe", "ERPNext", "POS", "Retail"],
  },
  {
    id: "web-1",
    title: "Hospitality & Hotel Management Suite",
    category: "Web App",
    client: "Boutique Hotel",
    image: "/images/team/Zeno_ai.png",
    description:
      "All-in-one software for hotel bookings, room inventory, guest check-in/out, POS billing, and housekeeping management.",
    tags: ["Next.js", "React", "PostgreSQL", "Stripe"],
    featured: true,
  },
  {
    id: "web-2",
    title: "High-Performance E-commerce Web Portal",
    category: "Web App",
    image: "/images/team/Zeno_ai.png",
    description:
      "Full-featured e-commerce platform with product catalog, cart, secure checkout, and order management — built with Next.js, React, and Stripe integration.",
    tags: ["Next.js", "React", "E-commerce", "Stripe"],
  },  
  {
    id: "custom-2",
    title: "Business Workflow Automation Platform",
    category: "Custom Software",
    image: "/images/team/Zeno_ai.png",
    description:
      "Custom admin dashboard and workflow automation tool that reduced manual data entry by 70% for a logistics company.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
];