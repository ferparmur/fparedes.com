import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    site: 'https://www.fparedes.com',
    markdown: {
        syntaxHighlight: 'false',
    },
})
