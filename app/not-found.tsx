import Link from "next/link";
import { NAV } from "@/data/nav";

/* A 404 is a wayfinding failure, and this site's whole job is wayfinding. So
   it does the one useful thing — names what happened and lists every sheet
   that does exist — rather than being clever about it. */
export default function NotFound() {
  return (
    <section
      data-section="Not found"
      aria-labelledby="page-heading"
      className="mx-auto max-w-[1180px] px-5 pb-24 pt-14 md:px-10 md:pt-20"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
        <h1 id="page-heading" className="label text-ink">
          404
        </h1>
        <span className="label">No sheet at this address</span>
      </div>

      <p className="font-display mt-8 max-w-[24ch] text-[clamp(1.55rem,3.4vw,2.5rem)] font-light leading-[1.14] tracking-[-0.015em] text-ink">
        There is nothing drawn here.
      </p>

      <p className="prose-body mt-4">
        The page you asked for does not exist — either it never did, or it
        moved. The whole drawing set is four sheets, and they are all listed
        below.
      </p>

      <ul className="mt-10 max-w-[46rem] border-t border-hairline">
        {NAV.map((item) => (
          <li key={item.href} className="border-b border-hairline">
            <Link
              href={item.href}
              className="flex min-h-14 items-baseline gap-6 py-4"
            >
              <span className="data text-muted">{item.number}</span>
              <span className="link text-[15px] text-ink">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10">
        <Link href="/" className="data link text-ink">
          Back to the start &rarr;
        </Link>
      </p>
    </section>
  );
}
