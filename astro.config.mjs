// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://sophia-banou.github.io",
  base: "/planets-facts/",
  prefetch: true,
  integrations: [react()],
});
