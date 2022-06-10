import { defineConfig } from "vite";
var postcssLit = require("rollup-plugin-postcss-lit");

// https://vitejs.dev/config/
export default defineConfig({
  base: "/concordecolors/",
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [".."],
    },
  },
  plugins: [
    postcssLit({
      include: [
        "src/js/**/*.scss",
        "src/js/**/*.scss?*",
        "src/js/**/*.css",
        "src/js/**/*.css?*",
      ],
    }),
  ],
  // build: {
  //   lib: {
  //     entry: "src/theme-generator.ts",
  //     formats: ["es"],
  //   },
  //   // rollupOptions: {
  //   //   external: /^lit/,
  //   // },
  // },
});
