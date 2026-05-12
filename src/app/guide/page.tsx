import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beginner's Guide — The Freak Circus Guide",
  description:
    "Everything you need to know before playing The Freak Circus. Game info, mechanics, and tips for your first playthrough.",
  alternates: { canonical: "https://thefreakcircusguide.com/guide" },
};

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-[#0A0A12] text-[#E8ECF0] pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[3px] text-[#00F0FF] mb-3">
          Getting Started
        </p>
        <h1 className="font-display text-3xl sm:text-4xl mb-4">
          Beginner&apos;s Guide
        </h1>
        <p className="text-[#8A8F98] text-sm mb-10">
          First time playing The Freak Circus? Here&apos;s what you need to
          know.
        </p>

        {/* Before You Play */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#00F0FF] mb-4">
            🎪 Before You Play
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <ul className="space-y-3">
              {[
                "The game is rated 18+ and contains themes of stalking, obsessive behavior, violence, and more (see full content warnings on the itch.io page).",
                "It's a Ren'Py visual novel — click to advance text, right-click for the menu.",
                "Currently in Prototype stage (v0.2) — only Day 1 and Day 2 are available.",
                "Available on PC, Mac, Linux, Android, and playable in browser on itch.io.",
                "There is voice acting in the game (by Darthsuki), but it's partial.",
                "The game features choices that affect affection levels with characters.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00F0FF] flex-shrink-0" />
                  <span className="text-sm text-[#C8CCD4]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Core Mechanics */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#FF4F7F] mb-4">
            ⚙️ Core Mechanics
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <div className="space-y-4">
              {[
                {
                  label: "Choice System",
                  desc: "Your choices affect character affection and story direction. The developer confirms choices affect affection levels.",
                },
                {
                  label: "Affection System",
                  desc: "Hidden mechanic — your choices build or break affection with each character. Red tickets are associated with Pierrot, green with Harlequin.",
                },
                {
                  label: "Save/Load",
                  desc: "Use Ren'Py's built-in save system liberally. Save before every choice so you can explore different branches.",
                },
                {
                  label: "Day System",
                  desc: "The game is structured in days. Day 1 and Day 2 are currently available. Day 3's script is reportedly written but not yet programmed.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-lg bg-[#0A0A12] border border-[#FF4F7F]/10"
                >
                  <h3 className="font-display text-sm text-[#FF4F7F] mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-[#8A8F98]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#FFB84D] mb-4">
            💡 Tips for Your First Playthrough
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <ul className="space-y-3">
              {[
                "Play blind first — don't look up guides. The experience is best without spoilers.",
                "Pick the character that naturally draws you in.",
                "Save at every choice point so you can branch later.",
                "Pay attention to dialogue and background details — the game hides information in plain sight.",
                "After your first playthrough, check the Endings page for what you missed.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FFB84D] flex-shrink-0" />
                  <span className="text-sm text-[#C8CCD4]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="p-4 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
          <p className="text-xs text-[#8A8F98]">
            <strong className="text-[#FFB84D]">Note:</strong> This guide is
            based on the v0.2 prototype. Game mechanics and content may change in
            future updates.
          </p>
        </div>
      </div>
    </main>
  );
}
