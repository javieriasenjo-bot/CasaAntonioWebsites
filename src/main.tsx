import { createRoot } from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { loadPack } from "./data/load-pack";
import { langFromPath } from "./lib/paths";
import { routeTree } from "./routeTree.gen";
import "./styles.css";

const router = createRouter({ routeTree, trailingSlash: "always" });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const root = document.getElementById("root");
if (!root) throw new Error("Root element missing");

await loadPack(langFromPath(window.location.pathname));
await router.load();
// Prerendered markup is for crawlers. Mounting into a fresh node avoids a hydration mismatch
// from attribute casing (srcSet, hrefLang) after the browser parses the HTML.
root.replaceChildren();
createRoot(root).render(<RouterProvider router={router} />);
