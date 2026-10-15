import { Menu } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { nav } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-wider xl:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-white/80 hover:text-champagne">
              {n.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Wrapper carries the visibility: phones have Enquire in the bottom bar. */}
          <span className="hidden sm:block">
            <Button href="#contact">Register interest</Button>
          </span>
          {/* Below xl: native <details> menu, no JavaScript. */}
          <details className="relative xl:hidden">
            <summary aria-label="Menu" className="grid h-11 w-11 place-items-center rounded-full hover:bg-white/10">
              <Menu className="h-5 w-5" aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile" className="absolute right-0 top-full mt-2 w-56 rounded-lg bg-navy p-2 shadow-xl ring-1 ring-white/10">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="block rounded px-3 py-2.5 text-sm hover:bg-white/10">
                  {n.title}
                </a>
              ))}
              <a href="#contact" className="block rounded px-3 py-2.5 text-sm hover:bg-white/10">
                Contact
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
