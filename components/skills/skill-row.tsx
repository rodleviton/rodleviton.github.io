"use client";

import { useState } from "react";
import { useSkillHover } from "@/contexts/skill-hover-context";
import { skillToTechnologyMapping } from "@/data/skill-technology-mapping";

interface SkillRowProps {
  label: string;
}

export function SkillRow({ label }: SkillRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { hoveredSkill, setHoveredSkill } = useSkillHover();

  // Highlight when hovered directly, or when the matching technology icon is hovered
  const shouldHighlight = isHovered || hoveredSkill === label;
  const technologies = skillToTechnologyMapping[label] ?? [];

  const handleHoverStart = () => {
    setIsHovered(true);
    setHoveredSkill(label);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    setHoveredSkill(null);
  };

  return (
    <div
      className="flex flex-col md:flex-row py-2 gap-2 md:gap-8 hover:cursor-default dotted-line dotted-line-horizontal relative"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <div className="w-34 min-w-34 flex flex-col gap-2 dotted-line dotted-line-vertical relative">
        <p
          className={`text-2xs md:text-end font-heading font-semibold uppercase transition-colors duration-300 ${
            shouldHighlight ? "text-accent" : "text-foreground"
          }`}
        >
          {label}
        </p>
      </div>
      <div className="flex items-center dotted-line dotted-line-vertical relative">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {technologies.map((technology) => (
            <span
              key={technology}
              className={`text-2xs font-heading uppercase tracking-widest transition-colors duration-300 ${
                shouldHighlight ? "text-accent" : "text-foreground-muted"
              }`}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
