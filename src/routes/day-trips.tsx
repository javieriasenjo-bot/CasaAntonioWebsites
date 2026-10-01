import { createFileRoute } from "@tanstack/react-router";
import { DayTrips } from "@/components/day-trips-page";
import { headFor } from "@/lib/seo";

export const Route = createFileRoute("/day-trips")({
  head: () => headFor("day-trips", "en"),
  component: DayTrips,
});
