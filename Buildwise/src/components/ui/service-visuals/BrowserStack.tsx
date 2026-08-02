export function BrowserStack() {
  return (
    <div className="relative h-56 w-full" style={{ perspective: "800px" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="animate-float absolute inset-x-4 overflow-hidden rounded-lg border border-service-web/30 bg-base-deep/80 shadow-lg"
          style={{
            top: `${i * 18}px`,
            left: `${i * 14}px`,
            right: `${i * 14}px`,
            zIndex: 3 - i,
            animationDelay: `${i * 0.6}s`,
            transform: `rotateY(${(1 - i) * 4}deg) rotateX(2deg)`,
            opacity: 1 - i * 0.22,
          }}
        >
          <div className="flex items-center gap-1.5 border-b border-service-web/20 px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-service-web/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-service-web/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-service-web/30" />
          </div>
          <div className="space-y-1.5 p-3">
            <div className="h-2 w-2/3 rounded bg-service-web/40" />
            <div className="h-1.5 w-full rounded bg-service-web/15" />
            <div className="h-1.5 w-5/6 rounded bg-service-web/15" />
            <div className="mt-2 h-8 w-full rounded border border-dashed border-service-web/25" />
          </div>
        </div>
      ))}
    </div>
  );
}
