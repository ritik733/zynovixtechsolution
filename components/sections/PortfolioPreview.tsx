import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Frappe ERPNext Enterprise Setup",
    category: "Frappe ERPNext",
    description:
      "Comprehensive ERPNext implementation featuring custom Doctypes, automated billing, multi-location inventory, and role-based permissions.",
    image: "/images/team/Zeno_ai.png",
    icon: "⚙️",
  },
  {
    title: "Hospitality & Hotel Management Suite",
    category: "Custom Software",
    description:
      "All-in-one software for hotel bookings, room inventory, guest check-in/out, POS billing, and housekeeping management.",
    image: null,
    icon: "🏨",
  },
  {
    title: "High-Performance Corporate Web Portal",
    category: "Website Development",
    description:
      "Responsive, SEO-optimized business web platform and customer portal built with Next.js, React, and modern UI design.",
    image: null,
    icon: "🌐",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="bg-white py-24 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            Portfolio
          </span>
          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Featured Web, ERP &
            <span className="block text-cyan-400">
              Software Deployments
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-slate-600 dark:text-slate-400 font-medium">
            Discover our proven track record delivering responsive websites, customized Frappe ERPNext
            systems, and tailor-made business management tools like hotel solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-sm transition hover:-translate-y-2 hover:border-cyan-500 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              {/* Image Container – now uses real image */}
              <div className="relative h-52 w-full bg-slate-800">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  // Fallback gradient if no image is provided
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-6xl">
                    {project.icon || "💼"}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                  {project.category}
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
                <button className="mt-8 flex items-center font-medium text-cyan-600 dark:text-cyan-400 transition hover:translate-x-2">
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold hover:scale-105 transition"
          >
            View Full Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}