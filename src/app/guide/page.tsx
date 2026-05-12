import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beginner's Guide — The Freak Circus Guide",
  description:
    "Everything you need to know before playing The Freak Circus. Tips, mechanics, and things the game doesn't tell you.",
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
          First time playing The Freak Circus? This guide covers everything the
          game doesn&apos;t explicitly explain.
        </p>

        {/* Before You Play */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#00F0FF] mb-4">
            🎪 Before You Play
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <ul className="space-y-3">
              {[
                "The game is rated 18+ and contains themes of stalking, obsessive behavior, and violence.",
                "It's a Ren'Py visual novel — click to advance text, right-click for menu.",
                "Currently in Prototype stage — only Day 1 and Day 2 are available.",
                "Available on PC (browser and download) — no mobile version.",
                "Voice acting is partial — The Doctor and Harlequin have voices.",
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
                  desc: "Most choices affect character affection and story direction.",
                },
                {
                  label: "Timed Choices",
                  desc: "Some decisions have a countdown timer — act fast or the game chooses for you.",
                },
                {
                  label: "Affection Meter",
                  desc: "Hidden mechanic — your choices build or break affection with each character.",
                },
                {
                  label: "Save/Load",
                  desc: "Use Ren'Py's built-in save system liberally.",
                },
                {
                  label: "Text Speed",
                  desc: "Can be adjusted in settings. Note: resets on restart — known bug.",
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

        {/* Things the Game Doesn't Tell You */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#FFB84D] mb-4">
            🔍 Things the Game Doesn&apos;t Tell You
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <ul className="space-y-3">
              {[
                "Pierrot watches you even when he's not on screen — pay attention to background details.",
                "Harlequin has taken 200+ photos of you before the game starts.",
                "The bathroom scene: choosing NOT to take a shower triggers a hidden scene.",
                "Clicking Pierrot's nose during his close-up triggers an easter egg.",
                "The Doctor has a Dracula-like accent that deepens in Day 2.",
                "Mr. Bird (the ringmaster's pet) appears in the lore but hasn't been fully introduced yet.",
                "Save files don't transfer between versions — always start fresh after an update.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FFB84D] flex-shrink-0" />
                  <span className="text-sm text-[#C8CCD4]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Recommended First Playthrough */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#00F0FF] mb-4">
            🎮 Recommended First Playthrough
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <ul className="space-y-3">
              {[
                "Play blind first — don't look up guides.",
                "Pick the character that naturally draws you in.",
                "Save at every choice point so you can branch later.",
                "After your first playthrough, check the Endings page for what you missed.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00F0FF] flex-shrink-0" />
                  <span className="text-sm text-[#C8CCD4]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
