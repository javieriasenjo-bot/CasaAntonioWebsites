import { createFileRoute } from "@tanstack/react-router";
import { StayView } from "@/components/stay-view";

export const Route = createFileRoute("/casa-antonio-b")({
  head: () => ({
    meta: [
      { title: "Casa Antonio B · Sapporo" },
      {
        name: "description",
        content:
          "Casa Antonio B is the second-floor apartment in the same Kita-ku house: wood warmth, a projector, three twin beds, and a private entrance near Asabu Station.",
      },
    ],
  }),
  component: function AntonioB() {
    return <StayView id="b" />;
  },
});
