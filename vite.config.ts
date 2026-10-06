import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { readFileSync } from "node:fs";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    {
      name: "early-analytics",
      transformIndexHtml(html) {
        return html.replace("<!-- analytics-bootstrap -->", `<script>${readFileSync(new URL("./scripts/analytics-bootstrap.js", import.meta.url), "utf8")}</script>`);
      },
    },
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
