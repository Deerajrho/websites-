import { useEffect, useState } from "react";

const LINKS = [
  { href: "#services-scroll", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#process", label: "Process" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="siteHeader"
      className={`site-header${isScrolled ? " is-scrolled" : ""}`}
    >
      <div className="wrap site-header__inner">
        <a href="#top" className="wordmark">
          Pigment
        </a>
        <nav className={`nav${isNavOpen ? " is-open" : ""}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsNavOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#visit" className="nav__cta" onClick={() => setIsNavOpen(false)}>
            Book a visit
          </a>
        </nav>
        <button
          className={`nav-toggle${isNavOpen ? " is-open" : ""}`}
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isNavOpen}
          onClick={() => setIsNavOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
