interface SkillDotProps {
  filled: boolean;
}

export function SkillDot({ filled }: SkillDotProps) {
  return (
    <div
      className={`w-4 h-4 rounded-full ${
        filled ? "bg-foreground" : "bg-background-muted"
      }`}
    />
  );
}
