import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Sparkles, TrendingUp } from "lucide-react";
import { TechDotGrid, AmbientAtmosphereGlow } from "@/components/ui/TechPattern";

const projects = [
  {
    id: "erp-1",
    slug: "frappe-erpnext-enterprise-setup",
    title: "Frappe ERPNext Enterprise Setup",
    category: "ERP Implementation",
    badge: "Manufacturing",
    description:
      "Unified manufacturing operations, multi-warehouse inventory, and automated GST accounting powered by custom Frappe ERPNext.",
    image: "/images/portfolio/erpnext.webp",
    alt: "Frappe ERPNext enterprise manufacturing, stock ledger, and GST accounting deployment by Zynovix",
    stat: "65% Faster Reconciliation",
  },
  {
    id: "web-1",
    slug: "hospitality-hotel-management-suite",
    title: "Hospitality & Hotel Management Suite",
    category: "Web Application",
    badge: "Hospitality & Resorts",
    description:
      "Comprehensive property management system for room reservations, contactless guest check-ins, dining POS, and room turnover.",
    image: "/images/portfolio/hotel-suite.webp",
    alt: "Hotel PMS and online room booking management software suite engineered by Zynovix",
    stat: "0 Double Bookings Recorded",
  },
  {
    id: "web-2",
    slug: "high-performance-ecommerce-portal",
    title: "High-Performance E-commerce Web Portal",
    category: "Website Development",
    badge: "D2C Brand",
    description:
      "Ultra-fast headless e-commerce storefront delivering sub-second page loads, instant product filtering, and multi-currency checkout.",
    image: "/images/portfolio/e-commerce.webp",
    alt: "High-performance Next.js headless e-commerce web storefront engineered by Zynovix",
    stat: "0.8s Average Load • 98+ Lighthouse",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-slate-900 dark:bg-[#070B18] dark:text-white border-t border-slate-200/80 dark:border-slate-800">
      {/* Pattern decor */}
      <TechDotGrid opacity={0.035} />
      <AmbientAtmosphereGlow variant="cyan-blue" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Proven Production Track Record</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
            Featured Deployments &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Verified Case Studies
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg">
            Explore how we architect modern websites, customized Frappe ERPNext systems,
            and tailored software suites that solve real operational bottlenecks.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-500/60 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 rounded-full bg-slate-900/85 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                    {project.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer with Stat & Link */}
              <div className="p-7 pt-0">
                <div className="mb-4 flex items-center gap-1.5 rounded-xl border border-emerald-500/20 bg-emerald-50/50 px-3 py-2 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-950/30 dark:text-emerald-400">
                  <TrendingUp className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>{project.stat}</span>
                </div>

                <Link
                  href={`/portfolio/${project.slug || project.id}`}
                  className="inline-flex w-full items-center justify-between font-semibold text-sm text-cyan-600 transition group-hover:text-cyan-700 dark:text-cyan-400 dark:group-hover:text-cyan-300"
                >
                  <span>Read Complete Case Study</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-md shadow-blue-500/20 transition hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            <span>View Full Portfolio & Case Studies</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}