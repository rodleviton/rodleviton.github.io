import { SkillRating } from "./skill-rating";

interface Skill {
  label: string;
  rating: number;
}

interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="flex flex-col">
      {skills.map((skill, index) => (
        <SkillRating key={index} label={skill.label} rating={skill.rating} />
      ))}
    </div>
  );
}
