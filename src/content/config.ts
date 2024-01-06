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

export const collections = { blog, misc };
