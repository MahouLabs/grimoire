import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), vue(), svelte(), mdx()],
  // vite: {
  //   ssr: {
  //     // This should be removed once Starlight's SSR support is released
  //     external: ["node:url", "node:path", "node:child_process", "node:fs"],
  //   },
  // },
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
  },
  // adapter: cloudflare({
  //   platformProxy: {
  //     enabled: true,
  //   },
  // }),
});
