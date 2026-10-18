"use client";

import { contact, form, whatsappLink } from "@/lib/content";

// No backend: the enquiry opens Optimum Point's WhatsApp with every field prefilled.
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

  const field =
    "mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-normal normal-case tracking-normal text-slate-900 placeholder:text-slate-500 transition-[border-color,box-shadow,background-color] duration-200 hover:border-slate-300 focus:border-clay focus:bg-white focus:outline-none focus:ring-4 focus:ring-clay/10 focus-visible:outline-none";
  const label = "text-xs font-semibold uppercase tracking-wider text-slate-700";

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
        className="min-h-12 cursor-pointer rounded-xl bg-clay px-6 text-sm font-semibold text-white shadow-float transition-[scale,background-color] duration-300 hover:bg-clay-hi motion-safe:hover:scale-[1.02] sm:col-span-2"
      >
        {form.submit}
      </button>
      <p className="text-xs text-slate-500 sm:col-span-2">
        Submitting opens WhatsApp with your details filled in; press send to finish. Your details go only to{" "}
        {contact.company}.{" "}
        <a
          href={`mailto:${contact.email}?subject=${encodeURIComponent("Shahrukhz Residences enquiry")}`}
          className="font-semibold text-clay underline underline-offset-4 hover:text-clay-hi"
        >
          {form.emailAlt}
        </a>
      </p>
    </form>
  );
}
