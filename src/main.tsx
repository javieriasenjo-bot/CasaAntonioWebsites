import { createRoot, hydrateRoot } from "react-dom/client";
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
// These static routes have no server loader data to restore. Mark the router as
// hydrating SSR so its root Suspense boundary matches the prerendered tree.
if (root.hasChildNodes()) router.ssr = { manifest: undefined };

await loadPack(langFromPath(window.location.pathname));
await router.load();
const app = <RouterProvider router={router} />;
// Preserve the HTML guests have already seen while the language/runtime loads.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
