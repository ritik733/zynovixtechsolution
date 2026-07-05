"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigation } from "@/data/navigation";
import { company } from "@/data/company";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-lg">
            Z
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {company.shortName}
            </h2>
            <p className="text-xs text-slate-500">Tech Solution</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 lg:inline-block"
        >
          Let's Talk
        </a>

        {/* Mobile Menu */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b py-4 text-slate-700"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="#contact"
              className="mt-5 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}