import Reveal from './Reveal';

const SectionHeading = ({
  num,
  title,
  kicker,
}: {
  num: string;
  title: string;
  kicker?: string;
}) => (
  <Reveal className="mb-12">
    {kicker && <p className="eyebrow mb-3">{kicker}</p>}
    <h2 className="flex items-baseline gap-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
      <span className="section-num text-lg sm:text-xl">{num}</span>
      <span>{title}</span>
      <span className="ml-2 hidden h-px flex-1 bg-gradient-to-r from-white/20 to-transparent sm:block" />
    </h2>
  </Reveal>
);

export default SectionHeading;
