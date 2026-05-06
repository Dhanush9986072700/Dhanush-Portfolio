import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "mono" | "success" | "warm";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "bg-white/[0.03] border border-white/10 text-white/60",
    accent:
      "bg-[#c9ff6a]/10 border border-[#c9ff6a]/30 text-[#c9ff6a]",
    mono:
      "bg-white/[0.03] border border-white/10 text-white/50 font-mono",
    success:
      "bg-[#c9ff6a]/10 border border-[#c9ff6a]/30 text-[#c9ff6a]",
    warm:
      "bg-[#f3a841]/10 border border-[#f3a841]/30 text-[#f3a841]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 font-mono ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
