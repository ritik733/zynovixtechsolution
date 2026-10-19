import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BedDouble,
  Calendar,
  CreditCard,
  UserCheck,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Building2,
  Hotel,
  ShieldCheck,
  Receipt,
  ClipboardList,
  BarChart3,
  Palmtree,
  Home,
  Clock,
  KeyRound,
  FileText,
  Smartphone,
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceProcessTimeline from "@/components/services/ServiceProcessTimeline";
import ServiceFAQAccordion from "@/components/services/ServiceFAQAccordion";
import ServiceEnquiryForm, { FormFieldConfig } from "@/components/services/ServiceEnquiryForm";
import ServiceInternalLinks from "@/components/services/ServiceInternalLinks";
import ServiceJsonLd from "@/components/services/ServiceJsonLd";
import { HotelMockupVisual } from "@/components/services/ServiceVisuals";
import { HeroAtmosphereGlow } from "@/components/ui/TechPattern";

export const metadata: Metadata = {
  title: "Hotel Management Software for Reservations & Front Desk | Zynovix",
  description:
    "Explore hotel management software for room reservations, guest records, check-in/check-out, billing and daily hospitality operations.",
  alternates: {
    canonical: "/services/hotel-management-software",
  },
  openGraph: {
    title: "Hotel Management Software | Zynovix Tech Solutions",
    description:
      "Manage reservations, room availability, guest information and front-desk activities through a streamlined hotel management solution.",
    url: "https://zynovixtechsolutions.com/services/hotel-management-software",
    type: "website",
  },
};

const whoItServes = [
  {
    icon: Hotel,
    title: "Independent & Boutique Hotels",
    description:
      "Deliver bespoke guest journeys with visual room inventory, fast contactless check-ins, and unified guest folios.",
  },
  {
    icon: Palmtree,
    title: "Luxury Resorts & Wellness Retreats",
    description:
      "Coordinate multi-day packages, multi-villa allocations, spa schedules, and dining charges effortlessly.",
  },
  {
    icon: Home,
    title: "Bed & Breakfasts (B&Bs) & Guest Houses",
    description:
      "Simple, cost-effective property management without bloated SaaS fees, complex setups, or hardware overhead.",
  },
  {
    icon: Building2,
    title: "Multi-Property Hospitality Groups",
    description:
      "Centralized oversight across multiple properties with unified guest histories, cross-booking, and group analytics.",
  },
  {
    icon: BedDouble,
    title: "Serviced Apartments & Extended Stays",
    description:
      "Automated monthly utility billing, lease terms, scheduled housekeeping, and guest communications.",
  },
];

const mainFeatures = [
  {
    icon: Calendar,
    title: "Visual Room Availability Calendar",
    description:
      "Color-coded interactive reservation grid displaying real-time occupancy, rate tiers, maintenance holds, and impending arrivals across all room categories.",
  },
  {
    icon: UserCheck,
    title: "Digital Guest Profiles & Folios",
    description:
      "Complete guest history, ID verification records, personal preferences, previous stays, and real-time ledger accounting for all on-premise charges.",
  },
  {
    icon: KeyRound,
    title: "Front Desk Rapid Check-In / Check-Out",
    description:
      "Streamlined check-in workflows taking under 60 seconds with digital signature capture, room key allocation, and express checkout summaries.",
  },
  {
    icon: Receipt,
    title: "Integrated Dining & POS Billing",
    description:
      "Restaurant, room service, laundry, mini-bar, and spa charges post directly to the guest folio with instant receipt delivery via WhatsApp or email.",
  },
  {
    icon: ClipboardList,
    title: "Housekeeping & Room Status Updates",
    description:
      "Mobile web portal enabling housekeeping staff to update turnover statuses (Dirty, Cleaning, Inspected, Maintenance) live from their phones.",
  },
  {
    icon: BarChart3,
    title: "Occupancy & Revenue Reporting",
    description:
      "Real-time visibility into Average Daily Rate (ADR), Revenue Per Available Room (RevPAR), occupancy rates, daily cash register closure, and tax reports.",
  },
];

const hospitalityWorkflow = [
  {
    number: "01",
    title: "Booking Received",
    description:
      "Reservations arrive from direct website bookings, telephone calls, or front desk walk-ins, automatically checking room availability.",
    icon: Calendar,
  },
  {
    number: "02",
    title: "Room Assigned",
    description:
      "The reservation grid locks the designated suite or category, prevents double bookings, and prepares room turnover schedules.",
    icon: BedDouble,
  },
  {
    number: "03",
    title: "Guest Check-In",
    description:
      "Fast front-desk check-in, government ID record verification, and digital guest folio opening in under one minute.",
    icon: KeyRound,
  },
  {
    number: "04",
    title: "Billing & Folio Charges",
    description:
      "Restaurant orders, amenities, and room nights automatically consolidate into the digital guest ledger in real time.",
    icon: Receipt,
  },
  {
    number: "05",
    title: "Express Check-Out",
    description:
      "One-click final invoice generation, instant payment processing via credit card or UPI, and automated receipt delivery.",
    icon: UserCheck,
  },
  {
    number: "06",
    title: "Reporting & Turnover",
    description:
      "Immediate alert sent to housekeeping mobile app for room sanitization; daily revenue and occupancy data logged to manager reports.",
    icon: BarChart3,
  },
];

const faqs = [
  {
    question: "Can the software handle multiple room categories and seasonal rate plans?",
    answer:
      "Yes. You can configure unlimited room types (Deluxe, Suite, Standard, Villa) with dynamic pricing rules for high/low seasons, weekend surcharges, and promotional coupon codes.",
  },
  {
    question: "How does the system eliminate double bookings?",
    answer:
      "All reservation channels operate against a unified real-time database ledger. The moment a room is blocked or reserved online or at the counter, it is instantaneously removed from availability across all interfaces.",
  },
  {
    question: "Can our housekeeping team update room cleanliness status from their smartphones?",
    answer:
      "Yes. The platform includes a responsive mobile web interface designed for housekeeping attendants. They can tap to update room status from 'Dirty' to 'Cleaning' to 'Inspected' with zero lag, alerting the front desk immediately.",
  },
  {
    question: "How is billing handled for on-property restaurant, spa, and room service orders?",
    answer:
      "The software includes an integrated point-of-sale (POS) module. Waitstaff or spa attendants can select the guest's room number, and the charge will post directly to their active room folio for combined payment at checkout.",
  },
  {
    question: "What onboarding, training, and hardware setup support is provided?",
    answer:
      "We handle complete cloud setup, room configuration, staff training sessions, and integration with thermal receipt printers, barcode scanners, and payment card terminals.",
  },
];

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    label: "Contact Name",
    type: "text",
    placeholder: "Alex Morgan",
    required: true,
  },
  {
    name: "email",
    label: "Work Email",
    type: "email",
    placeholder: "alex@grandresort.com",
    required: true,
  },
  {
    name: "propertyName",
    label: "Property Name",
    type: "text",
    placeholder: "Azure Bay Resort & Spa",
    required: true,
  },
  {
    name: "numberOfRooms",
    label: "Number of Rooms / Units",
    type: "select",
    required: true,
    options: [
      "1 – 15 Rooms (Boutique / B&B)",
      "16 – 50 Rooms",
      "51 – 150 Rooms",
      "150+ Rooms (Resort / Hotel)",
      "Multi-Property Group",
    ],
  },
  {
    name: "phone",
    label: "Contact Number / WhatsApp",
    type: "tel",
    placeholder: "+1 (555) 234-5678",
    required: true,
  },
  {
    name: "requiredFeatures",
    label: "Primary Features Required",
    type: "checkbox-group",
    colSpan: 2,
    options: [
      "Room Availability Calendar & Booking Grid",
      "Direct Commission-Free Website Bookings",
      "Front Desk Check-in & Guest Folio",
      "Integrated Restaurant / POS Billing",
      "Housekeeping Mobile Status Updates",
      "Occupancy & Revenue Reporting",
    ],
  },
  {
    name: "project",
    label: "Current Operational Needs & Pain Points",
    type: "textarea",
    placeholder:
      "Tell us about your current software or challenges (e.g. double bookings, manual paper folios, restaurant bill disputes)...",
    required: true,
    colSpan: 2,
  },
];

const relatedServices = [
  {
    title: "Custom Business Software",
    href: "/services/custom-business-software",
    description:
      "Bespoke admin portals, inventory tracking, and custom internal workflow tools tailored for hospitality operations.",
  },
  {
    title: "API & System Integrations",
    href: "/services/api-system-integrations",
    description:
      "Connect your hotel PMS with payment gateways (Stripe, Razorpay), automated WhatsApp guest notifications, and accounting software.",
  },
];

export default function HotelManagementSoftwarePage() {
  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-hidden dark:bg-[#050816] dark:text-white">
      <HeroAtmosphereGlow />
      <ServiceJsonLd
        serviceName="Hotel Management Software"
        serviceDescription="Explore hotel management software for room reservations, guest records, check-in/check-out, billing and daily hospitality operations."
        serviceUrl="/services/hotel-management-software"
        faqs={faqs}
      />

      {/* 1. Hero Section */}
      <ServiceHero
        badge="Hospitality Technology Solution"
        title="Hotel Management Software to Simplify Daily Operations"
        description="Manage reservations, room availability, guest information and front-desk activities through a streamlined hotel management solution."
        primaryCta={{
          label: "Request a Software Demo",
          href: "#enquiry",
        }}
        secondaryCta={{
          label: "Explore Features",
          href: "#features",
        }}
        visual={<HotelMockupVisual />}
      />

      {/* 2. Who It Serves */}
      <section className="py-20 bg-slate-50/70 dark:bg-transparent border-y border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Tailored For Accommodations
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Who Our Hotel Management Software Serves
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Engineered specifically for hospitality operators who demand simplicity, reliability, and total control over their daily guest operations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whoItServes.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Main Features */}
      <section id="features" className="py-20 bg-white dark:bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Complete Hospitality Suite
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Main Software Features
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Everything your front desk, housekeeping team, restaurant, and management need on a single screen.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mainFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:border-cyan-500/50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-lg bg-blue-500/10 p-2.5 text-blue-600 dark:text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{feat.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. How It Works (Hospitality Workflow) */}
      <ServiceProcessTimeline
        heading="How It Works: The Guest & Front-Desk Workflow"
        subheading="Follow how reservations effortlessly move from initial booking through room allocation, folio billing, and turnover."
        steps={hospitalityWorkflow}
      />

      {/* 5. Product Preview & Visual Proof */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                Labelled Demo Walkthrough
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Designed for Front-Desk Speed & Clarity
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Front desk agents shouldn’t struggle with slow, unintuitive menus while guests wait in the lobby. Our interface puts all active rooms, today's arrivals, housekeeping statuses, and restaurant bills in an intuitive visual grid.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Double Bookings:</strong> Atomic database locks ensure no room can ever be double-allocated.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Unified Guest Folios:</strong> Restaurant, mini-bar, and laundry charges instantly post to the room account.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Mobile Housekeeping:</strong> Room turnover happens 45 minutes faster with real-time status updates.
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/portfolio/hospitality-hotel-management-suite"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  <span>View Hospitality Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="/images/portfolio/hotel-suite.webp"
                    alt="Hospitality and Hotel Management Suite Software Interface"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 rounded-lg bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    Verified Hospitality Suite Interface
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <ServiceFAQAccordion
        heading="Hotel Management Software FAQs"
        subheading="Practical questions on multi-rate setups, hardware compatibility, staff training, and data security."
        faqs={faqs}
      />

      {/* 7. Final CTA & Demo Request Form */}
      <ServiceEnquiryForm
        serviceName="Hotel Management Software"
        formTitle="Request a Live Software Demo & Consultation"
        formSubtitle="Experience how the hotel management system simplifies front desk check-ins and room turnover. Share your property details below."
        submitButtonText="Request Software Demo"
        fields={formFields}
      />

      {/* 8. Contextual Internal Links */}
      <ServiceInternalLinks
        currentServiceTitle="Hotel Management Software"
        relatedServices={relatedServices}
      />
    </main>
  );
}
