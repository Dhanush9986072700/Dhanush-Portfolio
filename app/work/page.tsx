import type { Metadata } from "next";
import Link from "next/link";
import WorkList from "@/components/WorkList";
import SelectedProjects from "@/components/SelectedProjects";
import { entries } from "@/data/projects";
import { SELECTED } from "@/data/selected";

export const metadata: Metadata = {
  title: "Work — Dhanush",
  description:
    "Three projects written up in full, and everything else that shipped. What each one was, what happened to it, and how much of it was built by the person who designed it.",
};

/* ---------------------------------------------------------------------------
   WORK

   Two lists, weighted differently on purpose.

   The case studies get the same treatment as the home page — a screenshot,
   the one-line version, the number that mattered, a way in. This page used to
   show them as a dense six-column table with no images at all, which asked a
   reader to decode abbreviations before seeing a single piece of work. On a
   designer's portfolio that is the wrong way round.

   Below them, everything else that shipped: smaller, two up, no case study
   and no pretence of one.

   The page opens on the first project. It used to carry a sheet number, a
   project count, a headline, a paragraph of preamble and a four-tile summary
   before anyone saw a single piece of work. All of it is gone: the work is
   the argument, and it can start making it immediately.
--------------------------------------------------------------------------- */

export default function WorkPage() {
  return (
    <section
      data-section="Work"
      aria-labelledby="page-heading"
      className="mx-auto max-w-[1180px] px-5 pb-20 pt-14 md:px-10 md:pt-20"
    >
      {/* The page opens on the work itself. No sheet number, no headline,
          no preamble, no summary tiles — every one of those was a thing
          standing between a reader and the first project. The heading below
          is present for the document outline and for screen readers, and
          drawn nowhere. */}
      <h1 id="page-heading" className="sr-only">
        Work
      </h1>

      <WorkList entries={entries} showDelta />

      {/* ---- Everything else --------------------------------------------- */}
      <div className="mt-20 border-t border-ink pt-10">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
          <h2 className="label text-ink">Other projects I worked on</h2>
          <span className="label">{SELECTED.length} projects</span>
        </div>

        <div className="mt-10">
          <SelectedProjects />
        </div>
      </div>

      <div className="mt-20 border-t border-hairline pt-8">
        <p className="label">How I got to any of this</p>
        <p className="mt-3">
          <Link href="/process" className="data link text-ink">
            Read the process &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
}
