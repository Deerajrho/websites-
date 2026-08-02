const BAR_HEIGHTS = [
  30, 55, 40, 70, 90, 60, 100, 75, 45, 85, 65, 95, 50, 80, 35, 60, 90, 55, 70,
  40, 65, 45,
];

export function Waveform() {
  return (
    <div className="flex h-56 w-full flex-col items-center justify-center gap-6 rounded-xl border border-service-voice/20 bg-service-voice/5 px-4 py-6">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-service-voice">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-service-voice" />
        Live call — 00:24
      </div>
      <div className="flex h-20 w-full items-center justify-center gap-[3px]">
        {BAR_HEIGHTS.map((h, i) => (
          <span
            key={i}
            className="w-1 shrink-0 rounded-full bg-service-voice"
            style={{
              height: `${h}%`,
              animation: "waveform-bar 1.1s ease-in-out infinite",
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
