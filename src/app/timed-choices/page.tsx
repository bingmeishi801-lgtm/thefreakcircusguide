import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timed Choices Guide — The Freak Circus Guide",
  description:
    "How timed choices work in The Freak Circus. Every timed decision, what happens when the timer runs out, and how to prepare.",
  alternates: { canonical: "https://thefreakcircusguide.com/timed-choices" },
};

export default function TimedChoicesPage() {
  return (
    <main className="min-h-screen bg-[#0A0A12] text-[#E8ECF0] pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[3px] text-[#00F0FF] mb-3">
          Mechanics
        </p>
        <h1 className="font-display text-3xl sm:text-4xl mb-4">
          Timed Choices Guide
        </h1>
        <p className="text-[#8A8F98] text-sm mb-10">
          The Freak Circus uses timed choices to create pressure during key
          moments. When a timer appears, you have limited time to make your
          decision.
        </p>

        {/* How Timed Choices Work */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#00F0FF] mb-4">
            ⏱️ How Timed Choices Work
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <ul className="space-y-3">
              {[
                "A countdown timer appears on screen during certain dialogue moments.",
                "If you don't choose before the timer runs out, the game selects a default option (usually the worst one).",
                "Timed choices are used for high-stakes moments — they affect affection and can lead to bad endings.",
                "The timer cannot be paused or extended.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00F0FF] flex-shrink-0" />
                  <span className="text-sm text-[#C8CCD4]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Known Timed Choice Moments */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#FF4F7F] mb-4">
            🎯 Known Timed Choice Moments
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <p className="text-xs text-[#8A8F98] mb-4">
              The following contains spoilers. Click to reveal each entry.
            </p>

            <div className="space-y-3">
              <details className="rounded-lg bg-[#0A0A12] border border-[#FF4F7F]/10">
                <summary className="cursor-pointer p-4 text-sm font-mono text-[#FF4F7F] select-none flex items-center gap-2">
                  <span className="text-xs group-open:rotate-90 transition-transform">
                    ▶
                  </span>
                  Day 1 — First Meeting with Pierrot
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-[#C8CCD4] leading-relaxed">
                    Quick reaction needed during your first encounter with
                    Pierrot. The timer appears suddenly — be ready to choose
                    your response before it runs out.
                  </p>
                </div>
              </details>

              <details className="rounded-lg bg-[#0A0A12] border border-[#FF4F7F]/10">
                <summary className="cursor-pointer p-4 text-sm font-mono text-[#FF4F7F] select-none flex items-center gap-2">
                  <span className="text-xs group-open:rotate-90 transition-transform">
                    ▶
                  </span>
                  Day 1 — Harlequin Confrontation
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-[#C8CCD4] leading-relaxed">
                    Choosing sides between Pierrot and Harlequin. This timed
                    decision has a significant impact on which route you
                    progress toward.
                  </p>
                </div>
              </details>

              <details className="rounded-lg bg-[#0A0A12] border border-[#FF4F7F]/10">
                <summary className="cursor-pointer p-4 text-sm font-mono text-[#FF4F7F] select-none flex items-center gap-2">
                  <span className="text-xs group-open:rotate-90 transition-transform">
                    ▶
                  </span>
                  Day 2 — Various Character Interactions
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-[#C8CCD4] leading-relaxed">
                    Day 2 features faster timers across multiple character
                    interactions. The pressure increases as the story
                    progresses.
                  </p>
                </div>
              </details>
            </div>

            <p className="text-xs text-[#8A8F98] mt-4 italic">
              The full list is still being documented as the community plays
              more.
            </p>
          </div>
        </section>

        {/* Tips for Timed Choices */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#00F0FF] mb-4">
            💡 Tips for Timed Choices
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                num: "01",
                title: "Read quickly",
                desc: "The text appears before the timer starts. Read it while you can.",
              },
              {
                num: "02",
                title: "Save before dialogue-heavy scenes",
                desc: "Give yourself a safety net before scenes with multiple timed choices.",
              },
              {
                num: "03",
                title: "Don't panic on a miss",
                desc: "If you miss a timed choice, use the save/load system to try again.",
              },
              {
                num: "04",
                title: "Some don't matter",
                desc: "Not every timed choice is consequential — the game uses some for atmosphere.",
              },
            ].map((tip) => (
              <div
                key={tip.num}
                className="p-5 rounded-xl bg-[#12121A] border border-[#1E1E2A]"
              >
                <span className="text-[10px] font-mono text-[#00F0FF] tracking-wider">
                  {tip.num}
                </span>
                <h3 className="font-display text-sm text-[#E8ECF0] mt-1 mb-2">
                  {tip.title}
                </h3>
                <p className="text-xs text-[#8A8F98] leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What Happens If You Miss a Timer? */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#FFB84D] mb-4">
            ⚠️ What Happens If You Miss a Timer?
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <ul className="space-y-3">
              {[
                "The game auto-selects an option (usually neutral or negative).",
                "You can reload a save to try again.",
                "Missing timers doesn't lock you out of routes, but it may affect your affection score.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FFB84D] flex-shrink-0" />
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
