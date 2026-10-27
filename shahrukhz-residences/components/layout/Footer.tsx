import Logo from "@/components/ui/Logo";
import { agency, contact, disclosure, guideLink, nav } from "@/lib/content";

// Where the fly-through lands: abyss-dark, quiet, everything at a glance.
export default function Footer() {
  const link = "text-white/75 transition-colors duration-200 hover:text-aqua";
  const heading = "chart-label text-aqua";
  return (
    <footer className="bg-linear-to-b from-abyss to-[#020d18] text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div aria-hidden="true" className="chart-label flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-6 text-white/60">
          <span className="whitespace-nowrap">Dubai Maritime City</span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="whitespace-nowrap">N 25°16′ · E 55°16′</span>
        </div>
        <div className="grid gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo className="h-14 w-auto" />
            <p className="mt-5 max-w-xs text-sm">Fully furnished waterfront residences in Dubai Maritime City.</p>
          </div>
          <nav aria-label="Footer" className="md:col-span-4">
            <p className={heading}>On this page</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {[...nav, guideLink].map((n) => (
                <li key={n.href}>
                  <a href={n.href} className={link}>{n.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <address className="not-italic md:col-span-4">
            <p className={heading}>Shahrukhz Residences enquiries</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href={contact.phoneHref} className={link}>{contact.phone}</a></li>
              <li>{contact.city}</li>
            </ul>
          </address>
        </div>
        <p className="border-t border-white/10 py-6 text-xs leading-relaxed text-white/60">
          {(agency.orn || agency.brn || agency.permit) && (
            <span className="block pb-2 text-white/75">
              {[
                agency.name,
                agency.orn && `RERA ORN ${agency.orn}`,
                agency.brn && `BRN ${agency.brn}`,
                agency.permit && `Permit ${agency.permit}`,
              ].filter(Boolean).join(" · ")}
            </span>
          )}
          {disclosure}
        </p>
      </div>
    </footer>
  );
}
