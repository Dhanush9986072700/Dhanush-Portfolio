"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { emphasise } from "@/lib/emphasise";

/* ---------------------------------------------------------------------------
   HOW I WORK

   Four claims, and under each one the specific thing that proves it — named
   project, named moment, link to go and check.

   The previous version of this section was four statements about method with
   nothing attached: "a design system isn't real to me until it runs", that
   sort of thing. All true, all unfalsifiable, and indistinguishable from what
   any designer would write about themselves. One of the four was about this
   site's own colour rule, which is a conversation for people who already
   care.

   A claim a reader cannot check is worth roughly nothing. So each point now
   cites a project. The italics mark the one word each claim turns on;
   asterisks in the copy below do that.
--------------------------------------------------------------------------- */

const POINTS = [
  {
    n: "01",
    claim: "I talk to people before I open *Figma*.",
    gloss:
      "At XIPHIAS I already had a diagnosis — the site was slow — and I was right. I spent the first stage talking to the MD, the SEO team, content, sales and walk-in clients instead of designing. Four of those five told me something I did not know, and the real problem turned out to be the structure, not the speed.",
    proof: { label: "XIPHIAS Immigration", href: "/work/xiphias-immigration" },
  },
  {
    n: "02",
    claim: "I don't hand it off. I *build* it.",
    gloss:
      "Both projects here that shipped were designed and coded by the same person. That is what the Des/Imp column in the register measures, project by project, rather than leaving it as a sentence about myself.",
    proof: { label: "The register", href: "/work" },
  },
  {
    n: "03",
    claim: "My first plan is usually *wrong*, and I would rather find out early.",
    gloss:
      "At Harmony Luxe I walked in blaming the Google Sheet. Two days behind the counter on a full Saturday proved me wrong — the sale was being recorded twice, once for the customer and once for the owner, and everything that hurt followed from that one gap.",
    proof: { label: "Harmony Luxe Bill Book", href: "/work/harmony-luxe" },
  },
  {
    n: "04",
    claim: "I write down what *isn't* finished.",
    gloss:
      "Every case study here ends with what is still wrong with it. XIPHIAS is slower on a phone than I want it to be. ReturnEasy is a concept whose research is thin, and the page says so rather than dressing it up. You will hear those from me before you find them yourself.",
    proof: { label: "How I actually work", href: "/process" },
  },
];

export default function Thesis() {
  const reduce = useReducedMotion();

  const rise = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section
      data-section="How I work"
      aria-labelledby="how-i-work-heading"
      className="border-t border-ink"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
          <h2 id="how-i-work-heading" className="label text-ink">
            How I work
          </h2>
          <span className="label">Each one with the project that proves it</span>
        </div>

        <ol className="mt-2">
          {POINTS.map((point, i) => (
            <motion.li
              key={point.n}
              {...rise}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : 0.06 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid gap-x-8 border-b border-hairline py-8 md:grid-cols-[4rem_1fr] md:py-10"
            >
              <span className="data mb-3 text-muted md:mb-0 md:pt-[0.7rem]">
                {point.n}
              </span>

              <div>
                <p className="font-display text-[clamp(1.45rem,3.1vw,2.3rem)] font-light leading-[1.14] tracking-[-0.015em] text-ink">
                  {emphasise(point.claim)}
                </p>
                <p className="prose-body mt-4">{point.gloss}</p>
                <p className="mt-4">
                  <Link
                    href={point.proof.href}
                    className="data link inline-flex min-h-11 items-center text-ink"
                  >
                    {point.proof.label} &rarr;
                  </Link>
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
