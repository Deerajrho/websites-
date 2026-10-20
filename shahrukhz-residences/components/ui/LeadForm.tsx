"use client";

import { useEffect, useRef, useState } from "react";
import { form, web3formsKey, whatsappLink } from "@/lib/content";
import { openWhatsApp } from "@/lib/whatsapp";

// Enquiries are emailed through Web3Forms (key and inbox in lib/content.ts), then the form is replaced by a
// thank-you note. If sending fails, the visitor gets the same details as a WhatsApp message instead.
// With no key set, submitting opens WhatsApp with the details filled in, as before.
// "card" = the short form; "full" adds a message box.
type Status = "idle" | "sending" | "sent" | "error";

export default function LeadForm({ variant = "card" }: { variant?: "card" | "full" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [fallback, setFallback] = useState(""); // WhatsApp link with the details, offered if email fails
  const thanks = useRef<HTMLDivElement>(null);

  // Move focus to the thank-you note so screen readers announce it and keyboard users aren't left behind.
  useEffect(() => {
    if (status === "sent") thanks.current?.focus();
  }, [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const text = [
      "Shahrukhz Residences enquiry",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      get("email") ? `Email: ${get("email")}` : "",
      `Interested in: ${get("interest")}`,
      get("message") ? `Message: ${get("message")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    if (!web3formsKey) {
      openWhatsApp(whatsappLink(text)); // regular WhatsApp first on Android (see lib/whatsapp.ts)
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `Shahrukhz Residences enquiry: ${get("name")}`,
          from_name: "Shahrukhz Residences website",
          name: get("name"),
          phone: get("phone"),
          email: get("email"), // Web3Forms sets this as the reply-to address
          interest: get("interest"),
          message: get("message"),
          botcheck: f.get("botcheck") === "on", // honeypot: only bots tick the hidden box
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || `HTTP ${res.status}`);
      setStatus("sent");
    } catch {
      setFallback(whatsappLink(text));
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div ref={thanks} tabIndex={-1} role="status" aria-live="polite" className="py-6 text-left outline-none">
        <p className="chart-label text-accent">{form.thanksTitle}</p>
        <p className="mt-3 font-display text-2xl leading-snug text-ink sm:text-3xl">{form.thanksBody}</p>
      </div>
    );
  }

  // Chart-style fields: a single rule underneath that turns accent (and thicker) on focus.
  // Colours come from the tone tokens, so the same form works in light and dark water.
  const field =
    "mt-1 h-12 w-full border-0 border-b border-line bg-transparent px-0 font-sans text-base font-normal normal-case tracking-normal text-ink placeholder:text-muted transition-[border-color,box-shadow] duration-200 hover:border-accent/60 focus:border-accent focus:shadow-[0_1px_0_0_var(--accent)] focus:outline-none focus-visible:outline-none";
  const label = "chart-label text-muted";
  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} className="grid gap-x-6 gap-y-5 text-left sm:grid-cols-2">
      <label className={label}>
        Full name
        <input name="name" autoComplete="name" required className={field} />
      </label>
      <label className={label}>
        Mobile number *
        <input name="phone" type="tel" autoComplete="tel" required placeholder="+971" className={field} />
      </label>
      <label className={`${label} sm:col-span-2`}>
        Email address
        <input name="email" type="email" autoComplete="email" className={field} />
      </label>
      <label className={`${label} sm:col-span-2`}>
        Residence type
        <select name="interest" className={field} defaultValue={form.interests[0]}>
          {form.interests.map((t) => (
            <option key={t}>{t}</option>
          ))}
          <option>Not sure yet</option>
        </select>
      </label>
      {variant === "full" && (
        <label className={`${label} sm:col-span-2`}>
          {form.messageLabel}
          <textarea name="message" rows={3} placeholder={form.messagePlaceholder} className={`${field} h-auto py-2`} />
        </label>
      )}
      {/* Spam trap: hidden from people (and from keyboard and screen readers); bots that fill every field tick it. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button
        type="submit"
        disabled={sending}
        aria-busy={sending}
        className="sea chart-label mt-2 min-h-12 cursor-pointer px-6 disabled:cursor-wait disabled:opacity-70 sm:col-span-2"
      >
        {sending ? form.sending : form.submit}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-ink sm:col-span-2">
          {form.error}{" "}
          <a
            href={fallback}
            onClick={(e) => {
              e.preventDefault();
              openWhatsApp(fallback);
            }}
            className="font-semibold text-accent underline underline-offset-4"
          >
            {form.errorCta}
          </a>
        </p>
      )}
      <p className="text-xs text-muted sm:col-span-2">{web3formsKey ? form.privacy : form.privacyWhatsApp}</p>
    </form>
  );
}
