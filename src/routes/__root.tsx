import { createRootRoute, Outlet } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/guide-view";
import { LanguageProvider } from "@/lib/i18n";

export const Route = createRootRoute({
  component: () => (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  ),
  notFoundComponent: NotFoundPage,
});
