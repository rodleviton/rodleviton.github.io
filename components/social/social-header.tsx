import Link from "next/link";
import { ReactNode } from "react";

interface SocialHeaderProps {
  logo?: ReactNode;
  platform: string;
  profileUrl: string;
}

export function SocialHeader({
  logo,
  platform,
  profileUrl,
}: SocialHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      {logo}
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold font-heading leading-none uppercase">
          {platform}
        </h3>
        <Link
          href={profileUrl}
          target="_blank"
          className="text-xs text-foreground-muted font-heading leading-none hover:text-accent transition-colors duration-300"
        >
          {profileUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </Link>
      </div>
    </div>
  );
}
