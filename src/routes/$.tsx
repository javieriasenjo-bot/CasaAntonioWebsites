import { createFileRoute, notFound } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/guide-view";
import { RenderPage } from "@/components/render-page";
import { parsePath } from "@/lib/paths";
import { headFor } from "@/lib/seo";

export const Route = createFileRoute("/$")({
  beforeLoad: ({ params }) => {
    const parsed = parsePath(`/${params._splat ?? ""}`);
    if (!parsed) throw notFound();
    return parsed;
  },
  head: ({ params }) => {
    const parsed = parsePath(`/${params._splat ?? ""}`);
    return parsed ? headFor(parsed.page, parsed.lang) : { meta: [] };
  },
  component: function LangPath() {
    const { page } = Route.useRouteContext();
    return <RenderPage page={page} />;
  },
  notFoundComponent: NotFoundPage,
});
