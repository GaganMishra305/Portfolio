import { useRef } from 'react';
import type { Project } from '../data/portfolio';
import { ArrowIcon } from './Icons';

const ProjectCard = ({ p, featured }: { p: Project; featured?: boolean }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const hasLink = Boolean(p.link);
  const showBanner = Boolean(featured);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${px * 5}deg) rotateX(${-py * 5}deg) translateY(-4px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  const banner = (
    <div className="relative -mx-6 -mt-6 mb-5 h-40 overflow-hidden md:-mx-7 md:-mt-7">
      {p.image ? (
        <img
          src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.image}`}
          alt={`${p.title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${p.accent[0]}22, ${p.accent[1]}22), radial-gradient(circle at 30% 20%, ${p.accent[0]}33, transparent 60%), radial-gradient(circle at 80% 90%, ${p.accent[1]}33, transparent 55%)`,
          }}
        >
          <span
            className="text-6xl font-bold opacity-30"
            style={{
              background: `linear-gradient(135deg, ${p.accent[0]}, ${p.accent[1]})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {p.title.charAt(0)}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d16] via-transparent to-transparent" />
      {p.metric && (
        <span className="mono absolute right-3 top-3 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[11px] text-white backdrop-blur-sm">
          {p.metric}
        </span>
      )}
    </div>
  );

  const inner = (
    <>
      {showBanner ? (
        banner
      ) : (
        <>
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
            style={{
              background: `radial-gradient(circle, ${p.accent[0]}, transparent 70%)`,
            }}
          />
          <div className="mb-5 flex items-start justify-between gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white"
              style={{
                background: `linear-gradient(135deg, ${p.accent[0]}, ${p.accent[1]})`,
              }}
            >
              {p.title.charAt(0)}
            </div>
            {p.metric && (
              <span className="mono rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-[color:var(--c1)]">
                {p.metric}
              </span>
            )}
          </div>
        </>
      )}

      {p.company && (
        <span className="mono mb-1 block text-[11px] uppercase tracking-widest text-[color:var(--muted)]">
          {p.company}
        </span>
      )}

      <h3 className="flex items-center gap-2 text-xl font-bold tracking-tight">
        {p.title}
        {hasLink && (
          <ArrowIcon
            width={16}
            height={16}
            className="text-[color:var(--muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--c1)]"
          />
        )}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--muted)]">
        {p.blurb}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="mono rounded-md bg-white/5 px-2 py-1 text-[11px] text-[color:var(--muted)]"
          >
            {t}
          </span>
        ))}
      </div>

      {hasLink ? (
        <span className="mono mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--c1)] opacity-0 transition-opacity group-hover:opacity-100">
          {p.linkLabel}
          <ArrowIcon width={14} height={14} />
        </span>
      ) : (
        <span className="mono mt-5 inline-flex items-center gap-1.5 text-xs text-[color:var(--muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--c1)]" />
          Internal &mdash; details on request
        </span>
      )}
    </>
  );

  const className = `tilt glass glow-border group relative flex flex-col overflow-hidden rounded-2xl p-6 ${
    featured ? 'md:p-7' : ''
  }`;

  if (hasLink) {
    return (
      <a
        ref={ref as never}
        href={p.link}
        target="_blank"
        rel="noreferrer"
        onMouseMove={onMove}
        onMouseLeave={reset}
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className={className}>
      {inner}
    </div>
  );
};

export default ProjectCard;
