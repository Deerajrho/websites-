import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

// Generated as out/robots.txt at build time (the site is a static export).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
