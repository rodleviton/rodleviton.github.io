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

export default function Home() {
  return (
    <>
      <ProfileHeader
        name={profileData.name}
        title={profileData.title}
        imageSrc={profileData.image.src}
        imageAlt={profileData.image.alt}
        locationHref={profileData.location.mapUrl}
        location={profileData.location.text}
      />
      <SectionContainer>
        <SectionHeader title="Introduction" />
        <ContentRow>
          <p className="text-sm leading-6">{profileData.introduction}</p>
        </ContentRow>

        <SkillsGrid skills={skillsData} />

        <TechStackGrid technologies={technologiesData} />
      </SectionContainer>
      <SectionContainer>
        <SectionHeader title="Experience Summary" />

        {experienceData.map((experience, index) => (
          <ExperienceEntry
            key={index}
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

      <SectionContainer>
        <SectionHeader title="Open Source Projects" />

        {projectsData.map((project, index) => (
          <ProjectEntry
            key={index}
            platform={project.platform}
            name={project.name}
            repository={project.repository}
            logo={project.logo}
            description={project.description}
          />
        ))}
      </SectionContainer>

      <SectionContainer>
        <SectionHeader title="Online Presence" />

        {socialData.map((social, index) => (
          <SocialEntry
            key={index}
            platform={social.platform}
            profileUrl={social.profileUrl}
            logo={social.logo}
          />
        ))}
      </SectionContainer>
    </>
  );
}
