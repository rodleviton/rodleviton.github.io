import { Bookwell } from "@/components/logos/bookwell";
import { CultureAmp } from "@/components/logos/culture-amp";
import { HorizonState } from "@/components/logos/horizon-state";
import { Mogul } from "@/components/logos/mogul";
import { OSQO } from "@/components/logos/osqo";
import { PresperLabs } from "@/components/logos/presper-labs";
import { ReactNode } from "react";

export interface ExperienceItem {
  role: string;
  dates: string;
  company: string;
  website: string;
  logo?: ReactNode;
  description: string;
  bulletPoints: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    role: "Lead Front-end Developer",
    dates: "Dec 2023 - Current",
    company: "Presper Labs",
    website: "https://www.presperlabs.com/",
    logo: <PresperLabs />,
    description:
      "In my role at Presper Labs, I am responsible for the practical development of new technologies and software for our clients. I lead the front-end development lifecycle, from the initial prototype to the final product.",
    bulletPoints: [
      "Lead the front-end architecture and development for new software prototypes.",
      "Collaborate with clients to build custom software solutions to meet their needs.",
      "Apply modern front-end technologies to build scalable and reliable applications.",
      "Develop core front-end technologies that serve as the foundation for client products.",
    ],
  },
  {
    role: "Lead Front-end Developer",
    dates: "June 2022 - Nov 2023",
    company: "OSQO",
    website: "https://depositgaploans.com/",
    logo: <OSQO />,
    description:
      "As a founding team member at this financial services technology startup, my work involved building and leading all front-end development initiatives from the ground up.",
    bulletPoints: [
      "Built a scalable front-end architecture using React and TypeScript.",
      "Automated the front-end infrastructure to improve development efficiency.",
      "Led the development and ongoing upkeep of all front-end applications and assets.",
      "Managed the integration of the Intercom CRM system into the platform.",
    ],
  },
  {
    role: "Lead Front-end Developer",
    dates: "Oct 2020 - May 2022",
    company: "Bookwell",
    website: "https://www.bookwell.com.au/",
    logo: <Bookwell />,
    description:
      "As the Lead Front-End Developer for this online beauty and wellness booking platform, I led a complete refresh of the user interface and underlying design systems.",
    bulletPoints: [
      "Led a comprehensive design overhaul for existing Bookwell applications.",
      "Established a new Design System to improve UI/UX consistency and streamline development.",
      "Implemented front-end designs using React/NextJS and Elixir/Phoenix.",
      "Prioritised SEO and a performant user experience in all development work.",
    ],
  },
  {
    role: "Lead Front-end Developer",
    dates: "Apr 2019 - Oct 2020",
    company: "Mogul",
    website: "https://mogul.gg/",
    logo: <Mogul />,
    description:
      "My role involved leading the creation of a global online E-Sports tournament platform using Vue.js.",
    bulletPoints: [
      "Developed online E-sports tournament platform with a focus on rapid creation and deployment.",
      "Built a comprehensive component library to streamline future development efforts.",
      "Coordinated a geographically dispersed team of developers to ensure effective collaboration.",
    ],
  },
  {
    role: "Lead Software Engineer (Contract)",
    dates: "Sep 2018 - Apr 2019",
    company: "Culture Amp",
    website: "https://www.cultureamp.com/",
    logo: <CultureAmp />,
    description:
      "As a Lead Front-End Developer for this employee management and experience platform, I focused on expanding the product's global reach through extensive localisation efforts.",
    bulletPoints: [
      "Led the localisation project for the company's staff management tool.",
      "Implemented Right-to-Left (RTL) localisation to support Arabic translations",
      "Integrated new translation strings across all sections of the platform.",
      "Coordinated with the translation team to ensure content accuracy.",
      "Mentored and provided guidance to junior developers in the team.",
    ],
  },
  {
    role: "Lead Front-end Developer",
    dates: "April 2018 - Sep 2018",
    company: "Horizon State",
    website: "https://horizonstate.com/",
    logo: <HorizonState />,
    description:
      "For this blockchain voting technology platform, my work was to develop specialised front-end applications and create a reusable, cross-platform UI library.",
    bulletPoints: [
      "Built a modular UI library with React Native Web for seamless reuse across native and web platforms.",
      "Rapidly prototyped concepts using Invision to expedite the design and development process.",
      "Coordinated efforts between local and remote developers to ensure effective collaboration.",
    ],
  },
];
