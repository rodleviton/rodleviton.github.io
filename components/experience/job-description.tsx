interface JobDescriptionProps {
  description: string;
  bulletPoints: string[];
}

export function JobDescription({
  description,
  bulletPoints,
}: JobDescriptionProps) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm leading-6 text-balance">{description}</p>
      {bulletPoints.length > 0 && (
        <ul className="list-disc text-sm pl-4 md:pl-8 leading-6">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
