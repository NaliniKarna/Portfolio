export const ROLES = [
  'Backend Developer',
  'Full Stack Developer',
  'Software Engineer',
  'API Architect',
];

export const SKILLS = {
  Languages:    ['Java', 'Python', 'JavaScript', 'SQL', 'C++'],
  Backend:      ['Spring Boot', 'FastAPI', 'Django', 'Node.js', 'Express.js', 'REST APIs'],
  Frontend:     ['React.js', 'HTML5', 'CSS3'],
  Databases:    ['PostgreSQL', 'MySQL', 'MongoDB'],
  DevOps:       ['Docker', 'Git', 'GitHub', 'Apache Tomcat', 'CI/CD'],
  'AI & ML':    ['NLP', 'Text Classification', 'Feature Engineering', 'Machine Learning'],
};

export const STATIC_PROJECTS = [
  {
    id: 1,
    name: 'Phishix - AI Scam Detection',
    desc: 'ML-powered platform detecting phishing & scam content from emails, URLs, and messages using NLP techniques.',
    tech: ['Python', 'NLP', 'FastAPI', 'Machine Learning'],
    color: '#ff6b4a',
    emoji: '🛡️',
    github: 'https://github.com/NaliniKarna',
  },
  {
    id: 2,
    name: 'SMS Forwarding API',
    desc: 'Secure SMS forwarding service with rate limiting, request validation, and structured logging.',
    tech: ['Python', 'FastAPI', 'REST APIs'],
    color: '#4affd4',
    emoji: '⚡',
    github: 'https://github.com/NaliniKarna',
  },
  {
    id: 3,
    name: 'Microfinance Management System',
    desc: 'Full-stack system built on Apache Fineract with PostgreSQL schemas and Docker containers.',
    tech: ['Apache Fineract', 'PostgreSQL', 'Docker', 'Java'],
    color: '#4ade80',
    emoji: '🏦',
    github: 'https://github.com/NaliniKarna',
  },
  {
    id: 4,
    name: 'Personal Portfolio',
    desc: 'This site - React portfolio with smooth animations, dark mode, and live GitHub API integration.',
    tech: ['React.js', 'CSS3', 'JavaScript'],
    color: '#b57aff',
    emoji: '🌐',
    github: 'https://github.com/NaliniKarna',
  },
];

export const ACHIEVEMENTS = [
  { emoji: '🏆', text: 'Harvard Health Hackathon - Regional Finalist' },
  { emoji: '🥉', text: 'Hult Prize 2025 - 2nd Runner Up (Regional)' },
  { emoji: '🚀', text: 'Startup Hackathon 2025 - Participant' },
];

export const GH_COLORS = [
  '#ff6b4a','#4affd4','#b57aff','#ffd74a',
  '#4a9fff','#ff4ab5','#4aff88','#ff8c4a',
];
