export function GrowthGraph() {
  const path = "M4,84 L36,70 L68,74 L100,48 L132,52 L164,20 L196,10";

  return (
    <div className="flex h-56 w-full flex-col gap-3">
      <svg
        viewBox="0 0 200 100"
        className="h-28 w-full overflow-visible"
        preserveAspectRatio="none"
      >
        <path
          d={path}
          fill="none"
          stroke="var(--color-service-seo)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="260"
          style={{ animation: "graph-draw 2.4s ease-out forwards" }}
        />
        {[
          [4, 84],
          [68, 74],
          [132, 52],
          [196, 10],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="var(--color-service-seo)"
            style={{
              animation: "pulse-glow 2.4s ease-in-out infinite",
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </svg>

      <div className="flex flex-col gap-1.5">
        {[100, 78, 60].map((w, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded border border-service-seo/20 bg-service-seo/5 px-2 py-1.5"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-service-seo/70" />
            <span
              className="h-1.5 rounded bg-service-seo/25"
              style={{ width: `${w}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
