"use client";

import { useEffect, useRef } from "react";

// The fly-through behind the whole page: 100 frames (public/frames, from the "Modern beachfront house"
// animation) drawn on a fixed canvas, scrubbed by scroll position — from the open sea at the top, over the
// beach and through the house, to the aerial view as the footer arrives.
// - Frame 1 is the CSS background, so something shows before JavaScript runs.
// - Frames load coarse-to-fine (every 16th, then every 8th, ...), so scrubbing works early; until a frame
//   arrives, the nearest loaded one is drawn.
// - The shown frame eases toward the target, so the film glides instead of stepping.
// - Reduced-motion users get the still first frame, and nothing else is downloaded.
const COUNT = 100;
const src = (i: number) => `/frames/frame_${String(i + 1).padStart(3, "0")}.webp`;

export default function FrameBackdrop() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const frames: HTMLImageElement[] = [];
    const ready: boolean[] = [];
    let drawn = -1;
    let shown = 0;
    let target = 0;
    let end = 1; // scroll distance over which the film plays: until the footer reaches the bottom of the screen
    let raf = 0;

    const nearest = (i: number) => {
      for (let k = 0; k < COUNT; k++) {
        if (ready[i - k]) return i - k;
        if (ready[i + k]) return i + k;
      }
      return -1;
    };

    const draw = () => {
      const i = nearest(Math.round(shown));
      if (i < 0 || i === drawn) return;
      drawn = i;
      const img = frames[i];
      // Cover-fit, centred, like background-size: cover.
      const s = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const w = img.naturalWidth * s;
      const h = img.naturalHeight * s;
      ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
    };

    const tick = () => {
      shown += (target - shown) * 0.18;
      if (Math.abs(target - shown) < 0.02) shown = target;
      draw();
      raf = shown === target ? 0 : requestAnimationFrame(tick);
    };

    const onScroll = () => {
      target = Math.min(1, Math.max(0, scrollY / end)) * (COUNT - 1);
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      // The frames are 1280×720; a backing store beyond 1.5× the CSS size only costs memory.
      const d = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(innerWidth * d);
      canvas.height = Math.round(innerHeight * d);
      const footer = document.querySelector("footer");
      end = Math.max(1, (footer ? footer.offsetTop : document.documentElement.scrollHeight) - innerHeight);
      drawn = -1;
      draw();
      onScroll();
    };

    // Coarse-to-fine load order: 0, 16, 32, ... then 8, 24, ... down to every frame.
    const order = [...new Set([16, 8, 4, 2, 1].flatMap((step) => Array.from({ length: Math.ceil(COUNT / step) }, (_, k) => k * step)))];
    for (const i of order) {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        ready[i] = true;
        drawn = -1; // a closer frame may have arrived
        draw();
      };
      img.src = src(i);
      frames[i] = img;
    }

    onResize();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onResize);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url(${src(0)})` }}>
      <canvas ref={ref} className="h-full w-full" />
      {/* Cools the warm sand and stone toward the site's blues, and darkens the top edge under the header. */}
      <div className="absolute inset-0 bg-sky-200 opacity-25 mix-blend-multiply" />
      <div className="absolute inset-0 bg-linear-to-b from-abyss/40 via-transparent via-25% to-abyss/30" />
    </div>
  );
}
