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
import { Github } from "@/components/logos/github";
import Link from "next/link";

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

        <div className="flex gap-8">
          <div className="w-34 min-w-34 flex flex-col gap-2">
            <p className="text-2xs text-end font-heading font-semibold uppercase">
              GitHub
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center gap-3">
              <Github />
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold font-heading leading-none uppercase">
                  Recast
                </h3>
                <Link
                  href="https://github.com/reactivepixels/recast"
                  target="_blank"
                  className="text-xs text-foreground-muted font-heading leading-none hover:text-accent transition-colors duration-300"
                >
                  github.com/reactivepixels/recast
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-sm leading-6">
                Recast is a collection of small React utilities; it is also an
                approach to building truly reusable component primitives by
                abstracting the theme layer from the internal workings of a
                component.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-34 min-w-34 flex flex-col gap-2">
            <p className="text-2xs text-end font-heading font-semibold uppercase">
              GitHub
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center gap-3">
              <Github />
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold font-heading leading-none uppercase">
                  Vue Card Stack
                </h3>
                <Link
                  href="https://github.com/rodleviton/vue-card-stack"
                  target="_blank"
                  className="text-xs text-foreground-muted font-heading leading-none hover:text-accent transition-colors duration-300"
                >
                  github.com/rodleviton/vue-card-stack
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-sm leading-6">
                A swipeable card component library built for VueJs. Particular
                attention has been placed on creating a buttery smooth and
                performant card swipe interaction and thorough api documentation
                for consumers.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-34 min-w-34 flex flex-col gap-2">
            <p className="text-2xs text-end font-heading font-semibold uppercase">
              GitHub
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center gap-3">
              <Github />
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold font-heading leading-none uppercase">
                  Swanky Docs
                </h3>
                <Link
                  href="https://github.com/swanky-docs"
                  target="_blank"
                  className="text-xs text-foreground-muted font-heading leading-none hover:text-accent transition-colors duration-300"
                >
                  github.com/swanky-docs
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-sm leading-6">
                Swanky Docs is a configuration based documentation generator
                that is optimized for creating pattern libraries.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader title="Online Presence" />
      </SectionContainer>
    </>
  );
}
