import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';

interface Entry {
  loc: string;
  lastmod?: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
}

function toIso(date: Date): string {
  return date.toISOString().split('T')[0];
}

export const GET: APIRoute = async ({ site }) => {
  const base = (site ?? new URL(SITE.url)).toString().replace(/\/$/, '');

  const staticEntries: Entry[] = [
    { loc: '/', changefreq: 'weekly', priority: 1.0 },
    { loc: '/about', changefreq: 'monthly', priority: 0.8 },
    { loc: '/projects', changefreq: 'weekly', priority: 0.8 },
    { loc: '/tools', changefreq: 'weekly', priority: 0.8 },
    { loc: '/blog', changefreq: 'weekly', priority: 0.7 },
    { loc: '/resources', changefreq: 'monthly', priority: 0.6 },
    { loc: '/photos', changefreq: 'monthly', priority: 0.5 },
    { loc: '/resume', changefreq: 'monthly', priority: 0.8 },
    { loc: '/store', changefreq: 'monthly', priority: 0.4 },
    { loc: '/contact', changefreq: 'yearly', priority: 0.6 },
  ];

  const [projects, tools, posts] = await Promise.all([
    getCollection('projects'),
    getCollection('tools'),
    getCollection('blog', ({ data }) => !data.draft),
  ]);

  const projectEntries: Entry[] = projects.map((p) => ({
    loc: `/projects/${p.id}`,
    lastmod: toIso(p.data.publishDate),
    changefreq: 'monthly',
    priority: 0.7,
  }));

  const toolEntries: Entry[] = tools.map((t) => ({
    loc: `/tools/${t.id}`,
    lastmod: toIso(t.data.publishDate),
    changefreq: 'monthly',
    priority: 0.7,
  }));

  const blogEntries: Entry[] = posts.map((post) => ({
    loc: `/blog/${post.id}`,
    lastmod: toIso(post.data.updatedDate ?? post.data.publishDate),
    changefreq: 'monthly',
    priority: 0.6,
  }));

  const entries = [...staticEntries, ...projectEntries, ...toolEntries, ...blogEntries];

  const urlset = entries
    .map(
      (entry) => `  <url>
    <loc>${base}${entry.loc}</loc>
${entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>\n` : ''}    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
