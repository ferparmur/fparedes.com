import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { externalLink } from "./src/externalLink.ts";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
    integrations: [mdx(), sitemap(), playformCompress()],
    site: "https://www.fparedes.com",
    markdown: {
        rehypePlugins: [[externalLink, { domain: "fparedes.com" }]],
        syntaxHighlight: "shiki",
        shikiConfig: {
            theme: "dracula-soft"
        }
    },
    redirects: {
        "/wczgz2020": "/talks/2020/limpia-tu-codigo"
    }
});
