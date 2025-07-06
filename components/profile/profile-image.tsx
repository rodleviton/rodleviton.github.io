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
    <div className="flex w-34 min-w-34 h-34 min-h-34 items-center md:justify-end">
      <div className="flex items-center dotted-line dotted-line-vertical relative">
        <div className="flex items-center dotted-line dotted-line-horizontal relative">
          <Image
            src={src}
            className="rounded-full"
            alt={alt}
            width={512}
            height={512}
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
