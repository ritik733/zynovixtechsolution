import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
  Workflow,
  LayoutDashboard,
  Users,
  Bell,
  Sliders,
  FileCode,
  Rocket,
  CheckCircle2,
  XCircle,
  BarChart,
  Boxes,
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceProcessTimeline from "@/components/services/ServiceProcessTimeline";
import ServiceFAQAccordion from "@/components/services/ServiceFAQAccordion";
import ServiceEnquiryForm, { FormFieldConfig } from "@/components/services/ServiceEnquiryForm";
import ServiceInternalLinks from "@/components/services/ServiceInternalLinks";
import ServiceJsonLd from "@/components/services/ServiceJsonLd";
import { CustomBusinessSoftwareVisual } from "@/components/services/ServiceVisuals";
import { HeroAtmosphereGlow } from "@/components/ui/TechPattern";

export const metadata: Metadata = {
  title: "Custom Business Software Development Services | Zynovix",
  description:
    "Build custom business software, internal dashboards and workflow applications designed to simplify operations and support business processes.",
  alternates: {
    canonical: "/services/custom-business-software",
  },
  openGraph: {
    title: "Custom Business Software Development | Zynovix Tech Solutions",
    description:
      "Replace disconnected tools and repetitive manual processes with tailored software designed for your business requirements and operational workflows.",
    url: "https://zynovixtechsolutions.com/services/custom-business-software",
    type: "website",
  },
};

const typesOfSoftware = [
  {
    icon: LayoutDashboard,
    title: "Business Management Applications",
    description:
      "End-to-end operational software that unifies your proprietary business logic, job scheduling, dispatching, and vendor management.",
  },
  {
    icon: Sliders,
    title: "Internal Admin Panels & Dashboards",
    description:
      "Fast, role-protected control centers giving operations teams full power to inspect transactions, configure system rules, and manage records.",
  },
  {
    icon: Users,
    title: "Customer & Partner Portals",
    description:
      "Dedicated web portals enabling clients and vendors to track project milestones, download invoices, submit requests, and collaborate securely.",
  },
  {
    icon: Boxes,
    title: "Inventory & Asset Tracking Tools",
    description:
      "Specialized resource tracking systems with barcode/RFID integration, equipment maintenance schedules, and real-time stock allocation.",
  },
  {
    icon: BarChart,
    title: "Reporting & Executive Intelligence",
    description:
      "Automated data consolidation engines that aggregate metrics from multiple tools into clean, actionable leadership KPIs and exportable PDF summaries.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation Engines",
    description:
      "Event-driven background processes that parse incoming documents, trigger cross-system approvals, and eliminate human handoff delays.",
  },
];

const softwareFeatures = [
  {
    icon: ShieldCheck,
    title: "Role-Based Access Control (RBAC)",
    description:
      "Granular user permissions defining exactly who can view, create, edit, approve, or delete records across departments.",
  },
  {
    icon: FileSpreadsheet,
    title: "Custom Dynamic Forms & Validation",
    description:
      "Multi-step forms with strict input schema validation, dynamic conditional logic, and instant data verification.",
  },
  {
    icon: Workflow,
    title: "Multi-Tier Approval Workflows",
    description:
      "Automate sequential and parallel sign-off hierarchies with automated email and SMS notification pings.",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications & Webhooks",
    description:
      "Instant push alerts, WhatsApp notifications, and webhook broadcasts whenever critical operational events trigger.",
  },
  {
    icon: Database,
    title: "Scalable Relational Database Design",
    description:
      "High-performance PostgreSQL and MariaDB schemas engineered for data integrity, index speed, and complex relational queries.",
  },
  {
    icon: Layers,
    title: "Seamless API & SaaS Integrations",
    description:
      "Connect your custom software with Stripe, ERPNext, Google Workspace, AWS, and legacy internal platforms.",
  },
];

const developmentLifecycle = [
  {
    number: "01",
    title: "Requirements Discovery",
    description:
      "We interview department heads and end-users to uncover operational bottlenecks, data flows, and required business logic.",
    icon: Users,
  },
  {
    number: "02",
    title: "Process Mapping & Architecture",
    description:
      "Documenting end-to-end workflows, system states, database entity-relationship diagrams (ERDs), and security boundaries.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Interactive Prototype",
    description:
      "Figma wireframes and clickable UI mockups allowing your stakeholders to test user journeys before any code is written.",
    icon: Sliders,
  },
  {
    number: "04",
    title: "Agile Software Development",
    description:
      "Iterative sprints delivering functional modules using modern React, Node.js, Python, and scalable SQL databases.",
    icon: FileCode,
  },
  {
    number: "05",
    title: "User Acceptance Testing (UAT)",
    description:
      "Rigorous role-based testing by your team in a staging environment to validate edge cases, data accuracy, and usability.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Deployment & Continuous Improvement",
    description:
      "Zero-downtime production rollout, user onboarding sessions, data migration, and ongoing feature enhancements.",
    icon: Rocket,
  },
];

const faqs = [
  {
    question: "When should our company choose custom software over off-the-shelf SaaS?",
    answer:
      "Choose custom software when commercial SaaS tools force you to compromise your unique operating model, charge exorbitant per-user subscription fees that multiply as you grow, or fail to integrate with your existing databases and legacy software. Custom software gives you an exact fit and a durable competitive advantage.",
  },
  {
    question: "Does our company own the intellectual property (IP) and source code?",
    answer:
      "Yes, 100%. Upon completion and final settlement, you own full intellectual property rights, database schemas, and source code. There are no ongoing royalties or platform lock-ins.",
  },
  {
    question: "How long does a typical custom business software project take?",
    answer:
      "Targeted admin tools, workflow automations, or internal dashboards typically take 6 to 10 weeks. Comprehensive operational platforms or customer portals take 10 to 16 weeks, developed and delivered in transparent, milestone-driven sprints.",
  },
  {
    question: "Can the custom software scale as our user count and transaction volume grow?",
    answer:
      "Absolutely. We architect solutions with containerized microservices (Docker), scalable relational databases (PostgreSQL), and cloud infrastructure (AWS / DigitalOcean) capable of handling millions of records and concurrent users without latency.",
  },
  {
    question: "How do you handle maintenance, security patching, and future feature requests?",
    answer:
      "We offer proactive maintenance plans that include server health monitoring, security audits, database backups, and dedicated engineering hours for adding new capabilities as your business expands.",
  },
];

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "David Miller",
    required: true,
  },
  {
    name: "email",
    label: "Work Email",
    type: "email",
    placeholder: "david@logisticsgroup.com",
    required: true,
  },
  {
    name: "company",
    label: "Company / Organization",
    type: "text",
    placeholder: "Global Logistics Group",
    required: true,
  },
  {
    name: "businessChallenge",
    label: "Primary Operational Challenge",
    type: "select",
    required: true,
    options: [
      "Manual Spreadsheets & Human Entry Errors",
      "Disconnected Commercial SaaS Tools",
      "Outgrown Legacy In-House System",
      "Need a Secure Client / Partner Portal",
      "Complex Approval & Workflow Bottlenecks",
      "Other Unique Requirement",
    ],
  },
  {
    name: "estimatedTimeline",
    label: "Target Completion Timeline",
    type: "select",
    required: false,
    options: [
      "1 – 2 Months (Urgent Need)",
      "2 – 4 Months",
      "4 – 6 Months",
      "Planning Phase / Exploratory",
    ],
  },
  {
    name: "phone",
    label: "Contact Number",
    type: "tel",
    placeholder: "+1 (555) 345-6789",
    required: false,
  },
  {
    name: "project",
    label: "Describe the Required Functionality & Workflow",
    type: "textarea",
    placeholder:
      "Explain the process you want to automate, who will use the software (roles/departments), and any specific integrations needed...",
    required: true,
    colSpan: 2,
  },
];

const relatedServices = [
  {
    title: "Frappe & ERPNext Solutions",
    href: "/services/frappe-erpnext-solutions",
    description:
      "Comprehensive ERP modules for accounting, procurement, manufacturing, and inventory management.",
  },
  {
    title: "API & System Integrations",
    href: "/services/api-system-integrations",
    description:
      "Connect your custom software with third-party payment gateways, CRM databases, and cloud platforms.",
  },
  {
    title: "Cloud Hosting & Maintenance",
    href: "/services/cloud-hosting-maintenance",
    description:
      "Managed cloud servers, database backups, uptime monitoring, and SLA-backed technical maintenance.",
  },
];

export default function CustomBusinessSoftwarePage() {
  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-hidden dark:bg-[#050816] dark:text-white">
      {/* Background Decor - Exact match to Homepage Hero */}
      <HeroAtmosphereGlow />
      <ServiceJsonLd
        serviceName="Custom Business Software"
        serviceDescription="Build custom business software, internal dashboards and workflow applications designed to simplify operations and support business processes."
        serviceUrl="/services/custom-business-software"
        faqs={faqs}
      />

      {/* 1. Hero Section */}
      <ServiceHero
        badge="Bespoke Software Engineering"
        title="Custom Business Software Built Around Your Workflow"
        description="Replace disconnected tools and repetitive manual processes with tailored software designed for your business requirements and operational workflows."
        primaryCta={{
          label: "Discuss Your Requirements",
          href: "#enquiry",
        }}
        secondaryCta={{
          label: "Explore Solutions",
          href: "#types",
        }}
        visual={<CustomBusinessSoftwareVisual />}
      />

      {/* 2. Before vs After Comparison */}
      <section className="py-20 bg-slate-50/70 dark:bg-transparent border-y border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Operational Evolution
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              The Reality: Spreadsheets vs Custom Software
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              See the direct operational impact when companies transition from fragile spreadsheets to structured, automated software.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* The Old Way: Spreadsheets */}
            <div className="rounded-3xl border border-rose-200 bg-white p-8 shadow-sm dark:border-rose-900/50 dark:bg-slate-900/60">
              <div className="flex items-center gap-3 text-rose-600 dark:text-rose-400 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 dark:bg-rose-950/60">
                  <XCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Spreadsheets & Disconnected Tools
                  </h3>
                  <p className="text-xs text-rose-500">Fragile, manual, and error-prone</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Data Silos:</strong> Different departments keep conflicting versions of the same file.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Hours Wasted on Entry:</strong> Staff spend half their day copy-pasting numbers from PDFs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Access Control:</strong> Inability to restrict sensitive financial or customer records by role.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Blind Spots:</strong> Leaders lack real-time visibility into active jobs and cash flow.
                  </span>
                </li>
              </ul>
            </div>

            {/* The Zynovix Way: Custom Platform */}
            <div className="rounded-3xl border border-emerald-300 bg-gradient-to-br from-emerald-50/50 to-cyan-50/50 p-8 shadow-md dark:border-emerald-800/60 dark:bg-slate-900/70">
              <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950/60">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Zynovix Custom Platform
                  </h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">Automated, secure, and centralized</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Single Source of Truth:</strong> Centralized database with instantaneous synchronization.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>70% Faster Execution:</strong> Automated document ingestion, parsing, and trigger workflows.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Strict Role-Based Security:</strong> Every user sees only what their job description authorizes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Live Leadership Dashboards:</strong> Instant executive metrics on margins, bottlenecks, and SLAs.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Types of Software We Engineer */}
      <section id="types" className="py-20 bg-white dark:bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Solutions Portfolio
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Types of Software We Engineer
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              We design bespoke software solutions tailored to solve your unique operational bottlenecks.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {typesOfSoftware.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Features & Capabilities */}
      <section className="py-20 bg-slate-50/70 dark:bg-transparent border-t border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Architectural Rigor
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Core Technical Features
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Enterprise security, responsive design, and robust database architecture baked into every application.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {softwareFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-lg bg-blue-500/10 p-2.5 text-blue-600 dark:text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{feat.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Development Process Timeline */}
      <ServiceProcessTimeline
        heading="Our Software Engineering Methodology"
        subheading="From initial process mapping to full deployment, we follow a transparent agile lifecycle focused on your operational ROI."
        steps={developmentLifecycle}
      />

      {/* 6. Proof & Use Case Showcase */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                Verified Production Case Study
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Business Workflow Automation Platform
              </h2>
              <p className="mt-3 text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                Logistics & Freight Corporation • React, Node.js & PostgreSQL
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                A regional freight company with 80+ vehicles was burdened by manual paper manifests and spreadsheet tracking errors. Zynovix developed a tailored Workflow Automation Platform that centralizes shipment dispatching, automates manifest data entry, and gives clients real-time delivery visibility.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-y border-slate-100 py-4 dark:border-slate-800">
                <div>
                  <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">70%</div>
                  <div className="text-xs text-slate-500">Less Manual Data Entry</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">4 Hours</div>
                  <div className="text-xs text-slate-500">Saved Daily Per Team</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">99.4%</div>
                  <div className="text-xs text-slate-500">Consignment Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">22%</div>
                  <div className="text-xs text-slate-500">Fleet Fuel Efficiency</div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/portfolio/business-workflow-automation-platform"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  <span>Read Complete Logistics Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="/images/portfolio/automation.webp"
                    alt="Workflow Automation Platform Screenshot"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 rounded-lg bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    Verified Production Deployment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <ServiceFAQAccordion
        heading="Custom Software FAQs"
        subheading="Important considerations regarding IP ownership, development timelines, tech stack, and scalability."
        faqs={faqs}
      />

      {/* 8. Final CTA & Enquiry Form */}
      <ServiceEnquiryForm
        serviceName="Custom Business Software"
        formTitle="Discuss Your Software Requirements"
        formSubtitle="Share your operational challenges and process objectives. Our engineers will provide an architectural overview and budget estimate."
        submitButtonText="Discuss Requirements"
        fields={formFields}
      />

      {/* 9. Contextual Internal Links */}
      <ServiceInternalLinks
        currentServiceTitle="Custom Business Software"
        relatedServices={relatedServices}
      />
    </main>
  );
}
