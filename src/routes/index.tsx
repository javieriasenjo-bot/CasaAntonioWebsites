import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/home-page";
import { headFor } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => headFor("home", "en"),
  component: Home,
});
