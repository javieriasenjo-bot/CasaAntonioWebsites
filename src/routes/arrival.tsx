import { createFileRoute } from "@tanstack/react-router";
import { Arrival } from "@/components/pages/arrival";
import { headFor } from "@/lib/seo";

export const Route = createFileRoute("/arrival")({
  head: () => headFor("arrival", "en"),
  component: Arrival,
});
