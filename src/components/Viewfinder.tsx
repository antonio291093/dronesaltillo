/** Esquinas del visor de cámara del dron. Se usa como marco recurrente. */
export default function Viewfinder({
  className = "",
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  const s = `${size}px`;
  const base = "absolute border-cal/80";
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      <span className={`${base} left-0 top-0 border-l border-t`} style={{ width: s, height: s }} />
      <span className={`${base} right-0 top-0 border-r border-t`} style={{ width: s, height: s }} />
      <span className={`${base} bottom-0 left-0 border-b border-l`} style={{ width: s, height: s }} />
      <span className={`${base} bottom-0 right-0 border-b border-r`} style={{ width: s, height: s }} />
    </div>
  );
}
