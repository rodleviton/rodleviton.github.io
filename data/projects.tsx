import { Github } from "@/components/logos/github";
import { Recast } from "@/components/logos/recast";
import { SwankyDocs } from "@/components/logos/swanky-docs";
import { VueCardStack } from "@/components/logos/vue-card-stack";
import { ReactNode } from "react";

export interface ProjectItem {
  platform: string;
  name: string;
  repository: string;
  logo?: ReactNode;
  description: string;
}

export const projectsData: ProjectItem[] = [
  {
    platform: "GitHub",
    name: "Recast",
    repository: "https://github.com/reactivepixels/recast",
    logo: <Recast />,
    description:
      "Recast is a collection of small React utilities; it is also an approach to building truly reusable component primitives by abstracting the theme layer from the internal workings of a component.",
  },
  {
    platform: "GitHub",
    name: "Vue Card Stack",
    repository: "https://github.com/rodleviton/vue-card-stack",
    logo: <VueCardStack />,
    description:
      "A swipeable card component library built for VueJs. Particular attention has been placed on creating a buttery smooth and performant card swipe interaction and thorough api documentation for consumers.",
  },
  {
    platform: "GitHub",
    name: "Swanky Docs",
    repository: "https://github.com/swanky-docs",
    logo: <SwankyDocs />,
    description:
      "Swanky Docs is a configuration based documentation generator that is optimized for creating pattern libraries.",
  },
];
