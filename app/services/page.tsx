import Link from "next/link";
import {
  ArrowRight,
  Code,
  Hotel,
  LayoutDashboard,
  Plug,
  Cloud,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    desc: "High-performance websites, corporate portals, and responsive web applications designed to engage visitors and drive conversions.",
    features: ["Next.js & React UI", "Mobile-responsive layouts", "SEO & Core Web Vitals"],
  },
  {
    icon: Code,
    title: "Frappe & ERPNext Solutions",
    desc: "End-to-end ERP implementation, custom Frappe modules, accounting, inventory, and automated business workflows.",
    features: ["Custom Doctypes & Workflows", "Multi-warehouse inventory", "Accounting & finance setup"],
  },
  {
    icon: Hotel,
    title: "Hotel Management Software",
    desc: "Complete hospitality management tools for hotel bookings, room inventory, guest check-in/out, and front desk operations.",
    features: ["Room reservation system", "Front desk & billing POS", "Housekeeping & guest records"],
  },
  {
    icon: LayoutDashboard,
    title: "Custom Business Software",
    desc: "Tailor-made software applications engineered around your unique operational bottlenecks and administrative needs.",
    features: ["Internal admin dashboards", "Workflow automation", "Role-based access security"],
  },
  {
    icon: Plug,
    title: "API & System Integrations",
    desc: "Seamless connectivity between ERPNext, websites, payment gateways, and third-party SaaS tools.",
    features: ["Payment gateway integrations", "REST API & webhook sync", "Third-party platform bridging"],
  },
  {
    icon: Cloud,
    title: "Cloud Hosting & Maintenance",
    desc: "Reliable cloud infrastructure setup, performance monitoring, continuous backups, and dedicated technical maintenance.",
    features: ["Frappe & web server hosting", "Automated backups & security", "24/7 technical support"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-[#050816] dark:text-white">
      {/* Increased top padding to pt-32, kept bottom padding pb-24 */}
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24">
        {/* Heading – less flashy, no badge */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl dark:text-slate-200">
            Our Core Services
          </h2>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-400 font-medium">
            Websites • Frappe ERPNext • Custom Business Software
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            We provide specialized web development, robust Frappe ERPNext
            implementations, and custom management systems like hotel software
            designed to empower your business.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-500 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4">
                  <Icon size={36} className="text-cyan-500 dark:text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">{service.desc}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center font-medium text-cyan-600 dark:text-cyan-400 transition group-hover:translate-x-2">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 rounded-3xl border border-slate-200/80 bg-slate-100/90 p-12 text-slate-900 shadow-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/60 dark:text-white">
          <h3 className="text-center text-4xl font-bold text-slate-900 dark:text-white">Why Choose Us?</h3>
          <div className="mt-12 grid gap-8 text-center md:grid-cols-4">
            <div>
              <h2 className="text-5xl font-bold text-cyan-500 dark:text-cyan-400">5+</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400 font-medium">Projects Delivered</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-cyan-500 dark:text-cyan-400">98%</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400 font-medium">Success Rate</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-cyan-500 dark:text-cyan-400">2+</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400 font-medium">Global Clients</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-cyan-500 dark:text-cyan-400">24/7</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400 font-medium">Technical Support</p>
            </div>
          </div>
          <div className="mt-12 text-center">
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
    </main>
  );
}