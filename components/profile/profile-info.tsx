interface ProfileInfoProps {
  name: string;
  title: string;
}

export function ProfileInfo({ name, title }: ProfileInfoProps) {
  return (
    <div className="flex md:h-34 md:min-h-34 flex-col gap-2 dotted-line dotted-line-vertical relative justify-end">
      <span
        aria-hidden="true"
        className="draft-rule pointer-events-none absolute inset-x-0 top-0 h-px bg-accent"
      />
      <h1 className="draft-name text-4xl font-bold font-heading uppercase leading-none dotted-line dotted-line-horizontal relative">
        {name.split(" ").map((part, index) => (
          <span key={index}>
            {part}
            {index < name.split(" ").length - 1 && <br />}
          </span>
        ))}
      </h1>
      <h2 className="draft-role text-sm leading-none font-heading uppercase whitespace-nowrap dotted-line dotted-line-horizontal relative">
        {title}
      </h2>
    </div>
  );
}
