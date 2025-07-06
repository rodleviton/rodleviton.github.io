"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useSkillHover } from "@/contexts/skill-hover-context";
import {
  skillToTechnologyMapping,
  technologyToSkillMapping,
} from "@/data/skill-technology-mapping";

interface TechIconProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export function TechIcon({ href, icon, label }: TechIconProps) {
  const { hoveredSkill, setHoveredSkill } = useSkillHover();

  // Check if this technology should be highlighted based on hovered skill
  const shouldHighlight =
    hoveredSkill && skillToTechnologyMapping[hoveredSkill]?.includes(label);

  const handleMouseEnter = () => {
    const relatedSkill = technologyToSkillMapping[label];
    if (relatedSkill) {
      setHoveredSkill(relatedSkill);
    }
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div className="relative dotted-line dotted-line-vertical p-0.5">
      <Link
        href={href}
        target="_blank"
        className={`hover:text-accent transition-colors duration-300 focus:outline-1 flex focus:outline-accent focus-within:outline-accent ${
          shouldHighlight ? "text-accent" : "text-foreground-muted"
        }`}
        aria-label={label}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {icon}
      </Link>
    </div>
  );
}
