import type { Metadata } from "next";
import { Bodoni_Moda, IBM_Plex_Mono, Manrope } from "next/font/google";
import { seo, siteUrl } from "@/lib/content";
import "./globals.css";

// Bodoni Moda: high-contrast editorial serif for headings; Manrope: clean body; IBM Plex Mono: chart labels.
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const shareImage = { url: "/og.jpg", width: 1200, height: 630, alt: seo.shareImageAlt };

export const metadata: Metadata = {
  // Makes the canonical link and share image absolute URLs on the live address.
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/",
    siteName: "Shahrukhz Residences by Danube",
    type: "website",
    locale: "en_AE",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [shareImage],
  },
};

// Structured data lives in each page (app/page.tsx, the guide), since it must describe what that page shows.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodoni.variable} ${manrope.variable} ${plexMono.variable}`}>
      {/* Bottom padding on phones: room for the fixed call / WhatsApp / enquire bar. */}
      <body className="pb-16 lg:pb-0">
        {children}
      </body>
    </html>
  );
}
