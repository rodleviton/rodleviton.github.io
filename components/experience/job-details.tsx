interface JobDetailsProps {
  role: string;
  dates: string;
}

export function JobDetails({ role, dates }: JobDetailsProps) {
  return (
    <div className="w-34 min-w-34 flex flex-col gap-2">
      <p className="text-2xs text-end font-heading font-semibold uppercase">
        {role}
      </p>
      <p className="text-2xs text-end text-foreground-muted font-heading uppercase">
        {dates}
      </p>
    </div>
  );
}
