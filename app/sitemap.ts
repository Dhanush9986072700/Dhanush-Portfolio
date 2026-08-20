import type { MetadataRoute } from "next";
import { entries } from "@/data/projects";
import { SITE_URL } from "@/lib/site";

/* Every route that exists, and nothing that does not. Case-study URLs are
   read off the register rather than typed out again here, so a project added
   to data/projects.ts appears in the sitemap without anyone remembering to
   come back and add it. */
export default function sitemap(): MetadataRoute.Sitemap {
  const sheets = ["", "/work", "/process", "/about"];

  const studies = entries
    .map((entry) => entry.href)
    .filter((href): href is string => Boolean(href));

  return [...sheets, ...studies].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    /* The home sheet and the register are the entry points; the rest sit
       one step behind them. */
    priority: path === "" ? 1 : path === "/work" ? 0.9 : 0.7,
  }));
}
