"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Cpu,
  Cloud,
  Database,
  Globe,
  Shield,
  Blocks,
  Wifi,
  Sparkles,
} from "lucide-react";
import TiltCard from "@/components/three/TiltCard";
import Reveal3D from "@/components/three/Reveal3D";

const services = [
  {
    icon: Globe,
    title: "Custom Web Development",
    desc: "Modern websites, client portals, and responsive web applications built for performance and growth.",
    features: ["Next.js & React Applications", "Custom Client Portals", "Responsive UI/UX Engineering"],
  },
  {
    icon: Database,
    title: "Enterprise ERP Software",
    desc: "Modular ERP solutions designed around your unique operational and inventory workflows.",
    features: ["Inventory & Supply Chain", "Financial Accounting & Invoicing", "Frappe & Custom ERP Modules"],
  },
  {
    icon: Cpu,
    title: "System & Workflow Automation",
    desc: "Eliminate repetitive manual tasks, automate approval pipelines, and sync disparate platforms.",
    features: ["Process Pipeline Automation", "Scheduled ETL & Triggers", "Data Sync Between Platforms"],
  },
  {
    icon: Blocks,
    title: "Custom Business Solutions",
    desc: "Tailored internal tools, executive dashboards, and management platforms solving core bottlenecks.",
    features: ["Custom Business Dashboards", "Operational Process Audits", "Bespoke Internal Tools"],
  },
  {
    icon: Wifi,
    title: "API & System Integrations",
    desc: "Connect payment gateways, CRMs, logistics, warehouse systems, and third-party webhooks.",
    features: ["Payment Gateway Connectors", "CRM & Webhook Pipelines", "Legacy System Migration"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    desc: "High-availability cloud hosting, containerized deployments, and robust security management.",
    features: ["Docker & Containerization", "Automated Daily Backups", "24/7 Server Monitoring & SLAs"],
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-24 md:py-28 text-white">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-cyan-600/10 blur-[160px]" />
        <div className="absolute right-10 bottom-1/4 h-72 sm:h-80 w-72 sm:w-80 rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal3D rotate={-15}>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <Sparkles size={14} />
              Our Core Services
            </span>
            <h2 className="mt-5 sm:mt-6 text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Enterprise Services &amp;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Software Solutions
              </span>
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-xs sm:text-base text-slate-300">
              We engineer scalable websites, enterprise ERP software, and automated
              digital systems that streamline operations and drive business performance.
            </p>
          </div>
        </Reveal3D>

        {/* Service Cards with 3D Tilt and Layered Depth */}
        <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal3D key={service.title} delay={i * 0.04} rotate={-20}>
                <TiltCard intensity={15} className="h-full">
                  <div className="group relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
                    <div>
                      {/* 3D Floating Icon */}
                      <div
                        className="mb-4 sm:mb-6 inline-flex rounded-xl sm:rounded-2xl bg-cyan-500/10 p-3 sm:p-4 transition-transform duration-300 group-hover:scale-110"
                        style={{ transform: "translateZ(35px)" }}
                      >
                        <Icon size={30} className="text-cyan-400" />
                      </div>

                      {/* 3D Title */}
                      <h3
                        className="text-xl sm:text-2xl font-bold text-white transition group-hover:text-cyan-300"
                        style={{ transform: "translateZ(25px)" }}
                      >
                        {service.title}
                      </h3>

                      {/* 3D Description */}
                      <p
                        className="mt-2.5 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-300"
                        style={{ transform: "translateZ(15px)" }}
                      >
                        {service.desc}
                      </p>

                      {/* Features List */}
                      <ul
                        className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400"
                        style={{ transform: "translateZ(18px)" }}
                      >
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learn More */}
                    <div
                      className="mt-6 sm:mt-8 flex items-center text-xs sm:text-sm font-semibold text-cyan-400 transition group-hover:translate-x-2"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </TiltCard>
              </Reveal3D>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <Reveal3D rotate={-15} delay={0.15}>
          <div className="mt-16 sm:mt-24 rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 sm:p-10 md:p-14 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.1)]">
            <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Why Partner With Zynovix?
            </h3>
            <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
              {[
                ["5+", "Delivered Projects"],
                ["98%", "Client Satisfaction"],
                ["2+", "Global Enterprises"],
                ["24/7", "Dedicated Support"],
              ].map(([value, label], idx) => (
                <TiltCard key={label} intensity={12} glare={false}>
                  <div className="rounded-xl sm:rounded-2xl border border-slate-800/60 bg-slate-900/40 p-3 sm:p-5">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {value}
                    </h2>
                    <p className="mt-1.5 sm:mt-3 text-[11px] sm:text-sm text-slate-300">{label}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
            <div className="mt-8 sm:mt-12 text-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 font-semibold shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 text-sm sm:text-base w-full sm:w-auto min-h-[44px]"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal3D>
      </div>
    </section>
  );
}