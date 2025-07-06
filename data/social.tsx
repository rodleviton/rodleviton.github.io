import { Github } from "@/components/logos/github";
import { CodePen } from "@/components/logos/codepen";
import { ReactNode } from "react";

export interface SocialItem {
  platform: string;
  profileUrl: string;
  logo?: ReactNode;
}

export const socialData: SocialItem[] = [
  {
    platform: "GitHub",
    profileUrl: "https://github.com/rodleviton/",
    logo: <Github />,
  },
  {
    platform: "CodePen",
    profileUrl: "https://codepen.io/rodleviton/",
    logo: <CodePen />,
  },
];
