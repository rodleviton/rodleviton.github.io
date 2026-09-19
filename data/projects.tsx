import { Recast } from "@/components/logos/recast";
import { VueCardStack } from "@/components/logos/vue-card-stack";
import { ReactNode } from "react";

export interface ProjectItem {
  /** What kind of thing this is. Rendered in the left gutter. */
  category: string;
  name: string;
  /** Where it lives. Shown under the name and used as the link target. */
  url: string;
  logo?: ReactNode;
  description: string;
  /** Measured state, not a self-assessment. Kept short enough to sit on one line. */
  status: string;
  /** Supporting evidence for the status. */
  detail: string;
}

export const projectsData: ProjectItem[] = [
  {
    category: "Product",
    name: "Mini Mecha",
    url: "https://www.minimecha.com",
    description:
      "Numbered, finite resin garage kits. Operators vote concepts into production, reserve numbered blocks from a live drop, and post their finished builds. I designed the product, built the platform, and run it.",
    status: "Shipped",
    detail: "Next.js, Supabase, Stripe, bespoke CMS",
  },
  {
    category: "Developer tool",
    name: "InSitue",
    url: "https://www.insitue.com",
    description:
      "Click an element in a running web app to file a change request, and an agent opens a verified draft pull request against the exact source line. Open-source SDK and editor plugin, paid cloud service on top.",
    status: "Shipped",
    detail: "Four npm packages, Stripe billing",
  },
  {
    category: "Mac app",
    name: "EKO",
    url: "https://www.reactivepixels.com/eko",
    description:
      "A native Mac client for self-hosted music. The signal path is bit-perfect where it can be, and the interface says so. The moment volume, EQ or sample rate breaks that, the seal downgrades itself rather than keep the claim.",
    status: "Released, pre-1.0",
    detail: "Tauri, Rust audio engine, notarised",
  },
  {
    category: "Game",
    name: "Groove Unit",
    url: "https://www.reactivepixels.com",
    description:
      "A desk companion that dances in time to whatever you are actually playing, using onset detection over system audio. Godot and Rust, with the DSP written by hand rather than pulled from a library.",
    status: "Engine complete, unreleased",
    detail: "1,002 sprites, 358 tests, no store page",
  },
  {
    category: "Library",
    name: "Recast",
    url: "https://github.com/reactivepixels/recast",
    logo: <Recast />,
    description:
      "An approach to building genuinely reusable React primitives by lifting the theme layer out of a component's internals. Build the component once, skin it per project.",
    status: "Maintained",
    detail: "npm @rpxl/recast, v5",
  },
  {
    category: "Library",
    name: "Vue Card Stack",
    url: "https://github.com/rodleviton/vue-card-stack",
    logo: <VueCardStack />,
    description:
      "A swipeable card stack for Vue, built around getting the feel of the drag and the release right. Published in 2020 and no longer maintained.",
    status: "Unmaintained since 2020",
    detail: "npm vue-card-stack, 81 stars",
  },
];
