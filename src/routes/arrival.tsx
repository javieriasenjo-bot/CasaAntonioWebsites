import { createFileRoute } from "@tanstack/react-router";
import { Arrival } from "@/components/arrival-page";
import { headFor } from "@/lib/seo";

export const Route = createFileRoute("/arrival")({
  head: () => headFor("arrival", "en"),
  component: Arrival,
});
