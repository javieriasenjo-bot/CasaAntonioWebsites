import { createFileRoute } from "@tanstack/react-router";
import { StayView } from "@/components/stay-view";
import { headFor } from "@/lib/seo";

export const Route = createFileRoute("/casa-antonio-b")({
  head: () => headFor("b", "en"),
  component: function AntonioB() {
    return <StayView id="b" />;
  },
});
