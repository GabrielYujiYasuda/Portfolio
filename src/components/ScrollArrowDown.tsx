type ScrollArrowDownProps = {
  scrollTo: () => void;
  className?: string;
  ariaLabel?: string;
};

const ScrollArrowDown = ({ scrollTo, className = "bottom-6", ariaLabel = "Scroll down" }: ScrollArrowDownProps) => {
  return (
    <button
      type="button"
      onClick={scrollTo}
      aria-label={ariaLabel}
      className={
        "absolute left-1/2 flex -translate-x-1/2 items-center justify-center text-slate-500 transition hover:text-slate-900 " +
        className
      }
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 animate-bounce"
        aria-hidden="true"
      >
        <path d="M12 5v14" />
        <path d="m6 13 6 6 6-6" />
      </svg>
    </button>
  );
};

export default ScrollArrowDown;
