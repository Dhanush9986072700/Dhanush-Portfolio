import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";

import empathize from "@/public/images/harmony-luxe/empathize.png";
import define from "@/public/images/harmony-luxe/define.png";
import ideate from "@/public/images/harmony-luxe/ideate.png";
import components from "@/public/images/harmony-luxe/components.png";
import wireframes from "@/public/images/harmony-luxe/wireframes.png";
import screens from "@/public/images/harmony-luxe/screens.png";
import testing from "@/public/images/harmony-luxe/testing.png";

/* ---------------------------------------------------------------------------
   HARMONY LUXE BILL BOOK — case study

   A real billing tool for a Bengaluru spa, taken through the full design-
   thinking arc and built. Written first-person and plain, and honest in the
   same way the Figma file is: it names where the research is thin (Ravi quit
   before I could interview him; only one customer) rather than hiding it.

   This one shipped and was measured, so it carries a real impact band and a
   before/after results table — unlike the two concepts, which do not.

   Same buff-and-ink system as the rest of the site. Mulberry marks the live
   results and nothing else.
--------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Harmony Luxe Bill Book — Dhanush",
  description:
    "A billing tool for a Bengaluru spa running on a Google Sheet and a paper book. Taken through empathize, define, ideate, prototype and test, then built. Bill time fell from 2m40s to 38s and tax errors to zero.",
};

/* The measured outcomes, taken on the spa's own hardware in Round 2. These are
   the strongest numbers in the portfolio, so the band leads with them. */
const IMPACT: { value: string; label: string }[] = [
  { value: "2m40s \u2192 38s", label: "time to bill a two-service visit \u00b7 counter PC" },
  { value: "3/20 \u2192 0/20", label: "bills with a tax error \u00b7 structurally prevented" },
  { value: "4 \u2192 0", label: "duplicate or missing bill numbers per month" },
  { value: "~6h \u2192 1h10", label: "accountant's month-end cleanup" },
];

const META: [string, string][] = [
  ["Role", "Product designer + front-end developer"],
  ["Timeline", "~6 weeks \u00b7 research to tested build"],
  ["Team", "Solo, with the spa's four staff throughout"],
  ["Built with", "Figma \u00b7 Next.js \u00b7 TypeScript \u00b7 Google Sheets"],
];

/* What was actually wrong, from two days on the floor. Straight from the field
   notes \u2014 not tidied into a problem statement yet. */
const BROKEN: string[] = [
  "A paper duplicate book and a Google Sheet, running in parallel for the same sale",
  "The Sheet was \u201cfor madam\u201d \u2014 staff treated it as homework, filled hours later",
  "Prices typed from memory; a new hire taped her own list under the counter",
  "At the 18:00 rush the system was abandoned for Post-its, some unreadable by morning",
  "GST worked out by halving the total by hand \u2014 nobody ever checked a tax figure",
  "\u20b91,180 gap between book and Sheet at close, unchased \u2014 \u201cit usually sorts itself out\u201d",
];

/* The three lines that actually moved my thinking. Their words. */
const VOICES: string[] = [
  "I opened a spa, no? Not an accounting firm",
  "The CA told me CGST, SGST. So I am dividing by two and putting. Is it correct?",
  "First month I was so scared. Nobody told me the prices. I made my own list",
];

type Figure = {
  caption: string;
  img?: StaticImageData;
  alt?: string;
  aspect?: string;
};

type Stage = {
  n: string;
  rail: string;
  headline: string;
  body: string;
  tradeoff: string;
  figures: Figure[];
};

const STAGES: Stage[] = [
  {
    n: "01",
    rail: "Empathize",
    headline: "I went in blaming the Google Sheet. Two days on the floor proved me wrong.",
    body: "Two site visits and six interviews over eleven days \u2014 and I have written down where the research is weak rather than hiding it: I only got two of three cashiers, because Ravi quit before I could interview him, and he was the one staff blamed for bill errors. Sitting behind the counter on a full Saturday is what changed my mind. The Sheet is fine. The problem is the paper book running in parallel with it \u2014 two systems recording the same sale, at different times, by different people. I counted 43 bills, a queue that peaked at four, seven bills written on Post-its during the rush, and a \u20b91,180 gap at close that nobody chased. That gap is the whole project.",
    tradeoff:
      "Coming in with a theory (\u201cthe Sheet is the problem\u201d) nearly cost me the real finding. The weekday visit \u2014 calm, no queue \u2014 is what exposed that the breakage is a weekend, two-systems problem, not a software one.",
    figures: [
      {
        caption:
          "The Empathize board: the research log with its honest gaps, the Saturday field notes, verbatim quotes with what each one changed, the affinity wall, three evidence-weighted personas, and the open questions.",
        img: empathize,
        alt: "The Harmony Luxe Empathize stage \u2014 fieldwork, quotes, personas, empathy map.",
      },
    ],
  },
  {
    n: "02",
    rail: "Define",
    headline: "One long afternoon turning thirty sticky notes into one decidable sentence.",
    body: "Four attempts at a problem statement, read aloud to a cashier each time until one survived without a wince. The winner names the mechanism, not the symptom: the record of a sale is created twice \u2014 once for the customer, once for the owner \u2014 at different times by different people, and everything that hurts follows from that gap. The scope table has a name against every line, because \u201cout of scope\u201d with nobody's name attached creeps back in. The hardest call was expenses: Meera wanted it out \u2014 \u201cthat is bookkeeping, not billing\u201d. I didn't argue. I asked her to write down last month's profit. She wrote \u20b992,000; the Sheet said roughly \u20b961,000, and she trusted neither. She put expenses back herself.",
    tradeoff:
      "Five success metrics were agreed out loud, but Meera refused to set a profit target \u2014 correctly, since she had never seen the real number. I'd rather show a blank target than invent one.",
    figures: [
      {
        caption:
          "The Define stage: the synthesis session log, the affinity wall with the two clusters we got wrong first, four problem-statement attempts, the HMW votes, the journey map, the agreed metrics, and the scope table with a name on every line.",
        img: define,
        alt: "The Harmony Luxe Define stage \u2014 affinity, framing, journey, metrics, scope.",
      },
    ],
  },
  {
    n: "03",
    rail: "Ideate",
    headline: "The best three ideas for the item picker came from the staff, not me.",
    body: "Structure and flows I did alone \u2014 flow work is bookkeeping with arrows and needs one person holding the whole model. But the interaction that happens more than everything else combined \u2014 adding a service to a bill \u2014 I ran as Crazy 8s with the two cashiers. Two of the three winners were theirs: Anil's recent-and-favourites row (\u201csame ten things all day\u201d) and Divya's tile grid, which became the whole mobile layout. I would not have got to either \u2014 I don't bill on a phone. The navigation hides actions a role can't use rather than greying them out, a decision Ravi quitting made concrete: a disabled button advertises a capability and invites a request; an absent one doesn't.",
    tradeoff:
      "Nothing in the top-left \u201cdo first\u201d quadrant of the priority grid was my idea alone. That is the argument for doing this in a room with the people who do the work, not the exception to it.",
    figures: [
      {
        caption:
          "The Ideate stage: the flat sitemap cut three ways by role, six click-through flows with every guard rail drawn, the eight-panel Crazy 8s with sketches attributed, and the impact/effort grid Meera moved by hand.",
        img: ideate,
        alt: "The Harmony Luxe Ideate stage \u2014 sitemap, flows, Crazy 8s, prioritisation.",
      },
    ],
  },
  {
    n: "04",
    rail: "The system",
    headline: "A real component library, so forty-five screens couldn't drift apart.",
    body: "Every component binds its fills, strokes and radii to theme variables, so switching a frame to dark mode restyles it with no manual work. Buttons carry all four variants across every state; inputs include the error case; the invoice row nests the status badge; the KPI tile handles up, down and flat. Text and icons are exposed as properties, so nothing has to be detached to be reused. This is the layer that let the billing screen, the dashboard and forty-odd other screens stay in agreement instead of drifting the moment each was built by hand.",
    tradeoff:
      "A library is upfront cost for consistency later. On a solo project it is tempting to skip \u2014 but it is exactly what makes a one-person build stay coherent across this many screens.",
    figures: [
      {
        caption:
          "The component library \u2014 icons, avatars, status badges, buttons, inputs, toggles, chips, nav items, KPI tiles, alerts and invoice rows, all token-bound and working in both light and dark themes.",
        img: components,
        alt: "The Harmony Luxe component library with variants and theme tokens.",
      },
    ],
  },
  {
    n: "05",
    rail: "Prototype",
    headline: "Greyscale wireframes first, so layout arguments happened before colour could hide them.",
    body: "The same three core flows \u2014 billing, invoice reprint, month-end export \u2014 drawn first at wireframe fidelity, no brand and no real copy, answering only three questions: what goes where, what is primary, and how does the layout survive a phone. Then the hi-fi screens on top of the component library. The billing screen makes the running total and the tax split the loudest thing, and keeps Finalize as a single primary action. The invoice carries a one-way print lock: once printed, amending means issuing a new document, because staff amending a printed bill so the customer copy no longer matched was a failure I watched happen.",
    tradeoff:
      "Drawing everything twice (lo-fi then hi-fi) is slower than jumping to colour. It is also how the layout mistakes got caught while they were still cheap to fix.",
    figures: [
      {
        caption:
          "Lo-fi wireframes for the three core flows \u2014 greyscale, click-through, sized to survive a 1366\u00d7768 counter PC and a phone.",
        img: wireframes,
        alt: "The Harmony Luxe lo-fi wireframes.",
      },
      {
        caption:
          "The hi-fi screens built on the component library: billing with a live total and self-validating split, the invoice with its print lock, the dashboard, and the month-end export.",
        img: screens,
        alt: "The Harmony Luxe hi-fi screens.",
      },
    ],
  },
  {
    n: "06",
    rail: "Test",
    headline: "Seven people, two rounds, on the spa's own hardware during real trading hours.",
    body: "Round 1 on the prototype, Round 2 on the working build after the fixes landed \u2014 tasks phrased as situations, never instructions, no interface tour first. Nine issues, each rated by severity, every severity-1 and -2 fixed between rounds. The one that stopped a task dead: split payment failed silently when the two amounts didn't add up \u2014 Finalize looked available, did nothing, and two cashiers asked if the system had crashed. The fix wasn't a feature; it was making an existing rule visible \u2014 a live rupee shortfall under the split fields, and Finalize visibly disabled with the reason beside it. In Round 2 nobody pressed a dead button. I also audited both themes against WCAG 2.2 AA, and left one item (an unlabelled dark-mode toggle) honestly open.",
    tradeoff:
      "The accountant's cleanup came in at 1h10 against a sub-1-hour target \u2014 close, but only measured over one round, so I've marked it that way rather than claiming the win.",
    figures: [
      {
        caption:
          "The Testing stage: the participant table, six task scenarios with medians, nine severity-rated findings with their fixes, the split-payment before/after, the WCAG audit, and the results measured against the Stage 02 targets.",
        img: testing,
        alt: "The Harmony Luxe Testing stage \u2014 plan, findings, iteration, results.",
      },
    ],
  },
];

const REFLECTION: [string, string][] = [
  [
    "What isn't finished",
    "Offline entry, package presets and multi-branch are all deliberately parked, each for a stated reason \u2014 the counter wifi held all Saturday, Meera hasn't priced packages, and there is no second branch yet. I'd rather leave them visibly unresolved than pretend a v1 covers everything.",
  ],
  [
    "What I'd do differently",
    "Interview the cashier who quit. Ravi was the person staff blamed for bill errors, and his perspective is the biggest hole in the research. I built the role-based navigation partly to design around a failure mode I never actually got to observe.",
  ],
  [
    "What it taught me",
    "Two of the three best ideas came from the people at the counter, not from me sketching alone. And coming in with a theory \u2014 \u201cthe Sheet is the problem\u201d \u2014 nearly buried the real finding. The floor corrected me; the whiteboard would not have.",
  ],
];

function Plate({ caption, img, alt, aspect = "aspect-[16/9]" }: Figure) {
  return (
    <figure className="mt-8">
      {img ? (
        <Image
          src={img}
          alt={alt ?? caption}
          sizes="(max-width: 768px) 100vw, 1100px"
          className="h-auto w-full border border-hairline"
        />
      ) : (
        <div
          className={`flex ${aspect} w-full items-center justify-center border border-hairline bg-raised`}
        >
          <p className="label">Figma frame to come</p>
        </div>
      )}
      <figcaption className="label mt-3 max-w-[60ch] leading-[1.6]">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function HarmonyLuxeCaseStudy() {
  return (
    <>
      <section
        data-section="Summary"
        aria-labelledby="case-heading"
        className="mx-auto max-w-[1180px] px-5 pb-14 pt-10 md:px-10 md:pt-14"
      >
        <p>
          <Link
            href="/work"
            className="data link inline-flex min-h-11 items-center text-muted"
          >
            &larr; Work
          </Link>
        </p>

        <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
          <span className="label text-ink">Case study</span>
          <span className="label">Harmony Luxe Bill Book</span>
        </div>

        <h1
          id="case-heading"
          className="font-display mt-8 max-w-[24ch] text-[clamp(1.75rem,4vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink"
        >
          A spa billing on a paper book and a Google Sheet &mdash; and a
          ₹1,180 gap nobody could explain.
        </h1>

        <p className="prose-body mt-5 max-w-[52ch] text-[clamp(0.95rem,1.4vw,1.125rem)]">
          A real billing tool for a Bengaluru spa, taken through the full
          design-thinking process and built. Researched on the floor, tested on
          the counter, measured against the numbers we agreed up front.
        </p>

        <dl className="mt-9 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2">
          {IMPACT.map((item) => (
            <div key={item.label} className="bg-raised px-5 py-6">
              <dt className="font-display text-[clamp(1.4rem,2.6vw,2.1rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink [font-variant-numeric:tabular-nums]">
                {item.value}
              </dt>
              <dd className="data mt-3 text-accent">{item.label}</dd>
            </div>
          ))}
        </dl>

        <dl className="mt-8 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {META.map(([term, value]) => (
            <div key={term} className="bg-paper px-4 py-4">
              <dt className="label">{term}</dt>
              <dd className="mt-1.5 text-[13px] leading-[1.5] text-ink">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        data-section="What was wrong"
        aria-labelledby="broken-heading"
        className="border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
            <h2 id="broken-heading" className="label text-ink">
              What two days on the floor showed
            </h2>
            <span className="label">Owner &middot; two cashiers &middot; accountant &middot; one customer</span>
          </div>

          <ul className="mt-2">
            {BROKEN.map((item) => (
              <li
                key={item}
                className="border-b border-hairline py-4 text-[clamp(0.95rem,1.6vw,1.125rem)] leading-[1.5] text-ink"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-hairline pt-8">
            <p className="label">What they actually said</p>
            <ul className="mt-4 max-w-[46rem]">
              {VOICES.map((quote) => (
                <li
                  key={quote}
                  className="font-display border-b border-hairline py-4 text-[clamp(1.1rem,2vw,1.45rem)] font-light leading-[1.3] text-ink"
                >
                  &ldquo;{quote}&rdquo;
                </li>
              ))}
            </ul>
          </div>

          <p className="font-display mt-10 max-w-[38ch] text-[clamp(1.25rem,2.4vw,1.75rem)] font-light leading-[1.2] tracking-[-0.01em] text-ink">
            The record of a sale is created twice &mdash; once for the customer,
            once for the owner &mdash; at different times, by different people.
            Everything that hurts follows from that gap.
          </p>
          <p className="label mt-3">
            The problem statement that survived being read aloud. Every cluster fit inside it
          </p>
        </div>
      </section>

      {STAGES.map((stage) => (
        <section
          key={stage.n}
          id={`s-${stage.n}`}
          data-section={stage.rail}
          aria-labelledby={`stage-${stage.n}`}
          className="scroll-mt-8 border-t border-ink"
        >
          <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
              <span className="label text-ink">Stage {stage.n}</span>
              <span className="label">{stage.rail}</span>
            </div>

            <h2
              id={`stage-${stage.n}`}
              className="font-display mt-8 max-w-[24ch] text-[clamp(1.5rem,3.2vw,2.35rem)] font-light leading-[1.14] tracking-[-0.015em] text-ink"
            >
              {stage.headline}
            </h2>

            <p className="prose-body mt-5">{stage.body}</p>

            <p className="mt-6 grid max-w-[46rem] gap-x-8 border-t border-hairline pt-5 md:grid-cols-[7rem_1fr]">
              <span className="label mb-2 md:mb-0 md:pt-1">Trade-off</span>
              <span className="prose-body">{stage.tradeoff}</span>
            </p>

            {stage.figures.map((figure) => (
              <Plate key={figure.caption} {...figure} />
            ))}
          </div>
        </section>
      ))}

      <section
        data-section="Looking back"
        aria-labelledby="reflection-heading"
        className="border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10">
          <h2 id="reflection-heading" className="label text-ink">
            Looking back
          </h2>

          <dl className="mt-8 max-w-[46rem]">
            {REFLECTION.map(([term, body]) => (
              <div
                key={term}
                className="grid gap-x-8 border-t border-hairline py-6 md:grid-cols-[11rem_1fr]"
              >
                <dt className="label mb-2 md:mb-0 md:pt-1">{term}</dt>
                <dd className="prose-body">{body}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 flex flex-wrap gap-x-8">
            <Link
              href="/work"
              className="data link inline-flex min-h-11 items-center text-ink"
            >
              Back to the work &rarr;
            </Link>
            <Link
              href="/process"
              className="data link inline-flex min-h-11 items-center text-muted"
            >
              How I work &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
