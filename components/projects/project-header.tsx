import Link from "next/link";
import { ReactNode } from "react";

interface ProjectHeaderProps {
  logo?: ReactNode;
  name: string;
  repository: string;
}

export function ProjectHeader({ logo, name, repository }: ProjectHeaderProps) {
  return (
    <Link
      href={repository}
      target="_blank"
      className="flex items-center gap-3 group"
    >
      <div className="text-foreground-muted group-hover:text-accent transition-colors duration-300">
        {logo}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold font-heading leading-none uppercase">
          {name}
        </h3>
        <div className="text-xs text-foreground-muted font-heading leading-none group-hover:text-accent transition-colors duration-300">
          {repository.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </div>
      </div>
    </Link>
  );
}
