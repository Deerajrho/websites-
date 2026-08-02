export function DashboardGlow() {
  return (
    <div className="grid h-56 w-full grid-cols-3 gap-2.5">
      <div className="col-span-2 flex flex-col justify-end gap-1 rounded-lg border border-service-digital/25 bg-service-digital/8 p-3">
        <div className="mb-1 h-1.5 w-1/3 rounded bg-service-digital/40" />
        <div className="flex h-20 items-end gap-1.5">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t bg-service-digital/50"
              style={{
                height: `${h}%`,
                animation: "pulse-glow 3s ease-in-out infinite",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-service-digital/25 bg-service-digital/8 p-3">
        <svg viewBox="0 0 36 36" className="h-14 w-14">
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="var(--color-service-digital)"
            strokeOpacity="0.2"
            strokeWidth="4"
          />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="var(--color-service-digital)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="94"
            strokeDashoffset="28"
            transform="rotate(-90 18 18)"
          />
        </svg>
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
          Uptime
        </span>
      </div>

      <div className="col-span-3 flex items-center justify-between rounded-lg border border-service-digital/25 bg-service-digital/8 px-4 py-2.5">
        {["API", "CDN", "DB", "Auth"].map((label, i) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <span
              className="h-2 w-2 rounded-full bg-service-digital"
              style={{
                animation: "pulse-glow 2s ease-in-out infinite",
                animationDelay: `${i * 0.25}s`,
              }}
            />
            <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
