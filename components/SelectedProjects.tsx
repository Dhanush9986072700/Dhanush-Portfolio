import Image from "next/image";
import Icon from "@/components/Icon";
import { SELECTED } from "@/data/selected";

/* ---------------------------------------------------------------------------
   ALSO WORKED ON

   Deliberately a lighter treatment than the register above it. Two columns
   rather than full-width bands, the banner on top rather than beside the
   text, and no call to action beyond the live site — because there is nowhere
   else to send anyone.

   The visual weight is the message: these are listed, not argued. A reader
   who wants the argument goes back up to the three entries that have one.

   No accent anywhere here. None of these carry a live status the way a
   register entry does.
--------------------------------------------------------------------------- */

export default function SelectedProjects() {
  return (
    <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2">
      {SELECTED.map((project) => (
        <li key={project.subject}>
          <figure>
            <Image
              src={project.banner}
              alt={project.alt}
              sizes="(max-width: 768px) 100vw, 550px"
              className="h-auto w-full border border-hairline"
            />
          </figure>

          <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-hairline pb-2">
            <h3 className="font-display text-[clamp(1.15rem,2vw,1.4rem)] font-light leading-tight text-ink">
              {project.subject}
            </h3>
            <span className="data shrink-0 text-muted">{project.year}</span>
          </div>

          <p className="prose-body mt-3 text-[14px]">{project.what}</p>

          <p className="data mt-4 text-muted">{project.did}</p>

          {project.href && (
            <p className="mt-3">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="data link inline-flex min-h-11 items-center gap-2 text-ink"
              >
                {project.href.replace(/^https:\/\/(www\.)?/, "")}
                <Icon name="external" className="h-3 w-3 shrink-0" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
