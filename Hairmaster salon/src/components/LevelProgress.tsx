import { useEffect, useRef } from "react";

export default function LevelProgress() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setProgress = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      if (fillRef.current) {
        fillRef.current.style.width = `${pct * 100}%`;
        fillRef.current.style.backgroundPosition = `${pct * 100}% 0`;
      }
    };
    setProgress();
    window.addEventListener("scroll", setProgress, { passive: true });
    window.addEventListener("resize", setProgress);
    return () => {
      window.removeEventListener("scroll", setProgress);
      window.removeEventListener("resize", setProgress);
    };
  }, []);

  return (
    <div className="level-progress" aria-hidden="true">
      <div className="level-progress__fill" ref={fillRef} />
    </div>
  );
}
