// All site copy lives here. Project facts and prices come from the Danube sales presentation (SRK_PPT.pdf);
// every contact detail is the sales agent's. Edit here, not in components.

export const contact = {
  city: "Dubai, UAE",
  phone: "+971-52-267-6172",
  phoneHref: "tel:+971522676172",
  whatsapp: "971522676172",
};

export const whatsappLink = (
  text = "Hello, I would like details about Shahrukhz Residences by Danube.",
) => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const enquiry = (subject: string) =>
  `Hello, I'm interested in ${subject} at Shahrukhz Residences by Danube. Please share availability and the floor plan.`;

// The live address of the site. Used for the canonical link, the share image, sitemap.xml and robots.txt.
// Change it when the site moves to its own domain (and update the Website URL in the Web3Forms form settings).
export const siteUrl = "https://shahrukzresidencesdanube.com";

export const seo = {
  title: "Shahrukhz Residences by Danube: Prices & Payment Plan",
  description:
    "Shahrukhz Residences by Danube in Dubai Maritime City: furnished studios to 3-bed homes from AED 1.65M, 30/70 payment plan, handover Q4 2029.",
  shareImageAlt: "Shahrukhz Residences tower and marina on the Dubai waterfront (artist's impression)",
};

// Shown in the footer. Keep the first sentence: it stops the page reading as Danube's own site.
// (The agency is deliberately not named here; Dubai adverts normally need agency/permit details, so add those if required.)
export const disclosure =
  "Independent marketing page, not the developer's official website. Shahrukhz Residences is developed by Danube Properties; enquiries go to an independent sales agent, not to Danube. Prices, payment plans and availability are from the developer's sales presentation and may change. Images are artist's impressions.";

// The agency behind the page. The name and email appear only in the structured data (the visible page names
// no agency, by choice). Its Dubai licence numbers (RERA ORN for the office, BRN for the broker, DLD/Trakheesi
// permit for the advert) are empty until supplied; once any is filled in, the footer shows the name with them.
export const agency = {
  name: "Optimum Point Business Solutions",
  email: "response@optimumluxurypro.com",
  orn: "",
  brn: "",
  permit: "",
};

// Links start with "/" so they also work from the guide page; on the home page they still scroll in place.
export const nav = [
  { title: "Residences", href: "/#residences" },
  { title: "Payment plan", href: "/#payment-plan" },
  { title: "Amenities", href: "/#amenities" },
  { title: "Gallery", href: "/#gallery" },
  { title: "Master plan", href: "/#master-plan" },
  { title: "Location", href: "/#location" },
  { title: "FAQ", href: "/#faq" },
];

export const guideLink = { title: "Off-plan buying guide", href: "/buying-off-plan-property-dubai" };

const img = (name: string) => `/images/${name}.webp`;

export const hero = {
  eyebrow: "Dubai Maritime City · Dubai",
  title: "Shahrukhz Residences",
  titleTail: "by Danube",
  price: "Furnished sea-view homes from AED 1.65M",
  body: "Studios to three-bedroom residences on the water, with more than 40 amenities spread across three decks and handover planned for Q4 2029.",
  chip: "30/70 payment plan",
  primaryCta: "See residences & prices",
  secondaryCta: "Register interest",
  formTitle: "Get prices, floor plans and availability",
  image: { src: img("site/hero"), alt: "Shahrukhz Residences tower and marina on the Dubai waterfront (artist's impression)" },
};

export const facts = [
  { label: "Developer", value: "Danube Properties" },
  { label: "Starting price", value: "AED 1,650,000" },
  { label: "Handover", value: "Q4 2029" },
  { label: "Payment plan", value: "30 / 70" },
  { label: "Homes", value: "Studios to 3 bedrooms" },
  { label: "Furnishing", value: "Fully furnished" },
];

export const intro = {
  eyebrow: "Living on the water",
  title: "Waterfront living in Dubai Maritime City",
  body: [
    "Shahrukhz Residences rises from Dubai Maritime City, with the open Gulf on one side and the city skyline on the other. Every home is delivered fully furnished, and most layouts look straight out to sea.",
    "Life here is organised around three amenity decks: a resort-style podium for families, a wellness floor on Level 33 and a rooftop club on Level 60.",
  ],
  cta: "Request the price list",
  image: { src: img("site/intro"), alt: "Infinity pool overlooking the sea (artist's impression)" },
};

// Starting and average prices per type, from the developer's configuration and pricing slides (AED).
export const residences = {
  eyebrow: "Residences & prices",
  title: "Shahrukhz Residences prices and unit types",
  intro: "Nine layouts, all fully furnished, with skyline or panoramic sea views. Prices below are the developer's starting prices.",
  items: [
    { type: "Studio", views: "Skyline sea view", from: "1.65M", average: "1.85M", image: img("residences/studio") },
    { type: "Flex Studio", views: "Skyline or panoramic sea view", from: "1.85M", average: "2M – 2.1M", image: img("residences/flex-studio") },
    { type: "1 Bedroom", views: "Skyline or panoramic sea view", from: "2.3M", average: "2.5M – 2.8M", image: img("residences/1bed") },
    { type: "Flex 1 Bedroom", views: "Panoramic or skyline sea view", from: "2.95M", average: "3.1M", image: img("residences/2bed") },
    { type: "Flex Plus 1 Bedroom", views: "Panoramic sea view", from: "3.4M", average: "3.6M", image: img("residences/kings-2bed") },
    { type: "King's 1 Bedroom", views: "Panoramic sea view", from: "3.4M", average: "3.6M", image: img("residences/kings-1bed") },
    { type: "Flex Plus 2 Bedroom Premium", views: "Panoramic sea view", from: "4.25M", average: "4.7M", image: img("residences/2bed") },
    { type: "King's 2 Bedroom", views: "Panoramic sea view", from: "4.95M", average: "5.4M", image: img("residences/kings-2bed") },
    { type: "3 Bedroom", views: "Panoramic sea view", from: "6.5M", average: "6.7M", image: img("residences/3bed") },
  ],
  cta: "Enquire",
};

export const paymentPlan = {
  eyebrow: "Payment plan",
  title: "Shahrukhz Residences 30/70 payment plan",
  intro: "Pay 30% while it's built and 70% on handover. The first 30% is spread across the first 18 months; the remaining 70% is due on handover in December 2029.",
  steps: [
    { percent: 10, label: "Down payment", when: "Within 21 days of booking" },
    { percent: 10, label: "Second instalment", when: "2 months after booking" },
    { percent: 5, label: "Third instalment", when: "10 months after booking" },
    { percent: 5, label: "Fourth instalment", when: "18 months after booking" },
    { percent: 70, label: "On handover", when: "December 2029" },
  ],
  eoi: {
    title: "Reserve early with an expression of interest",
    items: [
      { label: "Studio & 1 bedroom", value: "AED 50,000 EOI" },
      { label: "2 bedrooms & above", value: "AED 100,000 EOI" },
    ],
    note: "Paying 10% secures priority allocation of units, according to the developer's launch terms.",
  },
  cta: "Ask for the full schedule",
};

export const amenities = {
  eyebrow: "Amenities",
  title: "40+ amenities across three decks",
  intro: "A family podium, a wellness floor and a rooftop club, each designed around the sea view.",
  items: [
    { title: "Beach lagoon", body: "A sandy lagoon with a hot tub and loungers by the water.", image: img("amenities/lagoon") },
    { title: "Kids' aqua land", body: "Slides and splash play on the podium.", image: img("amenities/aqua") },
    { title: "Sports hub", body: "Padel, tennis and multi-sport courts with a running track.", image: img("amenities/sports") },
    { title: "Garden cabanas", body: "Landscaped lawns with private shaded cabanas.", image: img("amenities/cabanas") },
    { title: "Private cinema", body: "A 40-seat screening room for residents.", image: img("amenities/cinema") },
    { title: "Sea-view gym", body: "A full fitness floor with floor-to-ceiling glass.", image: img("amenities/gym") },
    { title: "Longevity lounge", body: "Recovery and wellness therapies on Level 33.", image: img("amenities/longevity") },
    { title: "Rooftop club deck", body: "A residents' club on Level 60 facing the sunset.", image: img("amenities/clubdeck") },
    { title: "Residents' yacht", body: "A dedicated yacht for residents to book.", image: img("amenities/yacht") },
  ],
};

export const gallery = {
  eyebrow: "Gallery",
  title: "Inside Shahrukhz Residences",
  items: [
    { caption: "Arrival lobby", image: img("gallery/lobby") },
    { caption: "Club lounge", image: img("gallery/lounge") },
    { caption: "Seafront dining", image: img("gallery/dining") },
    { caption: "Sky-high balconies", image: img("gallery/balcony") },
    { caption: "Waterfront promenade", image: img("gallery/promenade") },
    { caption: "The tower at night", image: img("gallery/night") },
  ],
};

export const priority = {
  eyebrow: "Priority access",
  title: "Be first in line for the best units",
  body: "Share your details and a sales consultant will send the current price list, floor plans and the units still available.",
};

export const masterPlan = {
  eyebrow: "Master plan",
  title: "Master plan: three amenity decks",
  intro: "The amenities are grouped on three levels, so families, fitness and socialising each have their own space.",
  decks: [
    { name: "Lifestyle deck", level: "Podium", body: "Lagoon, kids' aqua land, fountain plaza, sports courts and gardens.", image: img("plans/lifestyle") },
    { name: "Wellness & Sky decks", level: "Level 33 & Level 60", body: "Infinity pool, gym and longevity lounge on 33; the rooftop club on 60.", image: img("plans/wellness-sky") },
  ],
  cta: "Request the master plan",
};

export const brochure = {
  eyebrow: "Brochure",
  title: "Get the full brochure",
  body: "Receive the presentation with floor plans, the unit mix and the latest pricing.",
  points: ["Floor plans for every unit type", "Current pricing and availability", "The full payment schedule"],
};

// Drive times from the developer's presentation.
export const location = {
  eyebrow: "Location",
  title: "Location: Dubai Maritime City",
  intro: "A waterfront district between Port Rashid and the city, with the main landmarks a short drive away. Times are the developer's estimates.",
  image: { src: img("site/location"), alt: "Shahrukhz Residences tower lit at night (artist's impression)" },
  places: [
    { name: "Port Rashid Boat Station", minutes: 2 },
    { name: "Dubai Cruise Terminal 2", minutes: 3 },
    { name: "Dubai World Trade Centre", minutes: 8 },
    { name: "Jumeirah Beach", minutes: 8 },
    { name: "Burj Khalifa & Dubai Mall", minutes: 10 },
    { name: "Dubai Festival City Mall", minutes: 12 },
    { name: "Dubai International Airport", minutes: 15 },
    { name: "Burj Al Arab", minutes: 20 },
    { name: "Palm Jumeirah", minutes: 25 },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  title: "Questions about Shahrukhz Residences",
  items: [
    { q: "Who is the developer?", a: "Shahrukhz Residences is developed by Danube Properties. This page is run by an independent sales agent, who handles your enquiry." },
    { q: "What does a home cost?", a: "Prices start at AED 1.65M for a studio and reach AED 6.5M for a three-bedroom residence. We send the current price list on enquiry." },
    { q: "What is the payment plan?", a: "A 30/70 plan: 10% within 21 days of booking, 10% after 2 months, 5% after 10 months and 5% after 18 months, with 70% on handover." },
    { q: "When is handover?", a: "Handover is planned for Q4 2029, with the final payment due in December 2029." },
    { q: "Are the homes furnished?", a: "Yes. Every residence is delivered fully furnished." },
    { q: "Where is Shahrukhz Residences located?", a: "In Dubai Maritime City, about 2 minutes from Port Rashid Boat Station, 10 minutes from Burj Khalifa and Dubai Mall, and 15 minutes from Dubai International Airport (developer's estimates)." },
    { q: "Which unit types are available?", a: "Studios, Flex Studios, 1-bedroom homes (standard, Flex, Flex Plus and King's), Flex Plus 2-bedroom Premium, King's 2-bedroom and 3-bedroom residences, all fully furnished." },
    { q: "What amenities does Shahrukhz Residences have?", a: "More than 40, across a lifestyle podium, a wellness deck on Level 33 and a rooftop club on Level 60, including a beach lagoon, kids' aqua land, sports courts, a private cinema and a residents' yacht." },
    { q: "How do I reserve a unit?", a: "Send an enquiry and we will explain the expression of interest: AED 50,000 for studios and 1-bedroom homes, AED 100,000 for 2 bedrooms and above." },
  ],
};

export const closing = {
  eyebrow: "Contact",
  title: "Shahrukhz Residences enquiries",
  body: "Ask about prices, the units still available and how to reserve. We reply on WhatsApp, by phone or by email.",
};

// Enquiry forms are emailed to response@optimumluxurypro.com through Web3Forms (web3forms.com).
// The access key is public by design (it only lets this site send to that inbox), so it can live here.
// Leave it empty and the forms fall back to opening WhatsApp with the details filled in.
export const web3formsKey = "e4278ec8-c106-471b-9a20-3cfdfd21333f";

export const form = {
  interests: residences.items.map((r) => r.type),
  messageLabel: "Anything else?",
  messagePlaceholder: "For example: a sea-view 1 bedroom, best time to call",
  submit: "Submit",
  sending: "Sending…",
  thanksTitle: "Request received",
  thanksBody: "Thank you for submitting a request. Our agent will get back to you shortly.",
  error: "Sorry, your request couldn't be sent. Please try again, or message us on WhatsApp.",
  errorCta: "Message us on WhatsApp",
  privacy: "Your details are sent to our sales team and used only to answer your enquiry.",
  privacyWhatsApp: "Submitting opens WhatsApp with your details filled in; press send to finish. Your details are used only to answer your enquiry.",
};

// Spread onto external links (WhatsApp) so they open in a new tab safely.
export const newTab = { target: "_blank", rel: "noopener noreferrer" } as const;
