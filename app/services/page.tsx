import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Hotel,
  LayoutDashboard,
  Layers,
  Cloud,
  Globe,
  Database,
  Cpu,
  Sparkles,
} from "lucide-react";
import ProjectEstimator from "@/components/interactive/ProjectEstimator";
import { TechDotGrid, TechCircuitMesh, AmbientAtmosphereGlow, BlueprintGrid } from "@/components/ui/TechPattern";

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
    <main className="relative min-h-screen bg-white text-slate-900 dark:bg-[#050816] dark:text-white">
      {/* Background Decor */}
      <TechDotGrid opacity={0.035} />
      <TechCircuitMesh />
      <AmbientAtmosphereGlow variant="cyan-blue" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            <Sparkles size={14} /> Comprehensive Engineering Suites
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Enterprise Services & Tailored Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            From modern Next.js 16 web applications and Frappe ERPNext deployments to specialized hotel software and automated cloud infrastructure.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white/90 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-cyan-400"
              >
                {/* Image Banner */}
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

                  {/* Icon floating pill */}
                  <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 dark:bg-slate-900/90 text-cyan-600 dark:text-cyan-400 shadow-lg backdrop-blur-md">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white transition group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                      {service.title}
                    </h2>
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
                    <span>Explore Service Details</span>
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="relative mt-24 overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100/90 p-8 sm:p-12 text-slate-900 shadow-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/60 dark:text-white">
          <h3 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Why Choose Zynovix?
          </h3>
          <p className="mt-2 text-center text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            We merge enterprise-grade system engineering with rapid delivery cycles and dedicated support.
          </p>
          <div className="mt-10 grid gap-6 text-center grid-cols-2 md:grid-cols-4">
            <div>
              <p className="text-4xl sm:text-5xl font-black text-cyan-500 dark:text-cyan-400">5+</p>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-black text-cyan-500 dark:text-cyan-400">98%</p>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">Success Rate</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-black text-cyan-500 dark:text-cyan-400">8+</p>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">Global Clients</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-black text-cyan-500 dark:text-cyan-400">24/7</p>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">Technical Support</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105 shadow-md shadow-blue-500/20"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Interactive Scope & Architecture Estimator */}
      <ProjectEstimator />
    </main>
  );
}