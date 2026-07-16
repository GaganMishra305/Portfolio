// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'GaganMishra305', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['GaganMishra305/Synapse', 'GaganMishra305/InDiet', 'GaganMishra305/Simulations', 'GaganMishra305/physix2d', 'Personalized-SmartEd/ML-Service', 'GaganMishra305/NoPhishing', 'GaganMishra305/Handgesture-Game-Player', 'GaganMishra305/Nugget-bot'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'VulnPilot',
          description:
            'AI-powered security automation platform integrating 6+ tools (Nmap, SQLMap, WPScan) with Groq SDK-driven code analysis, no-code workflows, and real-time dashboards that reduced triage time by 40%.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkw_uTKXnUoUP1fTPpVhKHopLjtuEKxds2QQ&s',
          link: 'https://www.youtube.com/watch?v=_qtCN6bvSeA',
        },
        {
          title: 'SmartEd',
          description:
            'Personalized learning platform with 3 multimodal AI agents and recommendation engine tracking 4 metrics, deployed on LangGraph + FastAPI backend supporting 200+ concurrent users, achieving 25% increase in study efficiency and 18% improvement in learning outcomes.',
          imageUrl:
            'https://www.21kschool.com/in/wp-content/uploads/sites/4/2023/09/Pros-and-Cons-of-Using-Education-Technology.png',
          link: 'https://github.com/Personalized-SmartEd',
        },
      ],
    },
  },
  seo: {
    title: 'Gagan Mishra — AI/ML Engineer & Systems Tinkerer',
    description:
      'Portfolio of Gagan Mishra — B.Tech @ IIIT Lucknow. I build intelligent systems, often from scratch: multimodal AI, physics engines, HTTP servers and more.',
    imageURL: 'https://avatars.githubusercontent.com/u/70949548?v=4',
  },
  social: {
    linkedin: 'gagan-mishra-259ab726b',
    // x: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    // facebook: '',
    // instagram: '',
    // reddit: '',
    // threads: '',
    // youtube: '', 
    // udemy: '',
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', 
    discord: 'Quantumiser',
    // telegram: '',
    // website: 'https://www.arifszn.com',
    phone: '+91-6386564865',
    email: 'gaganmishra3005@gmail.com',
  },
  resume: {
    fileUrl: '', // Resume download intentionally removed — the site IS the resume.
  },
  skills: [
    'Python',
    'JavaScript',
    'C++',
    'Java',
    'Go',
    'Rust',
    'React.js',
    'Next.js',
    'Node.js',
    'Express',
    'Flask',
    'Django',
    'FastAPI',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Docker',
    'Kubernetes',
    'Git',
    'CI/CD',
    'TensorFlow',
    'PyTorch',
    'scikit-learn',
    'Pandas',
    'NumPy',
    'OpenCV',
    'Tailwind CSS',
    'REST APIs',
  ],
  experiences: [
    {
      company: 'Predulive Labs',
      position: 'AI Product Development Intern',
      from: 'January 2025',
      to: 'March 2025',
      companyLink: 'https://www.predulivelabs.in/',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'IIIT Lucknow',
      degree: 'B. Tech.',
      from: '2023',
      to: '2027',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
