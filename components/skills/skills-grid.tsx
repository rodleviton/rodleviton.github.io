import { SkillRow } from "./skill-row";

interface Skill {
  label: string;
}

interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="flex flex-col">
      {skills.map((skill) => (
        <SkillRow key={skill.label} label={skill.label} />
      ))}
    </div>
  );
}
