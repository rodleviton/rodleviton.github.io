import Image from "next/image";
import { profileData } from "@/data/profile";
import { skillsData } from "@/data/skills";
import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { socialData } from "@/data/social";
import { SetupItem } from "@/components/bios/setup-item";
import { SystemTime } from "@/components/bios/system-time";
import { HealthStatus } from "@/components/bios/health-status";
import { displayHost, statusTone } from "@/lib/status";

const SLOTS = ["Primary Master  ", "Primary Slave   ", "Secondary Master", "Secondary Slave "];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2>
      <span className="k" aria-hidden="true">
        &#9658;
      </span>
      {children}
    </h2>
  );
}

export default function Home() {
  const current = experienceData[0];

  return (
    <main className="wrap">
      <section id="introduction" aria-labelledby="introduction-title">
        <SectionTitle>
          <span id="introduction-title">Main</span>
        </SectionTitle>
        <div className="main">
          <div>
            <div className="who">
              <Image src="/images/portrait.png" alt="Pixel art portrait of Rod Leviton" width={160} height={160} priority />
              <div>
                <h1>{profileData.name}</h1>
                <p>{profileData.title}</p>
              </div>
            </div>
            <dl className="kv">
              <div className="kv-row">
                <dt>Name</dt>
                <dd>{profileData.name}</dd>
              </div>
              <div className="kv-row">
                <dt>Title</dt>
                <dd>{profileData.title}</dd>
              </div>
              <div className="kv-row">
                <dt>Location</dt>
                <dd>
                  <a href={profileData.location.mapUrl}>{profileData.location.text}</a>
                </dd>
              </div>
              <div className="kv-row">
                <dt>Current</dt>
                <dd>
                  {current.role}, {current.company}
                </dd>
              </div>
              <div className="kv-row">
                <dt>System time</dt>
                <dd>
                  <SystemTime />
                </dd>
              </div>
            </dl>
            <div className="detect">
              {skillsData.map((skill, index) => (
                <div key={skill.label}>
                  Detecting {SLOTS[index] ?? "Device          "} ... <span className="r">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="help">
            <h3>Item Specific Help</h3>
            <p>{profileData.introduction}</p>
            <HealthStatus />
          </div>
        </div>
      </section>

      <section id="experience" aria-labelledby="experience-title">
        <SectionTitle>
          <span id="experience-title">Experience Summary</span>
        </SectionTitle>
        <div className="list">
          {experienceData.map((job, index) => (
            <SetupItem
              key={job.company}
              defaultOpen={index === 0}
              header={
                <>
                  <span className="d">{job.dates}</span>
                  <span className="c">
                    {job.logo && <span className="logo">{job.logo}</span>}
                    {job.company}
                  </span>
                  <span className="x">{job.role}</span>
                </>
              }
            >
              <a className="site" href={job.website}>
                {displayHost(job.website)}
              </a>
              <p>{job.description}</p>
              <ul>
                {job.bulletPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </SetupItem>
          ))}
        </div>
      </section>

      <section id="work" aria-labelledby="work-title">
        <SectionTitle>
          <span id="work-title">Selected Work: PCI Device Listing</span>
        </SectionTitle>
        <div className="list">
          <div className="pci-head" aria-hidden="true">
            <span />
            <span>Bus Dev</span>
            <span>Device</span>
            <span>Class</span>
            <span>Status</span>
          </div>
          {projectsData.map((project, index) => (
            <SetupItem
              key={project.name}
              className="pci"
              defaultOpen
              header={
                <>
                  <span className="bus">
                    00&nbsp;&nbsp;{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="c">
                    {project.logo && <span className="logo">{project.logo}</span>}
                    {project.name}
                  </span>
                  <span>{project.category}</span>
                  <span className={`st ${statusTone(project.status)}`}>[{project.status}]</span>
                </>
              }
            >
              <a className="site" href={project.url}>
                {displayHost(project.url)}
              </a>{" "}
              <span className="dim">&middot; {project.detail}</span>
              <p>{project.description}</p>
            </SetupItem>
          ))}
        </div>
      </section>

      <section id="presence" aria-labelledby="presence-title">
        <SectionTitle>
          <span id="presence-title">Presence: Serial Ports</span>
        </SectionTitle>
        <div className="list ports">
          {socialData.map((social, index) => (
            <div className="item" key={social.platform}>
              <a className="item-row" href={social.profileUrl}>
                <span className="marker">COM{index + 1}</span>
                <span className="c">
                  {social.logo && <span className="logo">{social.logo}</span>}
                  {social.platform}
                </span>
                <span className="x">{displayHost(social.profileUrl)}</span>
              </a>
            </div>
          ))}
        </div>
        <div className="end">
          <p className="a">Press DEL to enter the prompt</p>
          <p>1981-UI-DEV-RDLV-1985PX-00</p>
        </div>
      </section>
    </main>
  );
}
