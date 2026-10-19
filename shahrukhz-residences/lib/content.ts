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

export const seo = {
  title: "Shahrukhz Residences by Danube | Dubai Maritime City",
  description:
    "Fully furnished waterfront homes in Dubai Maritime City from AED 1.65M, with a 30/70 payment plan and handover in Q4 2029. Enquire for prices, floor plans and availability.",
};

// Shown in the footer. Keep the first sentence: it stops the page reading as Danube's own site.
// (The agency is deliberately not named here; Dubai adverts normally need agency/permit details, so add those if required.)
export const disclosure =
  "Independent marketing page, not the developer's official website. Shahrukhz Residences is developed by Danube Properties; enquiries go to an independent sales agent, not to Danube. Prices, payment plans and availability are from the developer's sales presentation and may change. Images are artist's impressions.";

export const nav = [
  { title: "Residences", href: "#residences" },
  { title: "Payment plan", href: "#payment-plan" },
  { title: "Amenities", href: "#amenities" },
  { title: "Gallery", href: "#gallery" },
  { title: "Master plan", href: "#master-plan" },
  { title: "Location", href: "#location" },
  { title: "FAQ", href: "#faq" },
];

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
  title: "A seafront address minutes from Downtown.",
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
  title: "Choose your residence",
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
  title: "Pay 30% while it's built, 70% on handover",
  intro: "The developer's 30/70 plan spreads the first 30% across the first 18 months. The remaining 70% is due on handover in December 2029.",
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
  title: "Over 40 amenities on three decks",
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
  title: "Three decks, one resort",
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
  title: "Dubai Maritime City, close to everything",
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
    { q: "How do I reserve a unit?", a: "Send an enquiry and we will explain the expression of interest: AED 50,000 for studios and 1-bedroom homes, AED 100,000 for 2 bedrooms and above." },
  ],
};

export const closing = {
  eyebrow: "Contact",
  title: "Shahrukhz Residences enquiries",
  body: "Ask about prices, the units still available and how to reserve. We reply on WhatsApp, by phone or by email.",
};

export const form = {
  interests: residences.items.map((r) => r.type),
  messageLabel: "Anything else?",
  messagePlaceholder: "For example: a sea-view 1 bedroom, best time to call",
  submit: "Submit",
};

// Spread onto external links (WhatsApp) so they open in a new tab safely.
export const newTab = { target: "_blank", rel: "noopener noreferrer" } as const;
