import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

// Generated as out/sitemap.xml at build time (the site is a static export). One page, so one entry.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
