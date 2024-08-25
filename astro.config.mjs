import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { externalLink } from "./src/externalLink.ts";

// https://astro.build/config
export default defineConfig({
    integrations: [mdx(), sitemap()],
    site: "https://www.fparedes.com",
    markdown: {
        rehypePlugins: [[externalLink, { domain: "fparedes.com" }]],
        syntaxHighlight: "shiki",
        shikiConfig: {
            theme: "dracula-soft"
        }
    },
    redirects: {
        "/wczgz2020": "/talks/2020/limpia-tu-codigo-principios-basicos-para-no-odiarte-a-ti-mismo-in-spanish",
        "/blog/the-game-of-thrones-retrospective-no-spoilers": "/blog/the-game-of-thrones-retrospective",
        "/php-barcelona-2019": "/blog/php-barcelona-2019",
        "/null-coalescing-vs-elvis-operator-php": "/blog/null-coalescing-vs-elvis-operator-php"
    }
});
