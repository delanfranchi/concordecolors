import { defineConfig } from "vite";
var postcssLit = require("rollup-plugin-postcss-lit");
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  base: "/concordecolors/",
  resolve:{
    alias:{
      '@concorde-app/tailwind' : path.resolve(__dirname, './src/js/tailwind/sonic-tailwind'),
    },
  },
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
