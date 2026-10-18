import { Menu, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { contact, nav } from "@/lib/content";

// Desktop: a sticky sidebar card with a numbered, vertical menu. Phones and tablets: a sticky top bar
// with a native <details> menu (no JavaScript).
export default function Header() {
  return (
    <header className="card sticky top-3 z-40 rounded-2xl lg:top-6 lg:flex lg:h-[calc(100svh-3rem)] lg:flex-col lg:self-start lg:rounded-3xl lg:p-6">
      <div className="flex h-16 items-center justify-between pl-4 pr-2 lg:h-auto lg:p-0">
        <Logo className="h-10 w-auto lg:h-14" />

        <details className="relative lg:hidden">
          <summary
            aria-label="Menu"
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-900 transition-colors hover:border-clay hover:text-clay"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile" className="card absolute right-0 top-full mt-3 w-64 rounded-2xl p-2">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-clay-soft hover:text-clay">
                {n.title}
              </a>
            ))}
            <a href="#contact" className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-clay-soft hover:text-clay">
              Contact
            </a>
          </nav>
        </details>
      </div>

      <nav aria-label="Main" className="mt-10 hidden flex-1 lg:block">
        <ol className="space-y-1">
          {nav.map((n, i) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="group flex items-center gap-4 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-clay-soft hover:text-clay"
              >
                <span aria-hidden="true" className="font-display text-xs font-bold text-slate-400 transition-colors group-hover:text-clay">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {n.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="hidden space-y-3 border-t border-slate-100 pt-6 lg:block">
        <Button href="#contact" className="w-full">Register interest</Button>
        <a
          href={contact.phoneHref}
          className="flex items-center justify-center gap-2 rounded-xl py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-clay"
        >
          <Phone className="h-4 w-4" aria-hidden="true" /> {contact.phone}
        </a>
      </div>
    </header>
  );
}
