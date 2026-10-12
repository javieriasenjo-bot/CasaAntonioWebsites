import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync } from "node:fs";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    {
      name: "early-analytics",
      transformIndexHtml(html) {
        const scripts = ["analytics-bootstrap.js", "metricool-bootstrap.js"]
          .map(name => `<script>${readFileSync(new URL(`./scripts/${name}`, import.meta.url), "utf8")}</script>`).join("\n");
        return html.replace("<!-- analytics-bootstrap -->", scripts);
      },
    },
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
