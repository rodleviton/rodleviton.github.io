import { Css3Icon } from "@/components/icons/css3";
import { Html5Icon } from "@/components/icons/html5";
import { JavascriptIcon } from "@/components/icons/javascript";
import { NextIcon } from "@/components/icons/next";
import { PinIcon } from "@/components/icons/pin";
import { PlusIcon } from "@/components/icons/plus";
import { ReactIcon } from "@/components/icons/react";
import { TypescriptIcon } from "@/components/icons/typescript";
import { Bookwell } from "@/components/logos/bookwell";
import { OSQO } from "@/components/logos/osqo";
import { PresperLabs } from "@/components/logos/presper-labs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="container py-12 flex gap-8 justify-between">
        <div className="flex gap-8 items-center">
          <div className="flex w-34 min-w-34 h-32 items-center justify-end">
            <Image
              src="/images/rodleviton.webp"
              className="rounded-full w-28 min-w-28 h-28 min-h-28 overflow-hidden border-2 border-gray-300"
              alt=""
              width={512}
              height={512}
              priority
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold font-heading uppercase leading-8">
              Rod
              <br />
              Leviton
            </h1>
            <h2 className="text-sm font-heading uppercase">
              Front-end developer
            </h2>
          </div>
        </div>

        <Link
          target="_blank"
          href="https://maps.app.goo.gl/iMTLaehFJfjUGAuG8"
          className="group flex gap-2 items-center self-end"
        >
          <div className="group-hover:text-accent transition-colors duration-300">
            <PinIcon />
          </div>
          <span className="text-sm">Blue Mountains, Australia</span>
        </Link>
      </header>
      <section className="container py-8 flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <div className="text-accent flex items-center w-34 min-w-34 justify-end">
              <PlusIcon size="sm" />
            </div>
            <div className="flex w-full gap-8 items-center">
              <h2 className="text-xl whitespace-nowrap font-bold font-heading uppercase">
                Introduction
              </h2>
              <div className="flex w-full h-px bg-foreground"></div>
            </div>
          </div>
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

        <div className="flex flex-col gap-4">
          <div className="flex gap-8">
            <div className="w-34 min-w-34 flex flex-col gap-2">
              <p className="text-2xs text-end font-heading font-semibold uppercase">
                JavaScript / TypeScript
              </p>
            </div>
            <div className="flex w-full">
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-34 min-w-34 flex flex-col gap-2">
              <p className="text-2xs text-end font-heading font-semibold uppercase">
                HTML / CSS
              </p>
            </div>
            <div className="flex w-full">
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-background-muted rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-34 min-w-34 flex flex-col gap-2">
              <p className="text-2xs text-end font-heading font-semibold uppercase">
                UI Design / UX
              </p>
            </div>
            <div className="flex w-full">
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-background-muted rounded-full"></div>
                <div className="w-4 h-4 bg-background-muted rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-34 min-w-34 flex flex-col gap-2">
              <p className="text-2xs text-end font-heading font-semibold uppercase">
                React / Next.js
              </p>
            </div>
            <div className="flex w-full">
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-34 min-w-34"></div>
          <div className="flex gap-4.5">
            <Link
              href="https://www.javascript.com/"
              target="_blank"
              className="hover:text-accent transition-colors duration-300"
            >
              <JavascriptIcon />
            </Link>
            <Link
              href="https://www.typescriptlang.org/"
              target="_blank"
              className="hover:text-accent transition-colors duration-300"
            >
              <TypescriptIcon />
            </Link>
            <Link
              href="https://www.w3.org/html/"
              target="_blank"
              className="hover:text-accent transition-colors duration-300"
            >
              <Html5Icon />
            </Link>
            <Link
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              target="_blank"
              className="hover:text-accent transition-colors duration-300"
            >
              <Css3Icon />
            </Link>
            <Link
              href="https://react.dev/"
              target="_blank"
              className="hover:text-accent transition-colors duration-300"
            >
              <ReactIcon />
            </Link>
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="hover:text-accent transition-colors duration-300"
            >
              <NextIcon />
            </Link>
          </div>
        </div>
      </section>
      <section className="container py-8 flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <div className="text-accent flex items-center w-34 min-w-34 justify-end">
              <PlusIcon size="sm" />
            </div>
            <div className="flex w-full gap-8 items-center">
              <h2 className="text-xl whitespace-nowrap font-bold font-heading uppercase">
                Experience Summary
              </h2>
              <div className="flex w-full h-px bg-foreground"></div>
            </div>
          </div>
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
