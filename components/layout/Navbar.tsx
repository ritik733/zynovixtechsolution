"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside or on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Check if a nav item is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={`fixed inset-x-0 top-2 z-50 transition-all duration-300 ${
      isScrolled ? "top-0" : "top-2"
    }`}>
      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-8">
        {/* Outer Glass */}
        <div className={`flex h-16 sm:h-20 lg:h-24 items-center justify-between rounded-[28px] border border-violet-500/30 bg-white/80 px-4 sm:px-6 lg:px-10 backdrop-blur-2xl shadow-[0_0_60px_rgba(110,80,255,.15)] transition-all duration-300 dark:bg-[#070B18]/80 dark:shadow-[0_0_60px_rgba(110,80,255,.35)] ${
          isScrolled ? "rounded-[20px] shadow-[0_0_40px_rgba(110,80,255,.25)]" : ""
        }`}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 flex-shrink-0" onClick={handleLinkClick}>
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg sm:text-xl lg:text-2xl font-bold text-white shadow-md shadow-blue-500/20">
              Z
            </div>
            <div className="hidden sm:block">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                Zynovix
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-tight font-medium">
                Tech Solution
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center rounded-2xl border border-slate-200/80 bg-slate-100/90 p-2 backdrop-blur-xl dark:border-white/10 dark:bg-black/50">
            {navItems.map((item, index) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-1 rounded-xl px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-[15px] font-medium transition-all duration-300 whitespace-nowrap ${
                    active
                      ? "bg-white text-slate-900 shadow-sm dark:bg-white/10 dark:text-white font-semibold"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="ml-2 xl:ml-4 flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-5 xl:px-7 py-2 xl:py-3 font-semibold text-white transition hover:scale-105 shadow-md shadow-violet-500/20 text-sm xl:text-base whitespace-nowrap"
            >
              Book Free Consultation
              <ArrowUpRight size={16} className="hidden sm:inline" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-all duration-300 text-slate-800 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[72px] sm:top-[88px] mx-4 sm:mx-6 transition-all duration-300 ease-in-out transform ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-white/95 text-slate-900 border border-slate-200/80 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl dark:bg-[#070B18]/95 dark:text-white dark:border-violet-500/30 dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      active
                        ? "bg-violet-50 text-violet-700 font-semibold dark:bg-violet-500/20 dark:text-white"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3.5 font-semibold text-white transition hover:scale-[1.02] text-base"
                >
                  Book Free Consultation
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm -z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </header>
  );
}