import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Known Bugs & Issues — The Freak Circus Guide",
  description:
    "Known bugs, glitches, and workarounds for The Freak Circus v0.2. Save import issues, texture glitches, music loop bugs, and more.",
  alternates: { canonical: "https://thefreakcircusguide.com/bugs" },
};

interface BugEntry {
  id: string;
  title: string;
  status: "confirmed" | "reported" | "workaround";
  severity: "high" | "medium" | "low";
  description: string;
  workaround?: string;
}

const bugs: BugEntry[] = [
  {
    id: "save-import",
    title: "Save Files Don't Transfer Between Versions",
    status: "confirmed",
    severity: "high",
    description:
      "Save files from earlier versions of the game may not import correctly into newer versions. This is a known issue with Ren'Py save compatibility.",
    workaround: "Start a fresh playthrough when a new version releases. Use the skip function (clicking rapidly) to speed through text you've already read.",
  },
  {
    id: "music-loop",
    title: "Music Doesn't Loop Correctly",
    status: "confirmed",
    severity: "medium",
    description:
      "Some background music tracks don't loop seamlessly, causing brief silence before the track restarts. This can break immersion during tense scenes.",
  },
  {
    id: "texture-blur",
    title: "Texture Glitches on Low Settings",
    status: "confirmed",
    severity: "medium",
    description:
      "Some players report occasional texture glitches when running the game on lower graphics settings. Character sprites may appear blurry or misaligned.",
    workaround: "Increase graphics quality in settings. If the issue persists, try restarting the game.",
  },
  {
    id: "pierrot-expression",
    title: "Pierrot Expression Softlock (Rare)",
    status: "reported",
    severity: "low",
    description:
      "In very rare cases, Pierrot's expression may get stuck during the dressing room scene, showing the wrong sprite for the remainder of the scene.",
    workaround: "Reload from the last save point. The issue is cosmetic and doesn't affect gameplay.",
  },
  {
    id: "day2-trigger",
    title: "Day 2 Unlock Conditions Unclear",
    status: "confirmed",
    severity: "medium",
    description:
      "Some players report difficulty unlocking Day 2 content. The exact trigger conditions aren't always clear, and the game doesn't provide explicit feedback on what's needed.",
    workaround: "Ensure you've explored all dialogue options in Day 1. Try different choices in the key decision scenes (bathroom, mirror, dressing room).",
  },
  {
    id: "text-speed",
    title: "Text Speed Resets on Restart",
    status: "confirmed",
    severity: "low",
    description:
      "Custom text speed settings may reset to default when restarting the game. Auto-mode speed also resets.",
    workaround: "Re-adjust text speed in settings after each game restart.",
  },
];

export default function BugsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A12] text-[#E8ECF0] pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[3px] text-[#00F0FF] mb-3">
          v0.2 — Community Report
        </p>
        <h1 className="font-display text-3xl sm:text-4xl mb-4">
          Known Bugs &amp; Issues
        </h1>
        <p className="text-[#8A8F98] text-sm mb-4">
          Bugs and glitches reported by the community for The Freak Circus v0.2. The developer (Neko/NekoBueno) is actively working on fixes.
        </p>
        <p className="text-[#8A8F98] text-xs mb-10">
          <strong className="text-[#E8ECF0]">Report new bugs:</strong>{" "}
          <a href="https://garula.itch.io/the-freak-circus" className="text-[#00F0FF] hover:underline" target="_blank" rel="noopener">
            Comment on itch.io
          </a>{" "}
          or{" "}
          <a href="https://t.me/tfcguide" className="text-[#00F0FF] hover:underline">
            tell us on Telegram
          </a>
        </p>

        <div className="space-y-4">
          {bugs.map((bug) => (
            <article
              key={bug.id}
              className="p-5 rounded-xl bg-[#12121A] border border-[#1E1E2A]"
            >
              <div className="flex items-start gap-3 mb-3">
                <span
                  className={`mt-0.5 inline-block w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                    bug.severity === "high"
                      ? "bg-[#FF4F7F]"
                      : bug.severity === "medium"
                      ? "bg-[#FFB84D]"
                      : "bg-[#8A8F98]"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-display text-base text-[#E8ECF0]">
                      {bug.title}
                    </h2>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                        bug.status === "confirmed"
                          ? "text-[#FF4F7F] bg-[#FF4F7F]/10"
                          : bug.status === "workaround"
                          ? "text-[#FFB84D] bg-[#FFB84D]/10"
                          : "text-[#8A8F98] bg-[#8A8F98]/10"
                      }`}
                    >
                      {bug.status}
                    </span>
                  </div>
                  <p className="text-sm text-[#C8CCD4] mt-2">{bug.description}</p>
                  {bug.workaround && (
                    <div className="mt-3 p-3 rounded-lg bg-[#0A0A12] border border-[#00F0FF]/10">
                      <p className="text-xs font-mono text-[#00F0FF] mb-1">Workaround:</p>
                      <p className="text-xs text-[#8A8F98]">{bug.workaround}</p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
          <h3 className="font-display text-lg text-[#E8ECF0] mb-2">About Bug Reports</h3>
          <p className="text-sm text-[#8A8F98]">
            The Freak Circus is developed by a small team led by NekoBueno. As the game is still in active development (currently v0.2), bugs are expected. The developer is responsive to bug reports on{" "}
            <a href="https://garula.itch.io/the-freak-circus" className="text-[#00F0FF] hover:underline" target="_blank" rel="noopener">
              itch.io
            </a>{" "}
            and{" "}
            <a href="https://freakcircusofhorrors.tumblr.com" className="text-[#00F0FF] hover:underline" target="_blank" rel="noopener">
              Tumblr
            </a>.
          </p>
        </div>
      </div>
    </main>
  );
}
