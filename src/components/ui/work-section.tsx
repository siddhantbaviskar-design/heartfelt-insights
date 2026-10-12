import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassFolder from "@/components/ui/glass-folder-cards";

const PROJECTS = [
  {
    label: "Motion Systems",
    art: "aurora" as const,
    seed: 3,
    files: [
      { name: "Design tokens", meta: "Rive · 2.4 MB", art: "ember" as const },
      { name: "Easing library", meta: "JSON · 48 KB" },
      { name: "Handoff spec", meta: "PDF · 1.2 MB", art: "dusk" as const },
    ],
  },
  {
    label: "Game UI",
    art: "ember" as const,
    seed: 11,
    files: [
      { name: "HUD states", meta: "State machine", art: "verdant" as const },
      { name: "Reward flow", meta: "Lottie · 320 KB", art: "aurora" as const },
      { name: "Menu transitions", meta: "MP4 · 18 MB" },
    ],
  },
  {
    label: "Micro-interactions",
    art: "dusk" as const,
    seed: 7,
    files: [
      { name: "Buttons", meta: "24 variants", art: "glacier" as const },
      { name: "Loaders", meta: "Lottie · 96 KB" },
      { name: "Onboarding", meta: "Rive · 1.1 MB", art: "ember" as const },
    ],
  },
];

export function WorkSection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-work-line]", {
        yPercent: 110,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: { trigger: "[data-work-title]", start: "top 80%" },
      });
      gsap.from("[data-work-sub]", {
        opacity: 0,
        y: 24,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-work-title]", start: "top 75%" },
      });

      gsap.utils.toArray<HTMLElement>("[data-work-card]").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 120,
          scale: 0.92,
          duration: 1.2,
          ease: "power3.out",
          delay: (i % 3) * 0.1,
          scrollTrigger: { trigger: card, start: "top 88%" },
        });
        // Staggered parallax drift while scrolling through the section.
        gsap.to(card, {
          yPercent: i % 2 === 0 ? -8 : 8,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="work"
      className="relative w-full overflow-hidden bg-neutral-950 px-4 pt-16 pb-32 text-[#ececec] sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          data-work-title
          className="text-4xl leading-[1.05] font-bold tracking-tighter sm:text-6xl"
        >
          <span className="block overflow-hidden pb-1">
            <span data-work-line className="block">
              Selected work
            </span>
          </span>
        </h2>
        <p data-work-sub className="mt-6 text-base text-white/50 sm:whitespace-nowrap">
          Hover a folder to lean its glass, click to open it and fan out the files.
        </p>

        <div className="mt-24 grid grid-cols-1 items-end justify-items-center gap-x-10 gap-y-24 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((p) => (
            <div key={p.label} data-work-card>
              <GlassFolder
                label={p.label}
                tone="dark"
                art={p.art}
                seed={p.seed}
                files={p.files}
                action="none"
                appear={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
