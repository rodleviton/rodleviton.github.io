import Link from "next/link";
import { ReactNode } from "react";

interface CompanyHeaderProps {
  logo?: ReactNode;
  name: string;
  website: string;
}

export function CompanyHeader({ logo, name, website }: CompanyHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      {logo}
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold font-heading leading-none uppercase">
          {name}
        </h3>
        <Link
          href={website}
          target="_blank"
          className="text-xs text-foreground-muted font-heading leading-none hover:text-accent transition-colors duration-300"
        >
          {website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </Link>
      </div>
    </div>
  );
}
