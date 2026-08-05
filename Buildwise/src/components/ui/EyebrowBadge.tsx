export function EyebrowBadge({
  children,
  color = "var(--color-accent)",
}: {
  children: string;
  color?: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]"
      style={{ color }}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: color, boxShadow: `0 0 12px ${color}` }}
      />
      {children}
    </span>
  );
}
