interface MarqueeItem {
  label: string;
  accent?: boolean;
}

interface MarqueeProps {
  items?: MarqueeItem[];
}

const defaultItems: MarqueeItem[] = [
  { label: "XIPHIAS Immigration" },
  { label: "Resort Booking Platform", accent: true },
  { label: "Design Systems" },
  { label: "XIPHIAS Superfoods", accent: true },
  { label: "Next.js" },
  { label: "Framer Motion", accent: true },
  { label: "TypeScript" },
  { label: "Figma", accent: true },
  { label: "Product Design" },
  { label: "Full-Stack Dev", accent: true },
  { label: "Tailwind CSS" },
  { label: "Bangalore, India", accent: true },
];

export default function Marquee({ items = defaultItems }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-4"
      aria-label="Skills and projects marquee"
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #020202, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #020202, transparent)" }}
      />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-6 flex-shrink-0 px-4"
          >
            <span
              className={`text-sm font-mono tracking-wider uppercase whitespace-nowrap ${
                item.accent ? "text-[#c9ff6a]" : "text-white/30"
              }`}
            >
              {item.label}
            </span>
            <span className="text-white/15 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
