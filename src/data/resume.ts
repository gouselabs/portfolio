// Structured resume content, transcribed from the source PDF resume.
// Every number here traces back to the resume, nothing invented.

export const SUMMARY =
  "Backend Engineer with 4+ years of experience building low-latency trading systems and event-driven microservices in Java/Spring Boot, processing 100K+ daily transactions and serving 50K+ users. Track record of cutting order-processing latency by 97% and report generation time by 80%.";

export const SKILL_GROUPS = [
  { label: 'Languages', icon: 'code-2', skills: ['Java 17', 'Python', 'SQL'] },
  {
    label: 'Frameworks & Libraries',
    icon: 'layers',
    skills: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'gRPC', 'WebSockets', 'JWT'],
  },
  {
    label: 'Databases & Caching',
    icon: 'database',
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Redis', 'DynamoDB'],
  },
  {
    label: 'Distributed Systems',
    icon: 'git-branch',
    skills: ['Microservices', 'Apache Kafka', 'Event-Driven Architecture'],
  },
  {
    label: 'Cloud & DevOps',
    icon: 'cloud',
    skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes', 'Helm', 'Jenkins', 'Azure DevOps', 'CI/CD'],
  },
  { label: 'Tools', icon: 'wrench', skills: ['Git', 'Swagger / OpenAPI', 'JIRA'] },
  {
    label: 'Methodologies & Concepts',
    icon: 'compass',
    skills: ['Agile (Scrum)', 'Domain-Driven Design', 'System Design', 'Multithreading', 'Performance Optimization'],
  },
  { label: 'Testing & Build Tools', icon: 'check-check', skills: ['JUnit', 'Mockito', 'Maven'] },
] as const;

export const EXPERIENCE = [
  {
    title: 'Software Engineer',
    company: 'Orosoft Solutions',
    location: 'Mumbai, India',
    start: 'Apr 2025',
    end: 'Present',
    bullets: [
      'Architected multi-tenant Spring Boot microservices for enterprise financial platforms, serving 50K+ active users across 15+ enterprise clients.',
      'Refactored 10+ legacy SQL stored procedures into domain-driven Java services, reducing report generation time by 80% (from roughly 25s to 3s per run).',
      'Engineered Kafka-driven event-processing pipelines integrated with Redis caching and gRPC communication, increasing throughput by 3x while reducing average response time from 450ms to 120ms.',
      'Streamlined application deployments using Docker, Kubernetes, Helm, Azure DevOps, and CI/CD pipelines, reducing deployment time by 65%.',
      'Spearheaded database optimization and API design reviews across multiple microservices, identifying and resolving key performance bottlenecks and contributing to 99.9% platform uptime.',
      'Mentored 4 junior engineers on Spring Boot best practices and code review standards.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Orosoft Solutions',
    location: 'Mumbai, India',
    start: 'Jun 2022',
    end: 'Mar 2025',
    bullets: [
      'Built backend services using Java, Spring Boot, Hibernate, REST APIs, WebSockets, and FIX Protocol integrations to process more than 100K trading transactions daily.',
      'Optimized multithreaded QuickFIX/J services, reducing order-processing latency from 39ms to under 1ms, a 97% improvement.',
      'Implemented JWT-secured REST APIs supporting trading operations and third-party integrations for 5K+ concurrent users.',
      'Resolved 35+ critical production incidents through root cause analysis and performance tuning, improving platform reliability and maintaining 99.8% operational stability.',
      'Collaborated with cross-functional teams to deliver new features, including real-time market data streaming, order management, and reporting modules.',
    ],
  },
] as const;

export const EDUCATION = {
  institution: 'Ramniranjan Jhunjhunwala College, Mumbai University',
  degree: 'B.Sc. Information Technology',
  detail: 'CGPA: 9.55 / 10',
  start: 'Jun 2019',
  end: 'Apr 2022',
};

export const CERTIFICATIONS = [
  { name: 'Java Programming Certification', issuer: 'Udemy', icon: 'file-badge' },
  { name: 'AI with GitHub Copilot Certification', issuer: 'Udemy', icon: 'file-badge' },
  { name: 'Quarterly Performer Award', issuer: 'Outstanding Performance, Orosoft Solutions', icon: 'trophy' },
] as const;

// Headline stats, pulled directly from resume bullets, used on the
// homepage hero strip and the Experience section's side panel.
export const HERO_STATS = [
  { icon: 'clock', value: '4+ yrs', label: 'Backend engineering' },
  { icon: 'building-2', value: '15+', label: 'Enterprise clients served' },
  { icon: 'users', value: '5K+', label: 'Concurrent users supported' },
  { icon: 'activity', value: '99.9%', label: 'Platform uptime' },
] as const;

export const EXPERIENCE_STATS = [
  { icon: 'zap', value: '3x', label: 'Throughput increase' },
  { icon: 'gauge', value: '97%', label: 'Latency reduction' },
  { icon: 'rocket', value: '65%', label: 'Faster deployments' },
  { icon: 'shield-check', value: '35+', label: 'Incidents resolved' },
] as const;

// Honest, resume/project-grounded signal, not a claim about specific
// current work, since that changes; edit freely as focus shifts.
export const FOCUS_AREAS = [
  { icon: 'sparkles', label: 'AI-assisted developer tooling' },
  { icon: 'network', label: 'Event-driven & distributed systems' },
  { icon: 'gauge', label: 'Backend performance optimization' },
  { icon: 'puzzle', label: 'Privacy-first dev tools & VS Code extensions' },
] as const;

// Served from /public/resume (the real resume PDF).
export const RESUME_PDF_URL = '/resume/gouse-shaikh-resume.pdf';
