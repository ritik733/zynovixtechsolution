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
    title: "Multi-Warehouse Inventory System",
    category: "ERP",
    client: "Retail Chain",
    image: "/images/team/Zeno_ai.png",
    description:
      "End-to-end inventory management across 5 warehouses with automated stock transfers, low-stock alerts, and real-time reporting.",
    tags: ["ERPNext", "Inventory", "Automation"],
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
    title: "High-Performance Corporate Web Portal",
    category: "Web App",
    image: "/images/team/Zeno_ai.png",
    description:
      "Responsive, SEO-optimized business web platform and customer portal built with Next.js, React, and modern UI design.",
    tags: ["Next.js", "React", "Tailwind", "SEO"],
  },
  {
    id: "custom-1",
    title: "Zeno AI Assistant",
    category: "Custom Software",
    image: "/images/team/Zeno_ai.png",
    description:
      "An intelligent conversational AI powered by LLMs, designed to handle complex queries with human-like understanding.",
    tags: ["LLM", "Python", "LangChain", "OpenAI"],
    featured: true,
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