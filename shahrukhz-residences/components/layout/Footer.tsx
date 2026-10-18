import Logo from "@/components/ui/Logo";
import { contact, disclosure, nav } from "@/lib/content";

export default function Footer() {
  const link = "text-slate-700 transition-colors duration-200 hover:text-clay";
  const heading = "font-sans text-xs font-semibold uppercase tracking-wider text-slate-500";
  return (
    <footer className="card rounded-3xl">
      <div className="grid gap-10 p-6 sm:p-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo className="h-14 w-auto" />
          <p className="mt-5 max-w-xs text-sm">Fully furnished waterfront residences in Dubai Maritime City.</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-4">
          <h2 className={heading}>On this page</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className={link}>{n.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <address className="not-italic md:col-span-4">
          <h2 className={heading}>Shahrukhz Residences enquiries</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={contact.phoneHref} className={link}>{contact.phone}</a></li>
            {/* <li><a href={`mailto:${contact.email}`} className={link}>{contact.email}</a></li> */}
            <li>{contact.city}</li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">Marketed by {contact.company}</p>
        </address>
      </div>
      <p className="rounded-b-3xl border-t border-slate-100 bg-slate-50/60 px-6 py-6 text-xs leading-relaxed text-slate-500 sm:px-10">
        {disclosure} © {new Date().getFullYear()} {contact.company}.
      </p>
    </footer>
  );
}
