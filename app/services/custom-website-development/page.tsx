import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Layout,
  Smartphone,
  Search,
  Zap,
  ShieldCheck,
  Cpu,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Layers,
  Palette,
  FileCode,
  Rocket,
  Wrench,
  ShoppingBag,
  Building,
  UserCheck,
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceProcessTimeline from "@/components/services/ServiceProcessTimeline";
import ServiceFAQAccordion from "@/components/services/ServiceFAQAccordion";
import ServiceEnquiryForm, { FormFieldConfig } from "@/components/services/ServiceEnquiryForm";
import ServiceInternalLinks from "@/components/services/ServiceInternalLinks";
import ServiceJsonLd from "@/components/services/ServiceJsonLd";
import { WebsiteMockupVisual } from "@/components/services/ServiceVisuals";

export const metadata: Metadata = {
  title: "Custom Website Development Services | Zynovix",
  description:
    "Get a custom, responsive website tailored to your business goals. Explore website development, redesign and custom web application services from Zynovix.",
  alternates: {
    canonical: "/services/custom-website-development",
  },
  openGraph: {
    title: "Custom Website Development Services | Zynovix Tech Solutions",
    description:
      "Build a professional, responsive website tailored to your business goals—from corporate websites and e-commerce stores to custom web applications.",
    url: "https://zynovixtechsolutions.com/services/custom-website-development",
    type: "website",
  },
};

const whatWeBuild = [
  {
    icon: Building,
    title: "Corporate Websites",
    description:
      "Authoritative, beautifully branded company websites designed to establish trust, communicate your value proposition, and generate qualified B2B leads.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Stores",
    description:
      "Ultra-fast online stores with instant faceted search, friction-free checkout, payment gateway integrations (Stripe, Razorpay), and automated inventory sync.",
  },
  {
    icon: Cpu,
    title: "Custom Web Applications",
    description:
      "Dynamic, data-intensive web apps engineered with Next.js, React, and robust backend APIs to automate client workflows and business operations.",
  },
  {
    icon: UserCheck,
    title: "Customer & Employee Portals",
    description:
      "Secure, role-protected portals where clients, partners, or internal teams can access documents, manage bookings, review invoices, and collaborate.",
  },
  {
    icon: Layout,
    title: "High-Converting Landing Pages",
    description:
      "Campaign-specific landing pages engineered for rapid load speed, persuasive visual hierarchy, and maximum conversion rates on PPC and organic traffic.",
  },
  {
    icon: Wrench,
    title: "Website Redesign & Modernization",
    description:
      "Transform outdated, sluggish websites into modern, high-performance digital flagships with improved user experience and Core Web Vitals.",
  },
];

const featuresCapabilities = [
  {
    icon: Smartphone,
    title: "Responsive & Mobile-First Design",
    description:
      "Flawless user experiences across smartphones, tablets, laptops, and ultra-wide desktop displays with fluid typography and adaptive UI layouts.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Architecture",
    description:
      "Built from the ground up with semantic HTML5, canonical URLs, Open Graph tags, automated XML sitemaps, and Schema.org structured data.",
  },
  {
    icon: Zap,
    title: "Core Web Vitals & Speed Optimization",
    description:
      "Sub-second page transitions, Server-Side Rendering (SSR), edge caching, and optimized media assets achieving 95+ Google Lighthouse performance scores.",
  },
  {
    icon: Layers,
    title: "Modern CMS & Headless Content",
    description:
      "Intuitive content editing workflows tailored to your team, allowing effortless updates to blogs, case studies, team profiles, and page content.",
  },
  {
    icon: Code,
    title: "API & Third-Party Integrations",
    description:
      "Seamless connectivity with CRMs, ERPs, email marketing automation, payment gateways, live chat widgets, and Google Analytics conversion tracking.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security & Maintenance",
    description:
      "SSL/TLS encryption, automated weekly security patches, cross-site scripting (XSS) prevention, and continuous post-launch health monitoring.",
  },
];

const developmentSteps = [
  {
    number: "01",
    title: "Discovery & Scope",
    description:
      "We analyze your business objectives, target audience, keyword opportunities, technical requirements, and competitor landscape to define a clear roadmap.",
    icon: Search,
  },
  {
    number: "02",
    title: "UI/UX Architecture",
    description:
      "Creation of information architecture, wireframes, and interactive design prototypes showcasing brand identity, typography, and conversion journeys.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Modern Development",
    description:
      "Clean, scalable code built using Next.js, React, TypeScript, and Tailwind CSS. We ensure modular component architecture and responsive execution.",
    icon: FileCode,
  },
  {
    number: "04",
    title: "Rigorous Testing & QA",
    description:
      "Cross-browser compatibility testing, mobile usability checks, form validation testing, Core Web Vitals profiling, and accessibility (WCAG) audits.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Production Launch",
    description:
      "Domain DNS routing, SSL configuration, CDN edge caching setup, Google Search Console indexing, and conversion tracking event verification.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Support & Maintenance",
    description:
      "Continuous performance monitoring, security patches, regular backups, and feature iterations to keep your web presence fast and reliable.",
    icon: Wrench,
  },
];

const faqs = [
  {
    question: "How much does custom website development cost?",
    answer:
      "The investment for custom website development depends on your specific scope—such as the number of custom page templates, e-commerce functionality, user portals, or third-party API integrations. We provide clear, fixed-price proposals with transparent milestone breakdowns after our initial discovery discussion.",
  },
  {
    question: "How long does it take to design, develop, and launch a custom website?",
    answer:
      "A typical custom corporate website takes 3 to 6 weeks from initial kickoff to deployment. Larger web applications, e-commerce platforms, or multi-role portals generally require 8 to 14 weeks depending on integrations and revision cycles.",
  },
  {
    question: "Will my custom website be fully optimized for SEO and mobile devices?",
    answer:
      "Yes, completely. Every website we build adheres to modern SEO best practices: semantic HTML tags, responsive viewport scaling, lightning-fast Core Web Vitals, canonical tags, automated XML sitemaps, and JSON-LD structured data to maximize organic search visibility.",
  },
  {
    question: "Can our team easily edit and add content after the website launches?",
    answer:
      "Absolutely. We can integrate intuitive Content Management Systems (CMS) or admin panels so your team can effortlessly publish blogs, edit copy, update images, and manage products without needing to write code.",
  },
  {
    question: "Do you provide ongoing maintenance, hosting, and technical support?",
    answer:
      "Yes. We offer dedicated cloud hosting and monthly maintenance plans covering automated daily backups, server uptime monitoring, security patching, and technical support hours for ongoing enhancements.",
  },
];

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "John Smith",
    required: true,
  },
  {
    name: "email",
    label: "Work Email",
    type: "email",
    placeholder: "john@company.com",
    required: true,
  },
  {
    name: "company",
    label: "Company / Organization",
    type: "text",
    placeholder: "Acme Enterprises",
    required: true,
  },
  {
    name: "websiteType",
    label: "Website Type",
    type: "select",
    required: true,
    options: [
      "Corporate / Business Website",
      "E-Commerce Store",
      "Custom Web Application",
      "Customer / Employee Portal",
      "High-Converting Landing Page",
      "Website Redesign & Modernization",
      "Other",
    ],
  },
  {
    name: "estimatedBudget",
    label: "Estimated Budget",
    type: "select",
    required: false,
    options: [
      "Under $2,000",
      "$2,000 – $5,000",
      "$5,000 – $10,000",
      "$10,000 – $25,000",
      "$25,000+",
      "Undecided / Need Guidance",
    ],
  },
  {
    name: "phone",
    label: "Phone / Contact Number",
    type: "tel",
    placeholder: "+1 (555) 000-0000",
    required: false,
  },
  {
    name: "project",
    label: "Project Description & Goals",
    type: "textarea",
    placeholder:
      "Tell us about your project requirements, target audience, desired features, or reference websites you like...",
    required: true,
    colSpan: 2,
  },
];

const relatedServices = [
  {
    title: "API & System Integrations",
    href: "/services/api-system-integrations",
    description:
      "Connect your custom website with ERPNext, CRM pipelines, payment gateways, and third-party SaaS tools.",
  },
  {
    title: "Cloud Hosting & Maintenance",
    href: "/services/cloud-hosting-maintenance",
    description:
      "High-reliability cloud server management, automated daily backups, SSL, and ongoing technical maintenance.",
  },
];

export default function CustomWebsiteDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-[#050816] dark:text-white">
      <ServiceJsonLd
        serviceName="Custom Website Development"
        serviceDescription="Get a custom, responsive website tailored to your business goals. Explore website development, redesign and custom web application services from Zynovix."
        serviceUrl="/services/custom-website-development"
        faqs={faqs}
      />

      {/* 1. Hero Section */}
      <ServiceHero
        badge="Custom Web Architecture"
        title="Custom Website Development for Growing Businesses"
        description="Build a professional, responsive website tailored to your business goals—from corporate websites and e-commerce stores to custom web applications."
        primaryCta={{
          label: "Discuss Your Project",
          href: "#enquiry",
        }}
        secondaryCta={{
          label: "View Our Work",
          href: "/portfolio",
        }}
        visual={<WebsiteMockupVisual />}
      />

      {/* 2. Problem / Need: Generic Templates vs Custom Web Development */}
      <section className="py-20 bg-slate-50/70 dark:bg-[#070B18]/70 border-y border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                The Business Challenge
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Why Off-The-Shelf Templates Limit Your Growth
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Cookie-cutter templates and bloated website builders often look acceptable initially, but soon create painful bottlenecks: sluggish page loads that hurt Google rankings, inflexible layouts that resist custom integrations, and generic branding that fails to convert B2B buyers.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-rose-500" />
                  <span>Slow load speeds and poor mobile responsiveness driving visitors away</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-rose-500" />
                  <span>Rigid CMS plugins vulnerable to security breaches and plugin conflicts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-rose-500" />
                  <span>Inability to integrate deeply with your internal ERP, CRM, or order systems</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl dark:border-cyan-500/20 dark:bg-slate-900/90">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      The Zynovix Custom Engineering Approach
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Engineered for maximum speed, security, and search performance
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm">
                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4 text-emerald-500" /> Sub-Second Speed
                    </div>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                      Clean Next.js SSR architecture delivering 95+ Core Web Vitals and lightning page transitions.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4 text-emerald-500" /> Tailored Brand Authority
                    </div>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                      Bespoke UI designs built specifically around your brand guidelines and conversion funnels.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4 text-emerald-500" /> Scalable Data Integrations
                    </div>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                      Direct REST API and webhook pipelines connecting to your ERPNext, databases, and payment processors.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4 text-emerald-500" /> Full IP & Code Ownership
                    </div>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                      You own 100% of the code, digital assets, and infrastructure with zero platform lock-in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Build */}
      <section className="py-20 bg-white dark:bg-[#050816]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Complete Web Capabilities
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              What We Build
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              From lead-generating corporate websites to complex interactive web apps, we build solutions that accelerate your digital presence.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeBuild.map((item) => {
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
      <section className="py-20 bg-slate-50/70 dark:bg-[#070B18]/70 border-t border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Engineered for Quality
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Features & Technical Capabilities
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Every website we deliver incorporates enterprise standards for accessibility, mobile performance, search engine visibility, and security.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuresCapabilities.map((feat) => {
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

      {/* 5. Process Timeline */}
      <ServiceProcessTimeline
        heading="Our Website Development Process"
        subheading="A disciplined six-stage delivery model taking you from initial concept to a validated, high-performing live website."
        steps={developmentSteps}
      />

      {/* 6. Proof & Portfolio Showcase */}
      <section className="py-20 bg-white dark:bg-[#050816]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                Verified Proof Points
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Featured Web Projects & Case Studies
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Real project screenshots, architectural objectives, and delivered outcomes from our client portfolio.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Project 1: High-Performance E-commerce Portal */}
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 dark:border-slate-800 dark:bg-slate-900/60">
              <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-slate-800">
                <Image
                  src="/images/portfolio/e-commerce.webp"
                  alt="High-Performance E-commerce Web Portal Screenshot"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  Live Client Project
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  <span>D2C E-Commerce</span> • <span>Next.js & Stripe</span>
                </div>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  High-Performance E-commerce Web Portal
                </h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  Ultra-fast headless e-commerce storefront delivering sub-second page loads, instant faceted filtering, and streamlined checkout.
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2 border-y border-slate-100 py-3 dark:border-slate-800 text-center">
                  <div>
                    <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">0.8s</div>
                    <div className="text-[10px] text-slate-500">Page Load Time</div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">98+</div>
                    <div className="text-[10px] text-slate-500">Lighthouse Score</div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">+28%</div>
                    <div className="text-[10px] text-slate-500">Mobile Conversion</div>
                  </div>
                </div>

                <div className="mt-5 flex justify-end">
                  <Link
                    href="/portfolio/high-performance-ecommerce-portal"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2: Hospitality & Hotel Management Suite */}
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 dark:border-slate-800 dark:bg-slate-900/60">
              <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-slate-800">
                <Image
                  src="/images/portfolio/hotel-suite.webp"
                  alt="Hospitality and Hotel Management Web App Screenshot"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  Live Client Project
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  <span>Web Application</span> • <span>Next.js & PostgreSQL</span>
                </div>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  Hospitality & Hotel Management Suite
                </h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  All-in-one property management web application for room reservations, front-desk POS, and housekeeping operations.
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2 border-y border-slate-100 py-3 dark:border-slate-800 text-center">
                  <div>
                    <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">0</div>
                    <div className="text-[10px] text-slate-500">Double Bookings</div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">+35%</div>
                    <div className="text-[10px] text-slate-500">Direct Bookings</div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">4.9/5</div>
                    <div className="text-[10px] text-slate-500">User Rating</div>
                  </div>
                </div>

                <div className="mt-5 flex justify-end">
                  <Link
                    href="/portfolio/hospitality-hotel-management-suite"
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
        heading="Website Development FAQs"
        subheading="Clear answers regarding pricing, project timelines, CMS support, and technical deliverables."
        faqs={faqs}
      />

      {/* 8. Final CTA & Enquiry Form */}
      <ServiceEnquiryForm
        serviceName="Custom Website Development"
        formTitle="Discuss Your Website Project With Our Engineers"
        formSubtitle="Tell us about your brand, functional goals, and budget. We will review your specifications and provide an architectural proposal within 24 hours."
        submitButtonText="Request Website Proposal"
        fields={formFields}
      />

      {/* 9. Contextual Internal Links */}
      <ServiceInternalLinks
        currentServiceTitle="Custom Website Development"
        relatedServices={relatedServices}
      />
    </main>
  );
}
