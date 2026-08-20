import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/* Nothing here is private, so nothing is disallowed. The one job this file
   has is pointing a crawler at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
