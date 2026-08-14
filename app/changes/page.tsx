"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FileCode, 
  FilePlus, 
  Search, 
  ArrowLeft, 
  Layers, 
  Code2, 
  Plus, 
  Minus, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Layout, 
  Briefcase, 
  Settings,
  CheckCircle2
} from "lucide-react";

interface DiffLine {
  type: "add" | "remove" | "context";
  code: string;
}

interface FileChange {
  id: string;
  name: string;
  path: string;
  category: "new" | "page" | "layout" | "section" | "career" | "config";
  categoryLabel: string;
  typeBadge: "Added Component" | "Edited Page" | "Edited Component" | "Config / Styles";
  whatAddedHi: string;
  whatRemovedHi: string;
  summaryHi: string;
  summaryEn: string;
  additions: number;
  deletions: number;
  diffs: DiffLine[];
}

const fileChangesData: FileChange[] = [
  // --- 1. NEW UNTRACKED COMPONENTS (4 Files) ---
  {
    id: "theme-toggle",
    name: "ThemeToggle.tsx",
    path: "components/ThemeToggle.tsx",
    category: "new",
    categoryLabel: "New Component",
    typeBadge: "Added Component",
    whatAddedHi: "Sun (☀️) aur Moon (🌙) Lucide icons, next-themes hook integration, smooth hover transition animation.",
    whatRemovedHi: "Kuchh nahi (Pahle ye file exist nahi karti thi, ise scratch se banaya gaya).",
    summaryHi: "Header/Navbar me Theme Switcher button jo light mode aur dark mode toggle karta hai.",
    summaryEn: "Added Theme Switcher button with Sun & Moon icons for toggling light/dark mode.",
    additions: 32,
    deletions: 0,
    diffs: [
      { type: "add", code: '+ "use client";' },
      { type: "add", code: '+ import { useTheme } from "next-themes";' },
      { type: "add", code: '+ import { Sun, Moon } from "lucide-react";' },
      { type: "add", code: '+ export default function ThemeToggle() {' },
      { type: "add", code: '+   const { theme, setTheme } = useTheme();' },
      { type: "add", code: '+   return (' },
      { type: "add", code: '+     <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-amber-400 dark:text-cyan-400 transition">' },
      { type: "add", code: '+       {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}' },
      { type: "add", code: '+     </button>' },
      { type: "add", code: '+   );' },
      { type: "add", code: '+ }' },
    ]
  },
  {
    id: "theme-provider",
    name: "ThemeProvider.tsx",
    path: "components/ThemeProvider.tsx",
    category: "new",
    categoryLabel: "New Component",
    typeBadge: "Added Component",
    whatAddedHi: "next-themes provider context wrapper function with system theme auto-detect support.",
    whatRemovedHi: "Kuchh nahi (New file).",
    summaryHi: "Next.js Theme Context Provider jo pure app me dark/light class manage karta hai.",
    summaryEn: "Theme context provider wrapping next-themes to handle active theme state across app.",
    additions: 18,
    deletions: 0,
    diffs: [
      { type: "add", code: '+ "use client";' },
      { type: "add", code: '+ import { ThemeProvider as NextThemesProvider } from "next-themes";' },
      { type: "add", code: '+ export function ThemeProvider({ children, ...props }) {' },
      { type: "add", code: '+   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;' },
      { type: "add", code: '+ }' },
    ]
  },
  {
    id: "theme-controls",
    name: "ThemeControls.tsx",
    path: "components/ThemeControls.tsx",
    category: "new",
    categoryLabel: "New Component",
    typeBadge: "Added Component",
    whatAddedHi: "Advanced theme selection drawer & customization settings panel.",
    whatRemovedHi: "Kuchh nahi (New file).",
    summaryHi: "Theme customization aur user preferences control panel component.",
    summaryEn: "Theme customization and control settings user interface component.",
    additions: 26,
    deletions: 0,
    diffs: [
      { type: "add", code: '+ "use client";' },
      { type: "add", code: '+ import { Palette } from "lucide-react";' },
      { type: "add", code: '+ export default function ThemeControls() {' },
      { type: "add", code: '+   return <div className="fixed right-4 bottom-24 bg-slate-900 border border-slate-800 p-3 rounded-2xl shadow-xl">Theme Controls</div>;' },
      { type: "add", code: '+ }' },
    ]
  },
  {
    id: "whatsapp-button",
    name: "WhatsAppButton.tsx",
    path: "components/WhatsAppButton.tsx",
    category: "new",
    categoryLabel: "New Component",
    typeBadge: "Added Component",
    whatAddedHi: "Floating WhatsApp button with emerald green background, hover zoom effect & target=_blank direct chat link.",
    whatRemovedHi: "Kuchh nahi (New file).",
    summaryHi: "Floating WhatsApp Chat Widget pure website me direct customer contact ke liye add kiya gaya.",
    summaryEn: "Floating WhatsApp quick contact widget added for direct visitor support.",
    additions: 38,
    deletions: 0,
    diffs: [
      { type: "add", code: '+ "use client";' },
      { type: "add", code: '+ import { MessageCircle } from "lucide-react";' },
      { type: "add", code: '+ export default function WhatsAppButton() {' },
      { type: "add", code: '+   return (' },
      { type: "add", code: '+     <a href="https://wa.me/919784XXXXXX" target="_blank" className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110">' },
      { type: "add", code: '+       <MessageCircle className="w-6 h-6" />' },
      { type: "add", code: '+     </a>' },
      { type: "add", code: '+   );' },
      { type: "add", code: '+ }' },
    ]
  },

  // --- 2. EDIT PAGES (app/ Directory - 8 Files) ---
  {
    id: "layout-tsx",
    name: "layout.tsx",
    path: "app/layout.tsx",
    category: "config",
    categoryLabel: "Root Layout",
    typeBadge: "Edited Page",
    whatAddedHi: "<ThemeProvider attribute='class' defaultTheme='dark'> wrapper aur <WhatsAppButton /> component.",
    whatRemovedHi: "Single raw <body> wrapper without theme provider context.",
    summaryHi: "Global Root Layout me ThemeProvider aur WhatsAppButton integrate kiye gaye.",
    summaryEn: "Wrapped main application in ThemeProvider and added persistent floating WhatsApp widget.",
    additions: 12,
    deletions: 5,
    diffs: [
      { type: "remove", code: '- <body>' },
      { type: "remove", code: '-   {children}' },
      { type: "remove", code: '- </body>' },
      { type: "add", code: '+ <body>' },
      { type: "add", code: '+   <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>' },
      { type: "add", code: '+     {children}' },
      { type: "add", code: '+     <WhatsAppButton />' },
      { type: "add", code: '+   </ThemeProvider>' },
      { type: "add", code: '+ </body>' },
    ]
  },
  {
    id: "globals-css",
    name: "globals.css",
    path: "app/globals.css",
    category: "config",
    categoryLabel: "Global Styles",
    typeBadge: "Config / Styles",
    whatAddedHi: ":root variables (--background: #ffffff, --foreground: #0f172a) aur .dark selector variables (--background: #030712).",
    whatRemovedHi: "Hardcoded dark background style `body { background: #030712; }`.",
    summaryHi: "Light Mode & Dark Mode CSS Variables, body color transitions aur custom scrollbar theme styling.",
    summaryEn: "Added CSS variable tokens for light and dark modes, theme transition utilities, and scrollbar styling.",
    additions: 20,
    deletions: 8,
    diffs: [
      { type: "remove", code: '- body { background-color: #030712; color: #f9fafb; }' },
      { type: "add", code: '+ :root {' },
      { type: "add", code: '+   --background: #ffffff;' },
      { type: "add", code: '+   --foreground: #0f172a;' },
      { type: "add", code: '+ }' },
      { type: "add", code: '+ .dark {' },
      { type: "add", code: '+   --background: #030712;' },
      { type: "add", code: '+   --foreground: #f8fafc;' },
      { type: "add", code: '+ }' },
      { type: "add", code: '+ body {' },
      { type: "add", code: '+   background-color: var(--background);' },
      { type: "add", code: '+   color: var(--foreground);' },
      { type: "add", code: '+   transition: background-color 0.3s ease, color 0.3s ease;' },
      { type: "add", code: '+ }' },
    ]
  },
  {
    id: "about-page",
    name: "page.tsx (About)",
    path: "app/about/page.tsx",
    category: "page",
    categoryLabel: "Page Component",
    typeBadge: "Edited Page",
    whatAddedHi: "High-contrast text-slate-900, dark:text-white, bg-white, dark:bg-slate-900, shadow-sm.",
    whatRemovedHi: "Hardcoded dark text-white, bg-slate-900, bg-[#030712] dark-only classes.",
    summaryHi: "About page ke text contrast, mission cards, values grid, aur hero section me dark: classes add kiye gaye.",
    summaryEn: "Updated About page text colors, card borders, and hero headers to adapt dynamically in Light Mode.",
    additions: 54,
    deletions: 52,
    diffs: [
      { type: "remove", code: '- <h1 className="text-4xl font-bold text-white">About Us</h1>' },
      { type: "remove", code: '- <p className="text-slate-400">Innovating digital experiences</p>' },
      { type: "remove", code: '- <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">' },
      { type: "add", code: '+ <h1 className="text-4xl font-bold text-slate-900 dark:text-white">About Us</h1>' },
      { type: "add", code: '+ <p className="text-slate-600 dark:text-slate-400">Innovating digital experiences</p>' },
      { type: "add", code: '+ <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm dark:shadow-none">' },
    ]
  },
  {
    id: "contact-page",
    name: "page.tsx (Contact)",
    path: "app/contact/page.tsx",
    category: "page",
    categoryLabel: "Page Component",
    typeBadge: "Edited Page",
    whatAddedHi: "Input fields bg-slate-50 dark:bg-slate-900, label text-slate-700 dark:text-slate-300, focus:ring-cyan-500.",
    whatRemovedHi: "Input fields hardcoded dark background `bg-slate-900 text-white border-slate-800`.",
    summaryHi: "Contact form, input boxes, labels, submit button, aur contact info cards me light theme styling lagayi gayi.",
    summaryEn: "Refactored contact form inputs, labels, card borders, and background gradients for high readability.",
    additions: 38,
    deletions: 37,
    diffs: [
      { type: "remove", code: '- <input className="bg-slate-900 text-white border-slate-800" />' },
      { type: "remove", code: '- <label className="text-slate-300">Your Email</label>' },
      { type: "add", code: '+ <input className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border-slate-300 dark:border-slate-800 focus:ring-cyan-500" />' },
      { type: "add", code: '+ <label className="text-slate-700 dark:text-slate-300 font-medium">Your Email</label>' },
    ]
  },
  {
    id: "services-page",
    name: "page.tsx (Services)",
    path: "app/services/page.tsx",
    category: "page",
    categoryLabel: "Page Component",
    typeBadge: "Edited Page",
    whatAddedHi: "Card container bg-white dark:bg-slate-900/80, shadow-md hover:border-cyan-500.",
    whatRemovedHi: "Dark-only background `bg-slate-900/80` and `border-slate-800`.",
    summaryHi: "Service cards, feature checkmarks, aur hero banner me light mode colors aur hover shadows add kiye gaye.",
    summaryEn: "Adjusted service listing cards, icon containers, and checkmark badges for light mode clarity.",
    additions: 22,
    deletions: 22,
    diffs: [
      { type: "remove", code: '- <div className="bg-slate-900/80 border-slate-800 text-white hover:border-cyan-500/50">' },
      { type: "add", code: '+ <div className="bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:border-cyan-500 shadow-md dark:shadow-none">' },
    ]
  },
  {
    id: "portfolio-page",
    name: "page.tsx (Portfolio)",
    path: "app/portfolio/page.tsx",
    category: "page",
    categoryLabel: "Page Component",
    typeBadge: "Edited Page",
    whatAddedHi: "Filter buttons bg-slate-100 dark:bg-slate-800, project titles text-slate-900 dark:text-white.",
    whatRemovedHi: "Dark filter buttons `bg-slate-800 text-slate-300`.",
    summaryHi: "Portfolio filter tabs, project title contrast, technology tag badges ko light/dark hybrid banaya gaya.",
    summaryEn: "Enhanced project cards grid, tech badges, filter pills, and hover overlays for dual-theme support.",
    additions: 12,
    deletions: 12,
    diffs: [
      { type: "remove", code: '- <button className="bg-slate-800 text-slate-300">Web Dev</button>' },
      { type: "add", code: '+ <button className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white">' },
    ]
  },
  {
    id: "team-page",
    name: "page.tsx (Team)",
    path: "app/team/page.tsx",
    category: "page",
    categoryLabel: "Page Component",
    typeBadge: "Edited Page",
    whatAddedHi: "Card wrappers bg-white dark:bg-slate-900, text-slate-900 dark:text-white, border-slate-200 dark:border-slate-800.",
    whatRemovedHi: "Dark-only cards `bg-slate-900 border-slate-800 text-white`.",
    summaryHi: "Team members grid cards, designation text, social icon buttons me Light mode styling implement ki gayi.",
    summaryEn: "Applied light theme background, text contrast, and social button styling across team member profiles.",
    additions: 28,
    deletions: 28,
    diffs: [
      { type: "remove", code: '- <div className="bg-slate-900 border-slate-800 text-white">' },
      { type: "add", code: '+ <div className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-sm">' },
    ]
  },
  {
    id: "careers-page",
    name: "page.tsx (Careers)",
    path: "app/careers/page.tsx",
    category: "page",
    categoryLabel: "Page Component",
    typeBadge: "Edited Page",
    whatAddedHi: "Main wrapper bg-white dark:bg-[#030712], text-slate-900 dark:text-white transition colors.",
    whatRemovedHi: "Hardcoded dark background `<main className='bg-[#030712]'>`.",
    summaryHi: "Careers overview page background, section divider lines, aur header spacing ko update kiya gaya.",
    summaryEn: "Updated page container background and typography hierarchy for light mode compatibility.",
    additions: 1,
    deletions: 1,
    diffs: [
      { type: "remove", code: '- <main className="bg-[#030712] min-h-screen">' },
      { type: "add", code: '+ <main className="bg-white dark:bg-[#030712] min-h-screen text-slate-900 dark:text-white transition-colors duration-300">' },
    ]
  },

  // --- 3. EDIT UI COMPONENTS (components/ Directory - 18 Files) ---
  {
    id: "navbar-component",
    name: "Navbar.tsx",
    path: "components/layout/Navbar.tsx",
    category: "layout",
    categoryLabel: "Layout Component",
    typeBadge: "Edited Component",
    whatAddedHi: "<ThemeToggle /> component call, light mode navbar backdrop bg-white/80 dark:bg-slate-950/80.",
    whatRemovedHi: "Dark-only navbar background `bg-slate-950/80 border-slate-800/80`.",
    summaryHi: "Navbar me ThemeToggle button link kiya gaya, header blur background aur mobile drawer contrast updates.",
    summaryEn: "Integrated ThemeToggle component, updated header blur opacity and mobile menu overlay styling.",
    additions: 13,
    deletions: 13,
    diffs: [
      { type: "remove", code: '- <header className="bg-slate-950/80 border-slate-800/80">' },
      { type: "remove", code: '-   <Link href="/contact" className="bg-cyan-500 text-white">Get in Touch</Link>' },
      { type: "add", code: '+ <header className="bg-white/80 dark:bg-slate-950/80 border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">' },
      { type: "add", code: '+   <ThemeToggle />' },
      { type: "add", code: '+   <Link href="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium">Get in Touch</Link>' },
    ]
  },
  {
    id: "footer-component",
    name: "Footer.tsx",
    path: "components/layout/Footer.tsx",
    category: "layout",
    categoryLabel: "Layout Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Footer bg-slate-50 dark:bg-[#020617], text-slate-600 dark:text-slate-400, border-slate-200 dark:border-slate-800.",
    whatRemovedHi: "Dark-only footer style `bg-[#020617] text-slate-400 border-slate-800`.",
    summaryHi: "Footer background color, copyright text, link hover states, aur company description styling fix.",
    summaryEn: "Adjusted footer background shade, muted link colors, social icon borders, and copyright banner.",
    additions: 18,
    deletions: 18,
    diffs: [
      { type: "remove", code: '- <footer className="bg-[#020617] text-slate-400 border-t border-slate-800">' },
      { type: "add", code: '+ <footer className="bg-slate-50 dark:bg-[#020617] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">' },
    ]
  },
  {
    id: "hero-component",
    name: "Hero.tsx",
    path: "components/sections/Hero.tsx",
    category: "section",
    categoryLabel: "Section Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Heading text-slate-900 dark:text-white, subtext text-slate-600 dark:text-slate-400, high contrast buttons.",
    whatRemovedHi: "Hardcoded white title `text-white` and dark subtext `text-slate-400`.",
    summaryHi: "Hero title text gradient, subtext readability, background glow circle, aur primary/secondary buttons.",
    summaryEn: "Enhanced main hero typography, added high-contrast text shades and dual-mode CTA button styling.",
    additions: 25,
    deletions: 25,
    diffs: [
      { type: "remove", code: '- <h1 className="text-white">Empowering Digital Growth</h1>' },
      { type: "remove", code: '- <p className="text-slate-400">We build next-gen AI web solutions.</p>' },
      { type: "add", code: '+ <h1 className="text-slate-900 dark:text-white font-extrabold tracking-tight">Empowering Digital Growth</h1>' },
      { type: "add", code: '+ <p className="text-slate-600 dark:text-slate-400 font-normal">We build next-gen AI web solutions.</p>' },
    ]
  },
  {
    id: "about-preview",
    name: "AboutPreview.tsx",
    path: "components/sections/AboutPreview.tsx",
    category: "section",
    categoryLabel: "Section Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Light theme text colors text-slate-900, bg-white dark:bg-slate-900/60 shadow-sm.",
    whatRemovedHi: "Dark-only preview box `bg-slate-900/60 border-slate-800 text-slate-300`.",
    summaryHi: "Homepage About preview section typography, card borders, aur learn more button colors fix.",
    summaryEn: "Updated About section preview cards and typography hierarchy for light mode readability.",
    additions: 16,
    deletions: 16,
    diffs: [
      { type: "remove", code: '- <div className="bg-slate-900/60 border-slate-800 text-slate-300">' },
      { type: "add", code: '+ <div className="bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 shadow-sm">' },
    ]
  },
  {
    id: "services-preview",
    name: "ServicesPreview.tsx",
    path: "components/sections/ServicesPreview.tsx",
    category: "section",
    categoryLabel: "Section Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Service cards bg-white dark:bg-slate-900/80, shadow-md hover:border-cyan-500.",
    whatRemovedHi: "Dark service cards `bg-slate-900/80 border-slate-800 text-slate-300`.",
    summaryHi: "Homepage services preview section cards, icon backgrounds, and learn more arrow links updated.",
    summaryEn: "Made service feature cards adapt smoothly to light mode with subtle shadows and vibrant hover accents.",
    additions: 23,
    deletions: 23,
    diffs: [
      { type: "remove", code: '- <div className="bg-slate-900/80 border-slate-800 text-slate-300">' },
      { type: "add", code: '+ <div className="bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 shadow-md dark:shadow-none transition-all">' },
    ]
  },
  {
    id: "portfolio-preview",
    name: "PortfolioPreview.tsx",
    path: "components/sections/PortfolioPreview.tsx",
    category: "section",
    categoryLabel: "Section Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Project preview cards text-slate-900 dark:text-white, tag badges light theme background.",
    whatRemovedHi: "Dark-only project preview card classes.",
    summaryHi: "Featured portfolio projects preview section cards, hover overlay, and tag badges updated.",
    summaryEn: "Updated portfolio section project cards and technology badges for light theme.",
    additions: 7,
    deletions: 7,
    diffs: [
      { type: "remove", code: '- <h3 className="text-white text-xl font-bold">Smart AI Dashboard</h3>' },
      { type: "add", code: '+ <h3 className="text-slate-900 dark:text-white text-xl font-bold">Smart AI Dashboard</h3>' },
    ]
  },
  {
    id: "cta-section",
    name: "CTA.tsx (Section)",
    path: "components/sections/CTA.tsx",
    category: "section",
    categoryLabel: "Section Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Banner container gradient bg-slate-900 dark:bg-gradient-to-r from-cyan-950 to-slate-950, white text.",
    whatRemovedHi: "Old plain dark banner style.",
    summaryHi: "Homepage Call-To-Action banner section contrast, heading text, aur primary button styling.",
    summaryEn: "Enhanced main CTA section banner gradient and high-visibility button styling.",
    additions: 8,
    deletions: 8,
    diffs: [
      { type: "remove", code: '- <section className="bg-slate-950 py-20">' },
      { type: "add", code: '+ <section className="bg-slate-900 dark:bg-gradient-to-r from-slate-950 via-cyan-950 to-slate-950 text-white py-20">' },
    ]
  },
  {
    id: "stats-section",
    name: "Stats.tsx",
    path: "components/sections/Stats.tsx",
    category: "section",
    categoryLabel: "Section Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Stat values gradient text from-orange-500 to-amber-600 dark:from-orange-400 dark:to-amber-500.",
    whatRemovedHi: "Dark-only gradient `from-orange-400 to-amber-500`.",
    summaryHi: "Statistic counters (50+ Projects, 99% Client Satisfaction) contrast for light theme.",
    summaryEn: "Adjusted statistics counters typography and background borders for light mode.",
    additions: 5,
    deletions: 5,
    diffs: [
      { type: "remove", code: '- <h2 className="from-orange-400 to-amber-500">{item.value}</h2>' },
      { type: "add", code: '+ <h2 className="from-orange-500 to-amber-600 dark:from-orange-400 dark:to-amber-500">{item.value}</h2>' },
    ]
  },
  {
    id: "trustbar-component",
    name: "TrustBar.tsx",
    path: "components/sections/TrustBar.tsx",
    category: "section",
    categoryLabel: "Section Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Section bg-white py-24 dark:bg-[#050816], tech cards bg-white/90 border-slate-200 shadow-sm.",
    whatRemovedHi: "Hardcoded dark section `bg-[#050816]` and dark cards `bg-slate-900/60`.",
    summaryHi: "Tech stack & partner logos bar background, borders, and brand icon color hover states update.",
    summaryEn: "Refactored logo grid cards, border outlines, and section title typography for clean theme contrast.",
    additions: 5,
    deletions: 25,
    diffs: [
      { type: "remove", code: '- <section className="bg-[#050816] py-24">' },
      { type: "remove", code: '-   <div className="bg-slate-900/60 border border-slate-700/50 hover:bg-slate-900/80">' },
      { type: "add", code: '+ <section className="bg-white py-24 dark:bg-[#050816]">' },
      { type: "add", code: '+   <div className="bg-white/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white hover:border-cyan-500 shadow-sm dark:shadow-none">' },
    ]
  },

  // --- CAREERS COMPONENTS ---
  {
    id: "application-form",
    name: "ApplicationForm.tsx",
    path: "components/careers/ApplicationForm.tsx",
    category: "career",
    categoryLabel: "Careers Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Form inputs bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white.",
    whatRemovedHi: "Dark input styling `bg-slate-900 border-slate-800 text-white`.",
    summaryHi: "Career job application form input fields, upload box, checkbox labels, and submit button contrast.",
    summaryEn: "Updated career application modal form controls, input background contrast, file picker border.",
    additions: 18,
    deletions: 25,
    diffs: [
      { type: "remove", code: '- <input className="bg-slate-900 border-slate-800 text-white" />' },
      { type: "add", code: '+ <input className="bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white" />' },
    ]
  },
  {
    id: "open-positions",
    name: "OpenPositions.tsx",
    path: "components/careers/OpenPositions.tsx",
    category: "career",
    categoryLabel: "Careers Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Job listing cards bg-white dark:bg-slate-900, search bar bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white.",
    whatRemovedHi: "Dark-only job cards `bg-slate-900 border-slate-800`.",
    summaryHi: "Open positions job cards, search input bar, category filter badges, aur apply button styling.",
    summaryEn: "Adjusted job listing card backgrounds, search box contrast, and category pill badges.",
    additions: 7,
    deletions: 7,
    diffs: [
      { type: "remove", code: '- <div className="bg-slate-900 border-slate-800 text-white">' },
      { type: "add", code: '+ <div className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-sm">' },
    ]
  },
  {
    id: "benefits-component",
    name: "Benefits.tsx",
    path: "components/careers/Benefits.tsx",
    category: "career",
    categoryLabel: "Careers Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Perks & benefits cards bg-white dark:bg-slate-900/60, text-slate-900 dark:text-white.",
    whatRemovedHi: "Dark-only benefit cards styling.",
    summaryHi: "Perks & Benefits cards light mode text contrast and icon background container styling.",
    summaryEn: "Updated company benefits cards background and icon styling for light theme.",
    additions: 3,
    deletions: 3,
    diffs: [
      { type: "remove", code: '- <div className="bg-slate-900/60 border-slate-800 text-slate-300">' },
      { type: "add", code: '+ <div className="bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 shadow-sm">' },
    ]
  },
  {
    id: "faq-component",
    name: "FAQ.tsx",
    path: "components/careers/FAQ.tsx",
    category: "career",
    categoryLabel: "Careers Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Accordion items bg-white dark:bg-slate-900, active open state border-cyan-500, question text-slate-900 dark:text-white.",
    whatRemovedHi: "Dark accordion `bg-slate-900 border-slate-800 text-slate-200`.",
    summaryHi: "FAQ accordion expand/collapse container background, question title contrast, and active tab text colors.",
    summaryEn: "Refactored FAQ accordion card background, border focus states, and answer text colors.",
    additions: 7,
    deletions: 7,
    diffs: [
      { type: "remove", code: '- <div className="bg-slate-900 border-slate-800 text-slate-200">' },
      { type: "add", code: '+ <div className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-sm">' },
    ]
  },
  {
    id: "hiring-process",
    name: "HiringProcess.tsx",
    path: "components/careers/HiringProcess.tsx",
    category: "career",
    categoryLabel: "Careers Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Hiring process step cards bg-white dark:bg-slate-900, step number badge contrast.",
    whatRemovedHi: "Dark process cards `bg-slate-900/60 border-slate-800`.",
    summaryHi: "Hiring process timeline step cards, connector line colors, and step number badges update.",
    summaryEn: "Adjusted hiring workflow timeline cards and step index numbers for dual theme.",
    additions: 6,
    deletions: 6,
    diffs: [
      { type: "remove", code: '- <div className="bg-slate-900/60 border-slate-800 text-slate-300">' },
      { type: "add", code: '+ <div className="bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 shadow-sm">' },
    ]
  },
  {
    id: "why-join",
    name: "WhyJoin.tsx",
    path: "components/careers/WhyJoin.tsx",
    category: "career",
    categoryLabel: "Careers Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Culture & values cards bg-white dark:bg-slate-900, headline text-slate-900 dark:text-white.",
    whatRemovedHi: "Dark culture cards `bg-slate-900 border-slate-800 text-white`.",
    summaryHi: "Why Join Us section feature boxes typography, icon containers, and light mode background.",
    summaryEn: "Updated company culture feature cards and headline typography for light mode.",
    additions: 6,
    deletions: 6,
    diffs: [
      { type: "remove", code: '- <div className="bg-slate-900 border-slate-800 text-white">' },
      { type: "add", code: '+ <div className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-sm">' },
    ]
  },
  {
    id: "career-hero",
    name: "CareerHero.tsx",
    path: "components/careers/CareerHero.tsx",
    category: "career",
    categoryLabel: "Careers Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Career hero banner title text-slate-900 dark:text-white, subtitle text-slate-600 dark:text-slate-400.",
    whatRemovedHi: "Hardcoded white hero banner text `text-white text-slate-400`.",
    summaryHi: "Career hero section banner title contrast, subtext readability, and search quick button.",
    summaryEn: "Enhanced career section hero header typography and button contrast.",
    additions: 9,
    deletions: 9,
    diffs: [
      { type: "remove", code: '- <h1 className="text-white text-5xl font-extrabold">Build Your Career</h1>' },
      { type: "add", code: '+ <h1 className="text-slate-900 dark:text-white text-5xl font-extrabold">Build Your Career</h1>' },
    ]
  },
  {
    id: "career-cta",
    name: "CTA.tsx (Career)",
    path: "components/careers/CTA.tsx",
    category: "career",
    categoryLabel: "Careers Component",
    typeBadge: "Edited Component",
    whatAddedHi: "Career CTA banner container styling and text readability.",
    whatRemovedHi: "Dark-only career CTA banner styles.",
    summaryHi: "Career page bottom CTA banner section contrast and apply now button colors.",
    summaryEn: "Updated career CTA section container styling and action button contrast.",
    additions: 4,
    deletions: 4,
    diffs: [
      { type: "remove", code: '- <div className="bg-slate-950 border-slate-800 text-white">' },
      { type: "add", code: '+ <div className="bg-slate-900 dark:bg-gradient-to-r from-slate-950 via-cyan-950 to-slate-950 text-white shadow-xl">' },
    ]
  }
];

export default function ChangesReportPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedFiles, setExpandedFiles] = useState<Record<string, boolean>>({
    "theme-toggle": true,
    "whatsapp-button": true,
    "layout-tsx": true,
    "globals-css": true,
  });

  const toggleExpand = (id: string) => {
    setExpandedFiles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    fileChangesData.forEach((f) => (allExpanded[f.id] = true));
    setExpandedFiles(allExpanded);
  };

  const collapseAll = () => {
    setExpandedFiles({});
  };

  const filteredFiles = fileChangesData.filter((file) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "new" && file.category === "new") ||
      (selectedCategory === "pages" && (file.category === "page" || file.category === "config")) ||
      (selectedCategory === "components" && (file.category === "layout" || file.category === "section" || file.category === "career"));

    const matchesSearch =
      file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.summaryHi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.whatAddedHi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.whatRemovedHi.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const totalAdditions = fileChangesData.reduce((acc, f) => acc + f.additions, 0);
  const totalDeletions = fileChangesData.reduce((acc, f) => acc + f.deletions, 0);
  const newFilesCount = fileChangesData.filter((f) => f.category === "new").length;
  const pageFilesCount = fileChangesData.filter((f) => f.category === "page" || f.category === "config").length;
  const componentFilesCount = fileChangesData.filter((f) => f.category === "layout" || f.category === "section" || f.category === "career").length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 transition-colors duration-300 pb-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-b border-slate-800 py-12 px-6 shadow-md">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition backdrop-blur-md"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Website
            </Link>
            <div className="flex items-center gap-3 text-xs bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 px-3 py-1.5 rounded-full font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Branch: main | Detailed Code & Component Audit
            </div>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
              Detailed Component & File Changes Report
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              नीचे दी गई लिस्ट में एक-एक फाइल और कंपोनेंट का पूरा हिसाब है कि <span className="text-emerald-400 font-bold">क्या नया ऐड हुआ है (+)</span> और <span className="text-rose-400 font-bold">क्या हटाया गया है (-)</span>।
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Total Changed Files</div>
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                <FileCode className="w-5 h-5 text-cyan-400" /> {fileChangesData.length} Files
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">New Components</div>
              <div className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
                <FilePlus className="w-5 h-5" /> +{newFilesCount} Added
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Lines Added</div>
              <div className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
                <Plus className="w-5 h-5" /> +{totalAdditions} Lines
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Lines Removed</div>
              <div className="text-2xl font-bold text-rose-400 flex items-center gap-2">
                <Minus className="w-5 h-5" /> -{totalDeletions} Lines
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        
        {/* Category Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1: New Components */}
          <div className="bg-white dark:bg-slate-900 border border-emerald-500/30 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">🆕 Naye Components Added</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{newFilesCount} New Files</p>
              </div>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span className="font-mono font-semibold">ThemeToggle.tsx</span> (Sun/Moon switch)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span className="font-mono font-semibold">ThemeProvider.tsx</span> (Context provider)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span className="font-mono font-semibold">WhatsAppButton.tsx</span> (Floating chat)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span className="font-mono font-semibold">ThemeControls.tsx</span> (Theme drawer)
              </li>
            </ul>
          </div>

          {/* Card 2: Edited Page Files */}
          <div className="bg-white dark:bg-slate-900 border border-indigo-500/30 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                <Layout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">📄 Edited Page Files (app/)</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{pageFilesCount} Page Files</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Root Layout, Global CSS, About, Contact, Services, Portfolio, Team & Careers pages par light mode support, color contrast aur input styling add ki gayi.
            </p>
          </div>

          {/* Card 3: Edited UI Components */}
          <div className="bg-white dark:bg-slate-900 border border-cyan-500/30 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">🧩 Edited UI Components</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{componentFilesCount} Component Files</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Navbar, Footer, Hero, ServicesPreview, TrustBar, Stats, ApplicationForm, OpenPositions, FAQ vagairah sabhi sections me dual theme polish kiya gaya.
            </p>
          </div>

        </div>

        {/* Controls Header: Search & Filter Tabs */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search file name, component path, added code, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: `All Files (${fileChangesData.length})` },
                { id: "new", label: `New Components ✨ (${newFilesCount})` },
                { id: "pages", label: `Pages app/ (${pageFilesCount})` },
                { id: "components", label: `UI Components (${componentFilesCount})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === tab.id
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>

          {/* Action Buttons: Expand/Collapse All */}
          <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 mt-4 pt-4 text-xs text-slate-500 dark:text-slate-400">
            <div>
              Showing <span className="font-bold text-slate-900 dark:text-white">{filteredFiles.length}</span> of {fileChangesData.length} files
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={expandAll}
                className="hover:text-cyan-500 font-medium flex items-center gap-1 transition"
              >
                <ChevronDown className="w-3.5 h-3.5" /> Expand All Code Diffs
              </button>
              <span>•</span>
              <button
                onClick={collapseAll}
                className="hover:text-cyan-500 font-medium flex items-center gap-1 transition"
              >
                <ChevronUp className="w-3.5 h-3.5" /> Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* Detailed File Cards List */}
        <div className="space-y-6">
          {filteredFiles.map((file) => {
            const isExpanded = !!expandedFiles[file.id];
            return (
              <div
                key={file.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
              >
                {/* File Header Card */}
                <div
                  onClick={() => toggleExpand(file.id)}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl border ${
                        file.category === "new"
                          ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400"
                          : "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400"
                      }`}
                    >
                      {file.category === "new" ? <FilePlus className="w-5 h-5" /> : <FileCode className="w-5 h-5" />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {file.name}
                        </h3>
                        <span
                          className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold tracking-wide ${
                            file.category === "new"
                              ? "bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                          }`}
                        >
                          {file.typeBadge}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                        {file.path}
                      </p>
                    </div>
                  </div>

                  {/* Lines Count & Toggle Icon */}
                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900">
                        +{file.additions} lines
                      </span>
                      {file.deletions > 0 && (
                        <span className="text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-900">
                          -{file.deletions} lines
                        </span>
                      )}
                    </div>

                    <button
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                      aria-label="Toggle diff view"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Explanation Summary Banner with WHAT ADDED & WHAT REMOVED */}
                <div className="px-5 py-4 bg-slate-50 dark:bg-slate-800/40 border-t border-b border-slate-100 dark:border-slate-800 text-xs sm:text-sm space-y-2">
                  <div className="flex items-start gap-2 text-emerald-700 dark:text-emerald-400 font-medium">
                    <span className="font-bold bg-emerald-100 dark:bg-emerald-950 px-1.5 py-0.5 rounded text-[11px]">Kya Add Hua (+):</span>
                    <span>{file.whatAddedHi}</span>
                  </div>

                  <div className="flex items-start gap-2 text-rose-700 dark:text-rose-400 font-medium">
                    <span className="font-bold bg-rose-100 dark:bg-rose-950 px-1.5 py-0.5 rounded text-[11px]">Kya Hataya/Change Hua (-):</span>
                    <span>{file.whatRemovedHi}</span>
                  </div>
                </div>

                {/* Expanded Code Diff Box */}
                {isExpanded && (
                  <div className="p-4 bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto border-t border-slate-800">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 pb-2 border-b border-slate-800">
                      <span className="flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Code Snippet Diff
                      </span>
                      <span>Green = Added Code (+) | Red = Removed Code (-)</span>
                    </div>

                    <div className="space-y-1 leading-relaxed">
                      {file.diffs.map((diff, idx) => (
                        <div
                          key={idx}
                          className={`px-3 py-1 rounded flex items-center gap-2 whitespace-pre ${
                            diff.type === "add"
                              ? "bg-emerald-950/70 text-emerald-300 border-l-4 border-emerald-500"
                              : diff.type === "remove"
                              ? "bg-rose-950/70 text-rose-300 border-l-4 border-rose-500"
                              : "text-slate-400"
                          }`}
                        >
                          {diff.code}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFiles.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                No matching file changes found
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Try searching with different keywords like &quot;ThemeToggle&quot;, &quot;Contact&quot;, or &quot;CSS&quot;.
              </p>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-6">
          Zynovix Tech Solution — Interactive Code Audit & Diffs Dashboard
        </div>
      </div>
    </div>
  );
}
