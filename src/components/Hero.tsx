import { useEffect, useState } from 'react';
import { profile, stats, socials } from '../data/portfolio';
import { ArrowDownIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

/** Typewriter that cycles through profile.roles. */
const useTypewriter = (words: string[]) => {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const done = text === word;
    const empty = text === '';
    let ms = del ? 45 : 90;
    if (done && !del) ms = 1600;
    if (empty && del) ms = 350;

    const t = setTimeout(() => {
      if (done && !del) return setDel(true);
      if (empty && del) {
        setDel(false);
        return setI((n) => n + 1);
      }
      setText((cur) =>
        del ? cur.slice(0, -1) : word.slice(0, cur.length + 1),
      );
    }, ms);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
};

const chips = ['PyTorch', 'Go', 'Rust', 'C++', 'FastAPI', 'React', 'LangGraph'];

const Hero = () => {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center px-5 pt-28 pb-16 md:pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        {/* Left: copy */}
        <div>
          <p className="eyebrow mb-5 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-[color:var(--c1)]" />
            Hi, my name is
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="gradient-text">Gagan</span> Mishra
          </h1>
          <div className="mono mt-4 h-8 text-lg text-[color:var(--muted)] sm:text-xl">
            <span className="caret text-white">{typed}</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
            {profile.blurb}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() =>
                document
                  .getElementById('work')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-primary rounded-full px-7 py-3 text-sm"
            >
              See my work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-ghost rounded-full px-7 py-3 text-sm font-semibold"
            >
              Get in touch
            </button>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[color:var(--muted)] transition-all hover:-translate-y-1 hover:text-[color:var(--c1)]"
            >
              <GitHubIcon width={22} height={22} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[color:var(--muted)] transition-all hover:-translate-y-1 hover:text-[color:var(--c1)]"
            >
              <LinkedInIcon width={22} height={22} />
            </a>
            <a
              href={`mailto:${socials.email}`}
              aria-label="Email"
              className="text-[color:var(--muted)] transition-all hover:-translate-y-1 hover:text-[color:var(--c1)]"
            >
              <MailIcon width={22} height={22} />
            </a>
          </div>
        </div>

        {/* Right: avatar */}
        <div className="relative mx-auto hidden md:block">
          <div className="relative h-64 w-64 lg:h-72 lg:w-72">
            <div
              className="absolute inset-0 rounded-full opacity-70 blur-2xl"
              style={{
                background:
                  'conic-gradient(from 0deg, var(--c1), var(--c2), var(--c3), var(--c1))',
              }}
            />
            <div className="float relative h-full w-full rounded-full p-[3px]">
              <div
                className="h-full w-full rounded-full p-[3px]"
                style={{
                  background:
                    'conic-gradient(from 0deg, var(--c1), var(--c2), var(--c3), var(--c1))',
                }}
              >
                <img
                  src={profile.avatar}
                  alt="Gagan Mishra"
                  loading="eager"
                  className="h-full w-full rounded-full border-4 border-[color:var(--bg)] object-cover"
                />
              </div>
            </div>
            {chips.map((c, idx) => {
              const angle = (idx / chips.length) * Math.PI * 2;
              const r = 165;
              return (
                <span
                  key={c}
                  className="glass mono float absolute rounded-full px-3 py-1 text-xs text-white"
                  style={{
                    left: `calc(50% + ${Math.cos(angle) * r}px)`,
                    top: `calc(50% + ${Math.sin(angle) * r}px)`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${idx * 0.4}s`,
                  }}
                >
                  {c}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 px-5">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="gradient-text text-2xl font-bold sm:text-3xl">
                {s.value}
              </div>
              <div className="text-xs text-[color:var(--muted)]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#skills"
        aria-label="Scroll down"
        className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 animate-bounce text-[color:var(--muted)] lg:block"
      >
        <ArrowDownIcon />
      </a>
    </section>
  );
};

export default Hero;
