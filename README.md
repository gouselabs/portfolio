# Gouse Labs Portfolio

Personal portfolio and tools hub. Built with Astro, TypeScript (strict) and Tailwind CSS v4. The site is fully static, so it works with any static host.

## Commands

Run from the project root.

| Command           | Action                                         |
| :---------------- | :--------------------------------------------- |
| `npm install`     | Install dependencies                           |
| `npm run dev`     | Start the dev server at `localhost:4321`       |
| `npm run build`   | Build the production site to `./dist/`         |
| `npm run preview` | Preview the production build locally           |
| `npx astro check` | Run TypeScript and Astro diagnostics           |

Node 22.12 or newer is required.

## Project structure

```text
public/
  resume/                 Resume PDF served at /resume/gouse-shaikh-resume.pdf
src/
  assets/images/          Profile photo (optimized by Astro at build time)
  components/             Reusable UI components
  content/
    projects/             One .mdx file per project
    tools/                One .mdx file per tool
    blog/                 Blog posts (empty for now)
    resources/            Downloadable resources (empty for now)
  data/
    site.ts               Name, contact details, navigation, social links
    resume.ts             Summary, skills, experience, education, certifications
  layouts/                Page layouts
  pages/                  Routes
  styles/global.css       Design tokens, theme colors, animations
```

## Updating content

- **Personal details and links:** edit `src/data/site.ts`.
- **Resume content:** edit `src/data/resume.ts`, and replace the PDF in `public/resume/`.
- **Profile photo:** replace `src/assets/images/profile.png`.
- **Add a tool or project:** copy an existing file in `src/content/tools/` or `src/content/projects/` and edit the frontmatter.
- **Add a blog post:** add an `.mdx` file to `src/content/blog/`. The Blog page and the home page section appear automatically once one exists.
- **Add a resource:** add a `.md` file to `src/content/resources/`. The same applies to the Resources page.
- **Placeholder content:** any entry with `placeholder: true` in its frontmatter shows a "Placeholder content" notice. Set it to `false` once the entry is real.

## Before deploying

1. Set the real production domain in `astro.config.mjs` (`SITE_URL`) and in `src/data/site.ts` (`SITE.url`). Sitemap, RSS, canonical links and `robots.txt` all use it.
2. The Photos page still shows placeholder tiles, and the Store page is a "coming soon" placeholder.

## Build output

`npm run build` writes a static site to `dist/`, which any static host can serve.

## Notes

- Dark and light themes are supported, and the choice is saved in the browser.
- The contact form opens the visitor's email client with the message pre-filled. It does not send anything to a server.
- The site uses very little client-side JavaScript. Scroll animations respect `prefers-reduced-motion`.
