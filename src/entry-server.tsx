import { renderToString } from "react-dom/server";
import { loadPack } from "./data/load-pack";
import { langFromPath, parsePath } from "./lib/paths";
import { loadPage } from "./load-page";
import { LanguageProvider } from "./lib/i18n";

export async function renderPage(url: string) {
  const [, Page] = await Promise.all([
    loadPack(langFromPath(url)),
    loadPage(parsePath(url)?.page ?? null),
  ]);
  return renderToString(<LanguageProvider pathname={url}><Page /></LanguageProvider>);
}
