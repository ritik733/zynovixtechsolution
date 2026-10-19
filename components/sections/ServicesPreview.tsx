"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Database,
  Hotel,
  Cpu,
  Layers,
  Cloud,
  Sparkles,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Counter from "@/components/Counter";
import { AmbientAtmosphereGlow } from "@/components/ui/TechPattern";

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    href: "/services/custom-website-development",
    image: "/images/services/custom-website-development.webp",
    alt: "Custom responsive website development and Next.js 16 web application interface engineered by Zynovix",
    tag: "Next.js 16 • Headless CMS",
    desc: "High-performance websites, corporate portals, and responsive web applications designed to engage visitors and drive conversions.",
    features: ["Next.js & React UI", "Mobile-responsive layouts", "SEO & Core Web Vitals"],
  },
  {
    icon: Database,
    title: "Frappe & ERPNext Solutions",
    href: "/services/frappe-erpnext-solutions",
    image: "/images/services/frappe-erpnext-solutions.webp",
    alt: "Enterprise Frappe ERPNext accounting, multi-warehouse stock, and custom DocType workflow dashboard by Zynovix",
    tag: "Frappe Framework • ERPNext v15",
    desc: "End-to-end ERP implementation, custom Frappe modules, accounting, inventory, and automated business workflows.",
    features: ["Custom Doctypes & Workflows", "Multi-warehouse inventory", "Accounting & finance setup"],
  },
  {
    icon: Hotel,
    title: "Hotel Management Software",
    href: "/services/hotel-management-software",
    image: "/images/services/hotel-management-software.webp",
    alt: "Hotel PMS software tablet interface with room booking calendar and live OTA channel manager sync by Zynovix",
    tag: "Hotel PMS • Channel Manager",
    desc: "Complete hospitality management tools for hotel bookings, room inventory, guest check-in/out, and front desk operations.",
    features: ["Room reservation system", "Front desk & billing POS", "Housekeeping & guest records"],
  },
  {
    icon: Cpu,
    title: "Custom Business Software",
    href: "/services/custom-business-software",
    image: "/images/services/custom-business-software.webp",
    alt: "Custom enterprise business software and automated workflow pipeline dashboard designed by Zynovix",
    tag: "Tailored SaaS • Automation",
    desc: "Tailor-made software applications engineered around your unique operational bottlenecks and administrative needs.",
    features: ["Internal admin dashboards", "Workflow automation", "Role-based access security"],
  },
  {
    icon: Layers,
    title: "API & System Integrations",
    href: "/services/api-system-integrations",
    image: "/images/services/api-system-integrations.webp",
    alt: "3D enterprise API data pipeline connecting microservices and secure payment gateways engineered by Zynovix",
    tag: "Real-time Sync • Webhooks",
    desc: "Seamless connectivity between ERPNext, websites, payment gateways, and third-party SaaS tools.",
    features: ["Payment gateway integrations", "REST API & webhook sync", "Third-party platform bridging"],
  },
  {
    icon: Cloud,
    title: "Cloud Hosting & Maintenance",
    href: "/services/cloud-hosting-maintenance",
    image: "/images/services/cloud-hosting-maintenance.webp",
    alt: "High-availability enterprise cloud server infrastructure and 99.9% uptime monitoring console by Zynovix",
    tag: "AWS & Docker • 99.9% SLA",
    desc: "Reliable cloud infrastructure setup, performance monitoring, continuous backups, and dedicated technical maintenance.",
    features: ["Frappe & web server hosting", "Automated backups & security", "24/7 technical support"],
  },
];

export default function ServicesPage() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-slate-900 dark:bg-[#050816] dark:text-white min-h-screen">
      {/* Background Atmosphere Glow */}
      <AmbientAtmosphereGlow variant="cyan-blue" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <FadeIn>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              <Sparkles size={14} /> Comprehensive Engineering Suites
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-5xl dark:text-white tracking-tight">
              Our Core Services & Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400 text-base md:text-lg">
              We provide specialized web engineering, robust Frappe ERPNext deployments, and custom operational software designed to accelerate business growth.
            </p>
          </div>
        </FadeIn>

        {/* Service Cards with High-Definition Image Previews */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={service.href}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white/90 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-cyan-400"
                >
                  {/* Top Image Showcase Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Tag badge over image */}
                    <div className="absolute top-3 left-3 rounded-lg border border-white/20 bg-slate-950/75 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                      {service.tag}
                    </div>

                    {/* Icon pill floating over image */}
                    <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 dark:bg-slate-900/90 text-cyan-600 dark:text-cyan-400 shadow-lg backdrop-blur-md">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white transition group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {service.desc}
                      </p>

                      <ul className="mt-4 space-y-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-white/5 pt-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 transition group-hover:translate-x-1">
                      <span>Explore Technical Capabilities</span>
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <FadeIn delay={0.1}>
          <div className="relative mt-24 overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100/90 p-8 sm:p-12 text-slate-900 shadow-md dark:border-slate-800 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 dark:text-white">
            <h3 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why Choose Zynovix Tech Solutions?
            </h3>
            <p className="mt-2 text-center text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Our engineering-first approach eliminates administrative friction and accelerates digital transformation.
            </p>
            <div className="mt-10 grid gap-6 text-center grid-cols-2 md:grid-cols-4">
              <div>
                <h4 className="text-4xl sm:text-5xl font-black text-cyan-500 dark:text-cyan-400">
                  <Counter end={5} suffix="+" />
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Successful Projects
                </p>
              </div>
              <div>
                <h4 className="text-4xl sm:text-5xl font-black text-cyan-500 dark:text-cyan-400">
                  <Counter end={98} suffix="%" />
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Satisfaction Rate
                </p>
              </div>
              <div>
                <h4 className="text-4xl sm:text-5xl font-black text-cyan-500 dark:text-cyan-400">
                  <Counter end={8} suffix="+" />
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Global Enterprise Clients
                </p>
              </div>
              <div>
                <h4 className="text-4xl sm:text-5xl font-black text-cyan-500 dark:text-cyan-400">
                  24/7
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Dedicated SLA Support
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}