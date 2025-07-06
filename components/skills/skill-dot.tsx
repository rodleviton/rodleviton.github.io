"use client";

interface SkillDotProps {
  filled: boolean;
  isHovered: boolean;
  delay: number;
}

export function SkillDot({ filled, isHovered, delay }: SkillDotProps) {
  const getBackgroundColor = () => {
    if (filled && isHovered) return "bg-accent";
    if (filled) return "bg-foreground";
    return "bg-background-muted";
  };

  return (
    <div
      className={`w-4 h-4 rounded-full transition-colors duration-500 ${getBackgroundColor()}`}
      style={{
        transitionDelay: filled && isHovered ? `${delay}s` : "0s",
      }}
    />
  );
}
