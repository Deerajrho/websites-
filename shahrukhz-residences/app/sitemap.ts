import type { MetadataRoute } from "next";
import { guideLink, siteUrl } from "@/lib/content";

// Generated as out/sitemap.xml at build time (the site is a static export).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}${guideLink.href}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
