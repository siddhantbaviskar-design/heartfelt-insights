import { createFileRoute } from "@tanstack/react-router";
import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";
import prismaticRift from "@/assets/work-prismatic-rift.jpg";
import emberClouds from "@/assets/work-ember-clouds.jpg";
import neonPortal from "@/assets/work-neon-portal.jpg";
import redRibbon from "@/assets/work-red-ribbon.jpg";
import celestial from "@/assets/work-celestial.jpg";
import uplight from "@/assets/work-uplight.jpg";
import indigoMarble from "@/assets/work-indigo-marble.jpg";
import launchWindow from "@/assets/work-launch-window.jpg";
import cosmicWave from "@/assets/work-cosmic-wave.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Works '26 — Selected Portfolio" },
      {
        name: "description",
        content: "An interactive wheel of selected visual work for 2026.",
      },
      { property: "og:title", content: "Works '26 — Selected Portfolio" },
      {
        property: "og:description",
        content: "An interactive wheel of selected visual work for 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WORKS: WorksWheelItem[] = [
  { title: "Prismatic Rift", image: prismaticRift },
  { title: "Ember Clouds", image: emberClouds },
  { title: "Neon Portal", image: neonPortal },
  { title: "Red Ribbon", image: redRibbon },
  { title: "Celestial", image: celestial },
  { title: "Uplight", image: uplight },
  { title: "Indigo Marble", image: indigoMarble },
  { title: "Launch Window", image: launchWindow },
  { title: "Cosmic Wave", image: cosmicWave },
];

function Index() {
  return (
    <main className="relative h-svh min-h-[32rem] w-full overflow-hidden bg-background">
      <div className="pointer-events-none absolute top-5 left-5 z-20 flex items-center gap-3 font-mono text-[0.625rem] uppercase tracking-widest text-muted-foreground sm:top-7 sm:left-8">
        <span className="size-1.5 rounded-full bg-signal" />
        Independent practice
      </div>
      <div className="pointer-events-none absolute bottom-5 left-5 z-20 font-mono text-[0.625rem] uppercase tracking-widest text-muted-foreground sm:bottom-7 sm:left-8">
        Art direction · Image making
      </div>
      <WorksWheel items={WORKS} label="Works '26" />
    </main>
  );
}
