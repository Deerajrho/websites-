import LeadForm from "@/components/ui/LeadForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { priority } from "@/lib/content";

// Desktop only: phones already have the hero form and the bottom bar, a third form would only add scrolling.
export default function PriorityAccess() {
  return (
    <section className="hidden bg-sky py-24 lg:block">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <SectionHeading eyebrow={priority.eyebrow} title={priority.title} intro={priority.body} />
        <div className="rounded-xl bg-white p-8 shadow-xl">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
