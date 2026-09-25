"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/team" },
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
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
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
    <header
      className={`fixed inset-x-0 top-2 z-50 transition-all duration-300 ${
        isScrolled ? "top-0 sm:top-1" : "top-2"
      }`}
    >
      <div className="mx-auto max-w-[1650px] px-3 sm:px-6 lg:px-8">
        {/* Outer Glass Bar */}
        <div
          className={`flex h-14 sm:h-20 lg:h-22 items-center justify-between rounded-2xl sm:rounded-[28px] border border-violet-500/30 bg-[#070B18]/90 px-3.5 sm:px-6 lg:px-10 backdrop-blur-2xl shadow-[0_0_40px_rgba(110,80,255,.25)] transition-all duration-300 ${
            isScrolled ? "shadow-[0_0_30px_rgba(110,80,255,.2)]" : ""
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-4 flex-shrink-0"
            onClick={handleLinkClick}
          >
            <div className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-base sm:text-xl font-bold text-white shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              Z
            </div>
            <div className="block">
              <h2 className="text-base sm:text-xl font-bold text-white leading-tight tracking-tight">
                Zynovix
              </h2>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-tight">
                Tech Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center rounded-2xl border border-white/10 bg-black/50 p-2 backdrop-blur-xl">
            {navItems.map((item, index) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-1 rounded-xl px-4 xl:px-6 py-2 xl:py-2.5 text-sm xl:text-[15px] font-medium transition-all duration-300 whitespace-nowrap ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="ml-2 xl:ml-4 flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-5 xl:px-7 py-2 xl:py-2.5 font-semibold text-white transition hover:scale-105 text-sm xl:text-base whitespace-nowrap shadow-md shadow-violet-600/30"
            >
              Book Free Consultation
              <ArrowUpRight size={16} className="hidden sm:inline" />
            </Link>
          </div>

          {/* Mobile Menu Button - 44px min touch target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition-all text-white cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[68px] sm:top-[88px] mx-3 sm:mx-6 transition-all duration-300 ease-in-out transform ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-[#070B18]/95 backdrop-blur-2xl border border-violet-500/30 rounded-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.85)] max-h-[calc(100dvh-100px)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 min-h-[44px] ${
                      active
                        ? "bg-violet-500/20 text-white font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
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
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3.5 font-semibold text-white transition hover:scale-[1.02] active:scale-98 text-base shadow-lg shadow-violet-600/30 min-h-[44px]"
                >
                  Book Free Consultation
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Mobile Backdrop Overlay */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 top-0 left-0 w-screen h-screen bg-black/70 backdrop-blur-sm -z-10 cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}