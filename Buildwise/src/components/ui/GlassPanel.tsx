import type { ReactNode, CSSProperties } from "react";

export function GlassPanel({
  children,
  className = "",
  glow,
}: {
  children: ReactNode;
  className?: string;
  /** Accent color for the panel's outer glow, e.g. "var(--color-service-web)" */
  glow?: string;
}) {
  const style: CSSProperties = glow
    ? { boxShadow: `0 0 0 1px transparent, 0 20px 60px -20px ${glow}` }
    : {};

  return (
    <div className={`glass-panel ${className}`} style={style}>
      {children}
    </div>
  );
}
