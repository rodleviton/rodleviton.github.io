interface ProjectDescriptionProps {
  description: string;
}

export function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm leading-6 text-balance">{description}</p>
    </div>
  );
}
