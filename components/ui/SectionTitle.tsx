type SectionTitleProps = {
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionTitle({
  subtitle,
  title,
  description,
  center = true,
}: SectionTitleProps) {
  return (
    <div
      className={`mb-14 ${
        center ? "text-center" : "text-left"
      }`}
    >
      {subtitle && (
        <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          {subtitle}
        </span>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}