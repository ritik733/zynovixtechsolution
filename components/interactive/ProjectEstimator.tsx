"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Database,
  Hotel,
  Cpu,
  Layers,
  Cloud,
  Check,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
  Compass,
} from "lucide-react";

type ServiceType =
  | "website"
  | "erpnext"
  | "hospitality"
  | "custom_software"
  | "integrations"
  | "cloud";

type ComplexityType = "starter" | "growth" | "enterprise";

interface ServiceOption {
  id: ServiceType;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
}

const serviceOptions: ServiceOption[] = [
  {
    id: "website",
    title: "Custom Website / Storefront",
    subtitle: "Next.js 16 SSR, headless CMS & Core Web Vitals",
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "erpnext",
    title: "Frappe & ERPNext Solution",
    subtitle: "Custom DocTypes, GST ledger, inventory & accounting",
    icon: Database,
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: "hospitality",
    title: "Hotel Management Software",
    subtitle: "PMS, OTA channel manager & contactless folio",
    icon: Hotel,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "custom_software",
    title: "Custom Business Platform",
    subtitle: "Tailored SaaS, internal portals & automation engines",
    icon: Cpu,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "integrations",
    title: "API & System Integrations",
    subtitle: "Payment gateways, ERP sync & high-volume webhooks",
    icon: Layers,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "cloud",
    title: "Cloud DevOps & Maintenance",
    subtitle: "AWS/Docker infrastructure, automated backups & 99.9% SLA",
    icon: Cloud,
    color: "from-sky-500 to-cyan-600",
  },
];

const complexityOptions = [
  {
    id: "starter" as ComplexityType,
    name: "Starter / MVP",
    tagline: "Speed to market",
    timeline: "2 – 4 Weeks",
    description: "Essential workflows, standard design system, zero bloat.",
  },
  {
    id: "growth" as ComplexityType,
    name: "Growth Scale",
    tagline: "High-velocity business",
    timeline: "4 – 8 Weeks",
    description: "Multi-branch logic, custom integrations, role-based controls.",
  },
  {
    id: "enterprise" as ComplexityType,
    name: "Enterprise Custom",
    tagline: "Mission-critical operations",
    timeline: "8 – 14 Weeks",
    description: "High-availability clustering, bespoke DocTypes, deep migration & 24/7 SLA.",
  },
];

const addOnOptions = [
  { id: "gst", label: "GST & Automated E-Invoicing Engine" },
  { id: "migration", label: "Legacy Database Cleanse & Zero-Loss Migration" },
  { id: "multilingual", label: "Multi-Currency & Internationalization" },
  { id: "sla247", label: "24/7 Priority Emergency Support SLA" },
];

export default function ProjectEstimator() {
  const [selectedService, setSelectedService] = useState<ServiceType>("erpnext");
  const [selectedComplexity, setSelectedComplexity] = useState<ComplexityType>("growth");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["gst", "migration"]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Recommendation engine calculations
  const getArchitectureRecommendation = () => {
    switch (selectedService) {
      case "website":
        return {
          stack: "Next.js 16 (App Router) + Tailwind CSS + Edge Caching",
          team: "1 Lead Frontend Architect, 1 Full-Stack Engineer, 1 UI/UX Specialist",
          deliverables: "Sub-second LCP, 98+ Lighthouse score, Schema.org SEO, responsive storefront.",
        };
      case "erpnext":
        return {
          stack: "Frappe Framework v15 + MariaDB + Python Hooks + Redis Cache",
          team: "1 Certified Frappe Architect, 1 Python ERP Developer, 1 QA Engineer",
          deliverables: "Custom DocType workflows, role-based permission matrix, automated reporting.",
        };
      case "hospitality":
        return {
          stack: "Zynovix PMS Core + Real-time Channel Webhooks + PostgreSQL",
          team: "1 Hospitality Tech Lead, 1 Backend Integration Dev, 1 POS Specialist",
          deliverables: "0 double bookings guarantee, mobile check-in folio, unified restaurant POS.",
        };
      case "custom_software":
        return {
          stack: "TypeScript + Next.js + Node.js / Python API + PostgreSQL",
          team: "1 Solutions Architect, 2 Full-Stack Engineers, 1 DevOps Specialist",
          deliverables: "Automated business logic, secure JWT/OAuth auth, scalable microservice APIs.",
        };
      case "integrations":
        return {
          stack: "Distributed Webhook Queue + REST/GraphQL APIs + Redis Buffering",
          team: "1 Integration Architect, 1 Backend Systems Engineer",
          deliverables: "Fault-tolerant retry logic, cryptographic verification, zero packet drop.",
        };
      case "cloud":
        return {
          stack: "AWS EC2/ECS + Docker Compose + Nginx Reverse Proxy + Automated Snapshots",
          team: "1 Senior Cloud DevOps Engineer, 1 Security Auditor",
          deliverables: "99.9% uptime SLA, automated offsite daily backups, SSL TLS 1.3 hardening.",
        };
    }
  };

  const currentRecommendation = getArchitectureRecommendation();
  const currentComplexity = complexityOptions.find((c) => c.id === selectedComplexity)!;

  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-24 dark:bg-[#050816]">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[180px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            <Compass size={14} /> Interactive Scope & Architecture Planner
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Estimate Your Project Scope & Timeline
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Select your service requirements below to receive an instant engineering architecture recommendation, timeline estimate, and delivery blueprint.
          </p>
        </div>

        {/* Main 2-Column Interface */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls - Left 7 cols */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Select Service */}
            <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  Step 1 • Select Primary Focus
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">6 Options Available</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((svc) => {
                  const Icon = svc.icon;
                  const isSelected = selectedService === svc.id;

                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => setSelectedService(svc.id)}
                      className={`flex items-start gap-3 rounded-xl p-3.5 text-left transition-all duration-200 border ${
                        isSelected
                          ? "border-cyan-500 bg-cyan-50/50 shadow-md shadow-cyan-500/10 dark:border-cyan-400 dark:bg-cyan-500/10"
                          : "border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-700"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${svc.color} text-white shadow-sm`}
                      >
                        <Icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                          {svc.title}
                        </h3>
                        <p className="mt-0.5 text-[11px] leading-tight text-slate-500 dark:text-slate-400 line-clamp-2">
                          {svc.subtitle}
                        </p>
                      </div>
                      {isSelected && (
                        <Check size={16} className="text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Complexity Level */}
            <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block mb-4">
                Step 2 • Select Scope Complexity
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {complexityOptions.map((opt) => {
                  const isSelected = selectedComplexity === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedComplexity(opt.id)}
                      className={`rounded-xl p-4 text-left transition-all border ${
                        isSelected
                          ? "border-violet-500 bg-violet-50/50 shadow-md shadow-violet-500/10 dark:border-violet-400 dark:bg-violet-500/10"
                          : "border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {opt.name}
                        </span>
                        {isSelected && <Check size={14} className="text-violet-600 dark:text-violet-400" />}
                      </div>
                      <p className="text-[11px] font-semibold text-violet-600 dark:text-violet-400">
                        {opt.tagline}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                        {opt.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block mb-4">
                Step 3 • Add-on Capabilities (Optional)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addOnOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-left text-xs transition-colors border ${
                        isChecked
                          ? "border-emerald-500/50 bg-emerald-50/50 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300 font-semibold"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/30 dark:text-slate-400"
                      }`}
                    >
                      <div
                        className={`flex h-4 w-4 items-center justify-center rounded border ${
                          isChecked
                            ? "border-emerald-500 bg-emerald-500 text-white"
                            : "border-slate-300 dark:border-slate-700"
                        }`}
                      >
                        {isChecked && <Check size={12} strokeWidth={3} />}
                      </div>
                      <span className="flex-1 truncate">{addon.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Blueprint Card - Right 5 cols (Sticky) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl border border-violet-500/30 bg-white/95 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl dark:bg-[#070B18]/95 dark:shadow-[0_20px_60px_rgba(110,80,255,.2)]">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 text-white">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Architecture Blueprint
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Calculated for your selected scope
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                  Instant Output
                </span>
              </div>

              {/* Estimated Timeline */}
              <div className="mt-6 rounded-2xl bg-slate-50 p-4 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                    <Clock size={15} className="text-cyan-500" />
                    <span>Estimated Delivery Window:</span>
                  </div>
                  <span className="text-base font-extrabold text-cyan-600 dark:text-cyan-400">
                    {currentComplexity.timeline}
                  </span>
                </div>
              </div>

              {/* Recommended Stack */}
              <div className="mt-5 space-y-4 text-xs">
                <div>
                  <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                    ENGINEERING STACK
                  </span>
                  <div className="rounded-xl bg-slate-100/90 dark:bg-white/5 p-3 text-slate-800 dark:text-slate-200 font-mono text-[11px]">
                    {currentRecommendation.stack}
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                    DEDICATED DELIVERY TEAM
                  </span>
                  <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                    <Users size={15} className="text-violet-500 flex-shrink-0 mt-0.5" />
                    <span>{currentRecommendation.team}</span>
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                    KEY OUTCOMES INCLUDED
                  </span>
                  <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                    <ShieldCheck size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{currentRecommendation.deliverables}</span>
                  </div>
                </div>

                {selectedAddons.length > 0 && (
                  <div>
                    <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                      ACTIVE ADD-ONS ({selectedAddons.length})
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedAddons.map((id) => {
                        const addon = addOnOptions.find((a) => a.id === id);
                        return (
                          <span
                            key={id}
                            className="rounded-md bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-[10px] text-slate-600 dark:text-slate-300"
                          >
                            ✓ {addon?.label.split(" ")[0]}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-white/10">
                <Link
                  href={`/contact?service=${selectedService}&tier=${selectedComplexity}`}
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 px-6 py-4 font-bold text-white transition hover:scale-[1.02] shadow-lg shadow-cyan-500/25 text-sm"
                >
                  Request Technical Proposal & Discovery Call
                  <ArrowRight size={16} />
                </Link>
                <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400">
                  Zero obligation • Confidential • Direct conversation with lead engineers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
