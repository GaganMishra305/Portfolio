import { useEffect, useRef, useState } from 'react';
import { animate, createTimeline, stagger } from 'animejs';
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
      setText((cur) => (del ? cur.slice(0, -1) : word.slice(0, cur.length + 1)));
    }, ms);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
};

/** Renders a word as individual animatable letter spans. */
const Letters = ({ text, gradient }: { text: string; gradient?: boolean }) =>
  [...text].map((ch, i) => (
    <span
      key={i}
      className={`hero-letter inline-block ${gradient ? 'gradient-text' : ''}`}
    >
      {ch}
    </span>
  ));

const chips = ['PyTorch', 'Go', 'Rust', 'C++', 'FastAPI', 'React', 'LangGraph'];

const Hero = () => {
  const typed = useTypewriter(profile.roles);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [motion] = useState(
    () =>
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    if (!motion || !rootRef.current) return;
    const root = rootRef.current;
    const letters = root.querySelectorAll('.hero-letter');
    const eyebrow = root.querySelector('[data-reveal="eyebrow"]');
    const blocks = root.querySelectorAll('[data-reveal="block"]');
    const avatar = document.querySelector('[data-reveal="avatar"]');

    const tl = createTimeline({
      defaults: { ease: 'outExpo', duration: 850 },
    });

    if (eyebrow)
      tl.add(eyebrow, { opacity: [0, 1], translateX: [-16, 0], duration: 600 });

    tl.add(
      letters,
      {
        opacity: [0, 1],
        translateY: [46, 0],
        rotateZ: [7, 0],
        duration: 720,
        delay: stagger(26),
      },
      '-=350',
    ).add(
      blocks,
      { opacity: [0, 1], translateY: [18, 0], delay: stagger(90) },
      '-=450',
    );

    if (avatar)
      animate(avatar, {
        opacity: [0, 1],
        scale: [0.85, 1],
        duration: 1100,
        ease: 'outElastic(1, .7)',
        delay: 350,
      });

    return () => {
      tl.pause();
    };
  }, [motion]);

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col justify-center px-5 pt-28 pb-16 md:pt-24"
    >
      <div
        ref={rootRef}
        className={`mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[1.4fr_1fr] ${
          motion ? 'hero-anim' : ''
        }`}
      >
        {/* Left: copy */}
        <div>
          <p
            data-reveal="eyebrow"
            className="eyebrow mb-5 flex items-center gap-3"
          >
            <span className="inline-block h-px w-8 bg-[color:var(--c1)]" />
            Hi, my name is
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <Letters text="Gagan" gradient />{' '}
            <Letters text="Mishra" />
          </h1>
          <div
            data-reveal="block"
            className="mono mt-4 h-8 text-lg text-[color:var(--muted)] sm:text-xl"
          >
            <span className="caret text-white">{typed}</span>
          </div>

          <p
            data-reveal="block"
            className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg"
          >
            {profile.blurb}
          </p>

          <div
            data-reveal="block"
            className="mt-8 flex flex-wrap items-center gap-4"
          >
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

          <div data-reveal="block" className="mt-8 flex items-center gap-5">
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
        <div
          data-reveal="avatar"
          className="relative mx-auto hidden md:block"
          style={motion ? { opacity: 0 } : undefined}
        >
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

      {/* Stats strip: in normal flow on mobile, pinned to bottom on desktop */}
      <div className="mt-16 w-full lg:pointer-events-none lg:absolute lg:inset-x-0 lg:bottom-8 lg:mt-0 lg:px-5">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
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
