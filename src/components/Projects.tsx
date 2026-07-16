import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import { experienceProjects, projects, socials } from '../data/portfolio';
import { GitHubIcon } from './Icons';

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          num="02."
          kicker="Things I've built"
          title="Selected work"
        />

        {/* Walmart Global Tech spotlight */}
        <Reveal className="mb-4 flex items-center gap-3">
          <span className="mono text-sm font-semibold text-[color:var(--c1)]">
            Walmart Global Tech
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-[color:var(--c1)]/40 to-transparent" />
          <span className="mono text-xs text-[color:var(--muted)]">
            SWE Intern &middot; Summer 2026
          </span>
        </Reveal>
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          {experienceProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <ProjectCard p={p} featured />
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-4 flex items-center gap-3">
          <span className="mono text-sm font-semibold text-[color:var(--muted)]">
            Personal &amp; open-source
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <ProjectCard p={p} featured />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
          >
            <GitHubIcon width={18} height={18} />
            70+ more on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
