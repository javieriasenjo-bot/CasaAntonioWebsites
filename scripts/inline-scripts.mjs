import { readFileSync } from "node:fs";
import { minifySync } from "vite";

// The two bootstrap scripts are inlined into every page's <head>; ship them minified, without comments.
export function inlineScripts() {
  return ["analytics-bootstrap.js", "metricool-bootstrap.js"].map((name) => {
    const source = readFileSync(new URL(`./${name}`, import.meta.url), "utf8");
    const { code, errors } = minifySync(name, source);
    if (errors?.length) throw new Error(`${name}: ${errors.map((e) => e.message).join("; ")}`);
    return `<script>${code.trim()}</script>`;
  });
}
