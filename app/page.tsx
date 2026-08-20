import Link from "next/link";
import Hero from "@/components/Hero";
import Thesis from "@/components/Thesis";
import WorkList from "@/components/WorkList";
import { entries } from "@/data/projects";

/* Order matters here: who I am, then the work, then how I think about it.
   The work sits second because it is the thing someone came for, and because
   "how I work" reads as a claim before you have seen anything and as an
   explanation after. */
export default function Home() {
  return (
    <>
      <Hero />

      <section
        id="selected-work"
        data-section="Selected work"
        aria-labelledby="selected-work-heading"
        className="scroll-mt-4 border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-hairline pb-4">
            <h2 id="selected-work-heading" className="label text-ink">
              Selected work
            </h2>
            <p className="label">
              {entries.length} projects &middot; two shipped, one concept
            </p>
          </div>

          <div className="mt-6">
            <WorkList entries={entries} />
          </div>

          <p className="mt-4 border-t border-hairline pt-8">
            <Link href="/work" className="data link text-ink">
              The full register, with the handoff delta on every entry &rarr;
            </Link>
          </p>
        </div>
      </section>

      <Thesis />
    </>
  );
}
