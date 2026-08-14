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
      className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-300"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Company */}

          <div>

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-xl font-bold text-white">
                Z
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {company.name}
                </h2>
              </div>

            </div>

            <p className="leading-8 text-slate-600 dark:text-slate-400">
              {company.about.description}
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">
              Navigation
            </h3>

            <ul className="space-y-4 text-slate-600 dark:text-slate-400">

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

            <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">
              Services
            </h3>

            <ul className="space-y-4 text-slate-600 dark:text-slate-400 font-medium">

              <li>Artificial Intelligence</li>

              <li>Machine Learning</li>

              <li>Custom Software</li>

              <li>Web Development</li>

              <li>Business Automation</li>

              <li>Cloud Solutions</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">
              Contact
            </h3>

            <div className="space-y-5 text-slate-600 dark:text-slate-400 font-medium">

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