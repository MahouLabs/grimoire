import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig, envField } from "astro/config";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    vue(),
    svelte(),
    starlight({
      title: "Grimoire",
    }),
    mdx(),
  ],
  vite: {
    ssr: {
      // This should be removed once Starlight's SSR support is released
      external: ["node:url", "node:path", "node:child_process", "node:fs"],
    },
  },
  output: "hybrid",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
