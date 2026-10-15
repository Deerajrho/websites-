import { Check } from "lucide-react";
import LeadForm from "@/components/ui/LeadForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { brochure } from "@/lib/content";

export default function Brochure() {
  return (
    <section className="bg-navy py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={brochure.eyebrow} title={brochure.title} intro={brochure.body} dark />
          <ul className="mt-6 space-y-3">
            {brochure.points.map((p) => (
              <li key={p} className="flex gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl bg-white p-6 text-ink sm:p-8">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
