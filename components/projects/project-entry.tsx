import { ReactNode } from "react";
import { ProjectDetails } from "./project-details";
import { ProjectHeader } from "./project-header";
import { ProjectDescription } from "./project-description";
import { ProjectStatus } from "./project-status";

interface ProjectEntryProps {
  category: string;
  name: string;
  url: string;
  logo?: ReactNode;
  description: string;
  status: string;
  detail: string;
}

export function ProjectEntry({
  category,
  name,
  url,
  logo,
  description,
  status,
  detail,
}: ProjectEntryProps) {
  return (
    <div className="entry flex flex-col md:flex-row gap-4 md:gap-8 dotted-line dotted-line-horizontal relative">
      <div className="dotted-line dotted-line-vertical relative">
        <ProjectDetails category={category} />
      </div>
      <div className="flex flex-col gap-4 w-full dotted-line dotted-line-vertical relative">
        <ProjectHeader logo={logo} name={name} url={url} />
        <ProjectStatus status={status} detail={detail} />
        <ProjectDescription description={description} />
      </div>
    </div>
  );
}
