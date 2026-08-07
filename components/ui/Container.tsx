import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizes = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-[92rem]",
};

export default function Container({
  children,
  className = "",
  size = "xl",
}: ContainerProps) {
  return (
    <div
      className={`${sizes[size]} mx-auto px-5 sm:px-7 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
