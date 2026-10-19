import type { Metadata } from "next";
import Link from "next/link";
import {
  Link2,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
  CreditCard,
  Globe,
  RefreshCw,
  Zap,
  Lock,
  FileCode,
  Sliders,
  Webhook,
  Activity,
  AlertTriangle,
  Server,
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceProcessTimeline from "@/components/services/ServiceProcessTimeline";
import ServiceFAQAccordion from "@/components/services/ServiceFAQAccordion";
import ServiceEnquiryForm, { FormFieldConfig } from "@/components/services/ServiceEnquiryForm";
import ServiceInternalLinks from "@/components/services/ServiceInternalLinks";
import ServiceJsonLd from "@/components/services/ServiceJsonLd";
import { ApiIntegrationsVisual } from "@/components/services/ServiceVisuals";

export const metadata: Metadata = {
  title: "API Integration Services & System Connectivity | Zynovix",
  description:
    "Connect ERP systems, websites, payment gateways and third-party platforms with API integration, data synchronization and workflow automation.",
  alternates: {
    canonical: "/services/api-system-integrations",
  },
  openGraph: {
    title: "API & System Integration Services | Zynovix Tech Solutions",
    description:
      "Connect existing applications, business platforms and third-party services with integrations designed to improve data flow and reduce manual work.",
    url: "https://zynovixtechsolutions.com/services/api-system-integrations",
    type: "website",
  },
};

const integrationProblems = [
  {
    title: "Duplicate Manual Data Entry",
    description:
      "When staff re-type orders, customer records, and invoices across isolated systems, clerical mistakes and payroll waste multiply.",
  },
  {
    title: "Disconnected Tool Silos",
    description:
      "Your CRM, e-commerce site, and warehouse software speak different languages, creating blind spots that slow customer fulfillment.",
  },
  {
    title: "Delayed Data Updates & Stock Lags",
    description:
      "Batched or manual synchronization leaves inventory balances and order statuses hours or days behind reality.",
  },
  {
    title: "Inconsistent Customer & Financial Records",
    description:
      "Discrepancies between billing gateways and internal ledgers lead to painful month-end reconciliations and accounting headaches.",
  },
  {
    title: "Manual Reconciliation Overhead",
    description:
      "Finance and operations spend days each week cross-matching CSV exports to confirm whether transactions succeeded.",
  },
];

const integrationServices = [
  {
    icon: FileCode,
    title: "Custom REST API Development",
    description:
      "Secure, high-throughput RESTful endpoints and microservices built with Node.js, Python, or Go to unlock legacy data and power modern apps.",
  },
  {
    icon: Database,
    title: "ERPNext & Frappe Deep Integrations",
    description:
      "Bidirectional sync connecting ERPNext with e-commerce, CRM, HR biometric attendance, and specialized warehouse management tools.",
  },
  {
    icon: Globe,
    title: "E-Commerce & Storefront Sync",
    description:
      "Instant synchronization of catalog items, inventory levels, sales orders, tracking numbers, and returns between web stores and backends.",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description:
      "Secure payment processing integration with Stripe, Razorpay, and PayPal, featuring automated webhook reconciliation and fraud checks.",
  },
  {
    icon: Webhook,
    title: "Real-Time Webhook Orchestration",
    description:
      "Event-driven webhooks with HMAC signature verification that trigger automated downstream business actions the millisecond an event occurs.",
  },
  {
    icon: RefreshCw,
    title: "Automated Data Synchronization & ETL",
    description:
      "Reliable pipelines that extract, transform, and load massive data volumes across databases with idempotency and zero record duplication.",
  },
];

const integrationArchitecture = [
  {
    number: "01",
    title: "Source System Event",
    description:
      "A trigger event occurs in your website, payment processor, or CRM (e.g. an e-commerce order or invoice payment).",
    icon: Globe,
  },
  {
    number: "02",
    title: "Authentication & Gateway",
    description:
      "The request is authenticated via OAuth2 tokens, API keys, or HMAC signatures, rejecting unauthorized attempts.",
    icon: Lock,
  },
  {
    number: "03",
    title: "Validation & Transformation",
    description:
      "Incoming payload is validated against strict schemas, formatted, and mapped to the target system's data structure.",
    icon: Sliders,
  },
  {
    number: "04",
    title: "Destination Dispatch",
    description:
      "The formatted record is inserted into ERPNext, PostgreSQL, or target SaaS with atomic transaction guarantees.",
    icon: Database,
  },
  {
    number: "05",
    title: "Retry Queue & Fault Tolerance",
    description:
      "If the target service is temporarily down, exponential backoff queues hold and safely retry without data loss.",
    icon: RefreshCw,
  },
  {
    number: "06",
    title: "Audit Logging & Alerts",
    description:
      "Every payload, latency metric, and status response is timestamped in audit logs with automated Slack/email alerts for anomalies.",
    icon: Activity,
  },
];

const securityStandards = [
  {
    icon: Lock,
    title: "End-to-End Encryption & OAuth2",
    description:
      "TLS 1.3 encryption in transit, secure token rotation, and least-privilege API scope authorization.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Schema Validation",
    description:
      "Zod and JSON schema verification preventing malformed data, code injection, and bad payloads from entering your core databases.",
  },
  {
    icon: RefreshCw,
    title: "Exponential Backoff & Retries",
    description:
      "Asynchronous message queues (Redis / Celery) with automatic retries ensure zero data loss during upstream network outages.",
  },
  {
    icon: Activity,
    title: "Real-Time Health & Audit Logs",
    description:
      "Centralized logging of every payload, timestamp, and HTTP response code with automated alerts on latency or failure spikes.",
  },
];

const faqs = [
  {
    question: "Which APIs, platforms, and third-party systems do you support?",
    answer:
      "We support virtually any system that exposes a REST, GraphQL, SOAP, or Webhook interface. Common integrations include ERPNext, Shopify, WooCommerce, Stripe, Razorpay, Salesforce, HubSpot, WhatsApp Business API, and relational databases (PostgreSQL, MySQL, MariaDB).",
  },
  {
    question: "Can you connect modern cloud services with our older on-premise legacy database?",
    answer:
      "Yes. We frequently build secure middleware bridges and reverse SSH/VPN tunnels that securely extract and synchronize data between on-premise servers and modern cloud platforms without exposing internal networks.",
  },
  {
    question: "How do you prevent duplicate records and data sync conflicts?",
    answer:
      "We enforce idempotent API design, unique transaction hashes, and strict database constraints. Even if a webhook fires multiple times, our system recognizes the unique payload identifier and processes it exactly once.",
  },
  {
    question: "What happens if a third-party service (e.g. payment gateway or CRM) goes down?",
    answer:
      "Our integrations utilize persistent message queues (such as Redis or RabbitMQ). If a destination system suffers downtime, events are safely queued and retried automatically using exponential backoff once the service is restored.",
  },
  {
    question: "Do you provide comprehensive API documentation and Postman collections?",
    answer:
      "Yes. Every integration is delivered with complete OpenAPI / Swagger documentation, request/response schema specifications, and Postman collections for your internal engineering team.",
  },
];

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Michael Scott",
    required: true,
  },
  {
    name: "email",
    label: "Work Email",
    type: "email",
    placeholder: "michael@company.com",
    required: true,
  },
  {
    name: "company",
    label: "Company / Organization",
    type: "text",
    placeholder: "Starlight Enterprises",
    required: true,
  },
  {
    name: "systemsToConnect",
    label: "Systems to Connect (e.g., ERPNext, Shopify, Stripe, CRM)",
    type: "text",
    placeholder: "e.g., ERPNext ↔ Shopify Storefront ↔ Stripe Gateway",
    required: true,
  },
  {
    name: "dataToSync",
    label: "Data to Synchronize",
    type: "select",
    required: true,
    options: [
      "Orders & Fulfillment Details",
      "Real-Time Inventory & Stock Balances",
      "Customer Contacts & CRM Leads",
      "Invoices, Payments & Ledger Entries",
      "Multi-Entity Full Bidirectional Sync",
      "Other Custom Data",
    ],
  },
  {
    name: "apiDocumentationAvailability",
    label: "API Documentation Availability",
    type: "select",
    required: false,
    options: [
      "Standard Modern APIs Available (Stripe, ERPNext, Shopify, etc.)",
      "Custom REST / Internal API Docs Available",
      "Partial or Outdated Documentation",
      "Legacy / Undocumented System (Need Technical Audit)",
    ],
  },
  {
    name: "phone",
    label: "Phone / WhatsApp Number",
    type: "tel",
    placeholder: "+1 (555) 456-7890",
    required: false,
  },
  {
    name: "project",
    label: "Integration Scope & Project Details",
    type: "textarea",
    placeholder:
      "Describe the flow of data you need to automate, expected transaction volume, or pain points with current manual handoffs...",
    required: true,
    colSpan: 2,
  },
];

const relatedServices = [
  {
    title: "Frappe & ERPNext Solutions",
    href: "/services/frappe-erpnext-solutions",
    description:
      "Enterprise ERP implementation with custom DocTypes, accounting, and multi-location inventory automation.",
  },
  {
    title: "Custom Website Development",
    href: "/services/custom-website-development",
    description:
      "High-speed websites and portals with seamless API connections to your back-office systems.",
  },
  {
    title: "Custom Business Software",
    href: "/services/custom-business-software",
    description:
      "Bespoke admin dashboards, workflow automation tools, and internal management applications.",
  },
];

export default function ApiSystemIntegrationsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-[#050816] dark:text-white">
      <ServiceJsonLd
        serviceName="API & System Integrations"
        serviceDescription="Connect ERP systems, websites, payment gateways and third-party platforms with API integration, data synchronization and workflow automation."
        serviceUrl="/services/api-system-integrations"
        faqs={faqs}
      />

      {/* 1. Hero Section */}
      <ServiceHero
        badge="Enterprise Connectivity & APIs"
        title="API & System Integration Services for Connected Business Systems"
        description="Connect existing applications, business platforms and third-party services with integrations designed to improve data flow and reduce manual work."
        primaryCta={{
          label: "Discuss an Integration",
          href: "#enquiry",
        }}
        secondaryCta={{
          label: "View Integration Capabilities",
          href: "#services",
        }}
        visual={<ApiIntegrationsVisual />}
      />

      {/* 2. Integration Problems */}
      <section className="py-20 bg-slate-50/70 dark:bg-[#070B18]/70 border-y border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              The Cost of Siloed Systems
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Painful Integration Bottlenecks We Eliminate
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              When business software operates in isolation, your team wastes countless hours manually copying data while errors go unnoticed until customers complain.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {integrationProblems.map((prob, idx) => (
              <div
                key={prob.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="flex items-center gap-2 text-rose-500 mb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-50 text-xs font-bold dark:bg-rose-950/40">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Data Friction
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{prob.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {prob.description}
                </p>
              </div>
            ))}

            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 p-6 flex flex-col justify-between dark:border-cyan-500/40">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  The Integration Fix
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                  Real-Time Event Automation
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Reliable webhook pipelines that synchronize data in under 100 milliseconds with automatic error recovery.
                </p>
              </div>
              <a
                href="#enquiry"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400"
              >
                <span>Connect Your Systems</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Integration Services */}
      <section id="services" className="py-20 bg-white dark:bg-[#050816]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Comprehensive Services
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Integration Services We Deliver
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              From REST API design and webhook sync to payment gateways and enterprise ERP connectivity.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {integrationServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Architecture & Workflow */}
      <ServiceProcessTimeline
        heading="Our Robust Integration Architecture"
        subheading="How data safely travels from source systems through validation, schema mapping, and delivery with zero record corruption."
        steps={integrationArchitecture}
      />

      {/* 5. Security & Reliability Standards */}
      <section className="py-20 bg-slate-50/70 dark:bg-[#070B18]/70 border-t border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Fault Tolerance & Defense
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Security & Reliability Standards
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              We engineer integration pipelines with the same security and resilience standards as mission-critical financial applications.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {securityStandards.map((std) => {
              const Icon = std.icon;
              return (
                <div
                  key={std.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <div className="rounded-lg bg-blue-500/10 p-2.5 text-blue-600 dark:text-cyan-400 w-fit mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{std.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {std.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Practical Use Cases Showcase */}
      <section className="py-20 bg-white dark:bg-[#050816]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Real-World Examples
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Integration Use Cases We Deliver
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Proven connectivity patterns that eliminate manual reconciliation and accelerate business velocity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <span className="text-xs font-semibold text-blue-600 dark:text-cyan-400">Use Case 01</span>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                Website-to-ERP Order Sync
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                When a customer purchases on your Next.js or Shopify store, an automated webhook instantly creates a verified Sales Order in ERPNext, reserves warehouse stock, and notifies fulfillment.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <span className="text-xs font-semibold text-blue-600 dark:text-cyan-400">Use Case 02</span>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                Payment Webhook Reconciliation
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Stripe or Razorpay payment success events verify signatures, trigger ledger journal entries, email tax invoices, and update accounting ledgers with zero human intervention.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <span className="text-xs font-semibold text-blue-600 dark:text-cyan-400">Use Case 03</span>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                CRM-to-Operations Handoff
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                When a deal moves to &apos;Closed-Won&apos; in your CRM, the integration provisions client folders, initializes project tasks, and issues onboarding access credentials automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <ServiceFAQAccordion
        heading="API & Integration FAQs"
        subheading="Technical answers on supported frameworks, rate-limiting, legacy data bridges, and SLA uptime."
        faqs={faqs}
      />

      {/* 8. Final CTA & Enquiry Form */}
      <ServiceEnquiryForm
        serviceName="API & System Integrations"
        formTitle="Discuss Your System Integration Requirements"
        formSubtitle="Tell us which software platforms, databases, or payment gateways you need connected. Our integration engineers will review your APIs and propose a resilient architecture."
        submitButtonText="Discuss Integration Scope"
        fields={formFields}
      />

      {/* 9. Contextual Internal Links */}
      <ServiceInternalLinks
        currentServiceTitle="API & System Integrations"
        relatedServices={relatedServices}
      />
    </main>
  );
}
