import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const ITEMS = [
  {
    title: "Higher conversions",
    description: "Design and copy built to turn visitors into customers.",
    icon: (
      <path d="M3 17l6-6 4 4 8-8M15 7h6v6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Better SEO",
    description: "Technical foundations and content that search engines reward.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Faster business operations",
    description: "Automation removes the manual work slowing your team down.",
    icon: (
      <path
        d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "AI automation",
    description: "Chatbots and voice agents that work while you sleep.",
    icon: (
      <>
        <rect x="4" y="7" width="16" height="12" rx="3" />
        <path d="M9 3v4M15 3v4M9 13h.01M15 13h.01" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Long-term support",
    description: "We stay on as your systems grow, not just at launch.",
    icon: (
      <path
        d="M12 21s-7-4.35-9.5-9C.5 7.5 3 3.5 7 3.5c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4 4.5 8.5C19 16.65 12 21 12 21z"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Scalable digital systems",
    description: "Infrastructure that holds up as your business grows.",
    icon: (
      <>
        <rect x="3" y="16" width="4" height="5" />
        <rect x="10" y="10" width="4" height="11" />
        <rect x="17" y="4" width="4" height="17" />
      </>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="border-y border-hairline bg-base px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-14 flex flex-col gap-4">
          <AnimatedItem>
            <EyebrowBadge>Why Choose Us</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-2xl font-display text-3xl font-semibold text-fg md:text-4xl">
              More than a website — a system that keeps working.
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <AnimatedItem key={item.title} className="flex gap-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                className="h-6 w-6 shrink-0"
                aria-hidden="true"
              >
                {item.icon}
              </svg>
              <div>
                <h3 className="font-display text-base font-semibold text-fg">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
