import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { renderToString } from "react-dom/server";
import { loadPack } from "./data/load-pack";
import { langFromPath } from "./lib/paths";
import { routeTree } from "./routeTree.gen";

export async function renderPage(url: string) {
  await loadPack(langFromPath(url));
  const history = createMemoryHistory({ initialEntries: [url] });
  const router = createRouter({ routeTree, history, trailingSlash: "always" });
  await router.load();
  return renderToString(<RouterProvider router={router} />);
}
