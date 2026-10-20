"use client";

import { useEffect } from "react";
import { androidIntent, isAndroid } from "@/lib/whatsapp";

// Every WhatsApp button on the page is a plain https://wa.me link (works everywhere, and without JavaScript).
// On Android, this swaps the tap for the intent in lib/whatsapp.ts, so regular WhatsApp opens instead of
// WhatsApp Business, or Android asks which to use when both are installed.
export default function WhatsAppLinks() {
  useEffect(() => {
    if (!isAndroid()) return;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a[href^="https://wa.me/"]');
      if (!link) return;
      e.preventDefault();
      location.href = androidIntent(link.getAttribute("href")!);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
