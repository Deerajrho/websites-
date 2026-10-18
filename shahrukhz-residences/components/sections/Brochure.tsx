import { Check } from "lucide-react";
import LeadForm from "@/components/ui/LeadForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { brochure } from "@/lib/content";

// Beside the FAQ: a framed slip with what's inside, then the short form.
export default function Brochure() {
  return (
    <section className="self-start border border-line p-6 sm:p-10 xl:col-span-5">
      <SectionHeading compact eyebrow={brochure.eyebrow} title={brochure.title} intro={brochure.body} />
      <ul className="mt-6 space-y-2">
        {brochure.points.map((p) => (
          <li key={p} className="flex items-center gap-3 text-sm text-ink">
            <Check className="h-4 w-4 text-accent" aria-hidden="true" />
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-8 border-t border-line pt-8">
        <LeadForm />
      </div>
    </section>
  );
}
