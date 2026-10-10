import { createRoot, hydrateRoot } from "react-dom/client";
import { loadPage } from "./load-page";
import { loadPack } from "./data/load-pack";
import { langFromPath, parsePath } from "./lib/paths";
import { LanguageProvider } from "./lib/i18n";
import "./styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("Root element missing");
try {
  const pathname = window.location.pathname;
  const [, Page] = await Promise.all([
    loadPack(langFromPath(pathname)),
    loadPage(parsePath(pathname)?.page ?? null),
  ]);
  // The build uses this exact tree, without router/Suspense wrappers. Attaching
  // controls preserves the already-visible hero and other prerendered nodes.
  const app = <LanguageProvider pathname={pathname}><Page /></LanguageProvider>;
  if (root.hasChildNodes()) {
    hydrateRoot(root, app, {
      onRecoverableError(error) {
        console.error("Casa Antonio could not preserve the prerendered page", error);
      },
    });
  } else {
    // Vite's development shell has no prerendered HTML.
    createRoot(root).render(app);
  }
} catch (error) {
  // Static navigation and reservation links remain usable if startup fails.
  document.documentElement.classList.remove("app-ready");
  console.error("Casa Antonio could not start interactive features", error);
}
