import { ReactNode } from "react";
import { JobDetails } from "./job-details";
import { CompanyHeader } from "./company-header";
import { JobDescription } from "./job-description";

interface ExperienceEntryProps {
  role: string;
  dates: string;
  company: string;
  website: string;
  logo?: ReactNode;
  description: string;
  bulletPoints: string[];
}

export function ExperienceEntry({
  role,
  dates,
  company,
  website,
  logo,
  description,
  bulletPoints,
}: ExperienceEntryProps) {
  return (
    <div className="flex gap-8">
      <JobDetails role={role} dates={dates} />
      <div className="flex flex-col gap-6 w-full">
        <CompanyHeader logo={logo} name={company} website={website} />
        <JobDescription description={description} bulletPoints={bulletPoints} />
      </div>
    </div>
  );
}
