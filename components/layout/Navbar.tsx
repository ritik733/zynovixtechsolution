"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  Globe,
  Database,
  Hotel,
  Cpu,
  Layers,
  Cloud,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
  { name: "Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "About", href: "/about" },
];

const serviceLinks = [
  {
    name: "Custom Website Development",
    href: "/services/custom-website-development",
    description: "High-performance Next.js 16 architectures, headless CMS & Core Web Vitals.",
    badge: "Core Stack",
    icon: Globe,
    color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    name: "Frappe & ERPNext Solutions",
    href: "/services/frappe-erpnext-solutions",
    description: "Certified Frappe consulting, custom DocTypes, GST ledger & warehouse workflows.",
    badge: "Enterprise",
    icon: Database,
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  },
  {
    name: "Hotel Management Software",
    href: "/services/hotel-management-software",
    description: "All-in-one PMS, OTAs channel manager, contactless check-in & POS billing.",
    badge: "Hospitality",
    icon: Hotel,
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  },
  {
    name: "Custom Business Software",
    href: "/services/custom-business-software",
    description: "Tailored SaaS platforms, internal operations portals & automated workflow engines.",
    badge: "Tailored",
    icon: Cpu,
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    name: "API & System Integrations",
    href: "/services/api-system-integrations",
    description: "Unified webhooks, payment gateways, CRM-to-ERP sync & zero data loss pipelines.",
    badge: "Real-time",
    icon: Layers,
    color: "text-violet-500 bg-violet-500/10 border-violet-500/20",
  },
  {
    name: "Cloud Hosting & Maintenance",
    href: "/services/cloud-hosting-maintenance",
    description: "High-availability AWS & DigitalOcean DevOps, automated backups & 99.9% uptime SLA.",
    badge: "99.9% SLA",
    icon: Cloud,
    color: "text-sky-500 bg-sky-500/10 border-sky-500/20",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle high-performance RAF throttled scroll effect
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes without cascading effect renders
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }

  // Handle hover for desktop dropdown with debounced close
  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  // Close menu when clicking link
  const handleLinkClick = () => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
  };

  // Prevent body scroll when mobile menu is open with clean restoration
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow || "";
      };
    }
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 [contain:layout] ${
        isScrolled ? "pt-2 sm:pt-2.5" : "pt-3 sm:pt-4"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Company Logo and Name - Hanging Outside of the Navbar */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3.5 flex-shrink-0 group touch-manipulation py-1 focus:outline-none"
            onClick={handleLinkClick}
          >
            <div
              className={`relative transition-all duration-300 origin-left flex-shrink-0 ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            >
              <Image
                src="/images/logo/Zynovix-logo-Z.webp"
                alt="Zynovix Tech Solutions Logo"
                width={197}
                height={146}
                className="w-auto h-12 sm:h-14 lg:h-15 object-contain drop-shadow-[0_4px_16px_rgba(110,80,255,0.35)] transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-1.5">
                <h2 className="text-xl sm:text-2xl font-black tracking-wider uppercase text-slate-900 dark:text-white leading-none transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                  Zynovix
                </h2>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
              </div>
              <p className="mt-1 text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500 dark:text-slate-400 leading-none">
                Tech Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Glass Navbar - The Rest in Glass Design */}
          <nav
            aria-label="Main Navigation"
            className={`hidden lg:flex items-center gap-1 xl:gap-1.5 rounded-full p-1.5 xl:p-2 transition-all duration-300 backdrop-blur-2xl backdrop-saturate-150 ${
              isScrolled
                ? "bg-white/80 dark:bg-[#070b1e]/80 border border-slate-200/90 dark:border-violet-500/35 shadow-[0_12px_40px_rgba(0,0,0,0.1),0_0_30px_rgba(110,80,255,0.15)] ring-1 ring-black/5 dark:ring-white/10"
                : "bg-white/65 dark:bg-[#070b1e]/65 border border-white/60 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.06),0_0_20px_rgba(110,80,255,0.08)] ring-1 ring-white/40 dark:ring-white/5"
            }`}
          >
            {navItems.map((item, index) => {
              const active = isActive(item.href);

              if (item.hasDropdown) {
                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={handleMouseEnterServices}
                    onMouseLeave={handleMouseLeaveServices}
                  >
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`flex items-center gap-1.5 rounded-full px-3.5 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        active
                          ? "bg-slate-900 text-white shadow-sm dark:bg-white/15 dark:text-white font-semibold"
                          : "text-slate-700 hover:text-slate-900 hover:bg-white/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-violet-500" : "opacity-70"
                        }`}
                      />
                    </Link>

                    {/* Services Mega-Menu Dropdown with matching Glassmorphism */}
                    {servicesDropdownOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px] max-w-[calc(100vw-32px)] z-50">
                        <div className="rounded-3xl border border-white/70 dark:border-violet-500/30 bg-white/92 dark:bg-[#070b1e]/92 p-5 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5 dark:ring-white/10 dark:shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(110,80,255,0.18)]">
                          {/* Dropdown Header */}
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/70 dark:border-white/10">
                            <div className="flex items-center gap-2">
                              <Sparkles size={16} className="text-cyan-500" />
                              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Engineering & Consulting Suites
                              </span>
                            </div>
                            <Link
                              href="/services"
                              onClick={handleLinkClick}
                              className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                            >
                              Overview All <ArrowRight size={12} />
                            </Link>
                          </div>

                          {/* 2-Column Grid */}
                          <div className="grid grid-cols-2 gap-2.5">
                            {serviceLinks.map((svc) => {
                              const IconComponent = svc.icon;
                              const isSvcActive = pathname === svc.href;

                              return (
                                <Link
                                  key={svc.href}
                                  href={svc.href}
                                  onClick={handleLinkClick}
                                  className={`group flex items-start gap-3 rounded-2xl p-3 transition-all duration-200 ${
                                    isSvcActive
                                      ? "bg-violet-500/10 dark:bg-violet-500/20 border border-violet-500/30"
                                      : "hover:bg-slate-100/80 dark:hover:bg-white/5 border border-transparent"
                                  }`}
                                >
                                  <div
                                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border ${svc.color} transition-transform group-hover:scale-105`}
                                  >
                                    <IconComponent size={20} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <h3 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 truncate">
                                        {svc.name}
                                      </h3>
                                      <span className="rounded-full bg-slate-100 dark:bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold text-slate-600 dark:text-slate-300">
                                        {svc.badge}
                                      </span>
                                    </div>
                                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 dark:text-slate-400 line-clamp-2">
                                      {svc.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Dropdown Footer CTA */}
                          <div className="mt-3 pt-3 border-t border-slate-200/70 dark:border-white/10 flex items-center justify-between text-xs bg-slate-50/70 dark:bg-white/[0.02] -mx-5 -mb-5 p-4 rounded-b-3xl">
                            <span className="text-slate-600 dark:text-slate-400">
                              Need a custom architecture recommendation?
                            </span>
                            <Link
                              href="/contact"
                              onClick={handleLinkClick}
                              className="font-semibold text-violet-600 dark:text-cyan-400 hover:text-cyan-500 flex items-center gap-1"
                            >
                              Schedule Discovery Call <ArrowRight size={13} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-1 rounded-full px-3.5 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    active
                      ? "bg-slate-900 text-white shadow-sm dark:bg-white/15 dark:text-white font-semibold"
                      : "text-slate-700 hover:text-slate-900 hover:bg-white/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Book Consultation Button inside the Glass Dock */}
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="ml-1 xl:ml-2 flex items-center gap-1.5 xl:gap-2 rounded-full bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 px-4 xl:px-6 py-2 xl:py-2.5 font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-500/25 shadow-md shadow-violet-500/25 text-xs xl:text-sm whitespace-nowrap touch-manipulation"
            >
              <span className="hidden xl:inline">Book Free Consultation</span>
              <span className="xl:hidden">Consultation</span>
              <ArrowUpRight size={15} />
            </Link>
          </nav>

          {/* Mobile Glass Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full border border-white/60 dark:border-white/15 bg-white/70 dark:bg-[#070b1e]/75 backdrop-blur-xl shadow-md text-slate-800 dark:text-white hover:bg-white/90 dark:hover:bg-[#070b1e]/90 transition-all duration-200 touch-manipulation"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Menu with matching Glass Design */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[76px] sm:top-[86px] mx-4 sm:mx-6 transition-all duration-300 ease-in-out transform ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-white/85 text-slate-900 border border-white/60 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl dark:bg-[#070b1e]/92 dark:text-white dark:border-violet-500/30 dark:shadow-[0_20px_60px_rgba(0,0,0,0.85)] max-h-[calc(100vh-100px)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => {
                const active = isActive(item.href);

                if (item.hasDropdown) {
                  return (
                    <div key={index} className="flex flex-col">
                      <div
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-colors duration-200 ${
                          active
                            ? "bg-violet-50 text-violet-700 font-semibold dark:bg-violet-500/20 dark:text-white"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5"
                        }`}
                      >
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          className="flex-1"
                        >
                          {item.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="p-1 rounded-xl hover:bg-slate-200/70 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 touch-manipulation"
                          aria-label="Toggle services submenu"
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Expandable sub-services */}
                      {mobileServicesOpen && (
                        <div className="ml-3 pl-3 my-1 border-l-2 border-violet-500/30 flex flex-col space-y-1">
                          {serviceLinks.map((svc) => {
                            const IconComponent = svc.icon;
                            const isSvcActive = pathname === svc.href;

                            return (
                              <Link
                                key={svc.href}
                                href={svc.href}
                                onClick={handleLinkClick}
                                className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-colors ${
                                  isSvcActive
                                    ? "bg-cyan-50 text-cyan-700 font-semibold dark:bg-cyan-500/20 dark:text-cyan-300"
                                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
                                }`}
                              >
                                <IconComponent size={16} className="text-cyan-500 flex-shrink-0" />
                                <span className="truncate">{svc.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-colors duration-200 ${
                      active
                        ? "bg-violet-50 text-violet-700 font-semibold dark:bg-violet-500/20 dark:text-white"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-200/80 dark:border-white/10">
                <Link
                  href="/contact"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3.5 font-semibold text-white transition-transform hover:scale-[1.02] text-base touch-manipulation shadow-lg shadow-violet-500/25"
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
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}
