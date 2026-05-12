import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Endings — The Freak Circus Guide",
  description:
    "Every confirmed and planned ending in The Freak Circus. Current build status, trigger conditions, and what's coming next.",
};

export default function EndingsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A12] text-[#E8ECF0]">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-[#FF4F7F] text-sm font-mono tracking-widest uppercase mb-4">
          Endings Guide
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          All Endings in The Freak Circus
        </h1>
        <p className="text-[#9CA3AF] text-lg mb-10 max-w-2xl">
          What we know about endings in the current build (v0.2), and what the developer has planned.
        </p>

        <div className="bg-[#FF4F7F]/10 border border-[#FF4F7F]/30 rounded-xl p-6 mb-12">
          <p className="text-[#FF4F7F] font-bold mb-2">⚠️ Major Spoilers Ahead</p>
          <p className="text-[#9CA3AF] text-sm">
            This page reveals ending details. Play the game first if you want a fresh experience.
          </p>
        </div>

        {/* Current Build Status */}
        <div className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#00F0FF] mb-6">
            Current Build Status (v0.2)
          </h2>
          <div className="bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-xl p-4 mb-6">
            <p className="text-[#FFB800] text-sm">
              <strong>From the developer:</strong> "The script is still a work in progress,
              so no endings are fully planned yet."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0A0A0F] rounded-xl p-4">
              <p className="text-[#FF4F7F] font-bold text-sm mb-1">In the Game Now</p>
              <p className="text-[#9CA3AF] text-sm">1 Bad Ending (confirmed)</p>
            </div>
            <div className="bg-[#0A0A0F] rounded-xl p-4">
              <p className="text-[#00F0FF] font-bold text-sm mb-1">Planned</p>
              <p className="text-[#9CA3AF] text-sm">Pierrot's ending, Harlequin's ending, Protagonist's ending, Combined ending</p>
            </div>
          </div>
        </div>

        {/* Confirmed Bad Ending */}
        <div className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#FF4F7F] text-2xl">💀</span>
            <div>
              <h2 className="text-2xl font-bold text-[#FF4F7F]">Bad Ending — "Missing"</h2>
              <p className="text-[#9CA3AF] text-sm">The only confirmed ending in v0.2</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="text-[#E8ECF0] font-bold text-sm mb-1">Ending Name</p>
              <p className="text-[#9CA3AF] text-sm">
                <strong>"Missing"</strong> — confirmed by multiple YouTube playthroughs.
              </p>
            </div>

            <div>
              <p className="text-[#E8ECF0] font-bold text-sm mb-1">How to Get It</p>
              <p className="text-[#9CA3AF] text-sm">
                Fail to engage with Pierrot during Day 1. If you don't catch his attention
                or reject his advances, the game routes you toward the bad ending.
              </p>
              <p className="text-[#FFB800] text-xs mt-2">
                ⚠️ Unverified by us: The exact trigger choice. Some sources say it involves
                selecting a specific option when Pierrot is being ridiculed, but we haven't
                confirmed the exact dialogue tree.
              </p>
            </div>

            <div>
              <p className="text-[#E8ECF0] font-bold text-sm mb-1">What Happens</p>
              <p className="text-[#9CA3AF] text-sm">
                The ending involves the circus "consuming" you. The game's content warnings
                include "allusions to cannibalism," which is relevant to this ending.
              </p>
              <p className="text-[#FFB800] text-xs mt-2">
                ⚠️ Unverified by us: The exact sequence of events. We know the ending exists
                and involves cannibalism themes, but haven't verified the specific scene details.
              </p>
            </div>

            <div>
              <p className="text-[#E8ECF0] font-bold text-sm mb-1">How to Avoid It</p>
              <ul className="space-y-1 text-[#9CA3AF] text-sm">
                <li><span className="text-[#00F0FF]">•</span> Engage positively with Pierrot throughout Day 1</li>
                <li><span className="text-[#00F0FF]">•</span> Don't ignore or reject his advances</li>
                <li><span className="text-[#00F0FF]">•</span> Be kind but not pitying — he responds to genuine connection</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#0A0A0F] rounded-xl p-4">
            <p className="text-[#9CA3AF] text-xs">
              <strong>Source:</strong> Confirmed by YouTube playthrough "The Freak Circus Gameplay
              - Part 1 - Ending: Missing (No Commentary)" by Kai_Iruyama. The uploader explicitly
              names the ending "Missing" in the video description.
            </p>
          </div>
        </div>

        {/* Planned Endings */}
        <div className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#00F0FF] mb-6">
            Planned Endings (Not Yet Implemented)
          </h2>
          <p className="text-[#9CA3AF] mb-6 text-sm">
            These endings are confirmed by the developer as planned, but are NOT in the current
            build. Details below are based on developer statements and game setup, not confirmed content.
          </p>

          <div className="space-y-6">
            <div className="border-l-2 border-[#00F0FF] pl-4">
              <h3 className="text-[#E8ECF0] font-bold mb-2">Pierrot's Ending</h3>
              <p className="text-[#9CA3AF] text-sm">
                Planned as Pierrot's individual route conclusion. Based on the game's setup,
                this likely involves his obsessive devotion and the question of whether you
                stay with him or try to leave.
              </p>
              <p className="text-[#FFB800] text-xs mt-1">
                Status: Planned. No details confirmed by the developer.
              </p>
            </div>

            <div className="border-l-2 border-[#FF4F7F] pl-4">
              <h3 className="text-[#E8ECF0] font-bold mb-2">Harlequin's Ending</h3>
              <p className="text-[#9CA3AF] text-sm">
                Planned as Harlequin's individual route conclusion. Harlequin is described as
                Pierrot's "stage rival" who "decides to join the game."
              </p>
              <p className="text-[#FFB800] text-xs mt-1">
                Status: Planned. No details confirmed by the developer.
              </p>
            </div>

            <div className="border-l-2 border-[#9CA3AF] pl-4">
              <h3 className="text-[#E8ECF0] font-bold mb-2">Protagonist's Ending</h3>
              <p className="text-[#9CA3AF] text-sm">
                A standalone ending for the protagonist. Details unknown.
              </p>
              <p className="text-[#FFB800] text-xs mt-1">
                Status: Planned. No details confirmed by the developer.
              </p>
            </div>

            <div className="border-l-2 border-[#9CA3AF] pl-4">
              <h3 className="text-[#E8ECF0] font-bold mb-2">Combined Ending</h3>
              <p className="text-[#9CA3AF] text-sm">
                "All together (MC with both Pierrot and Harlequin)" — per the developer.
              </p>
              <p className="text-[#FFB800] text-xs mt-1">
                Status: Planned. No details confirmed by the developer.
              </p>
            </div>
          </div>
        </div>

        {/* Unverified Claims */}
        <div className="bg-[#FF4F7F]/5 border border-[#FF4F7F]/20 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#FF4F7F] mb-4">
            ⚠️ Unverified Claims
          </h2>
          <p className="text-[#9CA3AF] mb-4 text-sm">
            Some sources claim additional endings exist. We have NOT verified these:
          </p>
          <ul className="space-y-2 text-[#9CA3AF] text-sm">
            <li><span className="text-[#FF4F7F]">?</span> "Truth Ending" — referenced by some sources, but unconfirmed</li>
            <li><span className="text-[#FF4F7F]">?</span> "The Devouring" — some sources use this name for the bad ending, but the confirmed name is "Missing"</li>
            <li><span className="text-[#FF4F7F]">?</span> "The Silent Devotion" — claimed as Pierrot's route ending, but not confirmed</li>
            <li><span className="text-[#FF4F7F]">?</span> "The Poisonous Seduction" — claimed as Harlequin's route ending, but not confirmed</li>
            <li><span className="text-[#FF4F7F]">?</span> Specific ending scenes and dialogue — not verified by us</li>
          </ul>
          <p className="text-[#6B7280] text-xs mt-4">
            We only list endings we can verify. If you've reached an ending not listed here,
            let us know with a screenshot or video.
          </p>
        </div>

        {/* Route Status */}
        <div className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#00F0FF] mb-6">
            Character Route Status
          </h2>
          <div className="space-y-3">
            {[
              { name: "Pierrot", status: "Full Day 1–2 route", icon: "🎭", color: "#FF4F7F" },
              { name: "Harlequin", status: "Full Day 1–2 route", icon: "🃏", color: "#00F0FF" },
              { name: "Jester", status: "Limited interaction", icon: "📖", color: "#9CA3AF" },
              { name: "Ticket Taker", status: "Limited interaction", icon: "🎫", color: "#9CA3AF" },
              { name: "Doctor", status: "Limited interaction", icon: "💉", color: "#9CA3AF" },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-3 bg-[#0A0A0F] rounded-xl p-3">
                <span className="text-xl">{c.icon}</span>
                <div className="flex-1">
                  <p className="text-[#E8ECF0] font-bold text-sm">{c.name}</p>
                  <p className="text-xs" style={{ color: c.color }}>{c.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Source Note */}
        <div className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl p-6">
          <p className="text-[#9CA3AF] text-xs mb-2">
            <strong className="text-[#E8ECF0]">Sources:</strong> Ending information is from
            the official itch.io page and verified YouTube playthroughs. Unverified claims
            are clearly marked.
          </p>
          <p className="text-[#6B7280] text-xs">
            The game is in Prototype stage (v0.2). Endings may change or be added in future updates.
          </p>
        </div>
      </section>
    </main>
  );
}
