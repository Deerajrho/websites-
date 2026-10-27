import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileActionBar from "@/components/layout/MobileActionBar";
import Pane from "@/components/layout/Pane";
import SmoothScroll from "@/components/layout/SmoothScroll";
import WhatsAppLinks from "@/components/layout/WhatsAppLinks";
import Button from "@/components/ui/Button";
import JsonLd, { agentNode } from "@/components/ui/JsonLd";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { guideLink, newTab, siteUrl, whatsappLink } from "@/lib/content";

// The off-plan buying guide: the site's one article, written to rank for "buying off plan property in dubai"
// and hand readers on to the residences. Unlike the home page, its copy lives here, because it is one long
// article rather than reusable section data. Figures marked "check" in the text change often; review them
// (and the "Updated" date) whenever prices, fees or visa rules change.
const updated = { iso: "2026-10-27", label: "October 2026" };
const title = "Buying Off-Plan Property in Dubai (2026): Steps, Costs & Payment Plans";
const description =
  "Buying off-plan property in Dubai? The 7-step process, real costs (DLD 4%, Oqood), escrow checks, payment plans and Golden Visa rules, with a worked example.";
const url = `${siteUrl}${guideLink.href}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: guideLink.href },
  openGraph: { title, description, url: guideLink.href, type: "article", locale: "en_AE" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "What are off-plan sales in real estate?",
    a: "An off-plan sale is the purchase of a property from the developer before it is built or finished. You sign a sales and purchase agreement, pay in instalments during construction, and receive the home (and title deed) on handover.",
  },
  {
    q: "What is Oqood in Dubai?",
    a: "Oqood is the Dubai Land Department's interim register for off-plan sales. The developer registers your contract there after you sign the SPA, which records you as the buyer until the property is finished and the Oqood is converted into a title deed.",
  },
  {
    q: "How much deposit do I need for off-plan property in Dubai?",
    a: "Usually 10 to 20% of the price at booking, plus the 4% Dubai Land Department fee, which most developers collect at the same time. Some launches also take a refundable or creditable expression of interest first.",
  },
  {
    q: "Is my money safe if the developer delays?",
    a: "Instalments go into a RERA-regulated escrow account tied to the project, and the developer can only draw on it as construction milestones are certified. Your SPA sets out what happens if handover is late, so read the delay clause before signing.",
  },
  {
    q: "Can I buy off-plan property in Dubai from India, the UK or elsewhere?",
    a: "Yes. Foreigners can buy in Dubai's freehold areas without living in the UAE. Most steps can be done remotely, by digital signature or through a power of attorney, and payments are made by international transfer to the escrow account.",
  },
  {
    q: "Do I pay agent commission on off-plan property?",
    a: "On new launches the developer normally pays the agent, so the buyer usually pays no commission. Resale of an off-plan unit (buying from another investor) normally carries a commission, often 2%.",
  },
  {
    q: "Who is Mr. 1% in Dubai?",
    a: "Rizwan Sajan, founder of Danube Properties, is widely called 'Mr. 1%' after the developer's 1% monthly payment plans. Danube is also the developer of Shahrukhz Residences.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: title,
      description,
      datePublished: updated.iso,
      dateModified: updated.iso,
      mainEntityOfPage: url,
      image: `${siteUrl}/og.jpg`,
      inLanguage: "en-AE",
      author: { "@id": `${siteUrl}/#agent` },
      publisher: { "@id": `${siteUrl}/#agent` },
    },
    agentNode,
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: guideLink.title, item: url },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

// Long-form text styles, so the article below stays readable as plain JSX.
const h2 = "mt-16 scroll-mt-20 text-3xl sm:text-4xl";
const h3 = "mt-8 text-xl font-semibold sm:text-2xl";
const p = "mt-4";
const ul = "mt-4 list-disc space-y-2 pl-6";
const ol = "mt-4 list-decimal space-y-2 pl-6";
const a = "font-semibold text-accent underline underline-offset-4";
const table = "mt-6 w-full min-w-[34rem] border-collapse text-left text-sm";
const th = "border-b border-line py-3 pr-4 font-semibold text-ink";
const td = "border-b border-line py-3 pr-4 align-top";

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="strip overflow-x-auto">
      <table className={table}>
        <thead>
          <tr>{head.map((h) => <th key={h} className={th}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>{r.map((c, i) => <td key={i} className={td}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Cta({ text }: { text: string }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Button href="/#residences">See residences & prices</Button>
      <Button variant="outline" href={whatsappLink(text)} {...newTab}>Ask on WhatsApp</Button>
    </div>
  );
}

export default function Guide() {
  return (
    <>
      <SmoothScroll />
      <WhatsAppLinks />
      <Header />
      <main className="pt-14">
        <Pane tone="shore" label="Buyer's guide · Dubai off-plan">
          <article className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="chart-label text-muted">
              <Link href="/" className="hover:text-accent">Home</Link> / <span>{guideLink.title}</span>
            </nav>
            <h1 className="mt-6 text-4xl sm:text-6xl">Buying Off-Plan Property in Dubai: The Complete 2026 Guide</h1>
            <p className="chart-label mt-6 text-muted">
              Updated <time dateTime={updated.iso}>{updated.label}</time> · By an independent sales agent
            </p>

            <p className="mt-8 text-lg">
              <strong className="text-ink">Off-plan property is a home you buy from the developer before it is finished, paying in instalments while it is built.</strong>{" "}
              In Dubai, foreigners can buy off-plan in freehold areas without living in the UAE, and every instalment is paid into a
              regulated escrow account. This guide covers the buying process step by step, what it really costs, how payment plans
              work, mortgages, the Golden Visa, and how to protect yourself, with a real project as a worked example.
            </p>

            <div className="mt-8 border border-line p-6">
              <Eyebrow>Key facts</Eyebrow>
              <ul className={ul}>
                <li><strong>Booking:</strong> typically 10–20% of the price, plus the 4% Dubai Land Department (DLD) fee.</li>
                <li><strong>Protection:</strong> payments go into a RERA escrow account linked to the project.</li>
                <li><strong>Registration:</strong> your contract is registered with DLD on the Oqood system.</li>
                <li><strong>Payment plans:</strong> often 30–60% during construction and the rest on or after handover.</li>
                <li><strong>Residency:</strong> property worth AED 2 million or more can qualify for the 10-year Golden Visa (check the current rules).</li>
              </ul>
            </div>

            <h2 id="what-is-off-plan" className={h2}>What is off-plan property in Dubai?</h2>
            <p className={p}>
              &quot;Off-plan&quot; means buying from plans, renders and a show apartment rather than a finished building. You lock in today&apos;s
              price, pay it gradually over the build, and own a brand-new home on handover. Developers usually price launches below
              comparable ready homes to fund construction, which is why off-plan makes up a large share of Dubai sales.
            </p>
            <h3 className={h3}>Off-plan vs ready property</h3>
            <Table
              head={["", "Off-plan", "Ready (secondary)"]}
              rows={[
                ["Price", "Launch pricing, often below ready equivalents", "Market price"],
                ["How you pay", "Instalments over the build (and sometimes after)", "In full at transfer (cash or mortgage)"],
                ["Upfront cash", "Booking % + 4% DLD fee", "Usually 20–25%+ deposit with a mortgage, + 4% DLD + 2% agency"],
                ["Rental income", "Starts after handover", "Immediately"],
                ["Main risk", "Construction delay, spec changes", "Condition of an older building"],
                ["Mortgage", "Limited until near handover", "Widely available"],
              ]}
            />

            <h2 id="foreigners" className={h2}>Can foreigners buy off-plan property in Dubai?</h2>
            <p className={p}>
              Yes. Non-UAE nationals can own property outright (freehold) in designated areas, which include Dubai Marina, Downtown,
              Business Bay, Jumeirah Village Circle and Dubai Maritime City. You do not need a residence visa or a local sponsor to buy.
              Buyers abroad can sign documents digitally or through a power of attorney, and pay by international transfer straight
              into the project&apos;s escrow account.
            </p>
            <p className={p}>
              Official information: the{" "}
              <a className={a} href="https://dubailand.gov.ae/en/" {...newTab}>Dubai Land Department</a>.
            </p>

            <h2 id="steps" className={h2}>How to buy off-plan property in Dubai: 7 steps</h2>
            <h3 className={h3}>1. Set your budget and goal</h3>
            <p className={p}>
              Decide whether you will live in the home, rent it out or sell before handover. Then map every instalment against the money
              you will actually have on each date, including the 4% DLD fee at booking and the final payment on handover.
            </p>
            <h3 className={h3}>2. Check the developer and the project</h3>
            <p className={p}>
              Look at the developer&apos;s delivered projects and how close to schedule they were. Ask for the project&apos;s RERA registration
              number and look it up in the DLD&apos;s <strong>Dubai REST</strong> app, which shows registered projects and their status.
            </p>
            <h3 className={h3}>3. Verify the escrow account</h3>
            <p className={p}>
              By law (Dubai Law No. 8 of 2007), off-plan payments must go into an escrow account opened for that specific project with an
              approved bank. Before paying anything:
            </p>
            <ol className={ol}>
              <li>Ask the developer for the escrow account name, number and bank in writing.</li>
              <li>Check the account details match the project in Dubai REST and in your SPA.</li>
              <li>Pay instalments only to that account, never to a personal or agency account.</li>
            </ol>
            <h3 className={h3}>4. Reserve the unit</h3>
            <p className={p}>
              Choose your unit and sign a reservation form or expression of interest (EOI). At launch, developers often take a fixed EOI
              amount first, then the first instalment (typically 10–20%) within a few weeks.
            </p>
            <h3 className={h3}>5. Sign the Sales and Purchase Agreement (SPA)</h3>
            <p className={p}>
              The SPA is the contract that governs everything. The brochure does not. Read these clauses closely: the payment schedule,
              the expected completion date and what happens if it slips, specification changes, what happens if you miss a payment, and
              whether (and when) you can sell the unit before handover.
            </p>
            <h3 className={h3}>6. Oqood registration</h3>
            <p className={p}>
              The developer registers your purchase with DLD on the Oqood (interim) register. You receive an Oqood certificate, which
              proves you are the buyer until the building is finished. The 4% DLD fee and registration charges are paid at this stage.
            </p>
            <h3 className={h3}>7. Instalments, snagging, handover and title deed</h3>
            <p className={p}>
              Pay each instalment on schedule. Near completion you inspect the home for defects (snagging) and the developer fixes them.
              You then pay the handover amount, collect the keys, and DLD converts your Oqood into a full title deed.
            </p>

            <h2 id="costs" className={h2}>What does it really cost?</h2>
            <Table
              head={["Cost", "Typical amount", "When"]}
              rows={[
                ["DLD transfer fee", "4% of the price", "At booking / Oqood"],
                ["Oqood and admin fees", "A few thousand dirhams (check with DLD)", "At booking / Oqood"],
                ["Agency commission", "Usually 0% on new launches", "-"],
                ["Instalments", "Per your payment plan", "During construction"],
                ["Handover payment", "The balance due on completion", "On handover"],
                ["Service charges", "Per square foot per year, set by the building", "From handover"],
                ["Snagging inspection", "Optional, but recommended", "Before handover"],
              ]}
            />
            <h3 className={h3}>Worked example: a studio at AED 1,650,000</h3>
            <p className={p}>
              Using the Shahrukhz Residences 30/70 payment plan (10% / 10% / 5% / 5% during construction, 70% on handover):
            </p>
            <Table
              head={["When", "Payment", "Amount (AED)"]}
              rows={[
                ["Within 21 days of booking", "10% + 4% DLD fee", "165,000 + 66,000"],
                ["Month 2", "10%", "165,000"],
                ["Month 10", "5%", "82,500"],
                ["Month 18", "5%", "82,500"],
                ["Total during construction", "30% + DLD fee", "561,000 (+ admin fees)"],
                ["Handover (Dec 2029)", "70%", "1,155,000"],
              ]}
            />
            <p className={p}>
              So about AED 561,000 is paid over 18 months, and the remaining AED 1,155,000 is due on handover. You can pay that in cash,
              with a mortgage, or partly by selling before completion.
            </p>

            <h2 id="payment-plans" className={h2}>Off-plan payment plans explained</h2>
            <Table
              head={["Plan", "How it works", "Suits"]}
              rows={[
                ["Construction-linked (e.g. 30/70, 50/50)", "A share during the build, the balance on handover", "Buyers who will pay the balance with a mortgage or savings at completion"],
                ["Post-handover (e.g. 60/40 over 2–5 years)", "Part of the price is paid after you get the keys", "Buyers who want rent to cover later instalments"],
                ["1% monthly", "Small fixed monthly payments over several years", "Buyers who prefer steady cash flow"],
              ]}
            />
            <p className={p}>
              <strong>Can you buy with no down payment?</strong> Not really. Every off-plan purchase needs at least a booking payment and the
              4% DLD fee. Some launches waive or split the DLD fee as a promotion, which lowers the cash you need on day one.
            </p>

            <h2 id="mortgage" className={h2}>Can you get a mortgage on off-plan property?</h2>
            <p className={p}>
              Mortgages are usually arranged near handover, to pay the final balance. Under UAE Central Bank rules, expatriates buying a
              first home under AED 5 million can borrow up to 80% of the value, and loans on off-plan property are capped lower (check
              current limits with your bank). Some banks partner directly with developers. UAE residents buying their first home may also
              be eligible for the{" "}
              <a className={a} href="https://dubailand.gov.ae/en/eservices/first-time-home-buyer-overview/" {...newTab}>DLD First-Time Home Buyer programme</a>,
              which includes off-plan units from participating developers.
            </p>

            <h2 id="golden-visa" className={h2}>Golden Visa and residency through off-plan property</h2>
            <p className={p}>
              Owning property worth <strong>AED 2 million or more</strong> can qualify you for the UAE&apos;s 10-year Golden Visa, and off-plan
              property from approved developers can count. Conditions such as how much must be paid and which documents are required are
              set by the authorities and change, so confirm them on the{" "}
              <a className={a} href="https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa" {...newTab}>UAE Government Portal</a>{" "}
              or with DLD before you rely on them. Lower-value property may qualify for a shorter investor residence visa.
            </p>
            <p className={p}>
              At Shahrukhz Residences, every 1-bedroom and larger home starts above AED 2 million, from AED 2.3M for a 1 bedroom.
            </p>

            <h2 id="risks" className={h2}>Risks of buying off-plan, and how to protect yourself</h2>
            <ul className={ul}>
              <li><strong>Delays:</strong> handover can slip. Check the developer&apos;s track record and the SPA delay clause, and don&apos;t rely on rent from a fixed date.</li>
              <li><strong>Specification changes:</strong> the SPA, not the brochure, defines what you get. Read the specification schedule.</li>
              <li><strong>Market changes:</strong> prices can fall as well as rise before handover. Buy what you could hold to completion.</li>
              <li><strong>Developer risk:</strong> escrow rules mean your money funds only your project, released as construction progresses.</li>
            </ul>

            <h2 id="resale" className={h2}>Can you sell off-plan property before handover?</h2>
            <p className={p}>
              Usually yes, by assigning your contract to a new buyer. Developers commonly require a minimum share of the price to be paid
              first (often 30–40%) and charge a fee for a no-objection certificate (NOC). The new buyer takes over your payment schedule.
              Check your SPA for the exact conditions.
            </p>

            <h2 id="example" className={h2}>Example: buying at Shahrukhz Residences</h2>
            <p className={p}>
              Shahrukhz Residences is a fully furnished waterfront tower in Dubai Maritime City by Danube Properties, with studios to
              three-bedroom homes and more than 40 amenities across three decks. Here is how the steps above apply to it:
            </p>
            <ul className={ul}>
              <li><strong>Reserve:</strong> AED 50,000 EOI for studios and 1 bedrooms, AED 100,000 for 2 bedrooms and above.</li>
              <li><strong>Pay 30% over 18 months:</strong> 10% within 21 days, 10% at month 2, 5% at month 10 and 5% at month 18.</li>
              <li><strong>Pay 70% on handover:</strong> planned for Q4 2029, with the final payment due December 2029.</li>
              <li><strong>Prices:</strong> from AED 1.65M (studio), AED 2.3M (1 bedroom) and AED 6.5M (3 bedroom).</li>
            </ul>
            <p className={p}>Prices and terms are from the developer&apos;s sales presentation and may change.</p>
            <Cta text="Hello, I read your off-plan buying guide and would like the Shahrukhz Residences price list and payment plan." />

            <h2 id="faq" className={h2}>Frequently asked questions</h2>
            <div className="mt-6 border-t border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-line py-5">
                  <summary className="text-lg font-semibold text-ink transition-colors hover:text-accent">{f.q}</summary>
                  <p className="mt-3">{f.a}</p>
                </details>
              ))}
            </div>

            <h2 className={h2}>Thinking about Shahrukhz Residences?</h2>
            <p className={p}>
              Get the current price list, floor plans and the units still available. We reply on WhatsApp, by phone or by email.
            </p>
            <Cta text="Hello, I'd like the latest Shahrukhz Residences price list and availability." />

            <p className="mt-12 text-sm text-muted">
              This guide is general information, not legal or financial advice. Fees and visa rules change, so confirm them with the
              Dubai Land Department, your bank and the developer before you buy.
            </p>
          </article>
        </Pane>
      </main>
      <Footer />
      <MobileActionBar />
      <JsonLd data={jsonLd} />
    </>
  );
}
