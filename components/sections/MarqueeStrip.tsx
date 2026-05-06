const tools = [
  "Figma",
  "Next.js",
  "React",
  "TypeScript",
  "Design Systems",
  "WCAG AAA",
  "Framer Motion",
  "Shopify",
  "Tailwind CSS",
  "User Research",
  "Usability Testing",
  "Information Architecture",
  "Accessibility",
  "Prototyping",
  "Component Libraries",
];

function Item({ label }: { label: string }) {
  return (
    <span className="flex flex-shrink-0 items-center gap-5">
      <span
        className="font-mono text-[10px] uppercase tracking-widest"
        style={{ color: "rgba(247,247,242,0.38)" }}
      >
        {label}
      </span>
      <span
        className="h-1 w-1 flex-shrink-0 rounded-full"
        style={{ background: "rgba(247,247,242,0.12)" }}
        aria-hidden="true"
      />
    </span>
  );
}

export default function MarqueeStrip() {
  const doubled = [...tools, ...tools];

  return (
    <div
      className="overflow-hidden border-y border-white/[0.06] py-3"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {doubled.map((tool, i) => (
          <Item key={`${tool}-${i}`} label={tool} />
        ))}
      </div>
    </div>
  );
}
