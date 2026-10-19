import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore -- plain ESM helper shared with scripts/prerender.mjs
import { inlineScripts } from "./scripts/inline-scripts.mjs";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    {
      name: "early-analytics",
      transformIndexHtml(html) {
        return html.replace("<!-- analytics-bootstrap -->", inlineScripts().join("\n"));
      },
    },
    react(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // Read by scripts/prerender.mjs to preload each page's own chunks, then deleted from dist.
    manifest: true,
  },
});
