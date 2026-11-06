import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { company } from "@/data/company";
import { navigation } from "@/data/navigation";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white text-slate-900 dark:bg-[#050816] dark:text-slate-300 content-auto"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Company */}

          <div>

            <div className="mb-5 flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
                <Image
                  src="/images/logo/Zynovix-logo-Z.webp"
                  alt="Zynovix Tech Solutions Logo"
                  width={197}
                  height={146}
                  className="h-12 w-auto object-contain drop-shadow-[0_4px_16px_rgba(110,80,255,0.25)] transition-transform duration-300 group-hover:scale-105"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-xl font-black tracking-wider uppercase text-slate-900 dark:text-white leading-none transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                      Zynovix
                    </h2>
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                  </div>
                  <p className="mt-1 text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500 dark:text-slate-400 leading-none">
                    Tech Solutions
                  </p>
                </div>
              </Link>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {company.about.description}
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">

              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-cyan-600 dark:hover:text-cyan-400 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Services
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">

              <li>
                <Link href="/services/custom-website-development" className="transition hover:text-cyan-600 dark:hover:text-cyan-400">
                  Custom Website Development
                </Link>
              </li>

              <li>
                <Link href="/services/frappe-erpnext-solutions" className="transition hover:text-cyan-600 dark:hover:text-cyan-400">
                  Frappe & ERPNext Solutions
                </Link>
              </li>

              <li>
                <Link href="/services/hotel-management-software" className="transition hover:text-cyan-600 dark:hover:text-cyan-400">
                  Hotel Management Software
                </Link>
              </li>

              <li>
                <Link href="/services/custom-business-software" className="transition hover:text-cyan-600 dark:hover:text-cyan-400">
                  Custom Business Software
                </Link>
              </li>

              <li>
                <Link href="/services/api-system-integrations" className="transition hover:text-cyan-600 dark:hover:text-cyan-400">
                  API & System Integrations
                </Link>
              </li>

              <li>
                <Link href="/services/cloud-hosting-maintenance" className="transition hover:text-cyan-600 dark:hover:text-cyan-400">
                  Cloud Hosting & Maintenance
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Contact
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">

              <div className="flex items-start gap-3">

                <MapPin
                  className="mt-1 text-cyan-600 dark:text-cyan-400 flex-shrink-0"
                  size={20}
                />

                <span>
                  {company.location}
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Phone
                  className="text-cyan-600 dark:text-cyan-400 flex-shrink-0"
                  size={20}
                />

                <span>
                  {company.phone}
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Mail
                  className="text-cyan-600 dark:text-cyan-400 flex-shrink-0"
                  size={20}
                />

                <span>
                  {company.email}
                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="my-12 h-px bg-slate-200 dark:bg-slate-800" />

        {/* CTA */}

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

          <div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              {company.cta.title}
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400 font-medium">
              {company.cta.description}
            </p>

          </div>

          <Link
            href="/services"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-semibold text-white transition hover:scale-105 shadow-md shadow-blue-500/20"
          >
            {company.cta.primaryButton}

            <ArrowUpRight size={18} />

          </Link>

        </div>

        <div className="mt-14 border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-500 font-medium">

          © {new Date().getFullYear()} {company.name}. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}
