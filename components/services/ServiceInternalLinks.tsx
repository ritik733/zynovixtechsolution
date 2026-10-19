import Link from "next/link";
import { ArrowUpRight, FolderGit2, Info, MessageSquare } from "lucide-react";

export interface RelatedLink {
  title: string;
  href: string;
  description: string;
}

interface ServiceInternalLinksProps {
  currentServiceTitle: string;
  relatedServices: RelatedLink[];
  portfolioLinks?: {
    title: string;
    href: string;
    category: string;
  }[];
}

export default function ServiceInternalLinks({
  currentServiceTitle,
  relatedServices,
  portfolioLinks = [
    {
      title: "Frappe ERPNext Enterprise Setup",
      href: "/portfolio/frappe-erpnext-enterprise-setup",
      category: "ERP Implementation",
    },
    {
      title: "Hospitality & Hotel Management Suite",
      href: "/portfolio/hospitality-hotel-management-suite",
      category: "Full-Stack Web App",
    },
  ],
}: ServiceInternalLinksProps) {
  return (
    <section className="py-16 bg-white dark:bg-[#050816] border-t border-slate-200/80 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            Explore Ecosystem
          </span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Related Services & Practical Case Studies
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Complement your {currentServiceTitle} strategy with our integrated engineering services.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Related Services Cards */}
          {relatedServices.map((rel) => (
            <Link
              key={rel.title}
              href={rel.href}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40 dark:hover:bg-slate-900/80"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  Related Solution
                </span>
                <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400 transition-colors">
                  {rel.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  {rel.description}
                </p>
              </div>
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                <span>View Solution Scope</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}

          {/* Portfolio & Navigation Links Card */}
          <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-6 dark:border-blue-500/30 dark:bg-slate-900/60 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Case Studies & Verification
              </span>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                Live Production Proof
              </h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Explore real business outcomes and technical architecture breakdowns from our delivered client work.
              </p>

              <div className="mt-4 space-y-2">
                {portfolioLinks.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2 text-xs font-medium text-slate-800 transition hover:bg-white hover:text-cyan-600 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:text-cyan-400"
                  >
                    <span className="truncate pr-2">{p.title}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 flex-shrink-0 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
              >
                <FolderGit2 className="h-3.5 w-3.5" />
                <span>All Projects</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
              >
                <Info className="h-3.5 w-3.5" />
                <span>About Us</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Direct Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
