import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const products = defineCollection({
  // Load Markdown and MDX files in the `src/content/products/` directory.
  loader: glob({ base: "./src/content/products", pattern: "**/*.{md,mdx}" }),
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

export const collections = { products };
