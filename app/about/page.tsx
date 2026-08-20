import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { CONTACT_EMAIL } from "@/data/nav";
import { PROFILE, TRACK, TOOLS, ALSO, ELSEWHERE } from "@/data/profile";
import portrait from "@/public/images/dhanush.jpeg";

/* ---------------------------------------------------------------------------
   ABOUT — sheet 05

   The sheet where a reader decides whether to believe the other three. So it
   is built out of things they can check rather than things they have to take
   on trust: a dated record with live URLs on it, the tools split into the two
   halves of the claim this site makes, and a résumé they can take away.

   The prose is short and plainly written on purpose. Nobody arrives at an
   About page wanting a personal essay — they want to know who this is in
   about fifteen seconds and then get back to the work. So it says that, and
   then points at the work.

   The portrait is set as a plate — hairline border, caption underneath, its
   own ratio — exactly like every other figure on the site. A circular avatar
   would need a radius, and the radius scale does not exist here. Treating the
   photograph as one more drawing in the set is the honest resolution.

   No mulberry on this sheet. Nothing here is a live status, a position or a
   focus state, so nothing here earns it.
--------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "About — Dhanush",
  description:
    "Product and interface designer in Bangalore, four years in. The dated record, the tools, the résumé, and the fastest way to get in touch.",
};

export default function AboutPage() {
  return (
    <>
      <section
        data-section="About"
        aria-labelledby="page-heading"
        className="mx-auto max-w-[1180px] px-5 pt-14 md:px-10 md:pt-20"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
          <h1 id="page-heading" className="label text-ink">
            About
          </h1>
          <span className="label">{PROFILE.basedIn}</span>
        </div>

        <p className="font-display mt-8 max-w-[24ch] text-[clamp(1.55rem,3.4vw,2.5rem)] font-light leading-[1.14] tracking-[-0.015em] text-ink">
          I&apos;m Dhanush. I design products, and I build them.
        </p>

        <div className="mt-8 grid gap-x-10 gap-y-10 md:grid-cols-[1fr_18rem]">
          <div>
            <p className="prose-body">
              Four years, in Bangalore, and most of it on my own. On nearly
              every project I&apos;ve been the one doing the research, the
              design and the front-end. That taught me one useful thing: when
              you have to build what you drew, you stop drawing things that
              don&apos;t work.
            </p>
            <p className="prose-body mt-4">
              I started with small websites. Then storefronts. Then a full
              platform rebuild for the company I work at. The most recent one
              is a billing tool I researched standing behind a spa counter,
              then built on the same computer it had to run on. Different
              projects, same habit — I don&apos;t stop until someone who
              isn&apos;t me is actually using it.
            </p>
            <p className="prose-body mt-4">
              If you want to know how I work, that&apos;s on the process page.
              If you want proof, it&apos;s on the work page. Both are faster
              than reading more about me here.
            </p>
          </div>

          <figure>
            <Image
              src={portrait}
              alt="Dhanush."
              sizes="(max-width: 768px) 100vw, 288px"
              placeholder="blur"
              className="h-auto w-full border border-hairline"
            />
            <figcaption className="label mt-3 leading-[1.6]">
              Dhanush N &middot; Bangalore
            </figcaption>
          </figure>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-raised px-4 py-4">
            <dt className="label">Email</dt>
            <dd className="mt-1.5">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="data link inline-flex items-center gap-2 text-ink"
              >
                {CONTACT_EMAIL}
                <Icon name="external" className="h-3 w-3 shrink-0" />
                <span className="sr-only">(opens your email app)</span>
              </a>
            </dd>
          </div>
          <div className="bg-raised px-4 py-4">
            <dt className="label">Based in</dt>
            <dd className="data mt-1.5 text-ink">{PROFILE.basedIn}</dd>
          </div>
          <div className="bg-raised px-4 py-4">
            <dt className="label">Experience</dt>
            <dd className="data mt-1.5 text-ink">
              {PROFILE.experience} &middot; product &amp; UI
            </dd>
          </div>
          <div className="bg-raised px-4 py-4">
            <dt className="label">Works in</dt>
            <dd className="data mt-1.5 text-ink">{PROFILE.codesIn}</dd>
          </div>
        </dl>
      </section>

      {/* ---- The record ---------------------------------------------------- */}
      <section
        data-section="The record"
        aria-labelledby="track-heading"
        className="mt-16 border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
            <h2 id="track-heading" className="label text-ink">
              The record
            </h2>
            <span className="label">
              {TRACK.length} entries &middot; 2023 to now
            </span>
          </div>

          <p className="prose-body mt-6">
            Everything I&apos;ve shipped, with dates. Three of them have a case
            study written. The rest are here anyway, because leaving them off
            would make four years look like one. Where a site is live, the link
            goes to it — opening one is quicker than reading about it.
          </p>

          <table className="mt-10 w-full border-collapse text-left">
            <caption className="sr-only">
              Projects by year, with the live site and case study where each
              exists.
            </caption>
            <thead>
              <tr className="border-b border-ink">
                <th scope="col" className="label py-3 pr-4 font-normal">
                  Year
                </th>
                <th scope="col" className="label py-3 pr-4 font-normal">
                  Project
                </th>
                <th
                  scope="col"
                  className="label hidden py-3 pr-4 font-normal md:table-cell"
                >
                  What it was
                </th>
                <th scope="col" className="label py-3 font-normal">
                  Go to
                </th>
              </tr>
            </thead>
            <tbody>
              {TRACK.map((entry) => (
                <tr
                  key={`${entry.year}-${entry.subject}`}
                  className="border-b border-hairline align-top"
                >
                  <td className="data py-5 pr-4 text-muted">{entry.year}</td>
                  <td className="py-5 pr-4">
                    <span className="block text-[15px] leading-[1.4] text-ink">
                      {entry.subject}
                    </span>
                    <span className="prose-body mt-1 block text-[13px] md:hidden">
                      {entry.what}
                    </span>
                  </td>
                  <td className="prose-body hidden py-5 pr-4 text-[14px] md:table-cell">
                    {entry.what}
                  </td>
                  <td className="py-5">
                    <span className="flex flex-col gap-1.5">
                      {entry.study && (
                        <Link
                          href={entry.study}
                          className="data link text-ink"
                        >
                          Case study
                        </Link>
                      )}
                      {entry.href && (
                        <a
                          href={entry.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="data link inline-flex items-center gap-2 text-muted"
                        >
                          Live
                          <Icon name="external" className="h-3 w-3 shrink-0" />
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      )}
                      {!entry.study && !entry.href && (
                        <span className="data text-muted">&mdash;</span>
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Tools --------------------------------------------------------- */}
      <section
        data-section="Tools"
        aria-labelledby="tools-heading"
        className="border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
            <h2 id="tools-heading" className="label text-ink">
              What I do
            </h2>
            <span className="label">Research, design, testing</span>
          </div>

          <dl className="mt-8 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-3">
            {TOOLS.map((tool) => (
              <div key={tool.group} className="bg-raised px-5 py-5">
                <dt className="label text-ink">{tool.group}</dt>
                <dd className="mt-3 text-[14px] leading-[1.65] text-ink">
                  {tool.items}
                </dd>
              </div>
            ))}
          </dl>

          {/* Deliberately quieter than the three above: no box, muted, one
              line. It is true and it is useful on a small team — it is just
              not the thing someone hiring a product designer is reading for,
              and giving it equal weight starts arguing for a different job. */}
          <div className="mt-8 grid gap-x-8 gap-y-2 border-t border-hairline pt-6 md:grid-cols-[9rem_1fr]">
            <span className="label md:pt-0.5">Also work with</span>
            <p className="prose-body text-[14px]">{ALSO}</p>
          </div>

          <p className="prose-body mt-8">
            The three boxes are the job. The line under them is why a layout
            that breaks on a real phone gets fixed in five minutes instead of
            becoming a ticket for someone else.
          </p>
        </div>
      </section>

      {/* ---- Elsewhere ----------------------------------------------------- */}
      <section
        data-section="Elsewhere"
        aria-labelledby="elsewhere-heading"
        className="border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10">
          <h2 id="elsewhere-heading" className="label text-ink">
            Elsewhere
          </h2>

          <ul className="mt-6 max-w-[46rem]">
            {ELSEWHERE.map((link) => (
              <li
                key={link.label}
                className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-hairline py-4"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-flex min-h-11 items-center gap-2 text-[15px] text-ink"
                >
                  {link.label}
                  <Icon name="external" className="h-3.5 w-3.5 shrink-0" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <span className="label">{link.note}</span>
              </li>
            ))}
          </ul>

          <p className="font-display mt-12 max-w-[30ch] text-[clamp(1.35rem,2.6vw,1.95rem)] font-light leading-[1.2] tracking-[-0.015em] text-ink">
            If you&apos;re hiring, open one case study and one live site.
            That&apos;ll tell you more than this page will.
          </p>

          <p className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href="/work"
              className="data link inline-flex min-h-11 items-center text-ink"
            >
              See the work &rarr;
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="data link inline-flex min-h-11 items-center text-muted"
            >
              Or email me &rarr;
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
