import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { contact, seo } from "@/lib/content";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    siteName: contact.company,
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

// The business behind the page is Optimum Point, so that is what search engines are told.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: contact.company,
  telephone: contact.phone,
  email: contact.email,
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  areaServed: "AE",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      {/* Bottom padding on phones: room for the fixed call / WhatsApp / enquire bar. */}
      <body className="pb-16 lg:pb-0">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
