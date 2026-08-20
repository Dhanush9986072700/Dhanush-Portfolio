import { redirect } from "next/navigation";

/* Overview was folded into the home page, which now leads with the same
   projects as images. Kept as a redirect rather than deleted so any link
   already out in the world still lands somewhere useful.

   next.config.mjs also 308s this route, so in production this component
   should never render. It exists for `next dev` and for the day someone
   removes the config entry without noticing this file. */
export default function OverviewRedirect() {
  redirect("/#selected-work");
}
