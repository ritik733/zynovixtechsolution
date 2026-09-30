"use client";

const companies = [
  {
    name: "Frappe",
    color: "#0089FF",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#fff" stroke="#E2E8F0" strokeWidth="1" />
        <path d="M7 6.5h9.5v2.3H9.6v3.4h6v2.3h-6v5.5H7z" fill="#0089FF" />
      </svg>
    ),
  },
  {
    name: "Python",
    color: null,
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
    color: "#61DAFB",
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
    color: "#003545",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="#003545">
        <path d="M18.6 3.2c-1.3.1-2.6.6-3.7 1.4-1 .7-2 1.6-3.2 1.9-1.1.3-2.3.1-3.4.4-2 .5-3.6 2.1-4.3 4-.5 1.4-.5 3-.1 4.5.5 1.7 1.7 3.2 3.3 4 1.3.7 2.9.9 4.3.6 1.5-.3 2.8-1.2 3.7-2.4.8-1 1.3-2.3 2.1-3.3.9-1.1 2.2-1.8 3-3 .9-1.3 1.3-3 1-4.6-.3-1.7-1.4-3.2-2.7-4.5zM7.6 15.4c-.6-.7-.9-1.6-.8-2.5.1-1.2.9-2.3 2-2.8 1-.4 2.2-.4 3.2.1-1 .4-1.9 1-2.6 1.8-.7.8-1.2 1.8-1.8 2.7-.1.2-.3.5 0 .7z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "#38BDF8",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="#38BDF8">
        <path d="M12 6.5c-2.8 0-4.5 1.4-5.2 4.1.8-1.4 1.8-1.9 3-1.6.65.17 1.12.66 1.63 1.2.85.87 1.83 1.9 3.97 1.9 2.8 0 4.5-1.4 5.2-4.1-.8 1.4-1.8 1.9-3 1.6-.65-.17-1.12-.66-1.63-1.2-.85-.87-1.83-1.9-3.97-1.9Zm-5.2 6.15c-2.8 0-4.5 1.4-5.2 4.1.8-1.4 1.8-1.9 3-1.6.65.17 1.12.66 1.63 1.2.85.87 1.83 1.9 3.97 1.9 2.8 0 4.5-1.4 5.2-4.1-.8 1.4-1.8 1.9-3 1.6-.65-.17-1.12-.66-1.63-1.2-.85-.87-1.83-1.9-3.97-1.9Z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    color: "#FF9900",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="#FF9900">
        <path d="M6.9 10.6c0 .29.03.53.09.7.06.18.15.37.27.58.04.06.06.12.06.17 0 .07-.04.14-.13.21l-.44.29a.34.34 0 0 1-.18.06c-.07 0-.14-.04-.21-.1a2.2 2.2 0 0 1-.25-.33 4.1 4.1 0 0 1-.22-.42c-.55.65-1.24.97-2.07.97-.59 0-1.06-.17-1.4-.5-.34-.34-.51-.79-.51-1.36 0-.6.21-1.09.65-1.46.43-.37 1-.56 1.73-.56.24 0 .48.02.74.06.26.03.53.09.81.15v-.51c0-.55-.11-.93-.34-1.15-.23-.22-.62-.33-1.18-.33-.25 0-.51.03-.78.1a5.6 5.6 0 0 0-.78.24 2 2 0 0 1-.25.1.44.44 0 0 1-.11.02c-.1 0-.15-.07-.15-.22v-.35c0-.11.02-.2.05-.25a.5.5 0 0 1 .2-.15c.25-.13.55-.24.9-.33.35-.09.72-.14 1.11-.14.85 0 1.47.19 1.87.58.4.39.6.97.6 1.76v2.32zm-2.86 1.07c.23 0 .47-.04.72-.13.26-.09.48-.25.68-.47a1.16 1.16 0 0 0 .24-.47c.04-.18.06-.4.06-.65v-.32a5.9 5.9 0 0 0-.65-.12 5.3 5.3 0 0 0-.66-.04c-.47 0-.82.09-1.04.28-.23.19-.34.45-.34.8 0 .32.08.56.25.72.16.16.4.24.74.24z" />
        <path d="M20.6 17.9c-2.5 1.85-6.14 2.83-9.27 2.83-4.38 0-8.32-1.62-11.3-4.31-.24-.21-.03-.5.25-.34 3.22 1.87 7.2 3 11.32 3 2.78 0 5.83-.58 8.64-1.77.42-.19.78.28.36.59z" opacity=".9" />
      </svg>
    ),
  },
  {
    name: "ERPNext",
    color: "#0089FF",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#F1F5F9" />
        <text x="12" y="15" textAnchor="middle" fontSize="7" fontWeight="700" fill="#0089FF">ERP</text>
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: null,
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
    color: "#68A063",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="#68A063">
        <path d="M12 1.85c-.27 0-.55.07-.78.2L3.8 6.35c-.5.29-.8.82-.8 1.4v9.5c0 .58.3 1.11.8 1.4l2.1 1.21c1.02.5 1.39.5 1.87.5 1.5 0 2.36-.91 2.36-2.5V9.08c0-.13-.1-.23-.23-.23H9.1c-.13 0-.23.1-.23.23v8.38c0 .7-.72 1.4-1.9.8L4.7 17.4a.29.29 0 0 1-.15-.25V7.75c0-.11.06-.21.15-.26l7.42-4.28a.28.28 0 0 1 .29 0l7.42 4.28c.09.05.15.15.15.26v9.4c0 .1-.06.2-.15.25l-7.42 4.29a.27.27 0 0 1-.28 0l-1.9-1.13c-.06-.03-.13-.04-.18-.01-.53.3-.63.34-1.13.51-.12.04-.3.11.07.32l2.48 1.47c.24.14.51.21.78.21s.54-.07.78-.21l7.42-4.29c.5-.29.8-.82.8-1.4v-9.5c0-.58-.3-1.11-.8-1.4L12.78 2.05a1.6 1.6 0 0 0-.78-.2z" />
        <path d="M14.2 12.1c-2.3 0-2.78-1.05-2.78-1.94 0-.12-.1-.22-.23-.22h-.94c-.13 0-.23.1-.23.22 0 1.58 1.04 3.06 3.5 3.06 2.5 0 3.72-1.2 3.72-3.32 0-1.71-1.14-2.6-3.7-3.09-1.87-.36-2.05-.67-2.05-1.28 0-.51.24-1.1 1.66-1.1 1.27 0 1.74.27 1.93 1.13.02.11.11.19.22.19h.94c.06 0 .13-.03.17-.08.05-.05.07-.11.06-.18-.13-1.52-1.14-2.22-3.32-2.22-1.9 0-3.03.8-3.03 2.15 0 1.46 1.13 1.88 2.95 2.06 1.98.19 2.1.5 2.1 1.12 0 .82-.66 1.3-1.87 1.3z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="#336791">
        <path d="M17.1 2.2c-1.9 0-3.6.6-4.9 1.7C10.9 2.8 9.2 2.2 7.3 2.2 4 2.2 1.3 4.9 1.3 8.2c0 2.9 1.5 6 3.9 8.6 2 2.2 4.4 3.9 6.8 4.9 2.4-1 4.8-2.7 6.8-4.9 2.4-2.6 3.9-5.7 3.9-8.6 0-3.3-2.7-6-6-6zm-2 12.6c-.4.3-1 .5-1.6.5-.6 0-1.1-.2-1.5-.5-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0 .2.2.5.3.8.3.3 0 .6-.1.8-.3.2-.2.5-.2.7 0 .2.2.2.5.1.7z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    color: "#0DB7ED",
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
              className="group flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 px-4 py-8 text-center ... transition-[transform,border-color,background-color] duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:bg-slate-50 ..."
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