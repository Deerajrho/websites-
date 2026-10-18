import { Menu, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { contact, nav } from "@/lib/content";

// A slim abyss-dark bar pinned to the top, the same over light and dark water.
// Desktop: the menu inline as chart labels. Phones and tablets: a native <details> menu (no JavaScript).
export default function Header() {
  const link = "chart-label px-3 py-2 text-white/75 transition-colors duration-200 hover:text-aqua";
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-abyss/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo className="h-8 w-auto" />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className={link}>{n.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={contact.phoneHref} className={`${link} hidden items-center gap-2 xl:flex`}>
            <Phone className="h-3.5 w-3.5 text-aqua" aria-hidden="true" /> {contact.phone}
          </a>
          <Button href="#contact" className="min-h-10 px-4">Register interest</Button>
        </div>

        <details className="relative lg:hidden">
          <summary aria-label="Menu" className="grid h-11 w-11 place-items-center border border-white/20 text-white transition-colors hover:border-aqua hover:text-aqua">
            <Menu className="h-5 w-5" aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile" className="absolute right-0 top-full mt-2 w-64 border border-white/10 bg-abyss py-2">
            {[...nav, { title: "Contact", href: "#contact" }].map((n) => (
              <a key={n.href} href={n.href} className={`${link} block px-5 py-3`}>
                {n.title}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
