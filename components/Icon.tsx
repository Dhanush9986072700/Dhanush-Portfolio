/* ---------------------------------------------------------------------------
   ICONS

   Four marks, one construction: a 16-unit grid, 1px stroke, square caps and
   mitre joins, no fill, currentColor. Square terminals are not a style choice
   — rounded caps would contradict the no-radius rule, and engraved chart
   linework ends square anyway.

   These exist for wayfinding only. Nothing on this site gets a picture for
   flavour: if an icon is not telling the reader where they are or where a
   link goes, it does not belong here.
--------------------------------------------------------------------------- */

export type IconName = "menu" | "close" | "current" | "external";

const PATHS: Record<IconName, React.ReactNode> = {
  menu: (
    <>
      <path d="M2 4h12" />
      <path d="M2 8h12" />
      <path d="M2 12h12" />
    </>
  ),
  close: (
    <>
      <path d="M3 3l10 10" />
      <path d="M13 3L3 13" />
    </>
  ),
  current: <path d="M6 3l5 5-5 5" />,
  external: (
    <>
      <path d="M12 9v5H2V4h5" />
      <path d="M9 2h5v5" />
      <path d="M14 2L7.5 8.5" />
    </>
  ),
};

export default function Icon({
  name,
  className = "h-4 w-4",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
