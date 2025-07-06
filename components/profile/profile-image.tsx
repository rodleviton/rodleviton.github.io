import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export function ProfileImage({
  src,
  alt,
  priority = false,
}: ProfileImageProps) {
  return (
    <div className="flex w-34 min-w-34 h-32 items-center justify-end">
      <Image
        src={src}
        className="rounded-full w-28 min-w-28 h-28 min-h-28 overflow-hidden border-2 border-gray-300"
        alt={alt}
        width={512}
        height={512}
        priority={priority}
      />
    </div>
  );
}
