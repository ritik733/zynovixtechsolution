import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Database,
  Layers,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
  Users,
  Settings,
  Zap,
  BarChart3,
  Factory,
  Boxes,
  Briefcase,
  Calculator,
  Workflow,
  Cpu,
  GraduationCap,
  HardDrive,
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceProcessTimeline from "@/components/services/ServiceProcessTimeline";
import ServiceFAQAccordion from "@/components/services/ServiceFAQAccordion";
import ServiceEnquiryForm, { FormFieldConfig } from "@/components/services/ServiceEnquiryForm";
import ServiceInternalLinks from "@/components/services/ServiceInternalLinks";
import ServiceJsonLd from "@/components/services/ServiceJsonLd";
import { ERPNextMockupVisual } from "@/components/services/ServiceVisuals";
import { HeroAtmosphereGlow } from "@/components/ui/TechPattern";

export const metadata: Metadata = {
  title: "Frappe & ERPNext Implementation and Customization | Zynovix",
  description:
    "Explore ERPNext implementation, Frappe customization, business workflow automation and system integration solutions for your operations.",
  alternates: {
    canonical: "/services/frappe-erpnext-solutions",
  },
  openGraph: {
    title: "Frappe & ERPNext Solutions | Zynovix Tech Solutions",
    description:
      "Simplify business operations with ERPNext implementation, Frappe customization and integrated workflows designed around your business processes.",
    url: "https://zynovixtechsolutions.com/services/frappe-erpnext-solutions",
    type: "website",
  },
};

const businessChallenges = [
  {
    title: "Disconnected Departmental Tools",
    description:
      "Data trapped in separate silos between accounting, sales, inventory, and procurement causes communication gaps and operational friction.",
  },
  {
    title: "Manual Invoicing & Delayed Reporting",
    description:
      "Hours spent creating tax invoices by hand and days lost at month-end closing books and reconciling ledgers.",
  },
  {
    title: "Inventory Blind Spots & Stockouts",
    description:
      "Lack of real-time multi-warehouse visibility leads to unexpected inventory stockouts, excess dead stock, and inaccurate valuations.",
  },
  {
    title: "Repetitive, Error-Prone Data Entry",
    description:
      "Copy-pasting identical details between spreadsheets, CRM notes, and physical forms wastes valuable staff hours and breeds errors.",
  },
  {
    title: "Limited Executive Oversight",
    description:
      "Leadership lacks an integrated dashboard showing live production velocity, gross margins, cash flow projections, and vendor fulfillment SLAs.",
  },
];

const erpModules = [
  {
    icon: Calculator,
    title: "Accounting & Financial Management",
    description:
      "Complete chart of accounts, automated tax/GST invoicing, bank reconciliation, accounts payable & receivable, cost centers, and automated financial statements.",
  },
  {
    icon: Briefcase,
    title: "Sales & CRM Pipeline",
    description:
      "Manage leads, track communication history, generate quotations, issue sales orders, schedule follow-ups, and monitor customer lifetime value.",
  },
  {
    icon: Boxes,
    title: "Inventory & Multi-Warehouse Tracking",
    description:
      "Real-time stock ledger, batch and serial number tracking, barcode scanning, automated reorder thresholds, and seamless inter-branch stock transfers.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Shop-Floor Control",
    description:
      "Multi-level Bills of Materials (BOMs), work orders, job cards, production scheduling, capacity planning, and scrap tracking across facilities.",
  },
  {
    icon: Users,
    title: "HR & Automated Payroll",
    description:
      "Employee lifecycle management, biometric attendance sync, automated salary slips, leave tracking, expense claims, and organizational hierarchy trees.",
  },
  {
    icon: BarChart3,
    title: "Executive Reports & Real-Time BI",
    description:
      "Customizable business intelligence reports, profit margin analyses, cash flow forecasts, stock valuation trends, and role-specific dashboard views.",
  },
];

const frappeCustomizations = [
  {
    icon: Database,
    title: "Custom DocTypes & Data Models",
    description:
      "Engineered data structures, custom child tables, and dynamic field linkages tailored precisely to your operational nuances.",
  },
  {
    icon: Workflow,
    title: "Automated Approval Workflows",
    description:
      "Multi-stage approval hierarchies with automated email/WhatsApp alerts triggered when purchase orders or expense claims exceed thresholds.",
  },
  {
    icon: ShieldCheck,
    title: "Granular Permissions & Role Security",
    description:
      "Strict Role-Based Access Control (RBAC) ensuring employees access only authorized documents, pricing tiers, and warehouse records.",
  },
  {
    icon: Code,
    title: "Bespoke Business Logic Scripts",
    description:
      "Client-side scripts and Python server hooks executing complex pricing formulas, validation rules, and automated ledger posts.",
  },
  {
    icon: FileSpreadsheet,
    title: "Custom Print Formats & PDF Documents",
    description:
      "Branded, pixel-perfect print templates for GST tax invoices, delivery challans, purchase orders, barcode labels, and payment receipts.",
  },
  {
    icon: Cpu,
    title: "Bespoke Frappe Applications",
    description:
      "Full custom Frappe apps that seamlessly extend ERPNext with proprietary workflows, customer portals, or partner dashboards.",
  },
];

const implementationSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "We audit your current operations, chart of accounts, warehouse flows, and reporting requirements to draft a precise implementation blueprint.",
    icon: Layers,
  },
  {
    number: "02",
    title: "Module Planning & Architecture",
    description:
      "Mapping your business entities to ERPNext modules, defining DocType schemas, approval stages, and integration boundaries.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Configuration & Customization",
    description:
      "Configuring standard modules, developing custom DocTypes, scripts, automated workflows, and branded invoice print formats.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Data Migration",
    description:
      "Cleaning, formatting, and migrating historical master data (items, customers, suppliers, opening balances) from Tally, Excel, or legacy ERPs.",
    icon: HardDrive,
  },
  {
    number: "05",
    title: "Testing & User Training",
    description:
      "Hands-on User Acceptance Testing (UAT), department-wise training sessions, role simulation, and comprehensive SOP documentation.",
    icon: GraduationCap,
  },
  {
    number: "06",
    title: "Go-Live & Dedicated Support",
    description:
      "Flawless cutover to production, real-time handholding during initial billing cycles, and ongoing technical maintenance.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "Why should we choose Frappe & ERPNext over SAP, NetSuite, or Odoo?",
    answer:
      "Frappe & ERPNext offers complete enterprise ERP capabilities without the prohibitive per-user monthly license fees of SAP or NetSuite. It is 100% open-source, highly extensible with Python and JavaScript, and gives you full ownership of your data and infrastructure.",
  },
  {
    question: "Can ERPNext be customized to fit our company's unique workflows?",
    answer:
      "Yes. The underlying Frappe Framework is one of the most flexible low-code meta-frameworks available. We build custom DocTypes, approval workflows, custom scripts, server hooks, and print formats that match your business processes exactly without breaking future upgrade paths.",
  },
  {
    question: "How do you migrate historical data from our existing accounting software (like Tally or Excel)?",
    answer:
      "We follow a rigorous ETL (Extract, Transform, Load) methodology. We sanitize your existing charts of accounts, customer directories, supplier masters, item catalogues, and opening stock balances, validate them against ERPNext requirements, and import them with verifiable audit trails.",
  },
  {
    question: "How long does an ERPNext implementation take?",
    answer:
      "A focused implementation (e.g., Accounting, Invoicing, and Basic Inventory) typically takes 4 to 8 weeks. Comprehensive implementations covering multi-plant Manufacturing, Supply Chain, and HR/Payroll usually take 8 to 14 weeks, delivered in phased milestones.",
  },
  {
    question: "What training and ongoing post-launch support do you provide?",
    answer:
      "We provide role-specific training sessions for each department (Finance, Procurement, Warehouse, HR), clear Standard Operating Procedure (SOP) manuals, and dedicated post-launch support covering server maintenance, daily backups, and workflow tweaks.",
  },
];

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Jane Doe",
    required: true,
  },
  {
    name: "email",
    label: "Work Email",
    type: "email",
    placeholder: "jane@enterprise.com",
    required: true,
  },
  {
    name: "company",
    label: "Company Name",
    type: "text",
    placeholder: "Apex Manufacturing Ltd.",
    required: true,
  },
  {
    name: "businessType",
    label: "Business / Industry Type",
    type: "select",
    required: true,
    options: [
      "Manufacturing & Assembly",
      "Retail & Multi-Store POS",
      "Wholesale & Distribution",
      "Hospitality & Services",
      "Healthcare & Pharma",
      "E-Commerce & Logistics",
      "Other Industry",
    ],
  },
  {
    name: "currentSystem",
    label: "Current Operating System / Tool",
    type: "select",
    required: true,
    options: [
      "Spreadsheets (Excel / Google Sheets)",
      "Tally / TallyPrime",
      "Zoho Books / Zoho One",
      "Legacy On-Premise ERP",
      "Custom Internal Tool",
      "Starting Fresh",
    ],
  },
  {
    name: "projectTimeline",
    label: "Desired Project Timeline",
    type: "select",
    required: false,
    options: [
      "Immediate (Within 1 Month)",
      "1 – 3 Months",
      "3 – 6 Months",
      "Exploring & Budgeting",
    ],
  },
  {
    name: "phone",
    label: "Phone / WhatsApp Number",
    type: "tel",
    placeholder: "+91 98765 43210",
    required: false,
  },
  {
    name: "modulesRequired",
    label: "ERPNext Modules Required (Select All That Apply)",
    type: "checkbox-group",
    colSpan: 2,
    options: [
      "Accounting & Invoicing",
      "Sales & CRM Pipeline",
      "Purchasing & Supplier POs",
      "Inventory & Warehouses",
      "Manufacturing & BOMs",
      "HR, Attendance & Payroll",
      "Custom DocTypes & Scripts",
      "POS Retail Billing",
    ],
  },
  {
    name: "project",
    label: "Operational Challenges & Specific Requirements",
    type: "textarea",
    placeholder:
      "Describe your main business bottlenecks, number of users, multi-location requirements, or third-party integrations needed...",
    required: true,
    colSpan: 2,
  },
];

const relatedServices = [
  {
    title: "API & System Integrations",
    href: "/services/api-system-integrations",
    description:
      "Connect your ERPNext instance with e-commerce storefronts, payment gateways, WhatsApp bots, and shipping carriers.",
  },
  {
    title: "Custom Business Software",
    href: "/services/custom-business-software",
    description:
      "Bespoke admin dashboards and internal operational tools built to complement your enterprise ERP workflow.",
  },
];

export default function FrappeERPNextSolutionsPage() {
  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-hidden dark:bg-[#050816] dark:text-white">
      <HeroAtmosphereGlow />
      <ServiceJsonLd
        serviceName="Frappe & ERPNext Solutions"
        serviceDescription="Explore ERPNext implementation, Frappe customization, business workflow automation and system integration solutions for your operations."
        serviceUrl="/services/frappe-erpnext-solutions"
        faqs={faqs}
      />

      {/* 1. Hero Section */}
      <ServiceHero
        badge="Official Frappe & ERPNext Capabilities"
        title="Frappe & ERPNext Solutions for Smarter Business Operations"
        description="Simplify business operations with ERPNext implementation, Frappe customization and integrated workflows designed around your business processes."
        primaryCta={{
          label: "Book an ERP Consultation",
          href: "#enquiry",
        }}
        secondaryCta={{
          label: "Explore ERPNext Capabilities",
          href: "#modules",
        }}
        visual={<ERPNextMockupVisual />}
      />

      {/* 2. Business Challenges Section */}
      <section className="py-20 bg-slate-50/70 dark:bg-transparent border-y border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Operational Realities
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Common Challenges We Solve With ERPNext
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Growing companies inevitably reach a breaking point where disconnected tools and manual processes stall growth and erode profit margins.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessChallenges.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:border-cyan-500/50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="flex items-center gap-2 text-rose-500 mb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-50 text-xs font-bold dark:bg-rose-950/40">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Challenge
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}

            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 p-6 flex flex-col justify-between dark:border-cyan-500/40">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  The Result
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                  A Unified Digital Core
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  One interconnected system where finance, production, inventory, and sales speak the same language in real time.
                </p>
              </div>
              <a
                href="#enquiry"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400"
              >
                <span>Request ERP Readiness Review</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ERPNext Modules Section */}
      <section id="modules" className="py-20 bg-white dark:bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Core Modules
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              ERPNext Modules We Configure & Deploy
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              We implement only verified modules that align with your operational roadmap, ensuring fast adoption and high team productivity.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {erpModules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-600 dark:text-cyan-400 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{mod.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {mod.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Frappe Customization Section */}
      <section className="py-20 bg-slate-50/70 dark:bg-transparent border-t border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Deep Customization
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Frappe Customization: Tailored to Your Business
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Every enterprise operates differently. We leverage the Frappe Framework to craft custom logic, DocTypes, and automated workflows without corrupting core ERPNext code.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {frappeCustomizations.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-lg bg-cyan-500/10 p-2.5 text-cyan-600 dark:text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Implementation Process */}
      <ServiceProcessTimeline
        heading="Our ERPNext Implementation Methodology"
        subheading="A systematic, risk-free methodology ensuring accurate data migration, smooth staff adoption, and zero business interruption."
        steps={implementationSteps}
      />

      {/* 6. Proof & Portfolio Case Studies */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                Verified Enterprise Results
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Featured Frappe & ERPNext Implementations
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Explore real enterprise case studies showcasing multi-plant manufacturing and high-velocity retail POS systems.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400"
            >
              <span>View All Implementations</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Project 1: Frappe ERPNext Enterprise Setup */}
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 dark:border-slate-800 dark:bg-slate-900/60">
              <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-slate-800">
                <Image
                  src="/images/portfolio/erpnext.webp"
                  alt="Frappe ERPNext Enterprise Setup Screenshot"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  Manufacturing Enterprise
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  <span>ERP Implementation</span> • <span>Frappe & Python</span>
                </div>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  Frappe ERPNext Enterprise Setup
                </h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  Unified multi-warehouse inventory, custom BOM production workflows, automated GST accounting, and role-based permissions.
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2 border-y border-slate-100 py-3 dark:border-slate-800 text-center">
                  <div>
                    <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">65%</div>
                    <div className="text-[10px] text-slate-500">Faster Reconciliation</div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">0</div>
                    <div className="text-[10px] text-slate-500">Stock Discrepancy</div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">85%</div>
                    <div className="text-[10px] text-slate-500">Less Invoicing Time</div>
                  </div>
                </div>

                <div className="mt-5 flex justify-end">
                  <Link
                    href="/portfolio/frappe-erpnext-enterprise-setup"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2: Frappe Retail Management System */}
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 dark:border-slate-800 dark:bg-slate-900/60">
              <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-slate-800">
                <Image
                  src="/images/portfolio/frappe-retail.webp"
                  alt="Frappe Retail Management System Screenshot"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  Retail Chain Deployment
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  <span>Retail POS</span> • <span>Multi-Store Sync</span>
                </div>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  Frappe Retail Management System
                </h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  Offline-resilient POS interface, multi-store stock synchronization, customer loyalty points, and thermal receipt hardware integration.
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2 border-y border-slate-100 py-3 dark:border-slate-800 text-center">
                  <div>
                    <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">3x</div>
                    <div className="text-[10px] text-slate-500">Checkout Velocity</div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">99.98%</div>
                    <div className="text-[10px] text-slate-500">POS Billing Uptime</div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">42%</div>
                    <div className="text-[10px] text-slate-500">Dead Stock Cut</div>
                  </div>
                </div>

                <div className="mt-5 flex justify-end">
                  <Link
                    href="/portfolio/frappe-retail-management-system"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <ServiceFAQAccordion
        heading="Frappe & ERPNext FAQs"
        subheading="Expert answers regarding customization, migration from Tally/Excel, training, and maintenance costs."
        faqs={faqs}
      />

      {/* 8. Final CTA & Enquiry Form */}
      <ServiceEnquiryForm
        serviceName="Frappe & ERPNext Solutions"
        formTitle="Book Your Free ERP Consultation"
        formSubtitle="Discuss your current operational challenges with our Frappe architects. We will provide a recommended module map, timeline, and implementation plan."
        submitButtonText="Request ERP Consultation"
        fields={formFields}
      />

      {/* 9. Contextual Internal Links */}
      <ServiceInternalLinks
        currentServiceTitle="Frappe & ERPNext Solutions"
        relatedServices={relatedServices}
      />
    </main>
  );
}
