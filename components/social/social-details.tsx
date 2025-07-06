interface SocialDetailsProps {
  platform: string;
}

export function SocialDetails({ platform }: SocialDetailsProps) {
  return (
    <div className="w-34 min-w-34 flex flex-col gap-2">
      <p className="text-2xs md:text-end font-heading font-semibold uppercase">
        {platform}
      </p>
    </div>
  );
}
