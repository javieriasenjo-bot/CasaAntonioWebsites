import { createFileRoute } from "@tanstack/react-router";
import { StayView } from "@/components/stay-view";
import { headFor } from "@/lib/seo";

export const Route = createFileRoute("/casa-antonio-a")({
  head: () => headFor("a", "en"),
  component: function AntonioA() {
    return <StayView id="a" />;
  },
});
