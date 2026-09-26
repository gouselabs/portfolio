// Central site configuration, populated from Gouse's resume and provided
// links. Update as details change.

export const SITE = {
  name: 'Gouse',
  fullName: 'Gouse Shaikh',
  brand: 'Gouse Labs',
  title: 'Gouse Shaikh | Backend Software Engineer',
  tagline: 'Build. Ship. Learn. Repeat.',
  description:
    'Backend software engineer building low-latency systems, event-driven microservices, and useful developer tools. Java, Spring Boot, Kafka, AI.',
  url: 'https://gouselabs.dev', // TODO: replace with the real production domain
  email: 'gouseshaikh1999@gmail.com',
  phone: '+91 95941 98505',
  location: 'Mumbai, India',
  locale: 'en-US',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Tools', href: '/tools' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
  { label: 'Store', href: '/store' },
] as const;

export const SECONDARY_LINKS = [
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = [
  {
    heading: 'Explore',
    links: [
      { label: 'Projects', href: '/projects' },
      { label: 'Tools', href: '/tools' },
      { label: 'Blog', href: '/blog' },
      { label: 'Resources', href: '/resources' },
      { label: 'Store', href: '/store' },
    ],
  },
  {
    heading: 'More',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Photos', href: '/photos' },
      { label: 'Resume', href: '/resume' },
      { label: 'Contact', href: '/contact' },
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/gouselabs', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mohammed-gouse-shaikh', icon: 'linkedin' },
] as const;

// Grouped from the resume's Technical Skills section.
export const ENGINEERING_FOCUS = [
  'Java',
  'Spring Boot',
  'Kafka',
  'Microservices',
  'Redis',
  'AWS',
  'Docker',
  'Kubernetes',
  'System Design',
] as const;

export const FOOTER_QUOTE = 'Built with curiosity, code and too much coffee.';
