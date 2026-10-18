import { ArrowUpRight } from "lucide-react";
import LeadForm from "@/components/ui/LeadForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { closing, contact, newTab, whatsappLink } from "@/lib/content";

// The deepest stretch: the phone number set large, the other ways in as ruled rows, the full form framed
// on the right. The agent line names who answers.
export default function Contact() {
  const row = "group flex items-center gap-3 sm:gap-5 border-b border-line py-4 text-ink transition-colors duration-300";
  const tag = "chart-label w-[4.5rem] shrink-0 sm:w-20 text-muted";
  const arrow = "ml-auto h-4 w-4 text-muted transition-[color,translate] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent";
  return (
    <section id="contact" className="grid gap-14 xl:grid-cols-12">
      <div className="xl:col-span-5">
        <SectionHeading eyebrow={closing.eyebrow} title={closing.title} intro={closing.body} />
        <a href={contact.phoneHref} className="mt-10 block font-display text-4xl text-accent transition-colors hover:text-ink sm:text-5xl">
          {contact.phone}
        </a>
        <ul className="mt-8 border-t border-line text-sm font-medium">
          <li>
            <a href={whatsappLink()} {...newTab} className={`${row} hover:text-accent`}>
              <span className={tag}>WhatsApp</span> {contact.phone}
              <ArrowUpRight className={arrow} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} className={`${row} break-all hover:text-accent`}>
              <span className={tag}>Email</span> <span className="text-[0.8125rem] sm:text-sm">{contact.email}</span>
              <ArrowUpRight className={arrow} aria-hidden="true" />
            </a>
          </li>
          <li className={row}>
            <span className={tag}>Office</span> {contact.city}
          </li>
        </ul>
        <p className="mt-6 text-xs text-muted">{closing.agent}</p>
      </div>
      <div className="border border-line bg-white/[0.03] p-5 sm:p-10 xl:col-span-7">
        <LeadForm variant="full" />
      </div>
    </section>
  );
}
