// -----------------------------------------------------------------------------
// Curated portfolio data for Gagan Mishra.
// Static + curated (no runtime GitHub API) => fast, reliable, rate-limit proof.
// -----------------------------------------------------------------------------

export const profile = {
  name: 'Gagan Mishra',
  handle: 'GaganMishra305',
  avatar: 'https://avatars.githubusercontent.com/u/70949548?v=4',
  tagline: 'I build intelligent systems — often from scratch.',
  location: 'India',
  blurb:
    "B.Tech @ IIIT Lucknow ('27) with software engineering experience at Walmart Global Tech. I live at the intersection of AI/ML and low-level systems — training multimodal models one day, writing a physics engine or an HTTP server from raw TCP sockets the next. I ship end-to-end: from the math, to the backend, to the pixels.",
  roles: [
    'AI / ML Engineer',
    'Full-Stack Developer',
    'Systems Tinkerer',
    'I build things from scratch.',
  ],
};

export const stats = [
  { value: 'WGT', label: 'Walmart Global Tech' },
  { value: '70+', label: 'Public repositories' },
  { value: "'27", label: 'IIIT Lucknow, B.Tech' },
  { value: '∞', label: 'Things built from scratch' },
];

export const socials = {
  github: 'https://github.com/GaganMishra305',
  linkedin: 'https://www.linkedin.com/in/gagan-mishra-259ab726b',
  email: 'gaganmishra3005@gmail.com',
  phone: '+91-6386564865',
  discord: 'Quantumiser',
};

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Agentic AI',
    items: [
      'LangGraph',
      'MCP',
      'RAG',
      'Multi-agent Systems',
      'Tool Use',
      'Guardrails',
      'LLM Orchestration',
      'State Machines',
    ],
  },
  {
    label: 'Languages',
    items: ['Python', 'C++', 'Go', 'Rust', 'TypeScript', 'JavaScript', 'Java'],
  },
  {
    label: 'AI / ML',
    items: [
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'OpenCV',
      'Pandas',
      'NumPy',
    ],
  },
  {
    label: 'Backend',
    items: ['FastAPI', 'Flask', 'Django', 'Node.js', 'Express', 'REST APIs'],
  },
  {
    label: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    label: 'Data & Infra',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'Git',
      'CI/CD',
    ],
  },
];

// Flat marquee list
export const marqueeSkills: string[] = skillGroups.flatMap((g) => g.items);

export interface Project {
  title: string;
  blurb: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  accent: [string, string];
  featured?: boolean;
  metric?: string;
  company?: string;
}

// Walmart Global Tech internship work. NDA-safe: no internal system codenames,
// incident IDs, infra details or private links — only what I designed & built.
export const experienceProjects: Project[] = [
  {
    title: 'Agentic Incident-Triage Copilot',
    blurb:
      'A human-in-the-loop AI copilot that walks an on-call engineer through resolving a live operational incident. Deterministic state-machine workflow grounded in real runbooks, structured tool access via MCP (no fragile screen-scraping), and guardrails that gate every action with a source citation — so it never invents a fix. Shipped a web UI over the agent and evaluated it with a blind replay of resolved incidents judged by a neutral LLM.',
    tags: ['Agentic AI', 'MCP', 'State Machine', 'Guardrails', 'Python'],
    accent: ['#0071dc', '#22d3ee'],
    metric: '~93% right problem area',
    company: 'Walmart Global Tech',
  },
  {
    title: 'Distributed Job Scheduler',
    blurb:
      'Re-architected a high-volume returns-processing pipeline off a heavy, always-on streaming path and onto a lighter in-house DB-backed distributed scheduler — a timer picks pending work straight from the database and hands it to the same proven business logic. Fewer moving parts, feature-flagged rollout that ramps up gradually and rolls back instantly, and a real cut in infra dependency and cloud cost. Written up as an ADR.',
    tags: ['Distributed Systems', 'Scheduler', 'Backend', 'Feature Flags', 'ADR'],
    accent: ['#0071dc', '#8b5cf6'],
    metric: 'Streaming → DB-backed',
    company: 'Walmart Global Tech',
  },
];

// Personal & open-source projects, ordered by most recent GitHub activity.
// Blurbs kept a similar length so every card stays the same size.
export const projects: Project[] = [
  {
    title: 'ShockFits',
    blurb:
      'A chess engine written from scratch in C++ — board representation, legal move generation and a search that actually plays. Built to learn by building.',
    tags: ['C++', 'Algorithms', 'Search'],
    link: 'https://github.com/GaganMishra305/ShockFits',
    linkLabel: 'Source',
    accent: ['#f472b6', '#38bdf8'],
  },
  {
    title: 'HTTP-Server',
    blurb:
      'An HTTP server built up from raw TCP sockets in Go — hand-rolled request parsing, routing and responses to see exactly what a web framework hides.',
    tags: ['Go', 'Systems', 'Networking'],
    link: 'https://github.com/GaganMishra305/HTTP-Server',
    linkLabel: 'Source',
    accent: ['#38bdf8', '#8b5cf6'],
  },
  {
    title: 'physix2d',
    blurb:
      'A 2D physics engine written from scratch in C++ — rigid bodies, collisions and constraints, with a pile of demos. No libraries, just the math.',
    tags: ['C++', 'Physics', 'From scratch'],
    link: 'https://github.com/GaganMishra305/physix2d',
    linkLabel: 'Source',
    accent: ['#f472b6', '#8b5cf6'],
  },
  {
    title: 'TraffiSense',
    blurb:
      'Predictive, simulation-driven traffic command for big city events — a live congestion heatmap, ML corridor-saturation forecasts and resource planning.',
    tags: ['Python', 'ML Forecasting', 'Simulation', 'Dashboards'],
    link: 'https://github.com/GaganMishra305/TraffiSense',
    linkLabel: 'Source',
    accent: ['#22d3ee', '#f472b6'],
    metric: 'AUC 0.798',
  },
  {
    title: 'VulnPilot',
    blurb:
      'AI security automation orchestrating 6+ tools (Nmap, SQLMap, WPScan) behind a Groq-driven reasoning layer, no-code workflows and real-time dashboards.',
    tags: ['Python', 'Groq SDK', 'Security', 'Automation'],
    link: 'https://www.youtube.com/watch?v=_qtCN6bvSeA',
    linkLabel: 'Watch demo',
    accent: ['#22d3ee', '#8b5cf6'],
    metric: '−40% triage time',
  },
  {
    title: 'NoPhishing',
    blurb:
      'An ML-based browser extension that flags phishing links on the fly, scoring every URL in real time before you ever click through to the trap.',
    tags: ['Python', 'ML', 'Browser Extension'],
    link: 'https://github.com/GaganMishra305/NoPhishing',
    linkLabel: 'Source',
    accent: ['#22d3ee', '#38bdf8'],
  },
  {
    title: 'Synapse',
    blurb:
      'A multimodal AI system stitching vision, language and audio into one reasoning pipeline — pushing cross-modal understanding on a student budget.',
    tags: ['PyTorch', 'Multimodal', 'Deep Learning'],
    link: 'https://github.com/GaganMishra305/Synapse',
    linkLabel: 'Source',
    accent: ['#38bdf8', '#22d3ee'],
    metric: 'Multimodal',
  },
  {
    title: 'Nugget-bot',
    blurb:
      'A RAG-powered chatbot for restaurant recommendations — retrieval-augmented generation grounding an LLM in real menus, reviews and honest vibes.',
    tags: ['RAG', 'LLM', 'NLP'],
    link: 'https://github.com/GaganMishra305/Nugget-bot',
    linkLabel: 'Source',
    accent: ['#8b5cf6', '#22d3ee'],
  },
  {
    title: 'SmartEd',
    blurb:
      'A personalized learning platform with 3 multimodal AI agents and a recommendation engine on a LangGraph + FastAPI backend serving 200+ users.',
    tags: ['LangGraph', 'FastAPI', 'Multi-agent', 'RecSys'],
    link: 'https://github.com/Personalized-SmartEd',
    linkLabel: 'View org',
    accent: ['#8b5cf6', '#f472b6'],
    metric: '200+ users',
  },
];

export interface TimelineItem {
  title: string;
  place: string;
  from: string;
  to: string;
  detail: string;
  link?: string;
  kind: 'work' | 'edu';
}

export const timeline: TimelineItem[] = [
  {
    title: 'Software Engineer Intern',
    place: 'Walmart Global Tech',
    from: 'Summer',
    to: '2026',
    detail:
      'Six weeks on the Returns supply-chain platform. Built an agentic, human-in-the-loop incident-triage copilot (state-machine workflow, MCP tool access, guardrails) and re-architected a high-volume returns pipeline onto a lighter in-house distributed scheduler — fewer moving parts, safer rollout, lower cost. Also shipped a hackathon project end-to-end with a team.',
    kind: 'work',
  },
  {
    title: 'AI Product Development Intern',
    place: 'Predulive Labs',
    from: 'Jan 2025',
    to: 'Mar 2025',
    detail:
      'Built and shipped AI product features end-to-end — prototyping multi-agent workflows and turning research-y ideas into things people could actually use.',
    link: 'https://www.predulivelabs.in/',
    kind: 'work',
  },
  {
    title: 'B.Tech, Computer Science',
    place: 'IIIT Lucknow',
    from: '2023',
    to: '2027',
    detail:
      'Deep-diving AI/ML, systems and everything in between — while building an absurd number of side projects along the way.',
    kind: 'edu',
  },
];
