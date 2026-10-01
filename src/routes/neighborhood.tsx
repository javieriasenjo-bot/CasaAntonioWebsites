import { createFileRoute } from "@tanstack/react-router";
import { Neighborhood } from "@/components/neighborhood-page";
import { headFor } from "@/lib/seo";

export const Route = createFileRoute("/neighborhood")({
  head: () => headFor("neighborhood", "en"),
  component: Neighborhood,
});
