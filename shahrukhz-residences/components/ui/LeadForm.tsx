"use client";

import { form, whatsappLink } from "@/lib/content";

// No backend: the enquiry opens the sales team's WhatsApp with every field prefilled.
// "card" = the short form; "full" adds a message box.
export default function LeadForm({ variant = "card" }: { variant?: "card" | "full" }) {
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

  // Chart-style fields: a single rule underneath that turns accent (and thicker) on focus.
  // Colours come from the tone tokens, so the same form works in light and dark water.
  const field =
    "mt-1 h-12 w-full border-0 border-b border-line bg-transparent px-0 font-sans text-base font-normal normal-case tracking-normal text-ink placeholder:text-muted transition-[border-color,box-shadow] duration-200 hover:border-accent/60 focus:border-accent focus:shadow-[0_1px_0_0_var(--accent)] focus:outline-none focus-visible:outline-none";
  const label = "chart-label text-muted";

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
      <button
        type="submit"
        className="sea chart-label mt-2 min-h-12 cursor-pointer px-6 sm:col-span-2"
      >
        {form.submit}
      </button>
      <p className="text-xs text-muted sm:col-span-2">
        Submitting opens WhatsApp with your details filled in; press send to finish. Your details are used only to answer your enquiry.
      </p>
    </form>
  );
}
