import type { Metadata } from "next";
import { Bodoni_Moda, IBM_Plex_Mono, Manrope } from "next/font/google";
import { seo } from "@/lib/content";
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

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    siteName: "Shahrukhz Residences by Danube",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};


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
