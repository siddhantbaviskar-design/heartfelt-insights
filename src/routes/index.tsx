import { createFileRoute } from "@tanstack/react-router";
import { GlassNav } from "@/components/ui/glass-nav";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { WorkSection } from "@/components/ui/work-section";
import { IntroHero } from "@/components/ui/intro-hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siddhant Baviskar — Art Direction & Image Making" },
      {
        name: "description",
        content:
          "Independent art direction and image-making practice. Selected work for 2026, collected in an interactive wheel.",
      },
      {
        property: "og:title",
        content: "Siddhant Baviskar — Art Direction & Image Making",
      },
      {
        property: "og:description",
        content:
          "Independent art direction and image-making practice. Selected work for 2026, collected in an interactive wheel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex w-full flex-col">
      <SmoothScroll />
      <GlassNav />
      <IntroHero />
      <WorkSection />
    </main>
  );
}
