import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileActionBar from "@/components/layout/MobileActionBar";
import Pane from "@/components/layout/Pane";
import WhatsAppLinks from "@/components/layout/WhatsAppLinks";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { form, guideLink, newTab, whatsappLink } from "@/lib/content";

// Where the enquiry form lands after a successful send (components/ui/LeadForm.tsx). Kept out of search
// results and the sitemap: it only makes sense after submitting. A fixed URL also lets ad platforms and
// analytics count a page view here as a lead.
export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: true },
};

export default function ThankYou() {
  return (
    <>
      <WhatsAppLinks />
      <Header />
      <main className="pt-14">
        <Pane tone="shore" label="Enquiry · Received">
          <div className="mx-auto max-w-2xl py-6 text-center">
            <Eyebrow>{form.thanksTitle}</Eyebrow>
            <h1 className="mt-6 text-4xl sm:text-5xl">Thank you</h1>
            <p className="mt-6 text-lg">{form.thanksBody}</p>
            <p className="mt-3 text-muted">Need an answer sooner? Message us on WhatsApp.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href={whatsappLink()} {...newTab}>Chat on WhatsApp</Button>
              <Button variant="outline" href="/#residences">Back to residences</Button>
              <Button variant="outline" href={guideLink.href}>Read the {guideLink.title.toLowerCase()}</Button>
            </div>
          </div>
        </Pane>
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
