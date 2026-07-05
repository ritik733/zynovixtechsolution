import { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function Card({
  title,
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      {title && (
        <h3 className="mb-4 text-2xl font-bold text-slate-900">
          {title}
        </h3>
      )}

      <div className="text-slate-600 leading-7">
        {children}
      </div>
    </div>
  );
}