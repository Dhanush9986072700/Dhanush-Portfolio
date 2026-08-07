const skills = [
  "User Research",
  "UI Design",
  "UX Design",
  "Figma",
  "Prototyping",
  "Design Systems",
  "Wireframing",
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Framer Motion",
  "Usability Testing",
  "Information Architecture",
  "Accessibility",
  "Component Libraries",
  "Shopify",
  "Product Strategy",
];

function Item({ label }: { label: string }) {
  return (
    <span className="flex flex-shrink-0 items-center gap-6">
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.875rem",
          fontWeight: 500,
          color: "rgba(17,17,17,0.55)",
          whiteSpace: "nowrap",
          letterSpacing: "-0.01em",
        }}
      >
        {label}
      </span>
      {/* Orange accent separator */}
      <span
        aria-hidden="true"
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "rgba(249,115,22,0.55)",
          flexShrink: 0,
        }}
      />
    </span>
  );
}

export default function MarqueeStrip() {
  const doubled = [...skills, ...skills];

  return (
    <div
      className="overflow-hidden border-y border-black/[0.06]"
      style={{ paddingBlock: "0.875rem" }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {doubled.map((skill, i) => (
          <Item key={`${skill}-${i}`} label={skill} />
        ))}
      </div>
    </div>
  );
}
