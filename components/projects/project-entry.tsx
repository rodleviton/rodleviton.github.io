import { ReactNode } from "react";
import { ProjectDetails } from "./project-details";
import { ProjectHeader } from "./project-header";
import { ProjectDescription } from "./project-description";

interface ProjectEntryProps {
  platform: string;
  name: string;
  repository: string;
  logo?: ReactNode;
  description: string;
}

export function ProjectEntry({
  platform,
  name,
  repository,
  logo,
  description,
}: ProjectEntryProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 dotted-line dotted-line-horizontal relative">
      <div className="dotted-line dotted-line-vertical relative">
        <ProjectDetails platform={platform} />
      </div>
      <div className="flex flex-col gap-6 w-full dotted-line dotted-line-vertical relative">
        <ProjectHeader logo={logo} name={name} repository={repository} />
        <ProjectDescription description={description} />
      </div>
    </div>
  );
}
