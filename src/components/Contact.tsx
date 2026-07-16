import Reveal from './Reveal';
import { socials } from '../data/portfolio';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  DiscordIcon,
  ArrowIcon,
} from './Icons';

const links = [
  { label: 'GitHub', href: socials.github, Icon: GitHubIcon, sub: '@GaganMishra305' },
  {
    label: 'LinkedIn',
    href: socials.linkedin,
    Icon: LinkedInIcon,
    sub: 'Gagan Mishra',
  },
  {
    label: 'Email',
    href: `mailto:${socials.email}`,
    Icon: MailIcon,
    sub: socials.email,
  },
  {
    label: 'Discord',
    href: '#',
    Icon: DiscordIcon,
    sub: socials.discord,
  },
];

const Contact = () => (
  <section id="contact" className="relative px-5 py-28">
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <p className="eyebrow mb-4">04. What&apos;s next</p>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Let&apos;s build something
          <br />
          <span className="gradient-text">worth remembering.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[color:var(--muted)]">
          I&apos;m always up for interesting problems — internships, collabs, or
          just nerding out about AI and systems. My inbox is open.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-10">
        <a
          href={`mailto:${socials.email}`}
          className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-4 text-base"
        >
          Say hello
          <ArrowIcon width={18} height={18} />
        </a>
      </Reveal>

      <Reveal delay={200} className="mt-14">
        <div className="grid gap-4 sm:grid-cols-2">
          {links.map(({ label, href, Icon, sub }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="glass glow-border group flex items-center gap-4 rounded-2xl p-4 text-left transition-transform hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[color:var(--c1)] transition-colors group-hover:bg-white/10">
                <Icon width={20} height={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{label}</span>
                <span className="block truncate text-xs text-[color:var(--muted)]">
                  {sub}
                </span>
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </div>

    <footer className="mx-auto mt-24 max-w-7xl border-t border-white/5 pt-8 text-center">
      <p className="mono text-xs text-[color:var(--muted)]">
        Designed &amp; built by Gagan Mishra · Crafted with React, Vite &amp; a
        lot of coffee.
      </p>
    </footer>
  </section>
);

export default Contact;
