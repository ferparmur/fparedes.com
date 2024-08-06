import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            pubDate: z.date(),
            author: z.string(),
            coverImage: image().refine((img) => img.width >= 900, {
                message: "Cover image must be at least 900 pixels wide!",
            }),
            coverImageAlt: z.string(),
            tags: z.array(z.string()),
            seo: z.object({
                description: z.string(),
            }),
        }),
});

const talksCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            pubDate: z.date(),
            author: z.string(),
            location: z.string(),
            seo: z.object({
                description: z.string(),
            }),
        }),
});

export const collections = {
    blog: blogCollection,
    talks: talksCollection,
};
