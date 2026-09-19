import { ProfileHeader } from "@/components/profile/profile-header";
import { SectionHeader } from "@/components/sections/section-header";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { TechStackGrid } from "@/components/technology/tech-stack-grid";
import { ExperienceEntry } from "@/components/experience/experience-entry";
import { SectionContainer } from "@/components/layout/section-container";
import { ContentRow } from "@/components/layout/content-row";
import { profileData } from "@/data/profile";
import { skillsData } from "@/data/skills";
import { technologiesData } from "@/data/technologies";
import { experienceData } from "@/data/experience";
import { ProjectEntry } from "@/components/projects/project-entry";
import { projectsData } from "@/data/projects";
import { SocialEntry } from "@/components/social/social-entry";
import { socialData } from "@/data/social";
import { SkillHoverProvider } from "@/contexts/skill-hover-context";

export default function Home() {
  return (
    <SkillHoverProvider>
      <ProfileHeader
        name={profileData.name}
        title={profileData.title}
        imageSrc={profileData.image.src}
        imageAlt={profileData.image.alt}
        locationHref={profileData.location.mapUrl}
        location={profileData.location.text}
      />
      <main className="flex-1">
        <SectionContainer id="introduction">
          <SectionHeader title="Introduction" />
          <ContentRow>
            <p className="text-sm leading-6 text-balance">
              {profileData.introduction}
            </p>
          </ContentRow>

          <SkillsGrid skills={skillsData} />

          <TechStackGrid technologies={technologiesData} />
        </SectionContainer>
        <SectionContainer id="experience">
          <SectionHeader title="Experience Summary" />

          {experienceData.map((experience) => (
            <ExperienceEntry
              key={experience.company}
              role={experience.role}
              dates={experience.dates}
              company={experience.company}
              website={experience.website}
              logo={experience.logo}
              description={experience.description}
              bulletPoints={experience.bulletPoints}
            />
          ))}
        </SectionContainer>

        <SectionContainer id="work">
          <SectionHeader title="Selected Work" />

          {projectsData.map((project) => (
            <ProjectEntry
              key={project.name}
              category={project.category}
              name={project.name}
              url={project.url}
              logo={project.logo}
              description={project.description}
              status={project.status}
              detail={project.detail}
            />
          ))}
        </SectionContainer>

        <SectionContainer id="presence">
          <SectionHeader title="Online Presence" />

          {socialData.map((social) => (
            <SocialEntry
              key={social.platform}
              platform={social.platform}
              profileUrl={social.profileUrl}
              logo={social.logo}
            />
          ))}
        </SectionContainer>
      </main>
    </SkillHoverProvider>
  );
}
