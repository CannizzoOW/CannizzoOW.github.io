import {
  ArrowUpRight,
  BarChart3,
  Radio,
  ShieldCheck,
} from "lucide-react";

function Github({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.36-3.9-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18A10.97 10.97 0 0 1 12 6.1c.98 0 1.95.13 2.86.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.24c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

const projects = [
  {
    number: "01",
    title: "Scorecard",
    label: "Graphic builder",
    description:
      "Build Overwatch scorecards and match graphics with a fast visual tool.",
    url: "https://cannizzoow.github.io/Scorecard/",
    repo: "https://github.com/CannizzoOW/Scorecard",
    icon: BarChart3,
    color: "yellow",
    updated: "Updated Jun 4, 2026",
  },
  {
    number: "02",
    title: "VOD Review",
    label: "Match analysis",
    description:
      "Structured match analysis and insights that make VOD reviews easier.",
    url: "https://cannizzoow.github.io/Vod-Review-output/",
    repo: "https://github.com/CannizzoOW/Vod-Review-output",
    icon: Radio,
    color: "purple",
    updated: "Updated Jun 14, 2026",
  },
  {
    number: "03",
    title: "Pathfinder Roles",
    label: "Team utility",
    description:
      "A lightweight tool for assigning roles and improving team clarity.",
    url: "https://cannizzoow.github.io/pathfinder-roles/",
    repo: "https://github.com/CannizzoOW/pathfinder-roles",
    icon: ShieldCheck,
    color: "blue",
    updated: "In development",
  },
];

function BrandMark() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <span>C</span>
      <i />
    </div>
  );
}

function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <article className={`project-card project-card--${project.color}`}>
      <div className="card-topline">
        <span className="project-number">/{project.number}</span>
        <span className="updated-note">{project.updated}</span>
      </div>

      <div className="project-icon"><Icon size={25} strokeWidth={1.8} /></div>
      <p className="eyebrow">{project.label}</p>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="card-actions">
        <a className="open-project" href={project.url} target="_blank" rel="noreferrer">
          Open project <ArrowUpRight size={17} />
        </a>
        <a className="repo-link" href={project.repo} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
          <Github size={18} />
        </a>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a
          className="header-credit-card"
          href="https://linktr.ee/CannizzoOW"
          target="_blank"
          rel="noreferrer"
          aria-label="CannizzoOW on Linktree"
        >
          <img
            src={`${import.meta.env.BASE_URL}cannizzo-profile.png`}
            alt=""
          />
          <span className="credit-copy">
            <small>Programming</small>
            <b>CannizzoOW</b>
          </span>
          <span className="linktree-hover">
            Open Linktree <ArrowUpRight size={13} />
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="https://github.com/CannizzoOW" target="_blank" rel="noreferrer">GitHub</a>
        </nav>

        <a className="github-button" href="https://github.com/CannizzoOW" target="_blank" rel="noreferrer">
          <Github size={18} /> <span>@CannizzoOW</span>
        </a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="availability"><span /> BUILT FOR ME</div>
            <h1>IDEAS BECOME<br /><em>TOOLS.</em></h1>
            <p>
              A collection of my projects. Tools large and small built to solve problems, scratch creative itches, and explore new concepts.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">Explore projects <ArrowUpRight size={18} /></a>
              <a className="text-button" href="https://github.com/CannizzoOW" target="_blank" rel="noreferrer"><Github size={18} /> View code</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <a
              className="preview-window"
              href="https://cannizzoow.github.io/Vod-Review-output/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}vod-review-preview.png`}
                alt="Rivals VOD Review Editor preview"
              />
              <span>View VOD Review <ArrowUpRight size={15} /></span>
            </a>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Featured projects</p>
              <h2>THE TOOLBOX</h2>
            </div>
            <p>Everything in one place. Pick a project and jump right in.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><BrandMark /><span><b>CANNIZZO</b><small>PROJECT HUB</small></span></div>
        <p>Built with React + Vite</p>
        <a href="https://github.com/CannizzoOW" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
      </footer>
    </div>
  );
}
