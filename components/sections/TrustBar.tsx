"use client";

import Image from "next/image";
import { siMariadb, siPostgresql } from "simple-icons";

const companies = [
  {
    name: "Frappe",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#fff" stroke="#E2E8F0" strokeWidth="1" />
        <path d="M7 6.5h9.5v2.3H9.6v3.4h6v2.3h-6v5.5H7z" fill="#0089FF" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9">
        <path
          d="M11.9 1.6c-4.5 0-4.2 1.9-4.2 1.9v2h4.3v.6H5.9S3 5.8 3 10.4c0 4.6 2.5 4.4 2.5 4.4h1.5v-2.1s-.1-2.5 2.5-2.5h4.2s2.4 0 2.4-2.3V4S16.5 1.6 11.9 1.6z"
          fill="#3776AB"
        />
        <path
          d="M12.1 22.4c4.5 0 4.2-1.9 4.2-1.9v-2h-4.3v-.6h6.1s2.9.3 2.9-4.3c0-4.6-2.5-4.4-2.5-4.4h-1.5v2.1s.1 2.5-2.5 2.5H10s-2.4 0-2.4 2.3V20s-.4 2.4 4.5 2.4z"
          fill="#FFD43B"
        />
        <circle cx="8.9" cy="3.9" r=".8" fill="#fff" />
        <circle cx="15.1" cy="20.1" r=".8" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="#61DAFB">
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" stroke="none" />
        <ellipse cx="12" cy="12" rx="9.5" ry="4" strokeWidth="1" />
        <ellipse cx="12" cy="12" rx="9.5" ry="4" strokeWidth="1" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9.5" ry="4" strokeWidth="1" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "MariaDB",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill={`#${siMariadb.hex}`}>
        <path d={siMariadb.path} />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="#38BDF8">
        <path d="M12 6.5c-2.8 0-4.5 1.4-5.2 4.1.8-1.4 1.8-1.9 3-1.6.65.17 1.12.66 1.63 1.2.85.87 1.83 1.9 3.97 1.9 2.8 0 4.5-1.4 5.2-4.1-.8 1.4-1.8 1.9-3 1.6-.65-.17-1.12-.66-1.63-1.2-.85-.87-1.83-1.9-3.97-1.9Zm-5.2 6.15c-2.8 0-4.5 1.4-5.2 4.1.8-1.4 1.8-1.9 3-1.6.65.17 1.12.66 1.63 1.2.85.87 1.83 1.9 3.97 1.9 2.8 0 4.5-1.4 5.2-4.1-.8 1.4-1.8 1.9-3 1.6-.65-.17-1.12-.66-1.63-1.2-.85-.87-1.83-1.9-3.97-1.9Z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <Image
        src="/images/tech/aws.svg"
        alt="AWS"
        width={36}
        height={36}
        className="h-9 w-9"
      />
    ),
  },
  {
    name: "ERPNext",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#F1F5F9" />
        <text x="12" y="15" textAnchor="middle" fontSize="7" fontWeight="700" fill="#0089FF">ERP</text>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="10.3" />
        <path d="M8.3 8v8M8.3 8l8 8" strokeLinecap="round" />
        <path d="M15.6 8v5.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="#68A063">
        <path d="M12 1.85c-.27 0-.55.07-.78.2L3.8 6.35c-.5.29-.8.82-.8 1.4v9.5c0 .58.3 1.11.8 1.4l2.1 1.21c1.02.5 1.39.5 1.87.5 1.5 0 2.36-.91 2.36-2.5V9.08c0-.13-.1-.23-.23-.23H9.1c-.13 0-.23.1-.23.23v8.38c0 .7-.72 1.4-1.9.8L4.7 17.4a.29.29 0 0 1-.15-.25V7.75c0-.11.06-.21.15-.26l7.42-4.28a.28.28 0 0 1 .29 0l7.42 4.28c.09.05.15.15.15.26v9.4c0 .1-.06.2-.15.25l-7.42 4.29a.27.27 0 0 1-.28 0l-1.9-1.13c-.06-.03-.13-.04-.18-.01-.53.3-.63.34-1.13.51-.12.04-.3.11.07.32l2.48 1.47c.24.14.51.21.78.21s.54-.07.78-.21l7.42-4.29c.5-.29.8-.82.8-1.4v-9.5c0-.58-.3-1.11-.8-1.4L12.78 2.05a1.6 1.6 0 0 0-.78-.2z" />
        <path d="M14.2 12.1c-2.3 0-2.78-1.05-2.78-1.94 0-.12-.1-.22-.23-.22h-.94c-.13 0-.23.1-.23.22 0 1.58 1.04 3.06 3.5 3.06 2.5 0 3.72-1.2 3.72-3.32 0-1.71-1.14-2.6-3.7-3.09-1.87-.36-2.05-.67-2.05-1.28 0-.51.24-1.1 1.66-1.1 1.27 0 1.74.27 1.93 1.13.02.11.11.19.22.19h.94c.06 0 .13-.03.17-.08.05-.05.07-.11.06-.18-.13-1.52-1.14-2.22-3.32-2.22-1.9 0-3.03.8-3.03 2.15 0 1.46 1.13 1.88 2.95 2.06 1.98.19 2.1.5 2.1 1.12 0 .82-.66 1.3-1.87 1.3z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill={`#${siPostgresql.hex}`}>
        <path d={siPostgresql.path} />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="#0DB7ED">
        <path d="M22.1 9.9c-.4-.3-1.3-.5-2.1-.4-.1-.7-.5-1.3-1.1-1.8l-.4-.3-.3.4c-.4.5-.6 1.3-.5 1.9.1.4.2.8.5 1.1-.2.1-.4.2-.6.3-.4.2-.9.2-1.3.2H1.5l-.1.5c-.1.9 0 1.9.4 2.8.5 1 1.3 1.7 2.4 2.1.9.4 2.4.6 3.9.6 1.8 0 3.6-.3 5.3-1 1.3-.5 2.5-1.3 3.5-2.4 1.6-1.7 2.5-3.7 3.2-5.5h.3c.7 0 1.5-.2 2-.7l.3-.3zM4.2 9.6h1.9v-1.9H4.2zm2.6 0h1.9v-1.9H6.8zm2.6 0h1.9v-1.9H9.4zm2.6 0h1.9v-1.9H12zm2.6 0h1.9v-1.9h-1.9zM6.8 6.9h1.9V5H6.8zm2.6 0h1.9V5H9.4zm2.6 0h1.9V5H12zm-7.8 5.4h1.9v-1.9H4.2zm2.6 0h1.9v-1.9H6.8zm2.6 0h1.9v-1.9H9.4zm2.6 0h1.9v-1.9H12zm2.6 0h1.9v-1.9h-1.9z" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-[#050816]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-60 w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-2xl font-bold uppercase tracking-[8px] text-slate-900 dark:text-white">
          Technologies & Platforms
        </h2>
        <p className="mt-4 text-center text-slate-600 dark:text-slate-400">
          We build modern websites, Frappe ERPNext solutions, and custom business management software using industry-leading technologies.
        </p>
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 px-4 py-8 text-center transition-[transform,border-color,background-color] duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:bg-slate-50 dark:border-slate-700/50 dark:bg-slate-900/60 dark:text-white dark:hover:bg-slate-900 dark:shadow-none"
            >
              <div className="flex h-9 w-9 items-center justify-center">
                {company.icon}
              </div>
              <span className="font-semibold text-slate-900 transition group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}