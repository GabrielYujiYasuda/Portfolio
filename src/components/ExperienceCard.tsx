import type { ReactNode } from "react";

export type ExperienceCardProps = {
  dateRange: string;
  title: string;
  company: string;
  subtitle?: string;
  highlights?: string[];
  children?: ReactNode;
  className?: string;
};

const ExperienceCard = ({
  dateRange,
  title,
  company,
  subtitle,
  highlights,
  children,
  className,
}: ExperienceCardProps) => {
  return (
    <div
      className={`card w-full rounded-3xl bg-white/70 shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${className ?? ""}`}
    >
      <div className="card-body gap-5 p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">{dateRange}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">{title}</h3>
            <p className="mt-1 text-sm font-medium text-slate-600">{company}</p>
            {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
          </div>
        </div>

        {children}

        {Array.isArray(highlights) && highlights.length > 0 ? (
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {highlights.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default ExperienceCard;
