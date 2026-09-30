import { createFileRoute } from "@tanstack/react-router";
import { StayView } from "@/components/stay-view";

export const Route = createFileRoute("/casa-antonio-a")({
  head: () => ({
    meta: [
      { title: "Casa Antonio A · Sapporo" },
      {
        name: "description",
        content:
          "Casa Antonio A is a modern one-bedroom apartment in Kita-ku, Sapporo, about five minutes from Asabu Station, with parking and a private entrance.",
      },
    ],
  }),
  component: function AntonioA() {
    return <StayView id="a" />;
  },
});
