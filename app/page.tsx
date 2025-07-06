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
import Link from "next/link";

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

        <div className="flex gap-8">
          <div className="w-34 min-w-34 flex flex-col gap-2">
            <p className="text-2xs text-end font-heading font-semibold uppercase">
              Lead Front-end Developer
            </p>
            <p className="text-2xs text-end text-foreground-muted font-heading uppercase">
              Dec 2023 - Current
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center gap-3">
              <PresperLabs />

              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold font-heading leading-none uppercase">
                  Presper Labs
                </h3>
                <Link
                  href="https://www.presperlabs.com/"
                  target="_blank"
                  className="text-xs text-foreground-muted font-heading leading-none hover:text-accent transition-colors duration-300"
                >
                  presperlabs.com
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-sm leading-6">
                As the Lead Front-End Engineer at Presper Labs, I&apos;m
                responsible for the practical development of new technologies
                and software for our clients. My role involves leading the
                front-end development lifecycle, from initial prototype to final
                product.
              </p>

              <ul className="list-disc text-sm pl-8 leading-6">
                <li>
                  Lead the front-end architecture and development for new
                  software prototypes.
                </li>
                <li>
                  Collaborate with clients to build custom software solutions to
                  meet their needs.
                </li>
                <li>
                  Apply modern front-end technologies to build scalable and
                  reliable applications.
                </li>
                <li>
                  Develop core front-end technologies that serve as the
                  foundation for client products.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-34 min-w-34 flex flex-col gap-2">
            <p className="text-2xs text-end font-heading font-semibold uppercase">
              Lead Front-end Developer
            </p>
            <p className="text-2xs text-end text-foreground-muted font-heading uppercase">
              June 2022 - Nov 2023
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center gap-3">
              <OSQO />

              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold font-heading leading-none uppercase">
                  OSQO
                </h3>
                <Link
                  href="https://depositgaploans.com/"
                  target="_blank"
                  className="text-xs text-foreground-muted font-heading leading-none hover:text-accent transition-colors duration-300"
                >
                  depositgaploans.com
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-sm leading-6">
                As a foundation team member at this innovative financial
                services technology startup, I was responsible for building and
                leading all front-end development initiatives from the ground
                up.
              </p>

              <ul className="list-disc text-sm pl-8 leading-6">
                <li>
                  Built a scalable front-end architecture using React and
                  TypeScript.
                </li>
                <li>
                  Automated the front-end infrastructure to improve development
                  efficiency.
                </li>
                <li>
                  Led the development and ongoing upkeep of all front-end
                  applications and assets.
                </li>
                <li>
                  Managed the integration of the Intercom CRM system into the
                  platform.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-34 min-w-34 flex flex-col gap-2">
            <p className="text-2xs text-end font-heading font-semibold uppercase">
              Lead Front-end Developer
            </p>
            <p className="text-2xs text-end text-foreground-muted font-heading uppercase">
              Oct 2020 - May 2022
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center gap-3">
              <Bookwell />

              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold font-heading leading-none uppercase">
                  Bookwell
                </h3>
                <Link
                  href="https://www.bookwell.com.au/"
                  target="_blank"
                  className="text-xs text-foreground-muted font-heading leading-none hover:text-accent transition-colors duration-300"
                >
                  bookwell.com.au
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-sm leading-6">
                As the Lead Front-End Developer for this online beauty and
                wellness booking platform, I led a complete refresh of the user
                interface and underlying design systems.
              </p>

              <ul className="list-disc text-sm pl-8 leading-6">
                <li>
                  Led a comprehensive design overhaul for existing Bookwell
                  applications.
                </li>
                <li>
                  Established a new Design System to improve UI/UX consistency
                  and streamline development.
                </li>
                <li>
                  Implemented front-end designs using React/NextJS and
                  Elixir/Phoenix.
                </li>
                <li>
                  Prioritised SEO and a performant user experience in all
                  development work.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-34 min-w-34 flex flex-col gap-2">
            <p className="text-2xs text-end font-heading font-semibold uppercase">
              Lead Front-end Developer
            </p>
            <p className="text-2xs text-end text-foreground-muted font-heading uppercase">
              Apr 2019 - Oct 2020
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center gap-3">
              <Bookwell />

              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold font-heading leading-none uppercase">
                  Mogul
                </h3>
                <Link
                  href="https://mogul.gg/"
                  target="_blank"
                  className="text-xs text-foreground-muted font-heading leading-none hover:text-accent transition-colors duration-300"
                >
                  mogul.gg
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-sm leading-6">
                As the Lead Front-End Developer, I led the creation of a global
                online E-Sports tournament platform using Vue.js.
              </p>

              <ul className="list-disc text-sm pl-8 leading-6">
                <li>
                  Developed online E-sports tournament platform with a focus on
                  rapid creation and deployment.
                </li>
                <li>
                  Built a comprehensive component library to streamline future
                  development efforts.
                </li>
                <li>
                  Coordinated a geographically dispersed team of developers to
                  ensure effective collaboration.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-34 min-w-34 flex flex-col gap-2">
            <p className="text-2xs text-end font-heading font-semibold uppercase">
              Lead Software Engineer (Contract)
            </p>
            <p className="text-2xs text-end text-foreground-muted font-heading uppercase">
              Sep 2018 - Apr 2019
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center gap-3">
              <CultureAmp />
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold font-heading leading-none uppercase">
                  Culture Amp
                </h3>
                <Link
                  href="https://www.cultureamp.com/"
                  target="_blank"
                  className="text-xs text-foreground-muted font-heading leading-none hover:text-accent transition-colors duration-300"
                >
                  cultureamp.com
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-sm leading-6">
                As a Lead Front-End Developer for this employee management and
                experience platform , I focused on expanding the product&apos;s
                global reach through extensive localisation efforts.
              </p>

              <ul className="list-disc text-sm pl-8 leading-6">
                <li>
                  Led the localisation project for the company&apos;s staff
                  management tool.
                </li>
                <li>
                  Implemented Right-to-Left (RTL) localisation to support Arabic
                  translations
                </li>
                <li>
                  Integrated new translation strings across all sections of the
                  platform.
                </li>
                <li>
                  Coordinated with the translation team to ensure content
                  accuracy.
                </li>
                <li>
                  Mentored and provided guidance to junior developers in the
                  team.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-34 min-w-34 flex flex-col gap-2">
            <p className="text-2xs text-end font-heading font-semibold uppercase">
              Lead Front-end Developer
            </p>
            <p className="text-2xs text-end text-foreground-muted font-heading uppercase">
              April 2018 - Sep 2018
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold font-heading leading-none uppercase">
                  Horizon State
                </h3>
                <Link
                  href="https://horizonstate.com/"
                  target="_blank"
                  className="text-xs text-foreground-muted font-heading leading-none hover:text-accent transition-colors duration-300"
                >
                  horizonstate.com
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-sm leading-6">
                As the Lead Front-End Developer for this blockchain voting
                technology platform, my role was to develop specialised
                front-end applications and create a reusable, cross-platform UI
                library.
              </p>

              <ul className="list-disc text-sm pl-8 leading-6">
                <li>
                  Built a modular UI library with React Native Web for seamless
                  reuse across native and web platforms.
                </li>
                <li>
                  Rapidly prototyped concepts using Invision to expedite the
                  design and development process.
                </li>
                <li>
                  Coordinated efforts between local and remote developers to
                  ensure effective collaboration.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
