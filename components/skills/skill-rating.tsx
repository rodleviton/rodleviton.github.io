import { SkillDot } from "./skill-dot";

interface SkillRatingProps {
  label: string;
  rating: number; // Out of 10
  maxRating?: number;
}

export function SkillRating({
  label,
  rating,
  maxRating = 10,
}: SkillRatingProps) {
  return (
    <div className="flex gap-8">
      <div className="w-34 min-w-34 flex flex-col gap-2">
        <p className="text-2xs text-end font-heading font-semibold uppercase">
          {label}
        </p>
      </div>
      <div className="flex w-full">
        <div className="flex gap-2 items-center">
          {Array.from({ length: maxRating }, (_, index) => (
            <SkillDot key={index} filled={index < rating} />
          ))}
        </div>
      </div>
    </div>
  );
}
