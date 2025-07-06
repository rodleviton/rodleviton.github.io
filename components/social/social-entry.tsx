import { ReactNode } from "react";
import { SocialDetails } from "./social-details";
import { SocialHeader } from "./social-header";

interface SocialEntryProps {
  platform: string;
  profileUrl: string;
  logo?: ReactNode;
}

export function SocialEntry({ platform, profileUrl, logo }: SocialEntryProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <SocialDetails platform={platform} />
      <div className="flex flex-col gap-6 w-full">
        <SocialHeader logo={logo} platform={platform} profileUrl={profileUrl} />
      </div>
    </div>
  );
}
