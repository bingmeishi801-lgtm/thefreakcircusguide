import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Endings Guide — The Freak Circus Guide",
  description:
    "Every confirmed ending in The Freak Circus, how to unlock them, and what choices lead there. Currently covers v0.2 prototype endings.",
  alternates: { canonical: "https://thefreakcircusguide.com/endings" },
};

export default function EndingsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A12] text-[#E8ECF0] pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[3px] text-[#00F0FF] mb-3">
          Endings &amp; Routes
        </p>
        <h1 className="font-display text-3xl sm:text-4xl mb-4">
          All Endings Guide
        </h1>
        <p className="text-[#8A8F98] text-sm mb-10">
          The Freak Circus is in Prototype stage. Currently only 1 ending has been
          confirmed by the community. This page will be updated as new endings are
          discovered.
        </p>

        {/* Confirmed Endings */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#00F0FF] mb-4">
            🎭 Confirmed Endings
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#FF4F7F]/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-3 h-3 rounded-full bg-[#FF4F7F] flex-shrink-0" />
              <h3 className="font-display text-lg text-[#FF4F7F]">
                THE DEVOURING
              </h3>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded text-[#FF4F7F] bg-[#FF4F7F]/10">
                Bad Ending
              </span>
            </div>

            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#8A8F98] w-20">
                  Character:
                </span>
                <span className="text-sm text-[#E8ECF0]">Pierrot</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#8A8F98] w-20">
                  Route:
                </span>
                <span className="text-sm text-[#E8ECF0]">
                  The Silent Devotion
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#8A8F98] w-20">
                  Type:
                </span>
                <span className="text-sm text-[#FF4F7F]">Bad Ending</span>
              </div>
            </div>

            <p className="text-sm text-[#C8CCD4] leading-relaxed mb-5">
              Pierrot&apos;s obsessive love reaches its breaking point. His devotion
              turns consuming — literally. This ending showcases the darkest side
              of his yandere personality.
            </p>

            <details className="group rounded-lg bg-[#0A0A12] border border-[#FF4F7F]/10">
              <summary className="cursor-pointer p-4 text-sm font-mono text-[#FF4F7F] select-none flex items-center gap-2">
                <span className="text-xs group-open:rotate-90 transition-transform">
                  ▶
                </span>
                ⚠️ How to Unlock (Spoiler)
              </summary>
              <div className="px-4 pb-4">
                <p className="text-sm text-[#C8CCD4] leading-relaxed">
                  Throughout Pierrot&apos;s route, consistently choose options that feed
                  his obsession. Ignore warning signs. Trust him completely even
                  when the game warns you not to.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Unconfirmed Routes */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#E8ECF0] mb-4">
            🔒 Unconfirmed Routes
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <div className="space-y-3">
              {[
                {
                  char: "Pierrot",
                  status: "1 ending confirmed",
                  detail: "The Devouring",
                  color: "#FF4F7F",
                },
                {
                  char: "Harlequin",
                  status: "Route accessible, 0 endings confirmed",
                  detail: "Difficulty: Hard",
                  color: "#00F0FF",
                },
                {
                  char: "The Doctor",
                  status: "Route status unknown",
                  detail: "",
                  color: "#8A8F98",
                },
                {
                  char: "The Jester",
                  status: "Route status unknown",
                  detail: "",
                  color: "#8A8F98",
                },
                {
                  char: "Ticket Taker",
                  status: "Route status unknown",
                  detail: "",
                  color: "#8A8F98",
                },
                {
                  char: "Columbina",
                  status: "Lore character",
                  detail: "Not directly playable",
                  color: "#FFB84D",
                },
                {
                  char: "Carol",
                  status: "Supporting character",
                  detail: "",
                  color: "#8A8F98",
                },
              ].map((item) => (
                <div
                  key={item.char}
                  className="flex items-center justify-between gap-4 p-3 rounded-lg bg-[#0A0A12] border border-[#1E1E2A]"
                >
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-display" style={{ color: item.color }}>
                      {item.char}
                    </span>
                    <span className="text-xs text-[#8A8F98] ml-2">
                      {item.status}
                    </span>
                  </div>
                  {item.detail && (
                    <span className="text-[10px] font-mono text-[#8A8F98] flex-shrink-0">
                      {item.detail}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips for Finding Endings */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#00F0FF] mb-4">
            💡 Tips for Finding Endings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                num: "01",
                title: "Save before every choice",
                desc: "Ren'Py games allow quick save/load. Use this to explore every branch without replaying from the start.",
              },
              {
                num: "02",
                title: "Pay attention to timed choices",
                desc: "Some decisions have a timer. If you miss them, the game picks for you — usually the worst option.",
              },
              {
                num: "03",
                title: "Explore all dialogue options",
                desc: "Don't just pick the 'nice' option. Some endings only trigger when you make unconventional choices.",
              },
              {
                num: "04",
                title: "Check the hidden scenes",
                desc: "Some endings require finding secret content — like the mirror trick, bathroom scene, or Pierrot's nose.",
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

        {/* Bottom Banner */}
        <div className="p-6 rounded-xl bg-[#12121A] border border-[#00F0FF]/20">
          <p className="text-sm text-[#8A8F98] italic">
            Found a new ending? The Freak Circus is still in development. As the
            game updates, new endings will be added.
          </p>
        </div>
      </div>
    </main>
  );
}
