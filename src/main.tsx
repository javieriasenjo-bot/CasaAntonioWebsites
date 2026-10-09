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
try {
  await loadPack(langFromPath(window.location.pathname));
  await router.load();
  const app = <RouterProvider router={router} />;
  // Prerendered HTML stays visible until the app is ready; then it is replaced.
  root.replaceChildren();
  createRoot(root).render(app);
} catch (error) {
  // Static navigation and reservation links remain usable if startup fails.
  document.documentElement.classList.remove("app-ready");
  console.error("Casa Antonio could not start interactive features", error);
}
