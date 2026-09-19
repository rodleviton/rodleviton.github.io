interface ProjectDescriptionProps {
  description: string;
}

export function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <div className="flex flex-col gap-6">
      <p className="max-w-[66ch] text-sm leading-6 text-pretty">{description}</p>
    </div>
  );
}
