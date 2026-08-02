import type { Metadata } from "next";
import { Unbounded, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const displayFont = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Buildwise.Hustlers — Digital Command Center",
  description:
    "Buildwise.Hustlers builds premium websites, AI automation, chatbots, voice agents, and digital infrastructure that grow businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base text-fg font-body">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
