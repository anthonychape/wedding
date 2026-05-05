import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  adapter: vercel(),
  integrations: [react()],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
