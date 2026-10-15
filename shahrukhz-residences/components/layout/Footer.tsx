import Logo from "@/components/ui/Logo";
import { contact, disclosure, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1fr_1fr_1.4fr]">
        <div>
          <Logo className="h-14 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-white/70">Fully furnished waterfront residences in Dubai Maritime City.</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-sans text-sm font-semibold text-white/70">On this page</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-champagne">{n.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <address className="not-italic">
          <h2 className="font-sans text-sm font-semibold text-white/70">Marketed by</h2>
          <p className="mt-4 font-semibold">{contact.company}</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href={contact.phoneHref} className="hover:text-champagne">{contact.phone}</a></li>
            <li><a href={`mailto:${contact.email}`} className="hover:text-champagne">{contact.email}</a></li>
            <li>{contact.city}</li>
          </ul>
        </address>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs leading-relaxed text-white/65 sm:px-6">
          {disclosure} © {new Date().getFullYear()} {contact.company}.
        </p>
      </div>
    </footer>
  );
}
