const PATH = "M10,60 C50,15 85,105 120,60 C150,22 185,98 230,60";
const NODES = [10, 120, 230];

export function NodeFlow() {
  return (
    <div className="flex h-56 w-full items-center">
      <svg viewBox="0 0 240 120" className="h-full w-full">
        <path
          d={PATH}
          fill="none"
          stroke="var(--color-service-automation)"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        {NODES.map((cx) => (
          <g key={cx}>
            <circle
              cx={cx}
              cy="60"
              r="9"
              fill="var(--color-base-deep)"
              stroke="var(--color-service-automation)"
              strokeWidth="2"
            />
            <circle cx={cx} cy="60" r="3" fill="var(--color-service-automation)" />
          </g>
        ))}
        <circle r="4" fill="var(--color-service-automation)">
          <animateMotion dur="3s" repeatCount="indefinite" path={PATH} />
        </circle>
      </svg>
    </div>
  );
}
