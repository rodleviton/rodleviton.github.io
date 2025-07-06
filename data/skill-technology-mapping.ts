// Maps skill labels to their related technology labels
export const skillToTechnologyMapping: Record<string, string[]> = {
  "JavaScript / TypeScript": ["JavaScript", "TypeScript"],
  "HTML / CSS": ["HTML5", "CSS3"],
  "UI Design / UX": ["Figma"],
  "React / Next.js": ["React", "Next.js"],
};

// Maps technology labels to their related skill labels (reverse mapping)
export const technologyToSkillMapping: Record<string, string> = {
  JavaScript: "JavaScript / TypeScript",
  TypeScript: "JavaScript / TypeScript",
  HTML5: "HTML / CSS",
  CSS3: "HTML / CSS",
  Figma: "UI Design / UX",
  React: "React / Next.js",
  "Next.js": "React / Next.js",
};
