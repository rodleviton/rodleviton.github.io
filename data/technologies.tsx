import { Css3Icon } from "@/components/icons/css3";
import { Html5Icon } from "@/components/icons/html5";
import { JavascriptIcon } from "@/components/icons/javascript";
import { NextIcon } from "@/components/icons/next";
import { ReactIcon } from "@/components/icons/react";
import { TypescriptIcon } from "@/components/icons/typescript";

export interface Technology {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const technologiesData: Technology[] = [
  {
    href: "https://www.javascript.com/",
    icon: <JavascriptIcon />,
    label: "JavaScript",
  },
  {
    href: "https://www.typescriptlang.org/",
    icon: <TypescriptIcon />,
    label: "TypeScript",
  },
  {
    href: "https://www.w3.org/html/",
    icon: <Html5Icon />,
    label: "HTML5",
  },
  {
    href: "https://www.w3.org/Style/CSS/Overview.en.html",
    icon: <Css3Icon />,
    label: "CSS3",
  },
  { href: "https://react.dev/", icon: <ReactIcon />, label: "React" },
  {
    href: "https://nextjs.org/",
    icon: <NextIcon />,
    label: "Next.js",
  },
];
