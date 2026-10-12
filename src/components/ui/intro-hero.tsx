import Background from "@/components/ui/noise-dark-blue-gradient-with-squares";
import { SkillsMarquee } from "@/components/ui/skills-marquee";
import { LanyardPass } from "@/components/ui/lanyard-pass";

export function IntroHero() {
  return (
    <section
      id="intro"
      className="relative flex min-h-svh w-full items-center overflow-hidden bg-neutral-950 text-[#ececec]"
    >
      <Background direction="diagonal-left" speed={0.35} />

      <div className="relative z-10 w-full px-4 py-16 sm:px-8">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="w-fit">
            <h1 className="text-3xl leading-[1.02] font-bold tracking-tighter whitespace-nowrap sm:text-5xl lg:text-6xl xl:text-[5rem]">
              Hi I am Kurama,
              <span className="block text-transparent" style={{ WebkitTextStroke: "2px #ececec" }}>
                I choreograph
              </span>
              pixels for a living.
            </h1>

            {/* w-0 + min-w-full keeps the marquee exactly as wide as the heading */}
            <div className="mt-14 w-0 min-w-full">
              <SkillsMarquee />
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Full-section stage so the card is never clipped; it only reacts when grabbed. */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
        <LanyardPass
          anchorX={0.75}
          style={{ position: "absolute", inset: 0, height: "100%", minHeight: 0 }}
          content={{
            attendeeName: "Kurama",
            ticketType: "Motion Designer",
            ticketNumber: "K-001",
            eventName: "Portfolio 2026",
            eventDate: "Gurugram, India",
            barcodeValue: "KURAMA2026",
            backText: "",
            strapText: "",
          }}
        />
      </div>
    </section>
  );
}
