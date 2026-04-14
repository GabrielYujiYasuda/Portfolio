import type { MouseEventHandler } from "react";

export type AvailabilityCardProps = {
  /** Optional meta label above the title (e.g. "AVAILABLE FOR FREELANCE") */
  statusLabel?: string;
  /** Main heading for the card */
  title: string;
  /** Supporting text below the title */
  subtitle?: string;
  /** Primary call-to-action label */
  ctaText?: string;
  /** URL for the primary call-to-action */
  ctaUrl?: string;
  /** Handler for click events when no URL is provided */
  onCtaClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const AvailabilityCard = ({
  statusLabel,
  title,
  subtitle,
  ctaText,
  ctaUrl,
  onCtaClick,
  className,
}: AvailabilityCardProps) => {
  const button = ctaUrl ? (
    <a
      href={ctaUrl}
      className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      target="_blank"
      rel="noreferrer"
    >
      {ctaText}
    </a>
  ) : (
    <button
      type="button"
      onClick={onCtaClick}
      className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      disabled={true}
    >
      {ctaText}
    </button>
  );

  return (
    <div
      className={`card w-full rounded-3xl bg-white/70 shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${className ?? ""}`}
    >
      <div className="card-body gap-4 p-12 text-center">
        {statusLabel ? (
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">{statusLabel}</p>
        ) : null}

        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>

        {subtitle ? <p className="mx-auto mt-2 max-w-2xl text-base text-slate-600">{subtitle}</p> : null}

        {ctaText ? <div className="mt-8">{button}</div> : null}
      </div>
    </div>
  );
};

export default AvailabilityCard;
