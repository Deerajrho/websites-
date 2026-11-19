"use client";

import { useEffect } from "react";
import { androidIntent, isAndroid } from "@/lib/whatsapp";

// Every WhatsApp button on the page is a plain https://wa.me link (works everywhere, and without JavaScript).
// On Android, this swaps the tap for the intent in lib/whatsapp.ts, so regular WhatsApp opens instead of
// WhatsApp Business, or Android asks which to use when both are installed.
// On iPhone/iPad, it drops the new-tab target before the tap goes through: iOS Safari and in-app browsers
// (Instagram, Facebook) often won't hand a new-tab wa.me link to the WhatsApp app, so the tap seems to do nothing.
const isIOS = () => /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

export default function WhatsAppLinks() {
  useEffect(() => {
    const android = isAndroid();
    if (!android && !isIOS()) return;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a[href^="https://wa.me/"]');
      if (!link) return;
      // iOS: still a real tap on a real link (needed for the app hand-off), just in the same tab.
      if (!android) return link.removeAttribute("target");
      e.preventDefault();
      location.href = androidIntent(link.getAttribute("href")!);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
