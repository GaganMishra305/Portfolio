import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { timeline } from '../data/portfolio';

const Timeline = () => (
  <section id="journey" className="relative px-5 py-24">
    <div className="mx-auto max-w-4xl">
      <SectionHeading num="03." kicker="Where I've been" title="The journey" />

      <div className="relative">
        {/* spine */}
        <span className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--c1)] via-[color:var(--c2)] to-transparent md:left-1/2" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className={`relative flex flex-col gap-4 pl-12 md:grid md:grid-cols-2 md:items-center md:gap-10 md:pl-0 ${
                i % 2 === 0 ? '' : 'md:[direction:rtl]'
              }`}
            >
              {/* node */}
              <span className="absolute left-[11px] top-1 h-4 w-4 rounded-full border-2 border-[color:var(--bg)] bg-[color:var(--c1)] md:left-1/2 md:-translate-x-1/2" />

              <div
                className={`[direction:ltr] ${
                  i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:pl-10'
                }`}
              >
                <span className="mono text-xs uppercase tracking-widest text-[color:var(--c1)]">
                  {item.kind === 'work' ? 'Experience' : 'Education'}
                </span>
                <div className="mono mt-1 text-sm text-[color:var(--muted)]">
                  {item.from} — {item.to}
                </div>
              </div>

              <div className="glass glow-border [direction:ltr] rounded-2xl p-5">
                <h3 className="text-lg font-bold">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-[color:var(--c1)] hover:underline"
                  >
                    {item.place}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-[color:var(--c1)]">
                    {item.place}
                  </p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
