/* ---------------------------------------------------------------------------
   PROFILE

   The handful of facts about Dhanush that appear on more than one page. They
   live here so the home hero and the About page cannot quietly disagree about
   how many years of experience there are — which is exactly what happened when
   each page carried its own copy of the number.
--------------------------------------------------------------------------- */

export const PROFILE = {
  /* "Product designer", not "UI/UX designer" and not "designer who codes".
     The title on a portfolio is a positioning decision: it tells a reader
     which job to consider you for, and the work here — redefining the brief,
     scoping, shipping, then measuring — is product design. */
  role: "Product designer",
  basedIn: "Bangalore, India",
  experience: "4 years",
  /* The kinds of thing, not the tools used to make them.

     "AI products" is a claim with evidence behind it: XIA Intelligence is
     nine assessment modules live on xiphiasimmigration.com, designed and
     shipped here. Deliberately not "AI platforms" — that implies building
     the models rather than the product around them, and the difference is
     the first thing an interviewer probes. */
  worksOn: "Web · mobile · SaaS dashboards · AI products",
  /* Still true, still useful — but it belongs on the About sheet and in one
     sentence on the home page, not as a headline. A stack list up front
     quietly argues for a front-end role instead of a design one. */
  codesIn: "React · TypeScript · Tailwind",
};

/* ---------------------------------------------------------------------------
   THE TRACK

   Every line here is checkable — most of them by opening the URL. That is the
   point: an About page is the one sheet where a reader is deciding whether to
   believe the rest, so it carries the record rather than an adjective.

   Only three of these have a case study written. The other five are listed
   anyway, because a four-year record with three entries reads like a gap.
   `href` is set when there is somewhere to go; `live` when the thing is still
   in the world, which the register treats as a fact and marks accordingly.
--------------------------------------------------------------------------- */

export type TrackEntry = {
  year: string;
  subject: string;
  what: string;
  /** The live site, when there is one to check. */
  href?: string;
  /** The case study on this site, when one is written. */
  study?: string;
};

export const TRACK: TrackEntry[] = [
  {
    year: "2026",
    subject: "Harmony Luxe Bill Book",
    what: "Billing tool for a Bengaluru spa. Research to tested build, solo.",
    study: "/work/harmony-luxe",
  },
  {
    year: "2026",
    subject: "ReturnEasy",
    what: "Self-directed mobile concept for online returns.",
    study: "/work/returneasy",
  },
  {
    year: "2025",
    subject: "XIPHIAS Immigration",
    what: "Platform rebuild on Next.js and MDX. Designed and coded solo.",
    href: "https://www.xiphiasimmigration.com",
    study: "/work/xiphias-immigration",
  },
  {
    year: "2025",
    subject: "Agree Superfoods",
    what: "Custom storefront, no theme and no template.",
    href: "https://www.agreesuperfoods.in",
  },
  {
    year: "2025",
    subject: "Resort booking & property management",
    what: "Guest booking, operations and finance — three apps, one codebase.",
  },
  {
    year: "2025",
    subject: "Harmony Luxe Spa",
    what: "Marketing site. WordPress.",
    href: "https://harmonyluxe.in",
  },
  {
    year: "2024",
    subject: "XIPHIAS Superfoods",
    what: "Shopify storefront, built in fifteen days.",
    href: "https://www.xiphiassuperfoods.com",
  },
  {
    year: "2023",
    subject: "IRIS Digital Imaging",
    what: "Company site. Designed and built.",
    href: "https://irisdit.com",
  },
];

/* ---------------------------------------------------------------------------
   WHAT I DO

   Split into the three things a product design role is actually assessed on,
   and everything else pushed below them.

   The hierarchy is the point. Research, design and testing get the boxes.
   The build and marketing side — Next.js, Shopify, SEO, analytics — is real,
   and it is genuinely useful on a small team, but it is not what someone
   hiring a product designer is reading for. Put it in the same visual weight
   and it starts arguing for a different job. So it sits underneath, in one
   quiet line, for the reader who wants it.

   Everything listed here appears somewhere in the case studies. Nothing is
   here because it looks good on a list.
--------------------------------------------------------------------------- */

export const TOOLS: { group: string; items: string }[] = [
  {
    group: "Research",
    items:
      "Stakeholder and user interviews · field research · competitor analysis · affinity mapping · personas · journey maps · problem framing",
  },
  {
    group: "Design",
    items:
      "Figma · FigJam · information architecture · user flows · wireframes · prototypes · UI design · design systems · components and tokens",
  },
  {
    group: "Testing",
    items:
      "Usability testing · task scenarios · severity-rated findings · iteration rounds · WCAG 2.2 AA audits",
  },
];

/** The rest. Real, useful, and deliberately not given a box of its own. */
export const ALSO =
  "Next.js · React · TypeScript · Tailwind · MDX · WordPress · Shopify · SEO · digital marketing · GA4 · Google Tag Manager";

/* ---------------------------------------------------------------------------
   ELSEWHERE

   A link is listed only when it exists and works. An empty entry is filtered
   out at render rather than left as a dead item, so adding a profile later is
   a one-line change here and nothing else.

   TODO: add the LinkedIn URL. It is the first thing a recruiter looks for and
   the one address this file is missing.
--------------------------------------------------------------------------- */

export type ExternalLink = { label: string; href: string; note: string };

export const ELSEWHERE: ExternalLink[] = [
  {
    label: "Résumé",
    href: "/Dhanush_N_Resume.pdf",
    note: "PDF, one page",
  },
  {
    label: "LinkedIn",
    href: "",
    note: "",
  },
].filter((link): link is ExternalLink => link.href !== "");
