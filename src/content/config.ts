import { defineCollection, z } from "astro:content";

export const componentsCollection = defineCollection({
  type: "content",
  schema: z.object({
    type: z.literal("base").optional().default("base"),
    name: z.literal("Components").optional().default("Components"),
    shortTitle: z.string().optional().default("Components"),
    order: z.number().optional().default(Number.POSITIVE_INFINITY),
    title: z.string(),
    description: z.string(),
    lastModifiedAt: z.coerce.date().optional(),
    publishedAt: z.coerce.date(),
  }),
});

export const instructionsCollection = defineCollection({
  type: "content",
  schema: z.object({
    type: z.literal("base").optional().default("base"),
    name: z.literal("Instructions").optional().default("Instructions"),
    shortTitle: z.string().optional().default("Instructions"),
    order: z.number().optional().default(Number.POSITIVE_INFINITY),
    title: z.string(),
    description: z.string(),
    lastModifiedAt: z.coerce.date().optional(),
    publishedAt: z.coerce.date(),
  }),
});
