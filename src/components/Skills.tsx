import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { marqueeSkills, skillGroups } from '../data/portfolio';

const Marquee = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="marquee-wrap overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
    <div className={`marquee ${reverse ? 'reverse' : ''}`}>
      {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
        <span
          key={`${s}-${i}`}
          className="mono glass whitespace-nowrap rounded-full px-4 py-2 text-sm text-[color:var(--muted)]"
        >
          {s}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="relative px-5 py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeading num="01." kicker="What I work with" title="The toolkit" />

      <div className="space-y-3">
        <Marquee />
        <Marquee reverse />
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.label}
            delay={i * 80}
            className="glass glow-border group rounded-2xl p-6"
          >
            <h3 className="mono mb-4 text-sm uppercase tracking-widest text-[color:var(--c1)]">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-sm text-[color:var(--text)] transition-colors group-hover:border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
