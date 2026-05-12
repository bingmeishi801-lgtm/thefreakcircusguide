import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walkthrough — The Freak Circus Guide",
  description:
    "Day-by-day walkthrough for The Freak Circus. Covers Day 1 and Day 2 story structure, key choices, and route tips.",
};

export default function WalkthroughPage() {
  return (
    <main className="min-h-screen bg-[#0A0A12] text-[#E8ECF0]">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-[#00F0FF] text-sm font-mono tracking-widest uppercase mb-4">
          Complete Walkthrough
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          The Freak Circus Walkthrough
        </h1>
        <p className="text-[#9CA3AF] text-lg mb-10 max-w-2xl">
          A day-by-day guide to The Freak Circus. This walkthrough covers what happens in each day,
          how choices affect your route, and what to pay attention to.
        </p>
        <div className="bg-[#FF4F7F]/10 border border-[#FF4F7F]/30 rounded-xl p-6 mb-12">
          <p className="text-[#FF4F7F] font-bold mb-2">⚠️ Spoiler Warning</p>
          <p className="text-[#9CA3AF] text-sm">
            This walkthrough reveals story events and choices. If you want a fresh experience,
            play the game first, then come back here.
          </p>
        </div>

        {/* What Type of Game */}
        <div className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#00F0FF] mb-4">
            What Type of Game Is This?
          </h2>
          <p className="text-[#9CA3AF] mb-4">
            The Freak Circus is a <strong className="text-[#E8ECF0]">choice-driven visual novel</strong>.
            You read the story, make dialogue choices, and those choices determine which character
            route you follow and which ending you reach.
          </p>
          <ul className="space-y-2 text-[#9CA3AF] text-sm">
            <li><span className="text-[#00F0FF]">▸</span> Choices affect character perception of you</li>
            <li><span className="text-[#00F0FF]">▸</span> No visible affection meter — you infer interest from dialogue</li>
            <li><span className="text-[#00F0FF]">▸</span> Some choices are more forgiving than others</li>
            <li><span className="text-[#00F0FF]">▸</span> The game tracks your decisions across both days</li>
          </ul>
        </div>

        {/* Day 1 */}
        <div className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">☀️</span>
            <div>
              <h2 className="text-2xl font-bold text-[#00F0FF]">Day 1 — First Encounter</h2>
              <p className="text-[#FF4F7F] text-sm font-mono">The café, the ticket, and the circus</p>
            </div>
          </div>

          <p className="text-[#9CA3AF] mb-6">
            Day 1 introduces you to the world and the two main love interests. Your early choices
            set the tone for your entire playthrough.
          </p>

          <div className="space-y-6">
            <div className="border-l-2 border-[#00F0FF] pl-4">
              <h3 className="text-[#E8ECF0] font-bold mb-2">The Café Scene</h3>
              <p className="text-[#9CA3AF] text-sm mb-2">
                You work at a café. Pierrot appears as a customer. How you respond to his
                awkwardness sets the tone for your relationship.
              </p>
              <p className="text-[#FFB800] text-xs">
                ⚠️ Unverified by us: Specific dialogue options and their exact effects.
                Based on developer description and playthrough videos.
              </p>
            </div>

            <div className="border-l-2 border-[#00F0FF] pl-4">
              <h3 className="text-[#E8ECF0] font-bold mb-2">The Ticket</h3>
              <p className="text-[#9CA3AF] text-sm mb-2">
                You receive a ticket to the Freak Circus. The ticket system is part of
                how the game routes you toward different outcomes.
              </p>
              <p className="text-[#FFB800] text-xs">
                ⚠️ Unverified by us: The exact ticket color system and what each color means.
                Some sources mention different colored tickets, but we haven't confirmed this.
              </p>
            </div>

            <div className="border-l-2 border-[#00F0FF] pl-4">
              <h3 className="text-[#E8ECF0] font-bold mb-2">Circus Arrival</h3>
              <p className="text-[#9CA3AF] text-sm">
                You arrive at the Freak Circus and meet the Ticket Taker. You explore the grounds
                and watch performances. This is where you start making choices that affect your route.
              </p>
            </div>

            <div className="border-l-2 border-[#00F0FF] pl-4">
              <h3 className="text-[#E8ECF0] font-bold mb-2">Pierrot's Performance</h3>
              <p className="text-[#9CA3AF] text-sm mb-2">
                Pierrot performs. Your reaction to his performance determines how he
                perceives you — kindness vs. pity matters.
              </p>
              <p className="text-[#FFB800] text-xs">
                ⚠️ Unverified by us: Specific dialogue options. We know from the developer that
                Pierrot is sensitive to being seen as weak.
              </p>
            </div>

            <div className="border-l-2 border-[#00F0FF] pl-4">
              <h3 className="text-[#E8ECF0] font-bold mb-2">Harlequin's Entrance</h3>
              <p className="text-[#9CA3AF] text-sm">
                Harlequin appears as Pierrot's stage rival. Whether you engage with him
                or stay loyal to Pierrot shapes Day 2. Harlequin is described as "seductive"
                and his presence creates a competitive dynamic.
              </p>
            </div>
          </div>

          <div className="bg-[#0A0A0F] rounded-xl p-4 mt-6">
            <p className="text-[#9CA3AF] text-sm">
              <strong className="text-[#E8ECF0]">Day 1 Goal:</strong> Establish trust with one
              character. Pierrot responds to kindness and directness. Harlequin responds to
              boldness and curiosity.
            </p>
          </div>
        </div>

        {/* Day 2 */}
        <div className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🌙</span>
            <div>
              <h2 className="text-2xl font-bold text-[#00F0FF]">Day 2 — Deeper Into the Circus</h2>
              <p className="text-[#FF4F7F] text-sm font-mono">Character tents, revelations, and route conclusions</p>
            </div>
          </div>

          <p className="text-[#9CA3AF] mb-6">
            Day 2 is where routes diverge significantly. You visit individual character tents
            and the story becomes more intense.
          </p>

          <div className="space-y-6">
            <div className="border-l-2 border-[#FF4F7F] pl-4">
              <h3 className="text-[#E8ECF0] font-bold mb-2">Return to the Circus</h3>
              <p className="text-[#9CA3AF] text-sm">
                You return to the Freak Circus for a second day. The atmosphere is different —
                characters are more open, more intense, and more dangerous.
              </p>
            </div>

            <div className="border-l-2 border-[#FF4F7F] pl-4">
              <h3 className="text-[#E8ECF0] font-bold mb-2">Character Tent Exploration</h3>
              <p className="text-[#9CA3AF] text-sm mb-2">
                Day 2 lets you explore individual character tents. Each tent reveals backstory
                and deepens your relationship with that character.
              </p>
              <ul className="space-y-1 text-[#9CA3AF] text-xs">
                <li><span className="text-[#FF4F7F]">•</span> Pierrot's tent — intimate and unsettling</li>
                <li><span className="text-[#FF4F7F]">•</span> Harlequin's tent — seductive and competitive</li>
                <li><span className="text-[#FF4F7F]">•</span> Doctor's tent — reveals backstory about the circus</li>
                <li><span className="text-[#FF4F7F]">•</span> Ticket Taker's tent — reveals lore</li>
                <li><span className="text-[#FF4F7F]">•</span> Jester's tent — storytelling and narration</li>
              </ul>
            </div>

            <div className="border-l-2 border-[#FF4F7F] pl-4">
              <h3 className="text-[#E8ECF0] font-bold mb-2">Route Conclusions</h3>
              <p className="text-[#9CA3AF] text-sm mb-2">
                Day 2 is where character routes reach their current conclusions.
                The game is still in development — full endings are planned but not yet implemented.
              </p>
              <p className="text-[#FFB800] text-xs">
                ⚠️ Important: The developer states "The script is still a work in progress,
                so no endings are fully planned yet." Only 1 bad ending exists in the current build.
              </p>
            </div>
          </div>

          <div className="bg-[#0A0A0F] rounded-xl p-4 mt-6">
            <p className="text-[#9CA3AF] text-sm">
              <strong className="text-[#E8ECF0]">Day 2 Goal:</strong> Deepen your chosen route.
              Explore the tent of the character you want to pursue. Pay attention to dialogue
              changes — they signal your route status.
            </p>
          </div>
        </div>

        {/* Choice System */}
        <div className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#00F0FF] mb-6">
            How Choices Work
          </h2>
          <p className="text-[#9CA3AF] mb-4">
            The Freak Circus uses a <strong className="text-[#E8ECF0]">hidden affection system</strong>.
            There is no visible meter. You must infer how characters feel about you from:
          </p>
          <ul className="space-y-2 text-[#9CA3AF] text-sm mb-6">
            <li><span className="text-[#00F0FF]">▸</span> Dialogue tone changes</li>
            <li><span className="text-[#00F0FF]">▸</span> Which scenes become available</li>
            <li><span className="text-[#00F0FF]">▸</span> Character behavior toward you</li>
            <li><span className="text-[#00F0FF]">▸</span> How other characters react to your choices</li>
          </ul>

          <div className="bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-xl p-4">
            <p className="text-[#FFB800] text-sm">
              <strong>Note from the developer:</strong> "The script is still a work in progress,
              so no endings are fully planned yet." This means the choice system may change
              in future updates.
            </p>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#FF4F7F] mb-6">
            Walkthrough Tips
          </h2>
          <ul className="space-y-3 text-[#9CA3AF] text-sm">
            <li>
              <span className="text-[#00F0FF]">💡</span>{" "}
              <strong className="text-[#E8ECF0]">Save before major choices</strong> —
              The game lets you save. Use it. Some choices are harder to reverse than others.
            </li>
            <li>
              <span className="text-[#00F0FF]">💡</span>{" "}
              <strong className="text-[#E8ECF0]">Don't pity Pierrot</strong> —
              He responds to genuine kindness, not condescension. Frame your help as
              seeing his strength, not his weakness.
            </li>
            <li>
              <span className="text-[#00F0FF]">💡</span>{" "}
              <strong className="text-[#E8ECF0]">Harlequin respects boldness</strong> —
              If you want his route, don't back down. Engage with his provocations.
            </li>
            <li>
              <span className="text-[#00F0FF]">💡</span>{" "}
              <strong className="text-[#E8ECF0]">Explore all tents on Day 2</strong> —
              Even if you're on a specific route, other tents reveal important lore.
            </li>
            <li>
              <span className="text-[#00F0FF]">💡</span>{" "}
              <strong className="text-[#E8ECF0]">Play twice</strong> —
              The game has different outcomes based on your choices. A second playthrough
              with different choices reveals new content.
            </li>
          </ul>
        </div>

        {/* Source Note */}
        <div className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl p-6">
          <p className="text-[#9CA3AF] text-xs mb-2">
            <strong className="text-[#E8ECF0]">Sources:</strong> This walkthrough is based on
            the official itch.io page (garula.itch.io/the-freak-circus) and verified playthrough
            videos. Unverified details are clearly marked.
          </p>
          <p className="text-[#6B7280] text-xs">
            The game is in Prototype stage (v0.2). Content may change in future updates.
          </p>
        </div>
      </section>
    </main>
  );
}
