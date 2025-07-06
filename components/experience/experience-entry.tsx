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
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 dotted-line dotted-line-horizontal relative">
      <div className="dotted-line dotted-line-vertical relative">
        <JobDetails role={role} dates={dates} />
      </div>
      <div className="flex flex-col gap-6 w-full dotted-line dotted-line-vertical relative">
        <CompanyHeader logo={logo} name={company} website={website} />
        <JobDescription description={description} bulletPoints={bulletPoints} />
      </div>
    </div>
  );
}
