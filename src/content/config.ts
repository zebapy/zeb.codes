import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/index.{md,mdx}",
    base: "./content/blog",
    generateId: ({ entry }) => {
      // Remove '/index.md' or '/index.mdx' from the end to get clean slugs
      return entry.replace(/\/index\.(md|mdx)$/, '');
    }
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/index.md",
    base: "./content/projects",
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, '')
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    tech: z.array(z.string()),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    npmUrl: z.string().optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    order: z.number().optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
  }),
});

const work = defineCollection({
  loader: glob({
    pattern: "**/index.md",
    base: "./content/work",
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, '')
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string().optional(),
    tags: z.array(z.string()),
    tech: z.array(z.string()),
    liveUrl: z.string().optional(),
    caseStudyUrl: z.string().optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    order: z.number().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog, projects, work };
