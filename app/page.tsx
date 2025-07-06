import { Css3Icon } from "@/components/icons/css3";
import { Html5Icon } from "@/components/icons/html5";
import { JavascriptIcon } from "@/components/icons/javascript";
import { NextIcon } from "@/components/icons/next";
import { ReactIcon } from "@/components/icons/react";
import { TypescriptIcon } from "@/components/icons/typescript";
import { Bookwell } from "@/components/logos/bookwell";
import { CultureAmp } from "@/components/logos/culture-amp";
import { OSQO } from "@/components/logos/osqo";
import { PresperLabs } from "@/components/logos/presper-labs";
import { ProfileHeader } from "@/components/profile/profile-header";
import { SectionHeader } from "@/components/sections/section-header";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { TechStackGrid } from "@/components/technology/tech-stack-grid";
import { ExperienceEntry } from "@/components/experience/experience-entry";

export default function Home() {
  return (
    <>
      <ProfileHeader
        name="Rod Leviton"
        title="Front-end developer"
        imageSrc="/images/rodleviton.webp"
        imageAlt="Rod Leviton"
        locationHref="https://maps.app.goo.gl/iMTLaehFJfjUGAuG8"
        location="Blue Mountains, Australia"
      />
      <section className="container py-8 flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <SectionHeader title="Introduction" />
          <div className="flex gap-8">
            <div className="w-34 min-w-34"></div>
            <div className="flex w-full">
              <p className="text-sm leading-6">
                For over 20 years, I have specialised in building user-centric
                interfaces for both fast-paced tech startups and large-scale
                financial institutions. As a highly skilled JavaScript developer
                and technical lead, I architect scalable front-end systems and
                component libraries that empower teams to turn visual concepts
                into reality. I am passionate about leading and mentoring
                developers, fostering collaboration with design teams, and
                delivering web experiences that are performant and
                well-engineered.
              </p>
            </div>
          </div>
        </div>

        <SkillsGrid
          skills={[
            { label: "JavaScript / TypeScript", rating: 10 },
            { label: "HTML / CSS", rating: 9 },
            { label: "UI Design / UX", rating: 8 },
            { label: "React / Next.js", rating: 10 },
          ]}
        />

        <TechStackGrid
          technologies={[
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
          ]}
        />
      </section>
      <section className="container py-8 flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <SectionHeader title="Experience Summary" />
        </div>

        <ExperienceEntry
          role="Lead Front-end Developer"
          dates="Dec 2023 - Current"
          company="Presper Labs"
          website="https://www.presperlabs.com/"
          logo={<PresperLabs />}
          description="As the Lead Front-End Engineer at Presper Labs, I'm responsible for the practical development of new technologies and software for our clients. My role involves leading the front-end development lifecycle, from initial prototype to final product."
          bulletPoints={[
            "Lead the front-end architecture and development for new software prototypes.",
            "Collaborate with clients to build custom software solutions to meet their needs.",
            "Apply modern front-end technologies to build scalable and reliable applications.",
            "Develop core front-end technologies that serve as the foundation for client products.",
          ]}
        />

        <ExperienceEntry
          role="Lead Front-end Developer"
          dates="June 2022 - Nov 2023"
          company="OSQO"
          website="https://depositgaploans.com/"
          logo={<OSQO />}
          description="As a foundation team member at this innovative financial services technology startup, I was responsible for building and leading all front-end development initiatives from the ground up."
          bulletPoints={[
            "Built a scalable front-end architecture using React and TypeScript.",
            "Automated the front-end infrastructure to improve development efficiency.",
            "Led the development and ongoing upkeep of all front-end applications and assets.",
            "Managed the integration of the Intercom CRM system into the platform.",
          ]}
        />

        <ExperienceEntry
          role="Lead Front-end Developer"
          dates="Oct 2020 - May 2022"
          company="Bookwell"
          website="https://www.bookwell.com.au/"
          logo={<Bookwell />}
          description="As the Lead Front-End Developer for this online beauty and wellness booking platform, I led a complete refresh of the user interface and underlying design systems."
          bulletPoints={[
            "Led a comprehensive design overhaul for existing Bookwell applications.",
            "Established a new Design System to improve UI/UX consistency and streamline development.",
            "Implemented front-end designs using React/NextJS and Elixir/Phoenix.",
            "Prioritised SEO and a performant user experience in all development work.",
          ]}
        />

        <ExperienceEntry
          role="Lead Front-end Developer"
          dates="Apr 2019 - Oct 2020"
          company="Mogul"
          website="https://mogul.gg/"
          description="As the Lead Front-End Developer, I led the creation of a global online E-Sports tournament platform using Vue.js."
          bulletPoints={[
            "Developed online E-sports tournament platform with a focus on rapid creation and deployment.",
            "Built a comprehensive component library to streamline future development efforts.",
            "Coordinated a geographically dispersed team of developers to ensure effective collaboration.",
          ]}
        />

        <ExperienceEntry
          role="Lead Software Engineer (Contract)"
          dates="Sep 2018 - Apr 2019"
          company="Culture Amp"
          website="https://www.cultureamp.com/"
          logo={<CultureAmp />}
          description="As a Lead Front-End Developer for this employee management and experience platform, I focused on expanding the product's global reach through extensive localisation efforts."
          bulletPoints={[
            "Led the localisation project for the company's staff management tool.",
            "Implemented Right-to-Left (RTL) localisation to support Arabic translations",
            "Integrated new translation strings across all sections of the platform.",
            "Coordinated with the translation team to ensure content accuracy.",
            "Mentored and provided guidance to junior developers in the team.",
          ]}
        />

        <ExperienceEntry
          role="Lead Front-end Developer"
          dates="April 2018 - Sep 2018"
          company="Horizon State"
          website="https://horizonstate.com/"
          description="As the Lead Front-End Developer for this blockchain voting technology platform, my role was to develop specialised front-end applications and create a reusable, cross-platform UI library."
          bulletPoints={[
            "Built a modular UI library with React Native Web for seamless reuse across native and web platforms.",
            "Rapidly prototyped concepts using Invision to expedite the design and development process.",
            "Coordinated efforts between local and remote developers to ensure effective collaboration.",
          ]}
        />
      </section>
    </>
  );
}
