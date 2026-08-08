"use client";

import { useState, type FormEvent } from "react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Button } from "@/components/ui/Button";

// TODO: replace with the agency's real inbox before launch.
const CONTACT_EMAIL = "hello@buildwisehustlers.com";

const SERVICE_OPTIONS = [
  "Website Development",
  "SEO & Growth",
  "Workflow Automation",
  "AI Chatbots",
  "AI Voice Agents",
  "Digital Solutions",
  "Not sure yet",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors: typeof errors = {};
    if (!name.trim()) nextErrors.name = "Please enter your name.";
    if (!email.trim()) nextErrors.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email.trim())) nextErrors.email = "Enter a valid email address.";
    if (!message.trim()) nextErrors.message = "Tell us a bit about your project.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = `New project inquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="bg-base/85 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <EyebrowBadge>Let&apos;s Talk</EyebrowBadge>
          <h2 className="max-w-xl font-display text-3xl font-semibold text-fg md:text-4xl">
            Let&apos;s Build Something That Works While You Sleep.
          </h2>
        </div>

        <GlassPanel glow="var(--color-accent)" className="p-6 md:p-10">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="min-h-11 rounded-lg border border-hairline bg-white/5 px-4 py-2.5 text-fg outline-none transition-colors focus:border-accent"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="text-xs text-service-voice">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-h-11 rounded-lg border border-hairline bg-white/5 px-4 py-2.5 text-fg outline-none transition-colors focus:border-accent"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="text-xs text-service-voice">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="service" className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                Service
              </label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="min-h-11 rounded-lg border border-hairline bg-white/5 px-4 py-2.5 text-fg outline-none transition-colors focus:border-accent"
              >
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option} className="bg-base-deep">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-lg border border-hairline bg-white/5 px-4 py-2.5 text-fg outline-none transition-colors focus:border-accent"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span id="message-error" className="text-xs text-service-voice">
                  {errors.message}
                </span>
              )}
            </div>

            <Button type="submit" variant="primary" className="mt-2 w-full sm:w-fit">
              Send Message
            </Button>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted/70">
              Opens your email client — nothing is sent from this page directly.
            </p>
          </form>
        </GlassPanel>
      </div>
    </section>
  );
}
