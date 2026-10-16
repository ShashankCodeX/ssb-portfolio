/**
 * Central portfolio data for Shashank Singh Bisht — "The Wolf".
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Shashank Singh Bisht',
  displayName: 'Shashank Singh Bisht',
  firstName: 'SHASHANK',
  seriesTag: 'THE WOLF',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A BISHT ORIGINAL',
  role: 'Software Engineer',
  tagline: ['Software Engineer', 'AEM · Java · .NET', '2× National Gold Medalist'],
  intro:
    'Software Engineer at HCLTech building enterprise web platforms with AEM, Java, C# and .NET for global clients. A two-time national gold medalist in martial arts, a disciplined market trader and a builder who believes in consistency over noise.',
  location: 'Lucknow, Uttar Pradesh',
  email: 'player.shashank.2005@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/shashank-singh-bisht/',
    github: 'https://github.com/ShashankCodeX',
  },
  /** Put your resume PDF at public/assets/Shashank_Singh_Bisht_Resume.pdf */
  resumePdf: '/assets/Shashank_Singh_Bisht_Resume.pdf',
  interests: ['AI Agents & LLMs', 'Blockchain Development', 'Creative Web (Three.js)'],
};

export const education = [
  {
    school: 'Shiv Nadar University (Institution of Eminence)',
    place: '',
    degree: "B.Sc. (Honours) Computer Science — Bachelor's Degree",
    period: 'March 2026 – 2030',
    score: 'Currently enrolled',
  },
  {
    school: 'Rani Laxmi Bai Memorial School',
    place: '',
    degree: 'Class 12th — Science (PCM + Computer)',
    period: 'Passed out 2024',
    score: 'Class 12th',
  },
  {
    school: 'Rani Laxmi Bai Memorial School',
    place: '',
    degree: 'Class 10th',
    period: 'Passed out 2022',
    score: 'Class 10th',
  },
];

export const experience = [
  {
    company: 'HCLTech',
    role: 'Software Engineer',
    place: 'Lucknow',
    period: 'Dec 2025 – Present',
    points: [
      'Developing web solutions using AEM, Java, C# and .NET technologies for enterprise clients.',
      "Working on Clifford Chance — a major global law firm's enterprise AEM platform.",
      'Applying SDLC best practices and building scalable, maintainable applications.',
    ],
  },
  {
    company: 'HCLTech',
    role: 'Web Developer Intern (TechBee)',
    place: 'Lucknow',
    period: 'Jul 2025 – Dec 2025',
    points: [
      'AEM and Java development as part of the TechBee early career program.',
      'Built frontend components using HTML, HTML5 and modern tooling.',
    ],
  },
  {
    company: 'HCLTech',
    role: 'Technical Apprentice (TechBee)',
    place: 'Lucknow',
    period: 'Nov 2024 – Jul 2025',
    points: [
      'Foundation training in .NET Framework and C# as part of the TechBee program.',
      'Built a strong understanding of enterprise development processes and team workflows.',
    ],
  },
  {
    company: 'CoinDCX',
    role: 'Independent Crypto Trader',
    place: 'Remote',
    period: 'Aug 2025 – Present',
    points: [
      'Trading cryptocurrency markets using technical analysis and liquidity concepts.',
      'Executing scalping and short-term strategies with strict risk management discipline.',
      'Studying institutional market behavior, order flow and market structure.',
    ],
  },
  {
    company: 'LeadsGuru',
    role: 'Affiliate Marketer',
    place: 'Remote',
    period: 'Jan 2023 – Apr 2024',
    points: [
      'Promoted digital products using performance-based affiliate marketing strategies.',
      'Generated leads through social media content and sales funnel optimization.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'clifford-chance-aem',
    title: 'Clifford Chance — Enterprise AEM',
    year: '2025 – Present',
    genre: 'Enterprise • AEM • Java',
    logline: "Production Adobe Experience Manager components for a major global law firm's enterprise platform.",
    stack: ['AEM 6.5', 'Java', 'Sling Models', 'OSGi', 'HTL', 'Maven'],
    build: [
      "Developing web solutions on Adobe Experience Manager for Clifford Chance, a major global law firm — authoring components with Sling Models, OSGi services and HTL, built and deployed through Maven-based workflows.",
      'Built several AEM components (including an accordion component), moved component work from CRXDE to a VS Code workflow, resolved AEM 6.5 and Java 21 version conflicts, and ran sanity and regression testing — delivering on time.',
    ],
    features: [
      'Reusable AEM components (accordion)',
      'Sling Models · OSGi Services · HTL',
      'Maven-based build workflow',
      'CRXDE → VS Code component migration',
      'Sanity & regression testing',
    ],
    metrics: [
      { value: 'AEM 6.5', label: 'enterprise platform' },
      { value: '3', label: 'core layers: Sling · OSGi · HTL' },
      { value: 'Maven', label: 'build workflow' },
      { value: 'On time', label: 'delivery, with sanity & regression testing' },
    ],
    // Client work — private repository, so there is no GitHub link.
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'wolf-liquidity-system',
    title: 'Wolf Liquidity System',
    year: '2026',
    genre: 'Trading • Automation • APIs',
    logline: 'A Telegram-integrated signal bot that scans crypto and forex/gold for institutional SMC / ICT setups.',
    stack: ['Telegram Bot', 'Binance API', 'Twelve Data API', 'Pine Script v5'],
    build: [
      'Built a Telegram-integrated trading signal bot that scans crypto through the Binance API and forex/gold through the Twelve Data API for 7 institutional SMC / ICT scenarios.',
      'Every signal arrives with an entry, a stop loss and four take-profit levels from 1:5 up to 1:50 risk-to-reward — backed by Pine Script v5 TradingView indicators for sessions, structure shifts, fair value gaps and a liquidity map.',
    ],
    features: [
      'Telegram-delivered trade signals',
      'Crypto (Binance) and forex/gold (Twelve Data) scanning',
      '7 institutional SMC / ICT scenarios',
      'Entry, stop loss and four take-profit levels per signal',
      'TradingView Pine Script v5 indicators (kill zones, BOS/CHoCH, FVGs, Ultimate Liquidity Map)',
    ],
    metrics: [
      { value: '7', label: 'SMC / ICT scenarios' },
      { value: '4', label: 'take-profit levels per signal' },
      { value: '1:5 → 1:50', label: 'risk-to-reward range' },
      { value: '2', label: 'market data APIs' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'daily-discipline-tracker',
    title: 'Daily Discipline Tracker',
    year: '2026',
    genre: 'Full-Stack • Spring Boot • React',
    logline: 'A personal discipline-tracking app with a Java Spring Boot backend and an animated Next.js front end.',
    stack: ['Java', 'Spring Boot', 'Next.js', 'React', 'GSAP'],
    build: [
      'Built a working Daily Discipline Tracker end to end — a Java Spring Boot backend with a Next.js / React front end, animated with GSAP.',
      'Completed the first five build stages independently and is now adding Three.js for a 3D layer.',
    ],
    features: ['Java Spring Boot backend', 'Next.js / React front end', 'GSAP animation', 'Three.js 3D layer (in progress)'],
    metrics: [
      { value: '5', label: 'build stages completed' },
      { value: 'Spring Boot', label: 'Java backend' },
      { value: 'Next.js', label: 'React front end' },
      { value: 'GSAP', label: 'motion layer' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'national-gold',
    title: '2× National Gold',
    org: 'Dragon Academy of Martial Arts India',
    detail: 'Kung Fu — six years of elite competitive training and national-level tournament victories.',
    laurel: 'National Champion',
  },
  {
    id: 'cit-air-235',
    title: 'All India Rank 235',
    org: 'Common Internship Test · Internship Studio',
    detail: 'Scored 66 marks competing against thousands of candidates nationally.',
    laurel: 'All India Rank',
  },
  {
    id: 'sebi-perfect',
    title: 'Perfect Score',
    org: 'NISM / SEBI Investor Awareness Test',
    detail: 'A 100% perfect score — a strong grasp of financial markets and regulations.',
    laurel: '100%',
  },
  {
    id: 'csharp-gold',
    title: 'C# Gold Badge',
    org: 'TechGig',
    detail: 'Advanced Level Guru Gold Badge — top tier of C# developers on the platform nationally, plus Silver badges at Intermediate and Beginner level.',
    laurel: 'Gold Badge',
  },
  {
    id: 'financial-literacy',
    title: '100% Financial Literacy',
    org: 'National Financial Literacy Quiz 2025',
    detail: 'Certificate of Participation with a perfect 100% score.',
    laurel: 'Perfect Score',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

/** Headline number shown on the site. 67 in total; the list below is a selection. */
export const certificationTotal = '65+';

export const certifications: Certification[] = [
  // Newest first
  { issuer: 'NVIDIA', name: 'InfiniBand' },
  { issuer: 'NVIDIA', name: 'AI for All' },
  { issuer: 'Google', name: 'Build with Gemini — Track 2: Platform IT Developer' },
  { issuer: 'OpenAI', name: 'OpenAI Technical Practitioner' },
  { issuer: 'HCLTech', name: 'L3 Dev Prompt Engineer' },
  { issuer: 'HCLTech', name: 'GEN AI for Tester' },
  { issuer: 'HCLTech', name: 'GEN AI' },
  { issuer: 'HCLTech', name: 'Gen AI for .NET Developer (Level 3)' },
  { issuer: 'HCLTech', name: 'Gen AI for Java Developer (Level 3)' },
  { issuer: 'HCLTech', name: 'AI Software Engineer (Level 3)' },
  { issuer: 'HCLTech', name: 'Gen AI for DevOps SRE (Level 3)' },
  { issuer: 'HCLTech', name: 'AI & Gen AI Fundamentals' },
  { issuer: 'HCLTech', name: 'AI Force for SDLC' },
  { issuer: 'HCLTech', name: 'Generative AI Concepts' },
  { issuer: 'HCLTech', name: 'AI for Business Leaders' },
  { issuer: 'Skillsoft', name: 'Using AI-powered Cloud Platforms for DevOps' },
  { issuer: 'Skillsoft', name: 'AI Release Management for DevOps' },
  { issuer: 'Skillsoft', name: 'Introduction to Using AI-powered DevOps' },
  { issuer: 'Skillsoft', name: 'Responsible Use of AI' },
  { issuer: 'Skillsoft', name: 'An Introduction to Generative AI Concepts' },
  { issuer: 'Skillsoft', name: 'Deep Learning and Neural Networks' },
  { issuer: 'Skillsoft', name: 'Artificial Intelligence & Machine Learning' },
  { issuer: 'Skillsoft', name: 'Harnessing the Disruption of Generative AI' },
  { issuer: 'Skillsoft', name: 'Leveraging Generative AI for Business' },
  { issuer: 'Skillsoft', name: 'Generative AI & Its Impact to Business' },
  { issuer: 'JPMorgan Chase', name: 'Software Engineering Job Simulation' },
  { issuer: 'JPMorgan Chase', name: 'Investment Banking Job Simulation' },
  { issuer: 'Citi', name: 'Markets Quantitative Analysis (MQA)' },
  { issuer: 'Citi', name: 'Markets Sales & Trading Job Simulation' },
  { issuer: 'Citi', name: 'Investment Banking Job Simulation' },
  { issuer: 'Bank of America', name: 'Global Markets Sales & Trading Analyst' },
  { issuer: 'Goldman Sachs', name: 'Operations Job Simulation' },
  { issuer: 'Tata Group', name: 'GenAI Powered Data Analytics' },
  { issuer: 'TechGig', name: 'C# Advanced Level Guru (Gold Badge)' },
  { issuer: 'TechGig', name: 'C# Intermediate & Beginner (Silver Badges)' },
  { issuer: 'TechGig', name: 'C# .NET' },
  { issuer: 'European Open University', name: 'Software Development Life Cycle' },
  { issuer: 'European Open University', name: 'Certified Ethical Hacker (CEH)' },
  { issuer: 'European Open University', name: 'Ethereum Blockchain Application' },
  { issuer: 'European Open University', name: 'Android Expert' },
  { issuer: 'European Open University', name: 'Forex Trading Master' },
  { issuer: 'European Open University', name: 'Forex Trading' },
  { issuer: 'European Open University', name: 'Bitcoin' },
  { issuer: 'European Open University', name: 'Business Analyst' },
  { issuer: 'European Open University', name: 'Entrepreneurship Skills Management' },
  { issuer: 'European Open University', name: 'E-Commerce Developer' },
  { issuer: 'European Open University', name: 'Marketing Management' },
  { issuer: 'IBM', name: 'SQL and Relational Databases 101' },
  { issuer: 'IBM', name: 'Istio & IBM Cloud Kubernetes Service' },
  { issuer: 'IBM', name: 'Prompt Engineering for Everyone' },
  { issuer: 'IBM / Cognitive Class', name: 'Unleashing RL for Trading' },
  { issuer: 'Microsoft & LinkedIn', name: 'Microsoft Azure AI Essentials' },
  { issuer: 'Microsoft & LinkedIn', name: 'Career Essentials in Generative AI' },
  { issuer: 'LinkedIn Learning', name: 'Microsoft 365 Copilot & Business Chat' },
  { issuer: 'Cambridge', name: 'Basics of Python' },
  { issuer: 'Alison', name: 'Cyber Security Incident Response (CPD Certified)' },
  { issuer: 'SEBI', name: 'NISM Certifications — Perfect Score' },
  { issuer: 'NISM', name: 'National Financial Literacy Quiz (100%)' },
  { issuer: 'HubSpot Academy', name: 'Digital Marketing' },
  { issuer: 'Mindenious', name: 'Data Science Workshop' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'C# and Java lead the way',
    skills: [
      { name: 'C#', mono: 'C#', note: 'Primary' },
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'aem',
    title: 'AEM',
    subtitle: 'Enterprise content platform',
    skills: [
      { name: 'Adobe Experience Manager', mono: 'Ae', note: '6.5' },
      { name: 'Sling Models', mono: 'Sm' },
      { name: 'OSGi Services', mono: 'Os' },
      { name: 'HTL', mono: 'Ht' },
      { name: 'Maven', mono: 'Mv' },
    ],
  },
  {
    id: 'web',
    title: 'Web & Backend',
    subtitle: 'Interfaces & server-side logic',
    skills: [
      { name: '.NET / ASP.NET', mono: '.N' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'React / Next.js', mono: 'Re' },
      { name: 'HTML5 / CSS', mono: 'Hc' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Process',
    subtitle: 'Shipping the work',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Visual Studio', mono: 'Vs' },
      { name: 'VS Code', mono: 'Vc' },
      { name: 'SDLC', mono: 'Sd' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Cloud',
    subtitle: 'Generative AI in practice',
    skills: [
      { name: 'Generative AI', mono: 'Ga' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'Microsoft Azure AI', mono: 'Az' },
      { name: 'LLMs', mono: 'Ll' },
    ],
  },
  {
    id: 'markets',
    title: 'Markets',
    subtitle: 'Six years reading the charts',
    skills: [
      { name: 'Technical Analysis', mono: 'Ta' },
      { name: 'Liquidity & FVG (SMC / ICT)', mono: 'Lq' },
      { name: 'Risk Management', mono: 'Rm' },
      { name: 'Forex / Crypto', mono: 'Fx' },
      { name: 'Pine Script', mono: 'Ps' },
      { name: 'Blockchain / Ethereum', mono: 'Bc' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'AI Agents & LLMs', mono: 'Ai' },
      { name: 'Blockchain Development', mono: 'Bd' },
      { name: 'Three.js & Creative Web', mono: '3D' },
    ],
  },
];

/**
 * Cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the work, certifications or achievements.
 */
export const skillEvidence: Record<string, string[]> = {
  'C#': ['TechGig C# Gold Badge', 'Technical Apprentice — C# & .NET Framework', 'HCLTech Software Engineer'],
  Java: ['Clifford Chance — Enterprise AEM', 'Daily Discipline Tracker', 'HCLTech Web Developer Intern'],
  SQL: ['IBM SQL and Relational Databases 101'],
  JavaScript: ['Daily Discipline Tracker'],
  'Adobe Experience Manager': ['Clifford Chance — Enterprise AEM', 'HCLTech Software Engineer'],
  'Sling Models': ['Clifford Chance — Enterprise AEM'],
  'OSGi Services': ['Clifford Chance — Enterprise AEM'],
  HTL: ['Clifford Chance — Enterprise AEM'],
  Maven: ['Clifford Chance — Enterprise AEM'],
  '.NET / ASP.NET': ['HCLTech Software Engineer', 'Gen AI for .NET Developer (Level 3)'],
  'REST APIs': ['Wolf Liquidity System (Binance & Twelve Data APIs)'],
  'Spring Boot': ['Daily Discipline Tracker'],
  'React / Next.js': ['Daily Discipline Tracker'],
  'HTML5 / CSS': ['HCLTech Web Developer Intern'],
  'Git / GitHub': ['github.com/ShashankCodeX'],
  SDLC: ['European Open University SDLC', 'AI Force for SDLC (HCLTech)'],
  'Generative AI': ['HCLTech Level 3 Gen AI certifications', 'Skillsoft Generative AI courses'],
  'Prompt Engineering': ['HCLTech L3 Dev Prompt Engineer', 'IBM Prompt Engineering for Everyone'],
  'Microsoft Azure AI': ['Microsoft Azure AI Essentials'],
  LLMs: ['OpenAI Technical Practitioner', 'Build with Gemini (Google)'],
  'Technical Analysis': ['Wolf Liquidity System'],
  'Liquidity & FVG (SMC / ICT)': ['Wolf Liquidity System'],
  'Risk Management': ['Wolf Liquidity System', 'CoinDCX trading'],
  'Forex / Crypto': ['CoinDCX trader', 'European Open University Forex & Bitcoin'],
  'Pine Script': ['Wolf Liquidity System — TradingView indicators'],
  'Blockchain / Ethereum': ['European Open University Ethereum Blockchain Application'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Origin',
    period: '2020 – 2024',
    synopsis: 'Discipline first: the dojo, the charts and the classroom.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Dojo',
        description: 'Kung Fu at Dragon Academy of Martial Arts India — six years of training and national-level tournament victories.',
        tags: ['Kung Fu', '6 years', 'National'],
        runtime: '6 years',
        palette: crimson,
      },
      {
        code: 'S01 E02',
        title: 'The First Chart',
        description: 'Paper trading begins in 2020 — market structure, order flow and trading psychology through Trading in the Zone, Market Wizards and The Disciplined Trader.',
        tags: ['Paper trading', 'Market structure', 'Psychology'],
        runtime: 'Since 2020',
        palette: amber,
      },
      {
        code: 'S01 E03',
        title: 'The Foundation',
        description: 'Class 12th in Science (PCM + Computer) at Rani Laxmi Bai Memorial School, passing out in 2024.',
        tags: ['PCM + Computer', 'Class 12th'],
        runtime: '2024',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'The Apprentice',
    period: 'Nov 2024 – Dec 2025',
    synopsis: 'Joining HCLTech through the TechBee program — from .NET foundations to AEM and Java.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Apprentice',
        description: 'Technical Apprentice at HCLTech — foundation training in .NET Framework and C#, and a first look at enterprise team workflows.',
        tags: ['C#', '.NET Framework', 'TechBee'],
        runtime: 'Nov 2024 – Jul 2025',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Intern',
        description: 'Web Developer Intern — AEM and Java development, building frontend components with HTML5.',
        tags: ['AEM', 'Java', 'HTML5'],
        runtime: 'Jul – Dec 2025',
        palette: violet,
      },
      {
        code: 'S02 E03',
        title: 'The Collector',
        description: 'A C# Gold Badge on TechGig, All India Rank 235 in the Common Internship Test and dozens of certifications earned.',
        tags: ['TechGig', 'AIR 235', 'Certifications'],
        runtime: '2025',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Enter: The Engineer',
    period: 'Dec 2025 – Present',
    synopsis: 'Full-time Software Engineer at HCLTech, shipping enterprise AEM for a global law firm.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Engineer',
        description: 'Software Engineer at HCLTech — web solutions with AEM, Java, C# and .NET for enterprise clients.',
        tags: ['AEM', 'Java', 'C#', '.NET'],
        runtime: 'Dec 2025 – Present',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Client',
        description: "Clifford Chance — building components on a major global law firm's enterprise AEM platform with Sling Models, OSGi and HTL.",
        tags: ['Clifford Chance', 'Sling Models', 'OSGi'],
        runtime: 'Enterprise AEM',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'The AI Wave',
        description: 'A run of HCLTech Level 3 AI certifications in March 2026, followed by OpenAI Technical Practitioner and Google Build with Gemini.',
        tags: ['Gen AI', 'Prompt Engineering', 'OpenAI', 'Gemini'],
        runtime: 'Mar – Oct 2026',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Beyond the Day Job',
    period: '2025 – Present',
    synopsis: 'Trading, building and studying — the work that happens after hours.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Trader',
        description: 'Independent crypto trader on CoinDCX — scalping with technical analysis, liquidity concepts and strict risk management.',
        tags: ['Crypto', 'Scalping', 'Risk management'],
        runtime: 'Aug 2025 – Present',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'The Builder',
        description: 'The Wolf Liquidity System and the Daily Discipline Tracker — side projects built from scratch.',
        tags: ['Wolf Liquidity System', 'Spring Boot', 'Next.js'],
        runtime: '2026',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'The Student',
        description: 'B.Sc. (Honours) Computer Science at Shiv Nadar University, an Institution of Eminence.',
        tags: ['Shiv Nadar University', 'Computer Science'],
        runtime: 'Mar 2026 – 2030',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The next arc of the story is already in production.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring AI agents and LLMs, blockchain development and creative 3D web with Three.js.',
        tags: ['AI Agents', 'Blockchain', 'Three.js'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'The gold standard', title: '2× National Gold', detail: 'Kung Fu • Dragon Academy of Martial Arts India', palette: amber },
  { label: 'The day job', title: 'HCLTech', detail: 'Software Engineer • AEM · Java · .NET', palette: ocean },
  { label: 'Biggest client', title: 'Clifford Chance', detail: 'Enterprise AEM platform', palette: crimson },
  { label: 'National rank', title: 'AIR 235', detail: 'Common Internship Test • 66 marks', palette: violet },
  { label: 'Perfect score', title: '100%', detail: 'NISM / SEBI Investor Awareness Test', palette: jade },
  { label: 'Gold badge', title: 'C# Guru', detail: 'TechGig • Advanced Level', palette: amber },
  { label: 'The AI arc', title: 'Level 3 AI', detail: 'HCLTech Gen AI, AI Software Engineer & Prompt Engineer', palette: violet },
  { label: 'Newest', title: 'Build with Gemini', detail: 'Google • Platform IT Developer track • Oct 2026', palette: ocean },
  { label: 'Credential', title: 'OpenAI', detail: 'Technical Practitioner • Aug 2026', palette: jade },
  { label: 'Market craft', title: '6 Years', detail: 'Trading • liquidity, FVG & risk management', palette: crimson },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Role',
    title: 'Software Engineer.',
    lines: ['HCLTech — enterprise web solutions', 'Dec 2025 – Present'],
    chips: ['AEM', 'Java', 'C#', '.NET'],
  },
  {
    kicker: 'The client',
    title: 'Clifford Chance.',
    lines: ["A major global law firm's enterprise AEM platform", 'Sling Models · OSGi · HTL · Maven'],
  },
  {
    kicker: 'Discipline',
    title: '2× National Gold.',
    lines: ['Kung Fu — Dragon Academy of Martial Arts India', 'Six years of elite competitive training'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['Clifford Chance — Enterprise AEM', 'Wolf Liquidity System — Telegram signal bot', 'Daily Discipline Tracker — Spring Boot + Next.js'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['All India Rank 235 — Common Internship Test', '100% — NISM / SEBI Investor Awareness Test', 'C# Gold Badge — TechGig'],
  },
  {
    kicker: 'Certified',
    title: `${certificationTotal} Certifications`,
    lines: ['HCLTech · Google · OpenAI · IBM · Microsoft', 'Skillsoft · TechGig · European Open University'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['AI Agents · Blockchain · Creative 3D Web'],
  },
];

export type ProfileId = 'shashank' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'shashank',
    name: 'Shashank',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Role & education', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certificationTotal} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
