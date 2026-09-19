import { ProfileImage } from "./profile-image";
import { ProfileInfo } from "./profile-info";
import { LocationLink } from "./location-link";
import { ThemeModeToggle } from "../theme/theme-mode-toggle";

interface ProfileHeaderProps {
  name: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  locationHref: string;
  location: string;
}

export function ProfileHeader({
  name,
  title,
  imageSrc,
  imageAlt,
  locationHref,
  location,
}: ProfileHeaderProps) {
  return (
    <header className="relative container py-6 md:py-12 flex md:flex-row flex-col gap-8 justify-between">
      <div className="flex md:flex-row flex-col md:gap-8 gap-4 md:items-end">
        <ProfileImage src={imageSrc} alt={imageAlt} priority />
        <ProfileInfo name={name} title={title} />
      </div>
      <div className="absolute top-8 right-4">
        <ThemeModeToggle />
      </div>
      <LocationLink href={locationHref} location={location} />
    </header>
  );
}
