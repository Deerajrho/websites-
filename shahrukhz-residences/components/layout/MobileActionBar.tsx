import { MessageCircle, Phone, Send } from "lucide-react";
import { contact, whatsappLink } from "@/lib/content";

// Phones only: the three ways to get in touch, always one tap away.
export default function MobileActionBar() {
  const item = "flex flex-1 flex-col items-center justify-center gap-1 text-xs font-semibold";
  return (
    <nav
      aria-label="Contact"
      className="fixed inset-x-0 bottom-0 z-40 flex h-16 border-t border-white/10 bg-navy pb-[env(safe-area-inset-bottom)] text-white lg:hidden"
    >
      <a href={contact.phoneHref} className={item}>
        <Phone className="h-5 w-5 text-champagne" aria-hidden="true" />
        Call
      </a>
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`${item} border-x border-white/10`}>
        <MessageCircle className="h-5 w-5 text-champagne" aria-hidden="true" />
        WhatsApp
      </a>
      <a href="#contact" className={`${item} bg-ocean text-white`}>
        <Send className="h-5 w-5" aria-hidden="true" />
        Enquire
      </a>
    </nav>
  );
}
