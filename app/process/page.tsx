import type { Metadata } from "next";
import Link from "next/link";
import ProcessIndex from "@/components/ProcessIndex";
import { emphasise } from "@/lib/emphasise";

export const metadata: Metadata = {
  title: "Process — Dhanush",
  description:
    "How I actually work: ask until it's clear, sit between the business and the user, use the five stages without following them in order, and decide fast on what's cheap to undo.",
};

/* ---------------------------------------------------------------------------
   HOW I ACTUALLY WORK

   Written as if spoken across a desk, not composed. That is the whole brief
   for this page: a reader should feel explained to, not addressed.

   Two things it deliberately avoids.

   No stage diagram. A five-box framework picture would be the most dishonest
   thing this page could contain, because nobody works in five clean boxes.

   And no uniform paragraphs. An earlier version gave every passage the same
   shape — a claim, then two sentences explaining the claim — which is exactly
   what makes writing read as generated. So the rhythm varies on purpose:
   04 is four fragments, 05 is a decision rule with the cheap and expensive
   cases split apart, 06 is two lines. The headings are spoken sentences
   rather than labels, so the page still says something if a reader only
   scans them.

   Each passage carries a short `data-section`, so the margin rail names what
   is being read. That rail is the only live element here and the only
   mulberry: the prose is ink and muted throughout, with italics doing the
   work of emphasis.

   Nothing animates in. This is long-form reading, and prose that performs on
   arrival is the decoration the page argues against.
--------------------------------------------------------------------------- */

/* `short` is the margin-index label: the same point compressed to something
   readable at annotation size. `rail` is what the left margin rail calls it.
   `body` is an array because these passages are not all one paragraph — the
   varying length is the point. */
const PASSAGES: {
  n: string;
  rail: string;
  short: string;
  title: string;
  body: string[];
}[] = [
  {
    n: "01",
    rail: "Questions",
    short: "Ask until it's clear",
    title: "First I ask questions. A lot of them.",
    body: [
      "I keep asking until I can tell you what this project is in two sentences.",
      "That's my test. If I can't say it back simply, it means I haven't understood it yet, and I'm not opening Figma until I have. Because whatever I assume here, everything else gets built on top of it. Get a button wrong, you fix it in ten minutes. Get *this* wrong, you find out in month three.",
    ],
  },
  {
    n: "02",
    rail: "The bridge",
    short: "Two sides, I'm in the middle",
    title: "Every product has two sides. I sit in the middle.",
    body: [
      "On one side there's a business. It needs something to happen — a sale, a signup, less time getting wasted. On the other side there's a person who just wants to get something done and get on with their day. Those two are almost never asking for the same thing.",
      "My job isn't to keep the user happy while the business loses money. And it isn't to squeeze the user so the numbers look good. It's to find the version where both of them get what they *came for*.",
      "Honestly, that's the whole job. Everything after it is the same question, just smaller.",
    ],
  },
  {
    n: "03",
    rail: "The stages",
    short: "Stages, but not in order",
    title: "So where do the five stages come in?",
    body: [
      "I use all of them. Empathize, define, ideate, prototype, test. Just not in that *order*, and not every time. Some projects give me two days for research. Some give me two hours. That's real work.",
      "Let me give you an example. On the spa billing tool I was already drawing screens when the fieldwork told me I'd blamed the wrong thing completely. So I stopped, threw out the problem statement, and wrote it again. That u-turn ended up being the best part of the project.",
      "If someone tells you their process ran clean from stage one to stage five, that's a case study talking. Not a project.",
    ],
  },
  {
    n: "04",
    rail: "Deadlines",
    short: "There's always a date",
    title: "And there's always a date on it.",
    body: [
      "Standup in the morning. Release on Friday. Someone waiting on you.",
      "That changes how you design, whether you like it or not. So I ship what's needed this sprint, and I keep a list of what I'd do with more time — that way the thing I cut was a *decision*, not something I forgot. Something real in front of people this week beats a perfect file next month. Every time.",
    ],
  },
  {
    n: "05",
    rail: "Deciding",
    short: "Fast or slow, by cost",
    title:
      "The question I get asked most: how do you decide without enough information?",
    body: [
      "Because I usually don't have enough. And there's usually no time to go and get it.",
      "So before I commit to anything, I ask myself one thing — how expensive is it if I'm *wrong* here?",
      "Spacing, copy, one component? Cheap. I decide, I move on, I fix it later if I got it wrong.",
      "Navigation, structure, the data model? Expensive. Those I stop for, even when stopping costs me a day, because that's what everything else gets built on.",
      "Moving fast on the small things is exactly what gives me time to be careful with the big ones.",
    ],
  },
  {
    n: "06",
    rail: "Building",
    short: "I write the code too",
    title: "One more thing — I write the code too, so I find problems early.",
    body: [
      "The layout that breaks on a real phone. The component that looked fine in Figma and feels wrong under your thumb.",
      "I catch those myself and fix them the same evening, instead of writing a ticket and waiting for someone.",
    ],
  },
];

export default function ProcessPage() {
  const indexItems = PASSAGES.map(({ n, short }) => ({
    n,
    short,
    id: `p-${n}`,
  }));

  return (
    <>
      <ProcessIndex items={indexItems} />

      {/* Opening */}
      <section
        data-section="Process"
        aria-labelledby="page-heading"
        className="mx-auto max-w-[1180px] px-5 pb-14 pt-14 md:px-10 md:pt-20"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
          <h1 id="page-heading" className="label text-ink">
            How I actually work
          </h1>
          <span className="label">Not project-specific</span>
        </div>

        <p className="font-display mt-8 max-w-[32ch] text-[clamp(1.55rem,3.4vw,2.5rem)] font-light leading-[1.14] tracking-[-0.015em] text-ink">
          {emphasise(
            "Everyone knows the five stages. I use them. But if I told you I go through them one by one, start to finish, I'd be *lying* — and so is anyone else who says it. So let me tell you what actually happens."
          )}
        </p>
      </section>

      {/* The passages, siblings rather than nested, so the rail names exactly
          one of them at a time. */}
      {PASSAGES.map((passage) => (
        <section
          key={passage.n}
          id={`p-${passage.n}`}
          data-section={passage.rail}
          aria-labelledby={`passage-${passage.n}`}
          className="scroll-mt-8 border-t border-hairline"
        >
          <div className="mx-auto grid max-w-[1180px] gap-x-8 px-5 py-10 md:grid-cols-[4rem_1fr] md:px-10 md:py-14">
            <span className="data mb-3 text-muted md:mb-0 md:pt-[0.55rem]">
              {passage.n}
            </span>

            <div>
              <h2
                id={`passage-${passage.n}`}
                className="font-display max-w-[30ch] text-[clamp(1.25rem,2.4vw,1.75rem)] font-light leading-[1.2] tracking-[-0.01em] text-ink"
              >
                {passage.title}
              </h2>

              {passage.body.map((para, i) => (
                <p key={para} className={i === 0 ? "prose-body mt-4" : "prose-body mt-3.5"}>
                  {emphasise(para)}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Closing */}
      <section
        data-section="In short"
        aria-labelledby="closing-heading"
        className="border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10">
          <h2 id="closing-heading" className="label text-ink">
            So that&apos;s it, honestly
          </h2>

          <p className="font-display mt-6 max-w-[36ch] text-[clamp(1.35rem,2.6vw,1.95rem)] font-light leading-[1.2] tracking-[-0.015em] text-ink">
            Understand it properly before you draw anything. Stay between the
            business and the user. Use the stages, don&apos;t let them run you.
            Be quick on what&apos;s easy to undo, slow on what isn&apos;t. And
            don&apos;t say it&apos;s done until someone&apos;s actually using
            it.
          </p>

          {/* inline-flex + min-h-11 so these are real 44px targets on a phone
              rather than a 17px line of text. */}
          <p className="mt-8 flex flex-wrap gap-x-8">
            <Link
              href="/work"
              className="data link inline-flex min-h-11 items-center text-ink"
            >
              See the work &rarr;
            </Link>
            <Link
              href="/about"
              className="data link inline-flex min-h-11 items-center text-muted"
            >
              Who I am &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
