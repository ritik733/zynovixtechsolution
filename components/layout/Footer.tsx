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
      className="bg-slate-950/85 backdrop-blur-xl border-t border-slate-800/60 text-slate-300 relative z-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-14">
          {/* Company */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-lg sm:text-xl font-bold text-white shadow-md shadow-cyan-500/20">
                Z
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  {company.name}
                </h2>
              </div>
            </div>
            <p className="leading-relaxed text-sm sm:text-base text-slate-400">
              {company.about.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-semibold text-white">
              Navigation
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-cyan-400 inline-block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-semibold text-white">
              Capabilities
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-400">
              <li>Custom Web Development</li>
              <li>Enterprise ERP Software</li>
              <li>System &amp; Workflow Automation</li>
              <li>Business Software Solutions</li>
              <li>API &amp; System Integration</li>
              <li>Cloud Infrastructure &amp; DevOps</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-semibold text-white">
              Contact
            </h3>
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-cyan-400 shrink-0" size={18} />
                <span>{company.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-cyan-400 shrink-0" size={18} />
                <span>{company.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-cyan-400 shrink-0" size={18} />
                <span className="break-all">{company.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 sm:my-12 h-px bg-slate-800" />

        {/* CTA */}
        <div className="flex flex-col items-start justify-between gap-6 sm:gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              {company.cta.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl">
              {company.cta.description}
            </p>
          </div>

          <Link
            href="/services"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 sm:py-4 font-semibold text-white transition hover:scale-105 shadow-lg shadow-cyan-500/25 w-full sm:w-auto min-h-[44px] text-sm sm:text-base"
          >
            <span>{company.cta.primaryButton}</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="mt-8 sm:mt-14 border-t border-slate-800/80 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-slate-500">
          © {new Date().getFullYear()} {company.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}