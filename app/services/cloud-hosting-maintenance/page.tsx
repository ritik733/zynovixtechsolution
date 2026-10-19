import type { Metadata } from "next";
import Link from "next/link";
import {
  Server,
  ShieldCheck,
  HardDrive,
  Activity,
  Zap,
  Lock,
  ArrowRight,
  CheckCircle,
  Sparkles,
  RefreshCw,
  Clock,
  Layers,
  Database,
  CheckCircle2,
  AlertCircle,
  FileText,
  Sliders,
  Cpu,
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceProcessTimeline from "@/components/services/ServiceProcessTimeline";
import ServiceFAQAccordion from "@/components/services/ServiceFAQAccordion";
import ServiceEnquiryForm, { FormFieldConfig } from "@/components/services/ServiceEnquiryForm";
import ServiceInternalLinks from "@/components/services/ServiceInternalLinks";
import ServiceJsonLd from "@/components/services/ServiceJsonLd";
import { CloudHostingVisual } from "@/components/services/ServiceVisuals";
import { HeroAtmosphereGlow } from "@/components/ui/TechPattern";

export const metadata: Metadata = {
  title: "Cloud Hosting & Website Maintenance Services | Zynovix",
  description:
    "Explore cloud hosting setup, application deployment, backups, monitoring and ongoing website and server maintenance for business applications.",
  alternates: {
    canonical: "/services/cloud-hosting-maintenance",
  },
  openGraph: {
    title: "Cloud Hosting & Maintenance Services | Zynovix Tech Solutions",
    description:
      "Maintain websites and business applications with hosting setup, deployment support, monitoring, backups and ongoing technical maintenance.",
    url: "https://zynovixtechsolutions.com/services/cloud-hosting-maintenance",
    type: "website",
  },
};

const hostingServices = [
  {
    icon: Server,
    title: "Cloud Setup & Server Provisioning",
    description:
      "Architecture design, compute provisioning, and OS hardening on AWS, DigitalOcean, Hetzner, or Linode tailored to your anticipated traffic and database loads.",
  },
  {
    icon: Zap,
    title: "Production Application Deployment",
    description:
      "Automated CI/CD deployment pipelines, containerized Docker environments, and zero-downtime releases for Next.js web applications and Frappe ERPNext instances.",
  },
  {
    icon: Sliders,
    title: "Server & Database Optimization",
    description:
      "Tuning Nginx reverse proxies, MariaDB / PostgreSQL query caching, Redis in-memory storage, and static asset CDN delivery for maximum responsiveness.",
  },
  {
    icon: HardDrive,
    title: "Automated Offsite Backups & Recovery",
    description:
      "Scheduled daily snapshots of entire database volumes and application files encrypted with AES-256 and stored offsite with documented restoration protocols.",
  },
  {
    icon: ShieldCheck,
    title: "Security Patches & Vulnerability Audits",
    description:
      "Proactive Linux OS kernel upgrades, web server vulnerability remediation, SSL certificate auto-renewals, and firewall (UFW / Cloudflare) rule management.",
  },
  {
    icon: Activity,
    title: "24/7 Heartbeat & Health Monitoring",
    description:
      "Continuous server monitoring tracking CPU spikes, memory exhaustion, disk space thresholds, SSL validity, and HTTP response latencies with instant alerts.",
  },
];

const infrastructureComponents = [
  {
    title: "Application Layer",
    tech: "Next.js 16, React 19, Python Frappe, Node.js",
    description:
      "Isolated containerized runtime environments configured with PM2 process managers and auto-restart policies.",
  },
  {
    title: "Web Server & Reverse Proxy",
    tech: "Nginx, SSL/TLS, HTTP/2, Brotli Compression",
    description:
      "High-concurrency reverse proxy handling SSL termination, rate-limiting, and micro-caching for static assets.",
  },
  {
    title: "Database Layer",
    tech: "PostgreSQL, MariaDB, Redis Caching",
    description:
      "Tuned relational databases with connection pooling, query indexing, and automated read/write buffer allocations.",
  },
  {
    title: "Storage & Backups",
    tech: "Encrypted Cloud Object Storage (S3-Compatible)",
    description:
      "Automated daily snapshot retention schedules with point-in-time recovery capabilities.",
  },
  {
    title: "Security & Firewall",
    tech: "UFW, Fail2ban, Cloudflare DDoS Protection",
    description:
      "SSH key authentication, port whitelisting, brute-force mitigation, and automated TLS certificate renewals.",
  },
  {
    title: "Live Monitoring & Telemetry",
    tech: "Prometheus, Grafana, Uptime Kuma, Alertmanager",
    description:
      "Instant notification pings via Slack, WhatsApp, or email if server response time exceeds normal thresholds.",
  },
];

const maintenanceWorkflow = [
  {
    number: "01",
    title: "Continuous 24/7 Monitoring",
    description:
      "Automated heartbeat sensors query server endpoints, database connections, and disk storage every 60 seconds.",
    icon: Activity,
  },
  {
    number: "02",
    title: "Alert Review & Triage",
    description:
      "When a warning threshold is triggered (e.g. CPU surge or memory exhaustion), an on-duty engineer evaluates severity.",
    icon: AlertCircle,
  },
  {
    number: "03",
    title: "Rapid Diagnosis",
    description:
      "Inspecting system logs, slow database query logs, and network traffic to pinpoint root causes without disrupting users.",
    icon: Sliders,
  },
  {
    number: "04",
    title: "Remediation & Patch Application",
    description:
      "Applying system fixes, clearing stale caches, restarting stalled daemons, or scaling server compute as needed.",
    icon: RefreshCw,
  },
  {
    number: "05",
    title: "Health Verification",
    description:
      "Confirming that application response codes, database latencies, and Core Web Vitals have returned to optimal states.",
    icon: CheckCircle2,
  },
  {
    number: "06",
    title: "Monthly Reporting",
    description:
      "Delivering a clear monthly health summary to your team detailing uptime percentage, backup status, and security updates.",
    icon: FileText,
  },
];

const supportPlans = [
  {
    name: "Essential Maintenance",
    badge: "Websites & Portals",
    target: "Corporate websites, small web apps, and company portals",
    features: [
      "24/7 Server uptime monitoring",
      "Weekly automated offsite backups",
      "SSL certificate maintenance",
      "Monthly security & OS updates",
      "4-Hour incident response SLA",
      "2 Hours included technical support / month",
    ],
  },
  {
    name: "Business Core",
    badge: "Most Popular",
    highlighted: true,
    target: "ERPNext deployments, e-commerce stores, and active web tools",
    features: [
      "24/7 Continuous health & latency monitoring",
      "Daily automated offsite database snapshots",
      "Database index & performance optimization",
      "Proactive security patching & firewall rules",
      "2-Hour incident response SLA",
      "5 Hours included technical support / month",
      "Staging environment for pre-update testing",
    ],
  },
  {
    name: "Enterprise Dedicated",
    badge: "Mission Critical",
    target: "Multi-plant ERPNext, high-traffic apps, and custom platforms",
    features: [
      "Real-time cluster & node monitoring",
      "Twice-daily database backups + point-in-time recovery",
      "Disaster recovery drill & staging replication",
      "Dedicated solutions architect contact",
      "1-Hour critical response SLA (24/7/365)",
      "12 Hours included engineering support / month",
      "Custom failover & load balancing setup",
    ],
  },
];

const faqs = [
  {
    question: "Can you migrate our existing website or ERPNext setup to a new cloud server?",
    answer:
      "Yes. We specialize in zero-downtime server migrations. We configure the target cloud environment, replicate your database and media files, perform full staging verification, and execute the final DNS cutover during low-traffic hours with zero disruption.",
  },
  {
    question: "How often are backups taken, where are they stored, and how fast is recovery?",
    answer:
      "Backups are captured automatically on a daily basis (or twice-daily on Enterprise plans). They are encrypted using AES-256 and stored offsite in separate geographic cloud regions. Complete database restoration can typically be completed in under 20 minutes.",
  },
  {
    question: "What is your typical response time when an alert or server issue arises?",
    answer:
      "Our automated monitoring triggers alerts the moment an anomaly is detected. Depending on your chosen support tier, our response times range from 1 to 4 hours, with critical outages prioritized immediately.",
  },
  {
    question: "Which cloud hosting infrastructure providers do you support?",
    answer:
      "We support industry-leading cloud providers including Amazon Web Services (AWS), DigitalOcean, Hetzner Cloud, Linode (Akamai), and Google Cloud Platform (GCP). We help you choose the best provider based on geographic latency and your operational budget.",
  },
  {
    question: "How are cloud server costs separated from monthly maintenance fees?",
    answer:
      "We believe in 100% transparency. Cloud infrastructure costs (e.g. AWS or DigitalOcean droplet invoices) are billed directly to your company's own cloud account, ensuring you retain total ownership. Our maintenance fee covers ongoing management, monitoring, backups, and engineering support hours.",
  },
];

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Sarah Connor",
    required: true,
  },
  {
    name: "email",
    label: "Work Email",
    type: "email",
    placeholder: "sarah@company.com",
    required: true,
  },
  {
    name: "company",
    label: "Company / Organization",
    type: "text",
    placeholder: "Cyberdyne Systems",
    required: true,
  },
  {
    name: "currentPlatform",
    label: "Current Cloud Provider / Hosting Environment",
    type: "select",
    required: true,
    options: [
      "Amazon Web Services (AWS)",
      "DigitalOcean",
      "Hetzner Cloud",
      "Linode / Akamai",
      "cPanel / Shared Hosting",
      "On-Premise Physical Server",
      "Need New Cloud Setup",
    ],
  },
  {
    name: "applicationType",
    label: "Application Type to Host / Maintain",
    type: "select",
    required: true,
    options: [
      "Frappe & ERPNext Instance",
      "Next.js / React Web Application",
      "High-Traffic E-Commerce Store",
      "Custom Business Database / API",
      "Multiple Systems & Websites",
    ],
  },
  {
    name: "supportRequirements",
    label: "Primary Support Requirements",
    type: "checkbox-group",
    colSpan: 2,
    options: [
      "Server Setup & Production Deployment",
      "24/7 Uptime & Performance Monitoring",
      "Automated Offsite Daily Backups",
      "Security Patching & OS Hardening",
      "Database Tuning & Speed Optimization",
      "Server Migration from Current Host",
    ],
  },
  {
    name: "phone",
    label: "Phone / WhatsApp",
    type: "tel",
    placeholder: "+1 (555) 567-8901",
    required: false,
  },
  {
    name: "project",
    label: "Current Server Issues or Maintenance Goals",
    type: "textarea",
    placeholder:
      "Describe any recent crashes, slow database queries, lack of backups, or your upcoming migration timeline...",
    required: true,
    colSpan: 2,
  },
];

const relatedServices = [
  {
    title: "Custom Website Development",
    href: "/services/custom-website-development",
    description:
      "Modern, ultra-fast websites and web applications built with Next.js and optimized for Core Web Vitals.",
  },
  {
    title: "Frappe & ERPNext Solutions",
    href: "/services/frappe-erpnext-solutions",
    description:
      "End-to-end ERP implementation, custom DocTypes, and automated business workflows.",
  },
  {
    title: "Custom Business Software",
    href: "/services/custom-business-software",
    description:
      "Tailor-made internal dashboards and operational tools built around your proprietary workflows.",
  },
];

export default function CloudHostingMaintenancePage() {
  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-hidden dark:bg-[#050816] dark:text-white">
      {/* Background Decor - Exact match to Homepage Hero */}
      <HeroAtmosphereGlow />
      <ServiceJsonLd
        serviceName="Cloud Hosting & Maintenance"
        serviceDescription="Explore cloud hosting setup, application deployment, backups, monitoring and ongoing website and server maintenance for business applications."
        serviceUrl="/services/cloud-hosting-maintenance"
        faqs={faqs}
      />

      {/* 1. Hero Section */}
      <ServiceHero
        badge="Cloud Reliability & SLA Maintenance"
        title="Cloud Hosting & Maintenance for Reliable Business Applications"
        description="Maintain websites and business applications with hosting setup, deployment support, monitoring, backups and ongoing technical maintenance."
        primaryCta={{
          label: "Discuss Hosting Requirements",
          href: "#enquiry",
        }}
        secondaryCta={{
          label: "Explore Maintenance Services",
          href: "#services",
        }}
        visual={<CloudHostingVisual />}
      />

      {/* 2. Hosting & Maintenance Services */}
      <section id="services" className="py-20 bg-slate-50/70 dark:bg-transparent border-y border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Proactive Infrastructure Care
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Hosting & Maintenance Capabilities
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              We manage the entire lifecycle of your server infrastructure so your internal teams can focus on running your business.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hostingServices.map((service) => {
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

      {/* 3. Infrastructure Overview */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Technical Architecture
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Supported Infrastructure Stack
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              We configure and maintain proven, battle-tested technologies with transparent architectural design.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {infrastructureComponents.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  {item.tech}
                </div>
                <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Maintenance Workflow */}
      <ServiceProcessTimeline
        heading="Our Rapid Maintenance & Incident Workflow"
        subheading="How issues are caught by heartbeat monitors, triaged by engineers, resolved, and documented."
        steps={maintenanceWorkflow}
      />

      {/* 5. Support Plans Comparison */}
      <section className="py-20 bg-slate-50/70 dark:bg-transparent border-t border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Transparent Care Packages
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Support & Maintenance Tiers
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Real SLA commitments, transparent inclusions, and predictable technical assistance for every stage of your business.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 items-stretch">
            {supportPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlighted
                    ? "border-2 border-cyan-500 bg-white shadow-xl dark:bg-slate-900 dark:border-cyan-400"
                    : "border border-slate-200 bg-white/80 shadow-sm dark:border-slate-800 dark:bg-slate-900/50"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    {!plan.highlighted && plan.badge}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{plan.target}</p>

                  <div className="mt-6 border-t border-slate-100 pt-6 dark:border-slate-800">
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="#enquiry"
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold transition ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md hover:scale-[1.02]"
                        : "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                    }`}
                  >
                    <span>Inquire About {plan.name}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <ServiceFAQAccordion
        heading="Cloud Hosting & Maintenance FAQs"
        subheading="Clear answers regarding data migrations, disaster recovery, cloud billing separation, and emergency incident responses."
        faqs={faqs}
      />

      {/* 7. Final CTA & Enquiry Form */}
      <ServiceEnquiryForm
        serviceName="Cloud Hosting & Maintenance"
        formTitle="Discuss Your Cloud Hosting & Support Needs"
        formSubtitle="Share your server platform, current application bottlenecks, or migration goals. Our cloud specialists will evaluate your setup and outline a maintenance SLA plan."
        submitButtonText="Request Hosting Evaluation"
        fields={formFields}
      />

      {/* 8. Contextual Internal Links */}
      <ServiceInternalLinks
        currentServiceTitle="Cloud Hosting & Maintenance"
        relatedServices={relatedServices}
      />
    </main>
  );
}
