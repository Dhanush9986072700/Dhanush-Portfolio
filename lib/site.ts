/* ---------------------------------------------------------------------------
   SITE

   The absolute origin, needed by three things that cannot use a relative URL:
   the sitemap, robots.txt, and the Open Graph card. Everything else on the
   site links relatively and does not care.

   Resolution order, most explicit first:

     NEXT_PUBLIC_SITE_URL          set this once the domain is decided
     VERCEL_PROJECT_PRODUCTION_URL Vercel provides it; the preview deploy
                                   still points its cards at production, which
                                   is what you want when sharing a link
     localhost                     development

   No hardcoded domain: a wrong absolute URL in a sitemap is worse than none,
   because it gets indexed before anyone notices.
--------------------------------------------------------------------------- */

export const SITE_URL: string =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
