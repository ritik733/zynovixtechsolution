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
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

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
    <header
      className={`fixed inset-x-0 top-2 z-50 transition-[colors,transform] duration-300 ${
        isScrolled ? "top-0" : "top-2"
      }`}
    >
      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-8">
        {/* Outer Glass */}
        <div
          className={`flex h-16 sm:h-20 lg:h-24 items-center justify-between rounded-[28px] border border-violet-500/30 bg-white/80 px-4 sm:px-6 lg:px-10 backdrop-blur-2xl shadow-[0_0_60px_rgba(110,80,255,.15)] transition-[colors,transform] duration-300 dark:bg-[#050816]/80 dark:shadow-[0_0_60px_rgba(110,80,255,.35)] ${
            isScrolled ? "rounded-[20px] shadow-[0_0_40px_rgba(110,80,255,.25)]" : ""
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 sm:gap-4 flex-shrink-0"
            onClick={handleLinkClick}
          >
            <Image
              src="/images/logo/Zynovix-logo-Z.webp"
              alt="Zynovix Tech Solutions Logo"
              width={197}
              height={146}
              className="h-12 w-auto sm:h-14 lg:h-16 object-contain drop-shadow-sm"
              priority
            />
            <div className="hidden sm:block">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-black tracking-widest uppercase text-slate-900 dark:text-white leading-tight">
                Zynovix
              </h2>
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500 dark:text-slate-400 leading-tight">
                Tech Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center rounded-2xl border border-slate-200/80 bg-slate-100/90 p-2 backdrop-blur-xl dark:border-white/10 dark:bg-black/50">
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
                      className={`flex items-center gap-1.5 rounded-xl px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-[15px] font-medium transition-[colors,transform] duration-300 whitespace-nowrap ${
                        active
                          ? "bg-white text-slate-900 shadow-sm dark:bg-white/10 dark:text-white font-semibold"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5"
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

                    {/* Services Mega-Menu Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px] z-50">
                        <div className="rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl dark:border-violet-500/30 dark:bg-[#050816]/95 dark:shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
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
                                  className={`group flex items-start gap-3 rounded-xl p-3 transition-all duration-200 ${
                                    isSvcActive
                                      ? "bg-violet-50 dark:bg-violet-500/15 border border-violet-500/30"
                                      : "hover:bg-slate-100/90 dark:hover:bg-white/5 border border-transparent"
                                  }`}
                                >
                                  <div
                                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border ${svc.color} transition-transform group-hover:scale-105`}
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
                          <div className="mt-3 pt-3 border-t border-slate-200/70 dark:border-white/10 flex items-center justify-between text-xs bg-slate-50/70 dark:bg-white/[0.02] -mx-5 -mb-5 p-4 rounded-b-2xl">
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
                  className={`flex items-center gap-1 rounded-xl px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-[15px] font-medium transition-[colors,transform] duration-300 whitespace-nowrap ${
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
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-[colors,transform] duration-300 text-slate-800 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[72px] sm:top-[88px] mx-4 sm:mx-6 transition-[colors,transform] duration-300 ease-in-out transform ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-white/95 text-slate-900 border border-slate-200/80 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl dark:bg-[#050816]/95 dark:text-white dark:border-violet-500/30 dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => {
                const active = isActive(item.href);

                if (item.hasDropdown) {
                  return (
                    <div key={index} className="flex flex-col">
                      <div
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-[colors,transform] duration-200 ${
                          active
                            ? "bg-violet-50 text-violet-700 font-semibold dark:bg-violet-500/20 dark:text-white"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5"
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
                          className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400"
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
                                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                                  isSvcActive
                                    ? "bg-cyan-50 text-cyan-700 font-semibold dark:bg-cyan-500/20 dark:text-cyan-300"
                                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
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
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-[colors,transform] duration-200 ${
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