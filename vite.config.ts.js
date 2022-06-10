var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// vite.config.ts
import { defineConfig } from "vite";
import minifyHTML from "rollup-plugin-minify-html-literals";
var postcssLit = __require("rollup-plugin-postcss-lit");
var vite_config_default = defineConfig({
  base: "/concordecolors/",
  server: {
    fs: {
      allow: [".."]
    }
  },
  plugins: [
    minifyHTML({
      include: ["**/*.ts"],
      options: {
        shouldMinify(template) {
          return true;
        }
      }
    }),
    postcssLit({
      include: [
        "src/**/*.scss",
        "src/**/*.scss?*",
        "src/**/*.css",
        "src/**/*.css?*"
      ]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCBtaW5pZnlIVE1MIGZyb20gXCJyb2xsdXAtcGx1Z2luLW1pbmlmeS1odG1sLWxpdGVyYWxzXCI7XHJcbnZhciBwb3N0Y3NzTGl0ID0gcmVxdWlyZShcInJvbGx1cC1wbHVnaW4tcG9zdGNzcy1saXRcIik7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6IFwiL2NvbmNvcmRlY29sb3JzL1wiLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgZnM6IHtcclxuICAgICAgLy8gQWxsb3cgc2VydmluZyBmaWxlcyBmcm9tIG9uZSBsZXZlbCB1cCB0byB0aGUgcHJvamVjdCByb290XHJcbiAgICAgIGFsbG93OiBbXCIuLlwiXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICAvL01pbmlmaWNhdGlvbiBkZXMgdGVtcGxhdGUgbGl0ZXJhbHMgY3NzIGV0IGh0bWwuIE5vdXMgc29tbWVzIHBhc3NcdTAwRTlzIGRlIGVzNSBcdTAwRTAgZXM2IHBvdXIgcG91dm9pciB1dGlsaXNlciBjZXR0ZSBmb25jdGlvbm5hbGl0XHUwMEU5LlxyXG4gICAgbWluaWZ5SFRNTCh7XHJcbiAgICAgIGluY2x1ZGU6IFtcIioqLyoudHNcIl0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBzaG91bGRNaW5pZnkodGVtcGxhdGUpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHBvc3Rjc3NMaXQoe1xyXG4gICAgICBpbmNsdWRlOiBbXHJcbiAgICAgICAgXCJzcmMvKiovKi5zY3NzXCIsXHJcbiAgICAgICAgXCJzcmMvKiovKi5zY3NzPypcIixcclxuICAgICAgICBcInNyYy8qKi8qLmNzc1wiLFxyXG4gICAgICAgIFwic3JjLyoqLyouY3NzPypcIixcclxuICAgICAgXSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgLy8gYnVpbGQ6IHtcclxuICAvLyAgIGxpYjoge1xyXG4gIC8vICAgICBlbnRyeTogXCJzcmMvdGhlbWUtZ2VuZXJhdG9yLnRzXCIsXHJcbiAgLy8gICAgIGZvcm1hdHM6IFtcImVzXCJdLFxyXG4gIC8vICAgfSxcclxuICAvLyAgIC8vIHJvbGx1cE9wdGlvbnM6IHtcclxuICAvLyAgIC8vICAgZXh0ZXJuYWw6IC9ebGl0LyxcclxuICAvLyAgIC8vIH0sXHJcbiAgLy8gfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsVUFBUTtBQUd6QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFFRixPQUFPLENBQUMsSUFBSTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFFUCxXQUFXO0FBQUEsTUFDVCxTQUFTLENBQUMsU0FBUztBQUFBLE1BQ25CLFNBQVM7QUFBQSxRQUNQLGFBQWEsVUFBVTtBQUNyQixpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBVUYsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
