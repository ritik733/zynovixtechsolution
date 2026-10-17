export type PortfolioCategory = "ERP" | "Web App" | "Custom Software";

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectResult {
  metric: string;
  label: string;
}

export interface ProjectTechItem {
  name: string;
  category: string;
}

export interface PortfolioProject {
  id: string;
  slug?: string;
  title: string;
  category: PortfolioCategory;
  client?: string;
  image: string;
  description: string;
  tags: string[];
  featured?: boolean;
  // Detail page properties
  tagline?: string;
  timeline?: string;
  role?: string;
  deliverables?: string[];
  overview?: string;
  challenge?: string;
  solution?: string;
  keyFeatures?: ProjectFeature[];
  results?: ProjectResult[];
  techStack?: ProjectTechItem[];
  liveUrl?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "erp-1",
    slug: "frappe-erpnext-enterprise-setup",
    title: "Frappe ERPNext Enterprise Setup",
    category: "ERP",
    client: "Apex Manufacturing Ltd.",
    image: "/images/team/Zeno_ai.png",
    description:
      "Comprehensive ERPNext implementation with custom Doctypes, automated billing, multi-location inventory, and role-based permissions.",
    tags: ["Frappe", "ERPNext", "MariaDB", "Python"],
    featured: true,
    tagline:
      "Unified manufacturing operations, multi-warehouse inventory, and automated accounting powered by custom Frappe ERPNext.",
    timeline: "12 Weeks",
    role: "End-to-End ERP Implementation, Custom Doctypes & Cloud Deployment",
    deliverables: [
      "Custom Manufacturing Doctypes & BOM Workflows",
      "Multi-Location Warehouse Inventory Tracking",
      "Automated GST & Financial Ledger Configuration",
      "Role-Based Access Control (RBAC) System",
      "Secure Cloud Server Deployment & Disaster Recovery",
    ],
    overview:
      "A growing manufacturing enterprise operating across multiple production facilities and distribution hubs was struggling with disconnected legacy tools, manual spreadsheets, and delayed inventory updates. Zynovix architected and deployed a tailored Frappe ERPNext solution to streamline shop-floor execution, raw material procurement, multi-warehouse stock movement, and financial reporting into a cohesive digital workflow.",
    challenge:
      "Before the implementation, the client faced frequent stock discrepancies between production plants, delayed order fulfillments, and days spent manually reconciling Bills of Materials (BOMs). Invoicing required repetitive data entry from paper delivery challans, and senior management lacked visibility into real-time operational costs and margin performance.",
    solution:
      "Zynovix developed customized Frappe Doctypes for multi-tiered BOMs, automated production orders, and integrated barcode scanning across receiving and dispatch docks. We automated accounting entries upon dispatch, configured granular permissions for plant operators versus finance controllers, and migrated historical enterprise data with zero operational disruption.",
    keyFeatures: [
      {
        title: "Custom BOM & Work Order Flow",
        description:
          "Multi-level bill of materials with auto-generation of production orders and raw material issue notes.",
      },
      {
        title: "Multi-Warehouse Inventory Ledger",
        description:
          "Real-time stock valuation across 4 production sites and 2 regional warehouses with automated re-order alerts.",
      },
      {
        title: "Automated GST Invoicing",
        description:
          "Instant generation of tax-compliant e-invoices and dispatch documentation linked directly to stock entries.",
      },
      {
        title: "Role-Based Security & Permissions",
        description:
          "Strict permission matrices ensuring shop-floor operators and accounting teams access only authorized functions.",
      },
      {
        title: "Executive Analytics & KPI Dashboard",
        description:
          "Live tracking of production velocity, scrap percentage, vendor delivery SLAs, and profit margins.",
      },
    ],
    results: [
      { metric: "65%", label: "Faster inventory reconciliation" },
      { metric: "0", label: "Stock discrepancies across facilities" },
      { metric: "85%", label: "Reduction in manual invoice entry time" },
      { metric: "100%", label: "Real-time production visibility" },
    ],
    techStack: [
      { name: "Frappe Framework", category: "Full-Stack Framework" },
      { name: "ERPNext v15", category: "Core ERP Engine" },
      { name: "Python", category: "Backend Business Logic" },
      { name: "MariaDB", category: "Relational Database" },
      { name: "Redis", category: "In-Memory Cache & Queues" },
      { name: "Nginx / Linux", category: "Cloud Infrastructure" },
    ],
  },
  {
    id: "erp-2",
    slug: "frappe-retail-management-system",
    title: "Frappe Retail Management System",
    category: "ERP",
    client: "Multi-Store Retail Chain",
    image: "/images/portfolio/frappe-retail.png",
    description:
      "Complete retail solution built on Frappe — POS billing, multi-store inventory, customer loyalty, and real-time sales analytics.",
    tags: ["Frappe", "ERPNext", "POS", "Retail"],
    tagline:
      "High-speed retail POS, centralized multi-outlet inventory synchronization, and customer loyalty rewards built on Frappe.",
    timeline: "10 Weeks",
    role: "Retail POS Architecture, Multi-Store Sync & Hardware Integration",
    deliverables: [
      "Lightweight, High-Speed POS Terminal Interface",
      "Multi-Branch Stock Allocation & Transfer Engine",
      "Customer Loyalty & Promotional Campaign Engine",
      "Thermal Printer & Barcode Scanner Integration",
      "Central Headquarters Executive Analytics",
    ],
    overview:
      "Operating a network of retail storefronts, our client faced bottlenecks at billing counters and lack of centralized inventory control. Zynovix engineered a tailored Frappe retail deployment featuring an offline-resilient POS interface, synchronized inventory across all branches, barcode scanner compatibility, and an omnichannel loyalty program.",
    challenge:
      "Long checkout lines during festive sales created customer dissatisfaction and lost sales. In addition, rural stores experienced intermittent network dropouts that halted billing. Headquarters could not easily reallocate slow-moving inventory from one store to another experiencing stockouts.",
    solution:
      "We implemented an optimized Frappe POS interface supporting keyboard shortcuts, rapid barcode lookups, and local offline caching. The system automatically queues transactions during network drops and syncs once reconnected. We also created an automated replenishment algorithm that recommends inter-branch transfers based on weekly sales velocity.",
    keyFeatures: [
      {
        title: "Offline-Resilient POS Interface",
        description:
          "Cashiers ring up transactions with zero lag even if internet goes down; automatic sync when connection resumes.",
      },
      {
        title: "Multi-Store Inventory Synchronization",
        description:
          "Real-time stock balance visibility across all outlets, enabling smooth customer pickups and store transfers.",
      },
      {
        title: "Thermal Receipt & Barcode Support",
        description:
          "Seamless plug-and-play compatibility with ESC/POS thermal printers, barcode scanners, and cash drawers.",
      },
      {
        title: "Customer Loyalty & Promotions",
        description:
          "Points-based loyalty system with instant customer lookup via mobile number and custom discount rules.",
      },
      {
        title: "Consolidated Daily Sales Reports",
        description:
          "Automated end-of-day register closure, cash drawer reconciliation, and central profit reporting.",
      },
    ],
    results: [
      { metric: "3x", label: "Faster counter checkout speed" },
      { metric: "99.98%", label: "POS billing uptime with offline mode" },
      { metric: "42%", label: "Reduction in dead stock via auto-transfers" },
      { metric: "28%", label: "Increase in repeat customer visits" },
    ],
    techStack: [
      { name: "Frappe Framework", category: "Core Framework" },
      { name: "ERPNext Retail POS", category: "Billing Engine" },
      { name: "Python", category: "Backend Logic" },
      { name: "Vue.js / JavaScript", category: "POS UI & Local Sync" },
      { name: "MariaDB", category: "Database" },
      { name: "REST APIs", category: "Hardware & Payment Integration" },
    ],
  },
  {
    id: "web-1",
    slug: "hospitality-hotel-management-suite",
    title: "Hospitality & Hotel Management Suite",
    category: "Web App",
    client: "Boutique Hotel & Resort",
    image: "/images/team/Zeno_ai.png",
    description:
      "All-in-one software for hotel bookings, room inventory, guest check-in/out, POS billing, and housekeeping management.",
    tags: ["Next.js", "React", "PostgreSQL", "Stripe"],
    featured: true,
    tagline:
      "Comprehensive property management system designed for seamless reservations, contactless guest check-ins, dining POS, and room turnover.",
    timeline: "14 Weeks",
    role: "Full-Stack Web App Development, Database Design & Payment Gateway Integration",
    deliverables: [
      "Interactive Visual Room Booking Calendar",
      "Direct Guest Booking Engine with Stripe Integration",
      "Front Desk Guest Folio & Digital Check-In/Out",
      "Housekeeping & Room Inspection Mobile Web Portal",
      "Restaurant & Amenities Room-Charge Billing POS",
    ],
    overview:
      "A boutique luxury resort and hotel group required a custom, all-in-one hospitality management suite to replace multiple disconnected SaaS subscriptions. Zynovix architected an intuitive web application providing room availability calendars, direct guest booking engines, front desk check-in/out, multi-outlet restaurant POS, and real-time housekeeping status updates.",
    challenge:
      "The property relied on multiple incompatible subscriptions for room booking, dining POS, and housekeeping coordination. Front desk agents regularly spent 15+ minutes per check-in verifying paper reservation vouchers, room statuses were verbally relayed via walkie-talkie, and billing disputes arose over restaurant tabs.",
    solution:
      "Zynovix built a unified Next.js and PostgreSQL web application featuring a drag-and-drop room reservation grid, instant booking engine with Stripe card processing, and dedicated role-based portals for front desk, housekeeping attendants, and restaurant servers. All restaurant bills post directly to the guest's digital room folio.",
    keyFeatures: [
      {
        title: "Interactive Reservation Grid",
        description:
          "Color-coded room calendar showing occupancy, impending arrivals, maintenance holds, and rate tiers.",
      },
      {
        title: "Direct Commission-Free Bookings",
        description:
          "Mobile-optimized booking engine enabling guests to book suites directly, saving significant OTA fees.",
      },
      {
        title: "Mobile Housekeeping Portal",
        description:
          "Live room turnover status (Dirty, Cleaning, Inspected, Available) updated directly on attendants' phones.",
      },
      {
        title: "Integrated Dining & Amenity Charges",
        description:
          "Restaurant and spa bills automatically charged to guest room folio with electronic signature capture.",
      },
      {
        title: "Digital Guest Folio & Auto-Invoicing",
        description:
          "Instant PDF invoice generation and automated payment receipt delivery via WhatsApp and email.",
      },
    ],
    results: [
      { metric: "0", label: "Double bookings recorded" },
      { metric: "35%", label: "Increase in direct commission-free bookings" },
      { metric: "45 min", label: "Faster room turnover turnaround" },
      { metric: "4.9 / 5", label: "Guest satisfaction rating for check-in" },
    ],
    techStack: [
      { name: "Next.js (App Router)", category: "Full-Stack React Framework" },
      { name: "React 19", category: "UI Library" },
      { name: "TypeScript", category: "Language" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Stripe", category: "Payment Processing" },
    ],
  },
  {
    id: "web-2",
    slug: "high-performance-ecommerce-portal",
    title: "High-Performance E-commerce Web Portal",
    category: "Web App",
    client: "Direct-to-Consumer (D2C) Brand",
    image: "/images/team/Zeno_ai.png",
    description:
      "Full-featured e-commerce platform with product catalog, cart, secure checkout, and order management — built with Next.js, React, and Stripe integration.",
    tags: ["Next.js", "React", "E-commerce", "Stripe"],
    tagline:
      "Ultra-fast headless e-commerce storefront delivering sub-second page loads, instant product filtering, and streamlined multi-currency checkout.",
    timeline: "8 Weeks",
    role: "Frontend & Backend Architecture, Stripe Payments & Speed Optimization",
    deliverables: [
      "Next.js High-Speed Storefront Architecture",
      "Dynamic Catalog with Instant Faceted Filter & Search",
      "Optimized 2-Step Mobile Checkout with Stripe Elements",
      "Customer Account Portal & Order Tracking",
      "Admin Order Management & Webhook Fulfillment",
    ],
    overview:
      "A fast-growing D2C lifestyle brand was losing sales due to slow mobile load speeds and an outdated checkout experience on their legacy e-commerce platform. Zynovix engineered a modern, ultra-responsive storefront utilizing Next.js, React, and Stripe that achieved sub-second page transitions, enhanced SEO rankings, and boosted mobile conversion.",
    challenge:
      "Mobile page load times averaged over 5 seconds, resulting in high bounce rates and customer frustration during flash sales. The legacy checkout funnel involved 4 separate pages, leading to cart abandonment exceeding 70%.",
    solution:
      "We re-architected the customer storefront using Next.js with Server-Side Rendering (SSR) and edge asset optimization. We implemented an instantaneous client-side product filter for categories, sizes, and colors, and replaced the multi-step checkout with a friction-free 2-step checkout supporting Apple Pay, Google Pay, and credit cards.",
    keyFeatures: [
      {
        title: "Sub-Second Page Load Speeds",
        description:
          "SSR and automatic image optimization deliver 98+ Google Lighthouse performance scores.",
      },
      {
        title: "Instant Faceted Filtering",
        description:
          "Real-time product filtering and search with zero page refreshes or latency.",
      },
      {
        title: "Streamlined 2-Step Checkout",
        description:
          "Frictionless checkout experience with express digital wallet support (Apple Pay, Google Pay).",
      },
      {
        title: "Dynamic Cart & Inventory Alerts",
        description:
          "Real-time stock reservation, low-stock notifications, and promotional discount codes.",
      },
      {
        title: "Merchant Order Management",
        description:
          "Clean admin dashboard for fulfillment processing, customer communication, and shipping tracking.",
      },
    ],
    results: [
      { metric: "0.8s", label: "Average page load time (down from 5.1s)" },
      { metric: "98+", label: "Google Lighthouse performance score" },
      { metric: "28%", label: "Increase in mobile conversion rate" },
      { metric: "34%", label: "Reduction in cart abandonment rate" },
    ],
    techStack: [
      { name: "Next.js", category: "Modern Web Framework" },
      { name: "React 19", category: "Component Library" },
      { name: "TypeScript", category: "Type-Safe Codebase" },
      { name: "Tailwind CSS", category: "Utility-First CSS" },
      { name: "Stripe Elements", category: "Payment Gateway" },
      { name: "Node.js APIs", category: "Backend Services & Webhooks" },
    ],
  },
  {
    id: "custom-2",
    slug: "business-workflow-automation-platform",
    title: "Business Workflow Automation Platform",
    category: "Custom Software",
    client: "Logistics & Freight Corporation",
    image: "/images/team/Zeno_ai.png",
    description:
      "Custom admin dashboard and workflow automation tool that reduced manual data entry by 70% for a logistics company.",
    tags: ["React", "Node.js", "PostgreSQL"],
    tagline:
      "Intelligent operations dashboard and document processing engine automating shipping manifests, route allocations, and status tracking.",
    timeline: "12 Weeks",
    role: "Custom Software Engineering, Database Architecture & Workflow Automation",
    deliverables: [
      "Consolidated Dispatcher & Operations Admin Dashboard",
      "Automated PDF Manifest Ingestion & Data Extraction",
      "Fleet Routing & Cargo Capacity Optimization Board",
      "Automated SMS & Email Milestone Notification Triggers",
      "Role-Based Audit Trail & Performance Analytics",
    ],
    overview:
      "A regional logistics and freight company with 80+ vehicles was burdened by manual paper manifests, delayed driver dispatch schedules, and spreadsheet tracking errors. Zynovix developed a custom web-based Workflow Automation Platform that centralizes shipment dispatching, automates manifest data entry, and gives clients real-time delivery visibility.",
    challenge:
      "Operations dispatchers spent over 4 hours daily manually copying shipping details from customer PDFs into internal spreadsheets. Human entry mistakes frequently caused incorrect routing, cargo misplacements, and delayed delivery updates to end clients.",
    solution:
      "Zynovix engineered an automated document processing pipeline that parses incoming PDF shipment orders and automatically extracts consignee details, dimensions, and delivery addresses into a structured PostgreSQL database. We built a drag-and-drop fleet dispatch board and automated customer milestone notifications via SMS and email.",
    keyFeatures: [
      {
        title: "Automated Manifest Extraction",
        description:
          "Eliminates manual retyping by parsing PDF orders directly into verified consignment records.",
      },
      {
        title: "Fleet Dispatch & Route Board",
        description:
          "Interactive drag-and-drop truck loading board with automatic vehicle weight and volume capacity validation.",
      },
      {
        title: "Automated Milestone Alerts",
        description:
          "Instant notification updates triggered at key checkpoints (Dispatched, In-Transit, Out for Delivery, Delivered).",
      },
      {
        title: "Comprehensive Audit Logs",
        description:
          "Complete timestamped history of all route modifications, consignment edits, and driver reassignments.",
      },
      {
        title: "Operational SLA Analytics",
        description:
          "Real-time metrics on driver punctuality, fleet fuel utilization, and customer turnaround times.",
      },
    ],
    results: [
      { metric: "70%", label: "Reduction in manual data entry time" },
      { metric: "4 hrs", label: "Saved daily per dispatcher team" },
      { metric: "99.4%", label: "Consignment tracking accuracy" },
      { metric: "22%", label: "Optimization in fleet fuel efficiency" },
    ],
    techStack: [
      { name: "React", category: "Frontend Dashboard" },
      { name: "Node.js & Express", category: "Backend Services" },
      { name: "PostgreSQL", category: "Relational Database" },
      { name: "Tailwind CSS", category: "Modern UI Styling" },
      { name: "Redis", category: "Background Task Queue" },
      { name: "Docker", category: "Containerized Deployment" },
    ],
  },
];

export function getProjectById(idOrSlug: string): PortfolioProject | undefined {
  if (!idOrSlug) return undefined;
  const normalized = idOrSlug.toLowerCase();
  return portfolioProjects.find(
    (p) =>
      p.id.toLowerCase() === normalized ||
      (p.slug && p.slug.toLowerCase() === normalized)
  );
}

export function getRelatedProjects(
  currentId: string,
  limit: number = 2
): PortfolioProject[] {
  return portfolioProjects
    .filter((p) => p.id !== currentId && p.slug !== currentId)
    .slice(0, limit);
}