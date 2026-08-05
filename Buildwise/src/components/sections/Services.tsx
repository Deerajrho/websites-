import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { ServiceCard, type VisualKey } from "@/components/ui/ServiceCard";

const SERVICES: {
  visualKey: VisualKey;
  accentVar: string;
  title: string;
  description: string;
  bullets: string[];
}[] = [
  {
    visualKey: "web",
    accentVar: "var(--color-service-web)",
    title: "Premium Website Development",
    description:
      "Modern, custom-built sites and landing pages that turn visitors into customers — on the platform that fits your business.",
    bullets: [
      "Custom UI/UX",
      "Landing Pages",
      "Corporate Websites",
      "Portfolio Websites",
      "Restaurant Websites",
      "Real Estate Websites",
      "E-commerce",
      "Webflow",
      "WordPress",
      "Shopify",
      "Next.js",
      "Custom Development",
    ],
  },
  {
    visualKey: "seo",
    accentVar: "var(--color-service-seo)",
    title: "SEO & Growth",
    description:
      "Technical fixes, content strategy, and month-over-month optimization so the right customers find you first.",
    bullets: [
      "Technical SEO",
      "On-page SEO",
      "Website Audits",
      "Keyword Research",
      "Google Search Console",
      "Analytics",
      "Core Web Vitals",
      "Local SEO",
      "Content Strategy",
      "Monthly SEO Growth",
    ],
  },
  {
    visualKey: "automation",
    accentVar: "var(--color-service-automation)",
    title: "Workflow Automation",
    description:
      "We connect your tools so leads, invoices, and internal busywork move themselves — no more manual copy-paste.",
    bullets: [
      "CRM automation",
      "Lead management",
      "Email automation",
      "Appointment scheduling",
      "Invoice generation",
      "Internal workflows",
      "Zapier",
      "Make.com",
      "n8n",
      "API integrations",
    ],
  },
  {
    visualKey: "chatbot",
    accentVar: "var(--color-service-chatbot)",
    title: "AI Chatbots",
    description:
      "A tireless front line for your business — qualifying leads and answering questions on your site and socials, 24/7.",
    bullets: [
      "24/7 customer support",
      "Lead qualification",
      "FAQ automation",
      "Appointment booking",
      "CRM integration",
      "Website chatbot",
      "WhatsApp chatbot",
      "Instagram automation",
      "Messenger automation",
      "Custom AI assistants",
    ],
  },
  {
    visualKey: "voice",
    accentVar: "var(--color-service-voice)",
    title: "AI Voice Agents",
    description:
      "Human-like phone agents that book appointments, handle support, and follow up on leads — day or night.",
    bullets: [
      "Appointment booking",
      "Inbound support",
      "Outbound sales",
      "Lead follow-up",
      "Call summaries",
      "CRM integration",
      "Voice AI workflows",
      "Business phone automation",
    ],
  },
  {
    visualKey: "digital",
    accentVar: "var(--color-service-digital)",
    title: "Digital Solutions",
    description:
      "Custom dashboards, portals, and infrastructure that keep your business running — securely and at scale.",
    bullets: [
      "Custom dashboards",
      "Business portals",
      "Analytics dashboards",
      "Admin panels",
      "Cloud integrations",
      "CMS",
      "Maintenance",
      "Hosting",
      "Security",
      "Scalable infrastructure",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-base px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-12 flex flex-col gap-4">
          <AnimatedItem>
            <EyebrowBadge>What We Build</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-2xl font-display text-3xl font-semibold text-fg md:text-4xl">
              Six disciplines. One digital ecosystem.
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <AnimatedItem key={service.title}>
              <ServiceCard {...service} />
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
