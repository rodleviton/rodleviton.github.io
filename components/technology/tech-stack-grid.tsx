import { TechIcon } from "./tech-icon";
import { ReactNode } from "react";

interface TechItem {
  href: string;
  icon: ReactNode;
  label: string;
}

interface TechStackGridProps {
  technologies: TechItem[];
}

export function TechStackGrid({ technologies }: TechStackGridProps) {
  return (
    <div className="flex gap-8 dotted-line dotted-line-horizontal relative">
      <div className="w-34 min-w-34 hidden md:block dotted-line dotted-line-vertical relative"></div>
      <div className="flex gap-4.5">
        {technologies.map((tech, index) => (
          <TechIcon
            key={index}
            href={tech.href}
            icon={tech.icon}
            label={tech.label}
          />
        ))}
      </div>
    </div>
  );
}
