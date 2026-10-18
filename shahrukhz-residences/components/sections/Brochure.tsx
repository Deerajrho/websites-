import { Check } from "lucide-react";
import LeadForm from "@/components/ui/LeadForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { brochure } from "@/lib/content";

// Narrow tile beside the FAQ: what's inside as check chips, then the short form.
export default function Brochure() {
  return (
    <section className="card rounded-3xl p-6 sm:p-10 xl:col-span-5">
      <SectionHeading compact eyebrow={brochure.eyebrow} title={brochure.title} intro={brochure.body} />
      <ul className="mt-6 flex flex-wrap gap-2">
        {brochure.points.map((p) => (
          <li key={p} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700">
            <Check className="h-4 w-4 text-clay" aria-hidden="true" />
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-8 border-t border-slate-100 pt-8">
        <LeadForm />
      </div>
    </section>
  );
}
