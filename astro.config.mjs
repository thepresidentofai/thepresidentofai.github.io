import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://thepresidentofai.github.io",
  integrations: [sitemap()],
  output: "static"
});
