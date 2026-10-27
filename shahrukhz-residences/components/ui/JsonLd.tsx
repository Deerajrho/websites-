import { agency, contact, siteUrl } from "@/lib/content";

// The sales agency as a structured-data node, shared by every page's @graph.
export const agentNode = {
  "@type": "RealEstateAgent",
  "@id": `${siteUrl}/#agent`,
  name: agency.name,
  telephone: contact.phone,
  email: agency.email,
  url: siteUrl,
  areaServed: "Dubai, AE",
  ...(agency.orn && { identifier: { "@type": "PropertyValue", name: "RERA ORN", value: agency.orn } }),
};

// Structured data for search engines. "<" is escaped so page copy can never close the script tag early.
export default function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
