"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 240;
const MOBILE_BREAKPOINT = 768;

function frameSrc(base: string, index: number) {
  return `${base}/frame-${String(index).padStart(4, "0")}.jpg`;
}

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const tickingRef = useRef(false);

  const [loadPct, setLoadPct] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const base = isMobile ? "/frames-mobile" : "/frames-desktop";
    const framesToLoad = reducedMotion ? 1 : FRAME_COUNT;

    function sizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.imageSmoothingEnabled = true;
      ctx!.imageSmoothingQuality = "high";
    }

    function drawFrame(index: number) {
      const img = imagesRef.current[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx!.clearRect(0, 0, w, h);

      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = w / h;
      let drawW: number, drawH: number, offsetX: number, offsetY: number;

      if (canvasRatio > imgRatio) {
        drawW = w;
        drawH = w / imgRatio;
        offsetX = 0;
        offsetY = (h - drawH) / 2;
      } else {
        drawH = h;
        drawW = h * imgRatio;
        offsetX = (w - drawW) / 2;
        offsetY = 0;
      }
      ctx!.drawImage(img, offsetX, offsetY, drawW, drawH);
    }

    function computeProgress() {
      const scrollable = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      return Math.min(1, Math.max(0, window.scrollY / scrollable));
    }

    function onScroll() {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        const progress = computeProgress();
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(progress * FRAME_COUNT)
        );
        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
        tickingRef.current = false;
      });
    }

    let resizeTimeout: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        sizeCanvas();
        drawFrame(currentFrameRef.current);
      }, 120);
    }

    sizeCanvas();

    const images: HTMLImageElement[] = [];
    let loaded = 0;
    let cancelled = false;

    for (let i = 1; i <= framesToLoad; i++) {
      const img = new Image();
      img.src = frameSrc(base, reducedMotion ? FRAME_COUNT : i);
      img.onload = img.onerror = () => {
        loaded++;
        if (cancelled) return;
        setLoadPct(Math.round((loaded / framesToLoad) * 100));
        if (loaded === framesToLoad) {
          setReady(true);
          if (reducedMotion) {
            currentFrameRef.current = 0;
            drawFrame(0);
          } else {
            drawFrame(0);
            window.addEventListener("scroll", onScroll, { passive: true });
            window.addEventListener("resize", onResize);
          }
        }
      };
      images.push(img);
    }
    imagesRef.current = reducedMotion
      ? Array(FRAME_COUNT).fill(images[0])
      : images;

    return () => {
      cancelled = true;
      clearTimeout(resizeTimeout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-base-deep"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ filter: "brightness(1.35) contrast(1.05)" }}
      />
      <div className="absolute inset-0 bg-base-deep/30" />

      {!ready && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-base-deep">
          <div className="h-px w-40 overflow-hidden bg-hairline">
            <div
              className="h-full bg-accent transition-[width] duration-150"
              style={{ width: `${loadPct}%` }}
            />
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Loading {loadPct}%
          </span>
        </div>
      )}
    </div>
  );
}
