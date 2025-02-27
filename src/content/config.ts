import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

/**
 * Miscellaneous content, usually these are imported individually such as `/about`
 *
 */
const misc = defineCollection({
  type: "content",
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    banner: z.string(),
    description: z.string(),
    icon: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    thumbnail: z.string(),
    title: z.string(),
  }),
});

export const collections = { blog, misc, projects };
