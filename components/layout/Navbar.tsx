"use client";

import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", dropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-2 z-50">
      <div className="mx-auto max-w-[1650px] px-8">

        {/* Outer Glass */}
        <div className="flex h-24 items-center justify-between rounded-[28px] border border-violet-500/30 bg-[#070B18]/80 px-10 backdrop-blur-2xl shadow-[0_0_60px_rgba(110,80,255,.35)]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-2xl font-bold text-white">
              Z
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                Zynovix
              </h2>

              <p className="text-sm text-slate-400">
                Tech Solution
              </p>
            </div>

          </Link>

          {/* Navigation Capsule */}

          <div className="hidden lg:flex items-center rounded-2xl border border-white/10 bg-black/50 p-2 backdrop-blur-xl">

            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-1 rounded-xl px-6 py-3 text-[15px] transition-all duration-300
                ${
                  item.name === "Home"
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}

                {item.dropdown && (
                  <ChevronDown size={16} />
                )}
              </Link>
            ))}

            <Link
              href="/contact"
              className="ml-4 flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-7 py-3 font-semibold text-white transition hover:scale-105"
            >
              Let's Talk

              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </div>
    </header>
  );
}