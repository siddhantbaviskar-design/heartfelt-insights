import { ArrowRight, Asterisk } from "lucide-react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "For hiring managers", href: "#hiring" },
];

export function GlassNav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:px-8">
      <nav
        aria-label="Primary"
        className="flex h-[4.5rem] w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.06] pr-3 pl-8 shadow-[0_8px_32px_rgb(0_0_0/0.35),inset_0_1px_0_rgb(255_255_255/0.12)] backdrop-blur-xl backdrop-saturate-150"
      >
        <a href="#" aria-label="Home" className="text-white">
          <Asterisk className="size-9" strokeWidth={1.75} />
        </a>

        <div className="flex items-center gap-5 sm:gap-8">
          <ul className="hidden items-center gap-2 sm:flex">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-base font-medium text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.12)] focus-visible:bg-white/10 focus-visible:text-white focus-visible:outline-none"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-flex h-[3.25rem] items-center gap-3 rounded-full border border-white/10 bg-gradient-to-b from-neutral-700/60 to-black/80 px-7 text-base font-medium text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.15)] transition-transform hover:scale-[1.03]"
          >
            Resume
            <ArrowRight className="size-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
