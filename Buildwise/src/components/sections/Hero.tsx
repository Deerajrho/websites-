"use client";

import { useEffect, useRef, useState } from "react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const FRAME_COUNT = 240;
const MOBILE_BREAKPOINT = 768;
const HEADLINE_THRESHOLD = 0.82;

function frameSrc(base: string, index: number) {
  return `${base}/frame-${String(index).padStart(4, "0")}.jpg`;
}

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const tickingRef = useRef(false);

  const [loadPct, setLoadPct] = useState(0);
  const [ready, setReady] = useState(false);
  const [showHeadline, setShowHeadline] = useState(false);
  const [showCue, setShowCue] = useState(true);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;
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
      const rect = wrapper!.getBoundingClientRect();
      const scrollDistance = Math.max(
        wrapper!.offsetHeight - window.innerHeight,
        1
      );
      const scrolled = -rect.top;
      return Math.min(1, Math.max(0, scrolled / scrollDistance));
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
        setShowHeadline(progress > HEADLINE_THRESHOLD);
        setShowCue(progress < 0.03);
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
            setShowHeadline(true);
            setShowCue(false);
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
    <section
      ref={wrapperRef}
      className="relative h-[500vh] motion-reduce:h-screen"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-base-deep">
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        />
        <span className="sr-only">
          An animated sequence showing a website being built from a blank
          canvas into a finished, polished site — Buildwise.Hustlers building
          digital experiences for clients.
        </span>

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

        <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 py-16 text-center">
          <EyebrowBadge>Buildwise.Hustlers // Digital Command Center</EyebrowBadge>

          <div className="relative flex items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute -inset-x-12 -inset-y-16 rounded-[999px] transition-opacity duration-700"
              style={{
                opacity: showHeadline ? 1 : 0,
                background:
                  "radial-gradient(ellipse at center, rgba(5,6,9,0.78) 0%, rgba(5,6,9,0.5) 45%, rgba(5,6,9,0) 72%)",
                filter: "blur(24px)",
              }}
            />
            <h1
              className="relative max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-fg transition-opacity duration-700 md:text-6xl"
              style={{
                opacity: showHeadline ? 1 : 0,
                textShadow:
                  "0 4px 28px rgba(0,0,0,0.85), 0 2px 10px rgba(0,0,0,0.7), 0 0 32px var(--color-accent-soft)",
              }}
            >
              Building Digital Experiences That Grow Businesses
            </h1>
          </div>

          <div
            className="flex flex-col items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-opacity duration-500 motion-reduce:hidden"
            style={{ opacity: showCue ? 1 : 0 }}
          >
            <span>Scroll</span>
            <span className="h-8 w-px animate-pulse bg-current" />
          </div>
        </div>
      </div>
    </section>
  );
}
