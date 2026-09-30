import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { renderToString } from "react-dom/server";
import { routeTree } from "./routeTree.gen";

export async function renderPage(url: string) {
  const history = createMemoryHistory({ initialEntries: [url] });
  const router = createRouter({ routeTree, history, trailingSlash: "always" });
  await router.load();
  return renderToString(<RouterProvider router={router} />);
}
