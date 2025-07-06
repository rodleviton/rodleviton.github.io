import Link from "next/link";
import { ReactNode } from "react";

interface ProjectHeaderProps {
  logo?: ReactNode;
  name: string;
  repository: string;
}

export function ProjectHeader({ logo, name, repository }: ProjectHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      {logo}
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold font-heading leading-none uppercase">
          {name}
        </h3>
        <Link
          href={repository}
          target="_blank"
          className="text-xs text-foreground-muted font-heading leading-none hover:text-accent transition-colors duration-300"
        >
          {repository.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </Link>
      </div>
    </div>
  );
}
