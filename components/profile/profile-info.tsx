interface ProfileInfoProps {
  name: string;
  title: string;
}

export function ProfileInfo({ name, title }: ProfileInfoProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold font-heading uppercase leading-8">
        {name.split(" ").map((part, index) => (
          <span key={index}>
            {part}
            {index < name.split(" ").length - 1 && <br />}
          </span>
        ))}
      </h1>
      <h2 className="text-sm font-heading uppercase whitespace-nowrap">
        {title}
      </h2>
    </div>
  );
}
