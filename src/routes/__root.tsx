import { createRootRoute, Outlet } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";

export const Route = createRootRoute({
  component: () => (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  ),
});
