import type { ReactNode } from "react";

type CardProps = {
  title: string;
  subtitle?: string;
  tags?: string[];
  children?: ReactNode;
  className?: string;
};

const Card = ({ title, subtitle, tags, children, className }: CardProps) => {
  return (
    <div className={`card w-full max-w-md rounded-3xl bg-white/70 shadow-xl ring-1 ring-black/5 ${className ?? ""}`}>
      <div className="card-body gap-6">
        <div>
          <h3 className="text-sm font-semibold tracking-widest text-gray-500">{title}</h3>
          {subtitle ? <p className="mt-2 text-sm font-medium text-slate-700">{subtitle}</p> : null}
        </div>

        {children}

        {Array.isArray(tags) && tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded bg-[#F4F4F5] px-3 py-1 text-xs font-semibold text-[#3F3F46]">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
