/* ---------------------------------------------------------------------------
   HANDOFF DELTA

   How much of the project was drawn, and how much of it was shipped by the
   same hands. The bar measures the second number against the first.

   This is the one place a chart earns its keep on this site: the claim
   "designer who codes" is otherwise unfalsifiable, and a number per project
   is much harder to argue with than a sentence about it.
--------------------------------------------------------------------------- */

export default function Delta({
  designed,
  implemented,
}: {
  designed: number;
  implemented: number;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="data whitespace-nowrap text-muted">
        {designed}/{implemented}
      </span>
      <span
        aria-hidden
        className="relative block h-[3px] w-12 shrink-0 bg-hairline"
      >
        <span
          className="absolute inset-y-0 left-0 bg-accent"
          style={{ width: `${implemented}%` }}
        />
      </span>
      <span className="sr-only">
        Designed {designed} percent, implemented {implemented} percent.
      </span>
    </div>
  );
}
