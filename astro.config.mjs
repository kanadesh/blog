import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import tailwind from '@astrojs/tailwind'
import { HOSTNAME } from './config'

// https://astro.build/config
export default defineConfig({
    site: `https://${HOSTNAME}`,
    integrations: [mdx(), sitemap(), tailwind()]
})
