/* ---------------------------------------------------------------------------
   THE WORK

   One real entry. The seven invented placeholders that used to live here are
   gone — a register advertising work that does not exist is worse than a short
   one. Add the next project by appending to `entries`.

   Two fields do the work:

   `state`  — what actually happened, including when nothing did. A list that
              only carries wins is a brochure.
   `delta`  — how much of it was drawn vs. how much was shipped by the same
              hands. The "designer who codes" claim as a number per project,
              which is much harder to argue with than a sentence about it.
   `metric` — the ONE number a reader gets to keep. It leads the Overview band,
              so it has to survive a two-second glance on a shared screen.
--------------------------------------------------------------------------- */

import type { StaticImageData } from "next/image";
import xiphiasPlate from "@/public/images/xiphias/homepage-hero.png";
import returneasyPlate from "@/public/images/returneasy/final-ui.png";
import harmonyPlate from "@/public/images/harmony-luxe/screens.png";

export const STATES = [
  "SHIPPED",
  "IN SERVICE",
  "SUNSET",
  "CONCEPT",
  "SPIKE",
] as const;

export type State = (typeof STATES)[number];

export type Entry = {
  index: string;
  subject: string;
  /** One sentence, for the home page. The summary below is the longer note
      that opens inside a register row, where there is room to read. */
  line: string;
  summary: string;
  surface: string;
  stack: string[];
  state: State;
  year: string;
  /** Percent of the work drawn, and percent of it shipped by the same hands.
      Optional: a concept that was never meant to ship omits it rather than
      posting a 0 that reads as a failure next to the projects that did ship. */
  delta?: { designed: number; implemented: number };
  /** The single number the Overview band leads with. */
  metric: { value: string; label: string };
  /** The one image the Overview band shows. Imported, so it renders at its
      own ratio instead of being letterboxed into a fixed box. */
  plate?: { img: StaticImageData; alt: string };
  /** Where the case study lives, when one is written. */
  href?: string;
};

/** A state is "live" if the thing is currently in the world doing its job. */
export const isLive = (state: State) =>
  state === "SHIPPED" || state === "IN SERVICE";

/* ---------------------------------------------------------------------------
   The measured outcomes of the XIPHIAS rebuild. Single source: the case study
   renders all four, the home hero leads with the load-time one, and the
   register entry below leads with the traffic one. Change a number here and
   every page that quotes it changes with it.
--------------------------------------------------------------------------- */
export const XIPHIAS_IMPACT: { value: string; label: string }[] = [
  { value: "~30%", label: "organic traffic growth · 90 days, GA4" },
  { value: "60%", label: "lead-form completion · mobile flow, 3× the old form" },
  {
    /* Matches the Lighthouse card in the case study exactly. The desktop run
       measured 1.9s; the throttled mobile run measured 5.6s and is stated
       there too. No blanket "under 2s" anywhere. */
    value: "5–8s → 1.9s",
    label: "largest contentful paint, desktop · Lighthouse",
  },
  { value: "4", label: "intent pillars, over 50+ countries and 150+ programmes" },
];

/** The load-time result, quoted by the home hero as its opening proof. */
export const LOAD_TIME = XIPHIAS_IMPACT[2].value;

export const entries: Entry[] = [
  {
    index: "001",
    subject: "XIPHIAS Immigration",
    line:
      "Our own website was 17 years old. I thought the problem was that it was slow. Five conversations proved it was the structure.",
    summary:
      "I work there. Our website was 17 years old, static, and hundreds of hand-built pages deep — and I already knew why: it was slow. Five conversations with the MD, SEO, content, sales and clients told me speed was the fifth problem, not the first. Rebuilt around four intent pillars on Next.js and MDX, designed and coded solo in three months.",
    surface: "Web platform",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    state: "SHIPPED",
    /* TODO: confirm — this year is the one field here I could not source. */
    year: "2025",
    delta: { designed: 100, implemented: 100 },
    metric: XIPHIAS_IMPACT[0],
    plate: {
      img: xiphiasPlate,
      alt: "The XIPHIAS homepage, with the Guided Route Finder and the report preview.",
    },
    href: "/work/xiphias-immigration",
  },
  {
    index: "002",
    subject: "Harmony Luxe Bill Book",
    line:
      "A spa billing on a paper duplicate book and a Google Sheet, with a \u20b91,180 gap at close that nobody chased.",
    summary:
      "A billing tool for a Bengaluru spa running on a paper duplicate book and a Google Sheet, with a \u20b91,180 gap at close nobody could explain. Researched on the floor over two days, taken through the full design-thinking arc, built and tested on the spa's own hardware \u2014 bill time fell from 2m40s to 38s and tax errors to zero.",
    surface: "Web app",
    stack: ["Next.js", "TypeScript", "Google Sheets"],
    state: "IN SERVICE",
    year: "2026",
    delta: { designed: 100, implemented: 100 },
    metric: { value: "2m40s \u2192 38s", label: "time to bill a two-service visit" },
    plate: {
      img: harmonyPlate,
      alt: "The Harmony Luxe dashboard — revenue, expenses, profit and recent invoices at a glance.",
    },
    href: "/work/harmony-luxe",
  },
  {
    index: "003",
    subject: "ReturnEasy",
    line:
      "A returns app that answers to the shopper, not the retailer \u2014 because no shopping app will ever remind you a return is due.",
    summary:
      "A self-directed mobile concept for online returns — deadlines, instructions and refund status in one flow. Designed end to end and built as a testable hypothesis: the product is drawn, the five-interview research plan is written, and the case study is honest that the research has not been run yet.",
    surface: "Mobile app",
    stack: ["Figma"],
    state: "CONCEPT",
    year: "2026",
    /* No delta: it was never meant to ship, so an implemented number would
       measure it on the wrong axis. It is a design-thinking piece. */
    metric: { value: "13", label: "assumptions mapped before a line was designed" },
    plate: {
      img: returneasyPlate,
      alt: "The eight final ReturnEasy screens — home, find order, reason, method, review, QR, refund tracker.",
    },
    href: "/work/returneasy",
  },
  
];
