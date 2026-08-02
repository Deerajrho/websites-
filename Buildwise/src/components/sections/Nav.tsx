"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        setSolid(window.scrollY > window.innerHeight * 0.9);
        tickingRef.current = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? "border-hairline bg-base/90 backdrop-blur-xl"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-fg"
        >
          Buildwise<span className="text-accent">.</span>Hustlers
        </a>

        <ul className="hidden items-center gap-6 font-body text-sm text-fg md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex items-center px-2 py-3 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#contact" variant="primary" className="text-xs">
            Start a Project
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-fg md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-200 ${
                menuOpen ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 block h-px w-5 bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-200 ${
                menuOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-hairline bg-base/95 px-6 py-8 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col font-body text-lg text-fg">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-11 items-center py-3 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" variant="primary" className="mt-8 w-full">
            Start a Project
          </Button>
        </div>
      )}
    </header>
  );
}
