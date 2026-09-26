import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'Java',
      'Spring Boot',
      'Backend',
      'Microservices',
      'Kafka',
      'Redis',
      'AI',
      'Developer Tools',
      'Software Engineering',
      'Tutorials',
      'Build Log',
    ]),
    tags: z.array(z.string()).default([]),
    coverImage: z.string(),
    coverAlt: z.string(),
    author: z.string().default('Gouse'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    placeholder: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    problem: z.string(),
    whyBuilt: z.string(),
    solution: z.string(),
    architecture: z.string().optional(),
    challenges: z.string().optional(),
    results: z.string().optional(),
    techStack: z.array(z.string()),
    category: z.enum(['Backend', 'Full Stack', 'AI', 'Developer Tools', 'Experiments']),
    status: z.enum(['Live', 'In Progress', 'Archived', 'Concept']),
    coverImage: z.string(),
    coverAlt: z.string(),
    // Optional real screenshot; when set it replaces the abstract cover art.
    screenshot: image().optional(),
    gallery: z.array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() })).default([]),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    publishDate: z.coerce.date(),
    placeholder: z.boolean().default(false),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tools' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    problem: z.string(),
    features: z.array(z.string()),
    howItWorks: z.string(),
    example: z.string().optional(),
    techStack: z.array(z.string()),
    category: z.enum(['Developer Tools', 'Productivity', 'AI', 'Backend', 'Utilities']),
    status: z.enum(['Live', 'In Progress', 'Archived', 'Concept']),
    icon: z.string().default('wrench'),
    coverImage: z.string(),
    coverAlt: z.string(),
    toolUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    relatedPostSlug: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    publishDate: z.coerce.date(),
    placeholder: z.boolean().default(false),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['Cheat Sheet', 'Guide', 'Template', 'Wallpaper', 'Download']),
    category: z.enum([
      'Developer',
      'Java',
      'Backend',
      'AI',
      'Productivity',
      'Templates',
      'Cheat Sheets',
      'Wallpapers',
      'Other',
    ]),
    free: z.boolean().default(true),
    downloadUrl: z.string(),
    previewImage: z.string(),
    previewAlt: z.string(),
    publishDate: z.coerce.date(),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { blog, projects, tools, resources };
