import Link from "next/link";
import { ReactNode } from "react";

interface CompanyHeaderProps {
  logo?: ReactNode;
  name: string;
  website: string;
}

export function CompanyHeader({ logo, name, website }: CompanyHeaderProps) {
  return (
    <Link
      href={website}
      target="_blank"
      className="flex gap-3 group focus:outline-1 focus:outline-accent focus-within:outline-accent"
    >
      <div className="text-foreground-muted group-hover:text-accent transition-colors duration-300">
        {logo}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold font-heading leading-none uppercase">
          {name}
        </h3>
        <div className="text-xs text-foreground-muted font-heading leading-none group-hover:text-accent transition-colors duration-300">
          {website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </div>
      </div>
    </Link>
  );
}
