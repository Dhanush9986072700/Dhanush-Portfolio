import ScrollReveal from "@/components/animations/ScrollReveal";

const stats = [
  { value: "04+", label: "Years shipping", color: "#c9ff6a" },
  { value: "10+", label: "Products built", color: "#f3a841" },
  { value: "03", label: "Deep case studies", color: "#c9ff6a" },
  { value: "01", label: "Designer + engineer", color: "#f3a841" },
] as const;

export default function StatsBar() {
  return (
    <ScrollReveal>
      <section className="border-y border-white/[0.08] bg-white/[0.018]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-7 md:grid-cols-4 lg:px-10">
          {stats.map(({ value, label, color }) => (
            <div
              key={label}
              className="border-l border-white/[0.08] py-5 pl-4 first:border-l-0 sm:py-6"
            >
              <p
                className="font-mono text-2xl leading-none sm:text-3xl"
                style={{ color }}
              >
                {value}
              </p>
              <p
                className="mt-2 font-mono text-[10px] uppercase"
                style={{ color: "rgba(247,247,242,0.60)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
