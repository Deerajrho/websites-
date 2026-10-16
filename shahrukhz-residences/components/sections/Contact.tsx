import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import LeadForm from "@/components/ui/LeadForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { closing, contact, newTab, whatsappLink } from "@/lib/content";

// Every way to send an enquiry, plus the full form. The agent line names who answers.
export default function Contact() {
  return (
    <section id="contact" className="bg-sky py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={closing.eyebrow} title={closing.title} intro={closing.body} />
          <ul className="mt-8 space-y-4">
            <li>
              <a href={contact.phoneHref} className="inline-flex items-center gap-3 hover:text-ocean">
                <Phone className="h-5 w-5 text-ocean" aria-hidden="true" /> {contact.phone}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} {...newTab} className="inline-flex items-center gap-3 hover:text-ocean">
                <MessageCircle className="h-5 w-5 text-ocean" aria-hidden="true" /> WhatsApp {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-3 hover:text-ocean">
                <Mail className="h-5 w-5 text-ocean" aria-hidden="true" /> {contact.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-3">
              <MapPin className="h-5 w-5 text-ocean" aria-hidden="true" /> {contact.city}
            </li>
          </ul>
          <p className="mt-8 text-xs text-ink/65">{closing.agent}</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-xl sm:p-8">
          <LeadForm variant="full" />
        </div>
      </div>
    </section>
  );
}
