import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Story & Lore — The Freak Circus Guide",
  description:
    "The full backstory and lore of The Freak Circus. The story of Columbina, the ringmaster's first love, and the curse that binds the circus.",
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
          Everything we know about the circus, its characters, and the dark history that ties them together. Based on in-game dialogue, developer statements, and community lore analysis.
        </p>

        {/* The Premise */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#00F0FF] mb-4">🎪 The Premise</h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <p className="text-sm text-[#C8CCD4] leading-relaxed mb-4">
              You&apos;re an orphan who wakes up in a place that looks like a circus, with no memory of how you got there. All you know is that something bad happened to your parents — and it&apos;s somehow connected to this place.
            </p>
            <p className="text-sm text-[#C8CCD4] leading-relaxed mb-4">
              The circus is run by the <strong>Ringmaster</strong> (also called the Master), a god-like figure who controls everything and everyone within it. He&apos;s described as both super-rich and incredibly petty.
            </p>
            <p className="text-sm text-[#C8CCD4] leading-relaxed">
              The game is officially described as &quot;A horror yandere visual novel for freaks who love freaks.&quot; It&apos;s rated 18+ and contains sensitive themes including stalking, obsessive behavior, and violence.
            </p>
          </div>
        </section>

        {/* The Love Triangle */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#FF4F7F] mb-4">💔 The Love Triangle</h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <p className="text-sm text-[#C8CCD4] leading-relaxed mb-4">
              The story revolves around the player character and the two main love interests, who are <strong>childhood friends turned bitter rivals</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-lg bg-[#0A0A12] border border-[#FF4F7F]/20">
                <h3 className="font-display text-sm text-[#FF4F7F] mb-2">Pierrot</h3>
                <p className="text-xs text-[#8A8F98]">
                  The silent one. The obsessive one. Wears a white mask with red accents. He&apos;s been watching you from the shadows for a very long time. His love is deep, dark, and all-consuming.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[#0A0A12] border border-[#00F0FF]/20">
                <h3 className="font-display text-sm text-[#00F0FF] mb-2">Harlequin</h3>
                <p className="text-xs text-[#8A8F98]">
                  The tall one. The green one. The seductive rival. He&apos;s taken over 200 photos of you. He&apos;s jealous, possessive, and will do anything to win your attention away from Pierrot.
                </p>
              </div>
            </div>
            <p className="text-sm text-[#C8CCD4] leading-relaxed">
              They were once childhood friends. Now they&apos;re bitter enemies, competing for your affection. The player&apos;s choices determine who wins — or whether anyone does at all.
            </p>
          </div>
        </section>

        {/* Columbina's Story */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#FFB84D] mb-4">🦋 Columbina&apos;s Tragedy</h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <p className="text-sm text-[#C8CCD4] leading-relaxed mb-4">
              The Jester tells the story of <strong>Columbina</strong> — the ringmaster&apos;s first love. Theirs was a forbidden romance that ended in tragedy.
            </p>
            <p className="text-sm text-[#C8CCD4] leading-relaxed mb-4">
              Columbina was a beautiful performer who captured the ringmaster&apos;s heart. But their love was doomed — the circus demands sacrifice, and Columbina paid the ultimate price.
            </p>
            <p className="text-sm text-[#C8CCD4] leading-relaxed">
              Her story is the key to understanding the circus&apos;s curse. The ringmaster&apos;s grief and rage are what keep the circus running, trapping performers in an endless cycle. Players who dig into the lore will find echoes of Columbina&apos;s story in every character&apos;s arc.
            </p>
          </div>
        </section>

        {/* The Circus Hierarchy */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#E8ECF0] mb-4">🎭 The Circus Hierarchy</h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-lg">👑</span>
                <div>
                  <h4 className="text-sm font-display text-[#FFB84D]">The Ringmaster (The Master)</h4>
                  <p className="text-xs text-[#8A8F98]">God-like figure who controls the circus. Described as incredibly powerful and petty. Lost his first love (Columbina) and has never recovered.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🤡</span>
                <div>
                  <h4 className="text-sm font-display text-[#FF4F7F]">Pierrot &amp; Harlequin</h4>
                  <p className="text-xs text-[#8A8F98]">The main performers. Childhood friends turned rivals. Both obsessed with the player character.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🧛</span>
                <div>
                  <h4 className="text-sm font-display text-[#E8ECF0]">The Doctor</h4>
                  <p className="text-xs text-[#8A8F98]">Mysterious healer with a Dracula accent. Has his own secrets. Players are requesting a romance route for him.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🃏</span>
                <div>
                  <h4 className="text-sm font-display text-[#E8ECF0]">The Jester</h4>
                  <p className="text-xs text-[#8A8F98]">The storyteller. Knows the history of the circus and the forbidden love between the ringmaster and Columbina.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🎫</span>
                <div>
                  <h4 className="text-sm font-display text-[#E8ECF0]">Ticket Taker</h4>
                  <p className="text-xs text-[#8A8F98]">The gatekeeper. Gave the player a pink ticket at the café. Controls who enters and who leaves.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🐦</span>
                <div>
                  <h4 className="text-sm font-display text-[#E8ECF0]">Mr. Bird</h4>
                  <p className="text-xs text-[#8A8F98]">A supporting character. Little is known about his role yet — more content expected in future updates.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Quote */}
        <section className="mb-12">
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#00F0FF]/20">
            <p className="text-sm text-[#8A8F98] italic mb-3">
              &quot;The game is an 18+ Yandere horror Visual Novel with extreme romance/obsessive themes. Stalking is involved. Love is beautiful. Love is pain.&quot;
            </p>
            <p className="text-xs text-[#00F0FF]">— NekoBueno, developer</p>
          </div>
        </section>

        {/* Community */}
        <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
          <h3 className="font-display text-lg text-[#E8ECF0] mb-2">Want to Discuss the Lore?</h3>
          <p className="text-sm text-[#8A8F98] mb-3">
            Join our community to discuss theories, share discoveries, and speculate about future content.
          </p>
          <a
            href="https://t.me/tfcguide"
            className="inline-block text-sm font-display text-[#00F0FF] hover:text-[#E8ECF0] transition-colors"
          >
            Join Telegram Community →
          </a>
        </div>
      </div>
    </main>
  );
}
