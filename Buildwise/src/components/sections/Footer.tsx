const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "WhatsApp", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-base-deep/85 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2">
          <span className="font-display text-sm font-semibold text-fg">
            Buildwise<span className="text-accent">.</span>Hustlers
          </span>
          <p className="max-w-xs text-sm text-muted">
            Websites, automation, and AI systems that grow your business.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-4">
          <div className="flex flex-col">
            <span className="mb-1 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              Navigate
            </span>
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-sm text-fg transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col">
            <span className="mb-1 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              Connect
            </span>
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="py-2 text-sm text-fg transition-colors hover:text-accent"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-hairline pt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-muted/70">
        © {new Date().getFullYear()} Buildwise.Hustlers. All rights reserved.
      </div>
    </footer>
  );
}
