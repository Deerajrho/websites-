import { MessageCircle, Phone, Send } from "lucide-react";
import { contact, whatsappLink } from "@/lib/content";

// Phones only: the three ways to get in touch, always one tap away.
export default function MobileActionBar() {
  const item = "flex flex-1 flex-col items-center justify-center gap-1 text-xs font-semibold transition-colors";
  return (
    <nav
      aria-label="Contact"
      className="fixed inset-x-0 bottom-0 z-40 flex h-16 border-t border-slate-100 bg-white/90 pb-[env(safe-area-inset-bottom)] text-slate-800 shadow-float backdrop-blur-xl lg:hidden"
    >
      <a href={contact.phoneHref} className={`${item} active:bg-slate-100`}>
        <Phone className="h-5 w-5 text-clay" aria-hidden="true" />
        Call
      </a>
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`${item} border-x border-slate-100 active:bg-slate-100`}>
        <MessageCircle className="h-5 w-5 text-clay" aria-hidden="true" />
        WhatsApp
      </a>
      <a href="#contact" className={`${item} bg-clay text-white active:bg-clay-hi`}>
        <Send className="h-5 w-5" aria-hidden="true" />
        Enquire
      </a>
    </nav>
  );
}
