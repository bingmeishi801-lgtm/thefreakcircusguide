import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Endings Guide — The Freak Circus Guide",
  description:
    "What we know about endings in The Freak Circus v0.2 prototype. Currently 1 confirmed bad ending.",
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
          Endings Guide
        </h1>
        <p className="text-[#8A8F98] text-sm mb-10">
          The Freak Circus is in Prototype stage. The developer has stated that
          endings are still being planned. Currently only 1 bad ending is
          accessible in v0.2.
        </p>

        {/* Confirmed Ending */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#00F0FF] mb-4">
            🎭 Confirmed Ending
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#FF4F7F]/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-3 h-3 rounded-full bg-[#FF4F7F] flex-shrink-0" />
              <h3 className="font-display text-lg text-[#FF4F7F]">
                BAD ENDING
              </h3>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded text-[#FF4F7F] bg-[#FF4F7F]/10">
                Currently accessible
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
                  Type:
                </span>
                <span className="text-sm text-[#FF4F7F]">Bad Ending</span>
              </div>
            </div>

            <p className="text-sm text-[#C8CCD4] leading-relaxed mb-5">
              The only ending currently in the prototype. It&apos;s accessible
              through Pierrot&apos;s route and showcases the darker side of his
              obsessive personality.
            </p>
          </div>
        </section>

        {/* Planned Endings */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#FFB84D] mb-4">
            🔮 Planned Endings
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <p className="text-sm text-[#C8CCD4] leading-relaxed mb-4">
              The developer has mentioned plans for multiple endings, but has
              also stated:
            </p>
            <blockquote className="p-4 rounded-lg bg-[#0A0A12] border-l-2 border-[#FFB84D] mb-4">
              <p className="text-sm text-[#8A8F98] italic">
                &quot;The script is still a work in progress, so no endings are
                fully planned yet.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-[#C8CCD4] leading-relaxed">
              As the game develops beyond the prototype stage, more endings will
              be added. This page will be updated when new endings are confirmed
              by the community.
            </p>
          </div>
        </section>

        {/* Character Route Status */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#E8ECF0] mb-4">
            📊 Character Route Status
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <div className="space-y-3">
              {[
                {
                  char: "Pierrot",
                  status: "1 bad ending accessible",
                  color: "#FF4F7F",
                },
                {
                  char: "Harlequin",
                  status: "Route in progress",
                  color: "#00F0FF",
                },
                {
                  char: "The Doctor",
                  status: "Unknown",
                  color: "#8A8F98",
                },
                {
                  char: "The Jester",
                  status: "Unknown",
                  color: "#8A8F98",
                },
                {
                  char: "Ticket Taker",
                  status: "Unknown",
                  color: "#8A8F98",
                },
              ].map((item) => (
                <div
                  key={item.char}
                  className="flex items-center justify-between gap-4 p-3 rounded-lg bg-[#0A0A12] border border-[#1E1E2A]"
                >
                  <span
                    className="text-sm font-display"
                    style={{ color: item.color }}
                  >
                    {item.char}
                  </span>
                  <span className="text-xs text-[#8A8F98]">{item.status}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#8A8F98] mt-4">
              Columbina is a lore character (deceased) and is not expected to
              have a playable route.
            </p>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#00F0FF] mb-4">
            💡 General Tips
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
                title: "Explore all dialogue options",
                desc: "Don't just pick the 'nice' option. Some outcomes only trigger when you make unconventional choices.",
              },
              {
                num: "03",
                title: "Play blind first",
                desc: "The game is best experienced without spoilers on your first run. Save the guide for your second playthrough.",
              },
              {
                num: "04",
                title: "Check back after updates",
                desc: "The game is still in development. New endings and routes will be added in future versions.",
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
            This page is based on v0.2 prototype content. As the game updates,
            new endings will be discovered and documented.
          </p>
        </div>
      </div>
    </main>
  );
}
