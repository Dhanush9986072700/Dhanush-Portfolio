import type { ElementType, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
  spacing?: "sm" | "md" | "lg" | "none";
  tone?: "default" | "raised" | "bordered";
}

const spacingClasses = {
  sm: "section-padding-sm",
  md: "section-padding",
  lg: "section-padding-lg",
  none: "",
};

const toneClasses = {
  default: "",
  raised: "bg-white/[0.018]",
  bordered: "border-y border-white/[0.08]",
};

export default function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
  spacing = "md",
  tone = "default",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`${spacingClasses[spacing]} ${toneClasses[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}
