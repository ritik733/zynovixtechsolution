import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface ServiceBreadcrumbsProps {
  currentTitle: string;
}

export default function ServiceBreadcrumbs({ currentTitle }: ServiceBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
      <Link
        href="/"
        className="inline-flex items-center gap-1 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
      >
        <Home className="h-3.5 w-3.5" />
        <span>Home</span>
      </Link>
      <ChevronRight className="h-3 w-3 text-slate-400 dark:text-slate-600" />
      <Link
        href="/services"
        className="transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
      >
        Services
      </Link>
      <ChevronRight className="h-3 w-3 text-slate-400 dark:text-slate-600" />
      <span className="font-medium text-slate-900 dark:text-slate-200 truncate max-w-[200px] sm:max-w-none">
        {currentTitle}
      </span>
    </nav>
  );
}
