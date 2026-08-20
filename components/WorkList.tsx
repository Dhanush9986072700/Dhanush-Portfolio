import Link from "next/link";
import Image from "next/image";
import Delta from "@/components/Delta";
import { isLive, type Entry } from "@/data/projects";

/* ---------------------------------------------------------------------------
   WORK LIST — the home page

   Three projects, each one a band: the screenshot, the one-line version, the
   number that mattered, and an obvious way in.

   The home page used to show the same dense table that /work shows, which
   meant a first-time visitor met six columns of abbreviations before a single
   image. On a portfolio for a designer that is the wrong trade: the work is
   what someone came to see, and the screenshot is the way in. The dense
   register still exists, one click away, for anyone who wants it.

   No JavaScript here on purpose. Nothing on this list needs to expand, sort
   or animate — the whole point is that it renders and is immediately
   readable.

   Accent: the live state, which is a statement of current fact. Nothing else.
--------------------------------------------------------------------------- */

export default function WorkList({
  entries,
  showDelta = false,
}: {
  entries: Entry[];
  /** The handoff delta — how much was drawn, how much was shipped by the same
      hands. On by default nowhere: the home page is a first impression and
      does not need a chart in it, while the work page is where someone has
      already decided to look properly. */
  showDelta?: boolean;
}) {
  return (
    <ol>
      {entries.map((entry) => {
        const live = isLive(entry.state);
        const headingId = `work-${entry.index}`;

        return (
          <li
            key={entry.index}
            className="border-t border-hairline first:border-t-0"
          >
            <article aria-labelledby={headingId} className="py-10 md:py-14">
              {/* The strip: index left, state and year right. */}
              <div className="flex items-baseline justify-between border-b border-hairline pb-3">
                <span className="data text-muted">{entry.index}</span>
                <span className="data">
                  <span className={live ? "text-accent" : "text-muted"}>
                    {entry.state}
                  </span>
                  <span className="text-muted"> &middot; {entry.year}</span>
                </span>
              </div>

              <div className="grid gap-8 pt-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
                {/* Left: what it is, and the number worth keeping. */}
                <div className="flex flex-col">
                  <h3
                    id={headingId}
                    className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-light leading-[1.15] tracking-[-0.015em] text-ink"
                  >
                    {entry.subject}
                  </h3>

                  <p className="prose-body mt-4">{entry.line}</p>

                  <div className="mt-7 border-t border-hairline pt-5">
                    <p className="font-display text-[clamp(1.5rem,3vw,2.15rem)] font-light leading-[1] tracking-[-0.02em] text-ink [font-variant-numeric:tabular-nums]">
                      {entry.metric.value}
                    </p>
                    <p className="label mt-2.5 max-w-[34ch] leading-[1.6]">
                      {entry.metric.label}
                    </p>
                  </div>

                  <p className="data mt-6 text-muted">
                    {entry.surface} &middot; {entry.stack.join(" · ")}
                  </p>

                  {showDelta && entry.delta && (
                    <div className="mt-4">
                      <p className="label mb-2">Drawn / shipped by me</p>
                      <Delta
                        designed={entry.delta.designed}
                        implemented={entry.delta.implemented}
                      />
                    </div>
                  )}

                  {/* The action, drawn as one. A quiet underlined link was
                      being missed entirely. */}
                  <p className="mt-7">
                    {entry.href ? (
                      <Link
                        href={entry.href}
                        className="inline-flex min-h-11 items-center border border-ink px-5 text-[14px] text-ink transition-colors duration-150 hover:bg-ink hover:text-paper focus-visible:bg-ink focus-visible:text-paper motion-reduce:transition-none"
                      >
                        Read the case study
                        <span className="sr-only"> — {entry.subject}</span>
                      </Link>
                    ) : (
                      <span className="label">Case study not yet written</span>
                    )}
                  </p>
                </div>

                {/* Right: the one image. Also a way in, because people click
                    pictures. */}
                <figure className="lg:order-last">
                  {entry.plate ? (
                    entry.href ? (
                      <Link
                        href={entry.href}
                        tabIndex={-1}
                        aria-hidden
                        className="block"
                      >
                        <Image
                          src={entry.plate.img}
                          alt=""
                          sizes="(max-width: 1024px) 100vw, 640px"
                          className="h-auto w-full border border-hairline"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={entry.plate.img}
                        alt={entry.plate.alt}
                        sizes="(max-width: 1024px) 100vw, 640px"
                        className="h-auto w-full border border-hairline"
                      />
                    )
                  ) : (
                    <div className="flex aspect-[4/3] w-full items-center justify-center border border-hairline bg-raised">
                      <p className="label">Image to come</p>
                    </div>
                  )}
                  {/* No caption. The heading, the one-liner and the number
                      sit immediately beside the image and already say what it
                      is — a caption here repeated them in 10px uppercase
                      mono, which is the least readable way to say anything
                      twice. The image is illustrative in this context, so its
                      alt is empty and the link into it is hidden from
                      assistive tech: the button below is the same
                      destination, announced once. */}
                </figure>
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
