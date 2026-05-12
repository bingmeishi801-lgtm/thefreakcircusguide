import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Story & Lore — The Freak Circus Guide",
  description:
    "What we know about The Freak Circus world, characters, and story. Based on in-game content from the v0.2 prototype.",
  alternates: { canonical: "https://thefreakcircusguide.com/lore" },
};

export default function LorePage() {
  return (
    <main className="min-h-screen bg-[#0A0A12] text-[#E8ECF0] pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[3px] text-[#00F0FF] mb-3">
          World &amp; Characters
        </p>
        <h1 className="font-display text-3xl sm:text-4xl mb-4">
          The Story of The Freak Circus
        </h1>
        <p className="text-[#8A8F98] text-sm mb-10">
          What we know so far from the v0.2 prototype. The game is still in
          development — many details are incomplete and may change.
        </p>

        {/* The Premise */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#00F0FF] mb-4">
            🎪 The Premise
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <p className="text-sm text-[#C8CCD4] leading-relaxed mb-4">
              The Circus of Horrors has arrived in town. The player character
              gets drawn into the circus and its world. The story involves
              obsessive romance, dark secrets, and choices that determine who you
              end up with — or what happens to you.
            </p>
            <p className="text-sm text-[#C8CCD4] leading-relaxed">
              The game is rated <strong>18+</strong> and contains content
              warnings for: Blood, Death, Murder, Gore, Allusions to cannibalism,
              Abuse, Strong language, Kidnapping, Non-consensual use of drugs,
              Physical domination, and Mild physical harassment.
            </p>
          </div>
        </section>

        {/* The Two Main Characters */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#FF4F7F] mb-4">
            💔 The Two Main Love Interests
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <p className="text-sm text-[#C8CCD4] leading-relaxed mb-4">
              The story centers on two characters who are both obsessed with the
              player. The developer describes them as rivals:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-lg bg-[#0A0A12] border border-[#FF4F7F]/20">
                <h3 className="font-display text-sm text-[#FF4F7F] mb-2">
                  Pierrot
                </h3>
                <p className="text-xs text-[#8A8F98]">
                  Silent yandere. 198cm, snow-white hair, amber eyes, shark-like
                  teeth. Master knife-thrower. His love is described as deep,
                  dark, and all-consuming.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[#0A0A12] border border-[#00F0FF]/20">
                <h3 className="font-display text-sm text-[#00F0FF] mb-2">
                  Harlequin
                </h3>
                <p className="text-xs text-[#8A8F98]">
                  Seductive rival. 187cm, jet-black hair, heterochromatic eyes.
                  Cunning and mercurial. Will do anything to win your attention
                  away from Pierrot.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Characters */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#E8ECF0] mb-4">
            🎭 The Circus Performers
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-lg">🧛</span>
                <div>
                  <h4 className="text-sm font-display text-[#E8ECF0]">
                    The Doctor
                  </h4>
                  <p className="text-xs text-[#8A8F98]">
                    ~190cm. Bloodstained white lab coat, plague doctor mask. Has a
                    Russian accent. Players are requesting a romance route for
                    him.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🃏</span>
                <div>
                  <h4 className="text-sm font-display text-[#E8ECF0]">
                    The Jester
                  </h4>
                  <p className="text-xs text-[#8A8F98]">
                    ~185cm. Violet hair, heterochromatic eyes, carries a pocket
                    watch. The storyteller of the circus.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🎫</span>
                <div>
                  <h4 className="text-sm font-display text-[#E8ECF0]">
                    Ticket Taker
                  </h4>
                  <p className="text-xs text-[#8A8F98]">
                    The gatekeeper. Controls who enters and who leaves the circus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Columbina */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#FFB84D] mb-4">
            🦋 Columbina
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <p className="text-sm text-[#C8CCD4] leading-relaxed">
              Columbina is a deceased character connected to the circus&apos;s
              past. She appears in the lore through other characters&apos;
              dialogue. Her full story is still being revealed as the game
              develops.
            </p>
          </div>
        </section>

        {/* Developer Quote */}
        <section className="mb-12">
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#00F0FF]/20">
            <p className="text-sm text-[#8A8F98] italic mb-3">
              &quot;The game is an 18+ Yandere horror Visual Novel with extreme
              romance/obsessive themes. Stalking is involved. Love is beautiful.
              Love is pain.&quot;
            </p>
            <p className="text-xs text-[#00F0FF]">— NekoBueno, developer</p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="p-4 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
          <p className="text-xs text-[#8A8F98]">
            <strong className="text-[#FFB84D]">Note:</strong> The Freak Circus
            is still in Prototype stage (v0.2). Much of the story is incomplete.
            Details on this page are based on currently available in-game content
            and may change in future updates.
          </p>
        </div>
      </div>
    </main>
  );
}
