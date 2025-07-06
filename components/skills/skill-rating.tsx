"use client";

import { SkillDot } from "./skill-dot";
import { useState } from "react";
import { useSkillHover } from "@/contexts/skill-hover-context";

interface SkillRatingProps {
  label: string;
  rating: number;
  maxRating?: number;
}

export function SkillRating({
  label,
  rating,
  maxRating = 10,
}: SkillRatingProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { hoveredSkill, setHoveredSkill } = useSkillHover();

  // Check if this skill should be highlighted from technology hover
  const shouldHighlight = isHovered || hoveredSkill === label;

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
      className="flex flex-col md:flex-row py-2 gap-2 md:gap-8 hover:cursor-pointer dotted-line dotted-line-horizontal relative"
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
      <div className="flex dotted-line dotted-line-vertical relative">
        <div className="flex gap-2 items-center">
          {Array.from({ length: maxRating }, (_, index) => (
            <SkillDot
              key={index}
              filled={index < rating}
              isHovered={shouldHighlight}
              delay={index * 0.065}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
