import {defineCollection, z} from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        title: z.string(),
        pubDate: z.date(),
        author: z.string(),
        coverImage: image().refine((img) => img.width >= 1080, {
            message: "Cover image must be at least 1080 pixels wide!",
        }),
        coverImageAlt: z.string(),
        tags: z.array(z.string())
    }),
});

export const collections = {
    blog: blogCollection,
};
