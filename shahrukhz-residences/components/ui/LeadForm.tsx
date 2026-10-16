"use client";

import { contact, form, whatsappLink } from "@/lib/content";

// No backend: the enquiry opens Optimum Point's WhatsApp with every field prefilled.
// "card" = the short form; "full" adds a message box.
export default function LeadForm({ variant = "card", dark = false }: { variant?: "card" | "full"; dark?: boolean }) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      "Shahrukhz Residences enquiry",
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      f.get("email") ? `Email: ${f.get("email")}` : "",
      `Interested in: ${f.get("interest")}`,
      f.get("message") ? `Message: ${f.get("message")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  const field = `mt-1.5 h-11 w-full rounded-md border px-3 text-sm ${
    dark ? "border-white/25 bg-white/5 text-white placeholder:text-white/45" : "border-line bg-white placeholder:text-ink/40"
  }`;
  const label = `text-xs font-semibold uppercase tracking-wider ${dark ? "text-white/75" : "text-ink/70"}`;

  return (
    <form onSubmit={onSubmit} className="grid gap-4 text-left sm:grid-cols-2">
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
      <button
        type="submit"
        className="min-h-11 rounded-full bg-ocean px-6 text-sm font-semibold uppercase tracking-wider text-white hover:bg-navy sm:col-span-2"
      >
        {form.submit}
      </button>
      <p className={`text-xs sm:col-span-2 ${dark ? "text-white/65" : "text-ink/65"}`}>
        Submitting opens WhatsApp with your details filled in; press send to finish. Your details go only to{" "}
        {contact.company}.{" "}
        <a
          href={`mailto:${contact.email}?subject=${encodeURIComponent("Shahrukhz Residences enquiry")}`}
          className="underline underline-offset-4"
        >
          {form.emailAlt}
        </a>
      </p>
    </form>
  );
}
