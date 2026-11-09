export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-7 w-7 text-atardecer" aria-hidden>
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="7" cy="7" r="4.5" />
          <circle cx="25" cy="7" r="4.5" />
          <circle cx="7" cy="25" r="4.5" />
          <circle cx="25" cy="25" r="4.5" />
          <path d="M10.5 10.5l11 11M21.5 10.5l-11 11" />
        </g>
        <rect x="13" y="13" width="6" height="6" fill="currentColor" />
      </svg>
      <span className="display text-[1.65rem] leading-none tracking-wide">
        Drone<span className="font-semibold text-niebla">Saltillo</span>
      </span>
    </span>
  );
}
