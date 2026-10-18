import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import LeadForm from "@/components/ui/LeadForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { closing, contact, newTab, whatsappLink } from "@/lib/content";

// Closing tile: contact methods as a stacked link list on the left, the full form in an inset panel.
// The agent line names who answers.
export default function Contact() {
  const row =
    "group flex min-h-16 items-center gap-4 rounded-2xl border border-slate-100 bg-white px-4 shadow-float transition-[border-color,color] duration-300";
  const icon = "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-clay-soft text-clay";
  const arrow = "ml-auto h-4 w-4 text-slate-400 transition-[color,translate] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-clay";
  return (
    <section id="contact" className="card grid gap-8 rounded-3xl p-3 xl:col-span-12 xl:grid-cols-12">
      <div className="p-3 sm:p-7 xl:col-span-5">
        <SectionHeading eyebrow={closing.eyebrow} title={closing.title} intro={closing.body} />
        <ul className="mt-8 space-y-3 text-sm font-medium text-slate-800">
          <li>
            <a href={contact.phoneHref} className={`${row} hover:border-clay/30 hover:text-clay`}>
              <span className={icon}><Phone className="h-5 w-5" aria-hidden="true" /></span> {contact.phone}
              <ArrowUpRight className={arrow} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={whatsappLink()} {...newTab} className={`${row} hover:border-clay/30 hover:text-clay`}>
              <span className={icon}><MessageCircle className="h-5 w-5" aria-hidden="true" /></span> WhatsApp {contact.phone}
              <ArrowUpRight className={arrow} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} className={`${row} break-all hover:border-clay/30 hover:text-clay`}>
              <span className={icon}><Mail className="h-5 w-5" aria-hidden="true" /></span> {contact.email}
              <ArrowUpRight className={arrow} aria-hidden="true" />
            </a>
          </li>
          <li className={row}>
            <span className={icon}><MapPin className="h-5 w-5" aria-hidden="true" /></span> {contact.city}
          </li>
        </ul>
        <p className="mt-6 text-xs text-slate-500">{closing.agent}</p>
      </div>
      <div className="rounded-2xl bg-slate-50 p-6 sm:p-10 xl:col-span-7">
        <LeadForm variant="full" />
      </div>
    </section>
  );
}
