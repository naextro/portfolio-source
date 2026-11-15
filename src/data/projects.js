// Source of truth for the Work section.
// "latest" is pulled from github.com/naextro (newest activity first, checked Nov 2026).
// Code snippets on the cards are lifted from each repo's README, not invented.
// Tones: muted | fg | acc (acc = the card's accent colour).

export const GITHUB_URL = 'https://github.com/naextro'
export const REPO_COUNT = 25

export const latest = [
  {
    id: 'liner',
    name: 'Liner Desktop',
    kind: 'Open source · Fork',
    date: 'Nov 2026',
    badge: 'Fork',
    accent: 'crimson',
    desc: 'Working in my fork of Liner, a desktop player for Windows and Linux that pulls your music and playlists from other platforms into one clean app. No ads, synced lyrics.',
    tags: ['Desktop', 'Windows', 'Linux'],
    href: 'https://github.com/naextro/desktop',
    code: [
      [['muted', '# tryliner/desktop -> naextro/desktop']],
      [['muted', 'platforms  '], ['fg', 'Windows, Linux']],
      [['muted', 'ads        '], ['acc', 'none']],
      [['muted', 'lyrics     '], ['acc', 'synced']],
    ],
  },
  {
    id: 'aerisbot',
    name: 'AerisBot',
    kind: 'Discord · AI agent',
    date: 'Oct 2026',
    badge: 'Python',
    accent: 'neon',
    desc: 'An autonomous Discord server admin powered by Gemma 4 31B and discord.py. Admins talk to it in plain language and it picks the right tools: channels, roles, moderation, purges. Destructive actions need a confirmation click and everything is audit-logged.',
    tags: ['Python', 'discord.py', 'LLM tools'],
    href: 'https://github.com/naextro/AerisBot',
    code: [
      [['acc', '/admin '], ['fg', '<prompt>']],
      [['acc', '@bot '], ['fg', '<prompt>']],
      [['muted', '-> channels, roles, moderation']],
      [['muted', '$ '], ['fg', 'uv run python -m src.main']],
    ],
  },
  {
    id: 'gms-role-fix',
    name: 'GMS Role Holders Fix',
    kind: 'Android · Root module',
    date: 'Oct 2026',
    badge: 'v2.0',
    accent: 'ember',
    desc: 'APatch / Magisk / KernelSU module that fixes Google sign-in loops and Play Services crashes on Android 13 to 16 ROMs, by granting GMS the role-holder permissions newer versions ask for.',
    tags: ['Android', 'APatch', 'Magisk', 'KernelSU'],
    href: 'https://github.com/naextro/gms-role-fix',
    code: [
      [['muted', 'SecurityException: getRoleHoldersAsUser']],
      [['acc', '+ GET_ROLE_HOLDERS']],
      [['acc', '+ MANAGE_ROLE_HOLDERS']],
      [['acc', '+ OBSERVE_ROLE_HOLDERS']],
    ],
  },
  {
    id: 'unit-3',
    name: 'Unit-3',
    kind: 'Linux · Desktop rice',
    date: 'Jul 2026',
    badge: 'Fork',
    accent: 'crimson',
    desc: 'NieR:Automata-themed Hyprland + Quickshell + Waybar setup for Arch Linux, forked from samyns/unit-3. Radial control center, wallpaper picker, lockscreen, and an AI chat panel that talks to Ollama, Gemini, Groq or OpenRouter.',
    tags: ['Arch Linux', 'Hyprland', 'QML'],
    href: 'https://github.com/naextro/Unit-3',
    code: [
      [['acc', 'SUPER + A    '], ['fg', 'AI panel']],
      [['acc', 'SUPER + Tab  '], ['fg', 'control center']],
      [['muted', 'Hyprland / Quickshell / Waybar']],
      [['muted', 'theme: NieR:Automata']],
    ],
  },
]

// Earlier work: shipped sites and older repos, all with screenshots.
export const builds = [
  {
    title: 'Medimate.bd',
    kind: 'HSC coaching website · Next.js',
    image: 'images/medimate.png',
    href: 'https://medimate.bd',
    tags: ['Next.js', 'Coaching'],
  },
  {
    title: 'Anon',
    kind: 'E-commerce template',
    image: 'images/anon.png',
    href: 'https://aanon.vercel.app/',
    tags: ['E-commerce', 'HTML'],
  },
  {
    title: 'Bloggy',
    kind: 'Blog / membership theme',
    image: 'images/bloggy.png',
    href: 'https://blooggy.vercel.app/',
    tags: ['Blog', 'HTML'],
  },
  {
    title: 'Cryptknex',
    kind: 'Crypto wallet landing page',
    image: 'images/cryptknex.png',
    href: 'https://cryptknex.vercel.app/',
    tags: ['Crypto', 'Landing page'],
  },
  {
    title: 'Cara',
    kind: 'E-commerce landing page',
    image: 'images/cara.png',
    href: 'https://caarra.vercel.app/',
    tags: ['E-commerce', 'Landing page'],
  },
  {
    title: 'Kick',
    kind: 'E-commerce landing page',
    image: 'images/kick.png',
    href: 'https://caarra.vercel.app/',
    tags: ['E-commerce', 'Landing page'],
  },
  {
    title: 'AureolesBot',
    kind: 'Discord bot · F1 notifier',
    image: 'images/aureoles_0.jpg',
    href: 'https://github.com/naextro/AureolesBot',
    tags: ['Python', 'Discord'],
  },
]

export const stack = [
  {
    label: 'Languages',
    accent: 'crimson',
    items: [
      ['Python', 'images/py.svg'],
      ['JavaScript', 'images/javascript.svg'],
      ['TypeScript', 'images/ts.svg'],
      ['HTML', 'images/html.svg'],
      ['CSS', 'images/css3.svg'],
      ['Bash'],
      ['PowerShell'],
    ],
  },
  {
    label: 'Frontend',
    accent: 'neon',
    items: [
      ['React', 'images/react.svg'],
      ['Tailwind', 'images/tailwindcss.svg'],
      ['React Query'],
      ['React Router'],
    ],
  },
  {
    label: 'Backend & data',
    accent: 'ember',
    items: [
      ['Node.js', 'images/nodejs.svg'],
      ['Express', 'images/expressjs.svg'],
      ['Flask'],
      ['FastAPI'],
      ['MongoDB', 'images/mongodb.svg'],
      ['PostgreSQL'],
      ['MySQL'],
    ],
  },
  {
    label: 'Tools & systems',
    accent: 'crimson',
    items: [
      ['Git', 'images/git.svg'],
      ['GitHub', 'images/githubog.svg'],
      ['VS Code', 'images/vscode.svg'],
      ['Linux / Hyprland'],
      ['Vercel'],
    ],
  },
  {
    label: 'Creative',
    accent: 'neon',
    items: [
      ['After Effects', 'images/ae.svg'],
      ['Premiere Pro', 'images/pr.svg'],
      ['Photoshop'],
      ['Canva'],
    ],
  },
]

export const reviews = [
  {
    content:
      'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Won 3 prizes because of this.',
    name: 'Bayzid Bokhary (কিরান)',
    imgSrc: 'images/bayzid.jpg',
    company: 'Entrepreneur',
  },
  {
    content: 'Your work is good and saved my time',
    name: 'KM Rubaid Ferdous Swapnil',
    imgSrc: 'images/SwapnilBro.jpg',
    company: 'RS22 Studios',
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://www.github.com/naextro', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naextro', icon: 'linkedin' },
  { label: 'X', href: 'https://x.com/naextro', icon: 'x' },
  { label: 'Instagram', href: 'https://www.instagram.com/naextro.edit', icon: 'instagram' },
]

export const moreLinks = [
  { label: 'Facebook', href: 'https://fb.me/naextro' },
  { label: 'YouTube', href: 'https://youtube.com/@naextro' },
  { label: 'dev.to', href: 'https://dev.to/naextro' },
]

export const EMAIL = 'ibnereham@gmail.com'
