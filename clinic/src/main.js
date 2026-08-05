import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Smooth scroll, synced to GSAP's ticker so ScrollTrigger stays accurate */
const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1 });
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Mobile nav toggle */
const navToggle = document.querySelector(".nav-toggle");
const navMobile = document.querySelector(".nav-mobile");
if (navToggle && navMobile) {
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.addEventListener("click", () => {
    const isOpen = navMobile.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navMobile.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navMobile.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* Sticky nav shadow on scroll */
const navbar = document.querySelector(".navbar");
if (navbar) {
  lenis.on("scroll", ({ scroll }) => {
    navbar.classList.toggle("scrolled", scroll > 12);
  });
}

/* Top scroll-progress bar (works regardless of reduced-motion — it tracks the
   user's own scroll, it doesn't autoplay) */
const progressBar = document.querySelector(".scroll-progress");
if (progressBar) {
  gsap.to(progressBar, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 },
  });
}

if (!prefersReducedMotion) {
  /* ---------------------------------------------------------
     Aurora mesh: slow ambient drift so the light behind the
     glass never looks static, plus a gentle scroll parallax
     (each blob at a different rate) so the mesh reads as real
     depth behind the panels rather than a flat backdrop image.
  --------------------------------------------------------- */
  gsap.utils.toArray(".aurora span").forEach((blob, i) => {
    gsap.to(blob, {
      x: gsap.utils.random(-50, 50),
      y: gsap.utils.random(-40, 40),
      duration: gsap.utils.random(16, 24),
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
    gsap.to(blob, {
      y: `+=${80 + i * 40}`,
      ease: "none",
      scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 1.2 },
    });
  });

  /* ---------------------------------------------------------
     Home hero entrance sequence
  --------------------------------------------------------- */
  if (document.querySelector(".hero")) {
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    heroTl
      .to(".hero-eyebrow", { opacity: 1, y: 0 }, 0)
      .to(".hero-copy h1", { opacity: 1, y: 0 }, 0.08)
      .to(".hero-copy .lede", { opacity: 1, y: 0 }, 0.2)
      .to(".hero-actions", { opacity: 1, y: 0 }, 0.3)
      .to(".hero-stat", { opacity: 1, y: 0, stagger: 0.08 }, 0.38)
      .to(".hero-blob", { opacity: 1, scale: 1, duration: 1.3, ease: "power2.out" }, 0.05)
      .to(".hero-badge", { opacity: 1, y: 0, stagger: 0.12 }, 0.5)
      .to(".hero-sun .motif-draw", { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut", stagger: 0.015 }, 0.15);

    gsap.to(".hero-blob", {
      y: 40,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 },
    });
  }

  /* ---------------------------------------------------------
     Interior page-hero entrance (Services / Doctors / Reviews / Location)
  --------------------------------------------------------- */
  const pageHero = document.querySelector(".page-hero");
  if (pageHero) {
    gsap.timeline({ defaults: { ease: "power3.out", duration: 0.85 } })
      .to(pageHero.querySelector(".eyebrow"), { opacity: 1, y: 0 }, 0)
      .to(pageHero.querySelector("h1"), { opacity: 1, y: 0 }, 0.1)
      .to(pageHero.querySelector("p"), { opacity: 1, y: 0 }, 0.22);
  }

  /* ---------------------------------------------------------
     Grouped, choreographed grid/list reveals (one ScrollTrigger
     per container instead of one per card — cheaper and reads
     as a single coordinated wave rather than scattered pops)
  --------------------------------------------------------- */
  const staggerGroupSelectors = [".grid-services", ".grid-doctors", ".grid-reviews", ".grid-locations", ".why-grid", ".tag-cloud"];
  const staggerContainers = [];

  staggerGroupSelectors.forEach((sel) => {
    const container = document.querySelector(sel);
    if (!container || !container.children.length) return;
    staggerContainers.push(container);
    const items = container.children;
    gsap.set(items, { opacity: 0, y: 26, scale: 0.94 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.6)",
      stagger: { each: 0.07, from: "start", grid: "auto" },
      scrollTrigger: { trigger: container, start: "top 85%" },
    });
  });

  /* Any standalone [data-reveal] elements not already handled above
     (section intros, CTA links, stray blocks) */
  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    if (staggerContainers.some((c) => c.contains(el))) return;
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });

  gsap.utils.toArray("[data-reveal-scale]").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });

  /* ---------------------------------------------------------
     Decorative motif draw-in + parallax drift (divider band,
     maternity callout fish pair) — excludes the hero sun, which
     already animates on its own load timeline above
  --------------------------------------------------------- */
  gsap.utils.toArray(".motif:not(.hero-sun) .motif-draw").forEach((path) => {
    gsap.set(path, { strokeDashoffset: 1 });
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.4,
      ease: "power2.inOut",
      scrollTrigger: { trigger: path.closest(".motif"), start: "top 85%" },
    });
  });

  if (document.querySelector(".divider-band")) {
    gsap.to(".divider-band svg", {
      x: 30,
      ease: "none",
      scrollTrigger: { trigger: ".divider-band", start: "top bottom", end: "bottom top", scrub: 0.6 },
    });
  }
  if (document.querySelector(".callout-motif")) {
    gsap.to(".callout-motif", {
      y: -18,
      ease: "none",
      scrollTrigger: { trigger: ".callout", start: "top bottom", end: "bottom top", scrub: 0.6 },
    });
  }

  /* ---------------------------------------------------------
     Count-up stats
  --------------------------------------------------------- */
  gsap.utils.toArray("[data-count]").forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const counter = { val: 0 };
    gsap.to(counter, {
      val: target,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
      onUpdate: () => {
        el.textContent = (target % 1 === 0 ? Math.floor(counter.val) : counter.val.toFixed(1)) + suffix;
      },
    });
  });

  /* ---------------------------------------------------------
     Hover micro-interactions: lift + icon pop on service,
     review and location cards (doctor cards get bespoke tilt below)
  --------------------------------------------------------- */
  document.querySelectorAll(".card, .review-card, .location-card").forEach((card) => {
    const icon = card.querySelector(".card-icon, .review-avatar");
    const liftTo = gsap.quickTo(card, "y", { duration: 0.3, ease: "power2.out" });
    card.addEventListener("mouseenter", () => {
      liftTo(-8);
      if (icon) gsap.to(icon, { scale: 1.1, rotate: -6, duration: 0.3, ease: "back.out(2)" });
    });
    card.addEventListener("mouseleave", () => {
      liftTo(0);
      if (icon) gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" });
    });
  });

  /* ---------------------------------------------------------
     Doctor cards: gentle 3D tilt toward the cursor, like turning
     a photograph in your hand — a small, appropriately restrained
     "premium" touch rather than a full magnetic-cursor effect
  --------------------------------------------------------- */
  document.querySelectorAll(".doctor-card").forEach((card) => {
    const avatar = card.querySelector(".doctor-avatar");
    if (!avatar) return;
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(avatar, {
        rotateY: px * 18,
        rotateX: -py * 18,
        scale: 1.06,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(avatar, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.4, ease: "power2.out", overwrite: "auto" });
    });
  });

  /* Nudge CTA/ghost button arrow icons on hover */
  document.querySelectorAll(".btn").forEach((btn) => {
    const arrow = btn.querySelector("svg path[d^='M5 12h14']")?.closest("svg");
    if (!arrow) return;
    const xTo = gsap.quickTo(arrow, "x", { duration: 0.3, ease: "power2.out" });
    btn.addEventListener("mouseenter", () => xTo(4));
    btn.addEventListener("mouseleave", () => xTo(0));
  });
} else {
  document
    .querySelectorAll(
      "[data-reveal], [data-reveal-scale], .hero-eyebrow, .hero-copy h1, .hero-copy .lede, .hero-actions, .hero-stat, .hero-blob, .hero-badge, .page-hero .eyebrow, .page-hero h1, .page-hero p, .grid-services > *, .grid-doctors > *, .grid-reviews > *, .grid-locations > *, .why-grid > *, .tag-cloud > *"
    )
    .forEach((el) => {
      el.style.opacity = 1;
      el.style.transform = "none";
    });
  document.querySelectorAll("[data-count]").forEach((el) => {
    el.textContent = el.dataset.count + (el.dataset.suffix || "");
  });
}

/* Fade content in on load to avoid FOUC flash before fonts settle */
document.documentElement.classList.add("is-ready");
