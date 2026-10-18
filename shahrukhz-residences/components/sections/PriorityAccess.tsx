import LeadForm from "@/components/ui/LeadForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { priority } from "@/lib/content";

// Desktop only: phones already have the hero form and the bottom bar, a third form would only add scrolling.
// Tinted tile so the second form reads as its own offer, not a repeat of the hero.
export default function PriorityAccess() {
  return (
    <section className="hidden rounded-3xl border border-navy/15 bg-navy-soft p-10 shadow-float lg:block xl:col-span-5">
      <SectionHeading compact eyebrow={priority.eyebrow} title={priority.title} intro={priority.body} />
      <div className="mt-8 rounded-2xl bg-white p-6 shadow-float">
        <LeadForm />
      </div>
    </section>
  );
}
