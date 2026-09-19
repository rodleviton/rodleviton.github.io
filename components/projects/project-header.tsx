import Link from "next/link";
import { ReactNode } from "react";

interface ProjectHeaderProps {
  logo?: ReactNode;
  name: string;
  url: string;
}

export function ProjectHeader({ logo, name, url }: ProjectHeaderProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex gap-3 group focus:outline-1 focus:outline-accent focus-within:outline-accent"
    >
      {/* Reserve the slot whether or not there is a mark, so every entry aligns */}
      <div className="size-6 shrink-0 text-foreground-muted group-hover:text-accent transition-colors duration-300">
        {logo}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold font-heading leading-none uppercase">
          {name}
        </h3>
        <div className="text-xs text-foreground-muted font-heading leading-none group-hover:text-accent transition-colors duration-300">
          {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </div>
      </div>
    </Link>
  );
}
