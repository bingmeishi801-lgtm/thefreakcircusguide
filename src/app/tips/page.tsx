"use client";

import { useEffect, useState } from "react";

interface Tip {
  id: string;
  title: string;
  content: string;
}

const staticTips = [
  {
    title: "Save Often",
    content:
      "Ren'Py has a built-in save system. Use it before every choice so you can explore different branches without replaying from the start.",
  },
  {
    title: "Explore Every Option",
    content:
      "Don't just follow one path. The game rewards exploration with different scenes and character interactions.",
  },
  {
    title: "Pay Attention to Details",
    content:
      "The circus hides information in its artwork and dialogue. Look carefully at backgrounds and read between the lines.",
  },
  {
    title: "Play Blind First",
    content:
      "The Freak Circus is best experienced without spoilers on your first run. Save the guide for your second playthrough.",
  },
  {
    title: "Character Order Matters",
    content:
      "Who you interact with first can affect subsequent scenes. Try different orders across playthroughs.",
  },
  {
    title: "Check Back After Updates",
    content:
      "The game is still in prototype stage. New content, characters, and endings will be added in future versions.",
  },
];

export default function TipsPage() {
  const [apiTips, setApiTips] = useState<Tip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/tips")
      .then((res) => res.json())
      .then((data) => {
        const d = data as { data?: Tip[] };
        if (d.data && Array.isArray(d.data)) {
          setApiTips(d.data);
        }
      })
      .catch(() => {
        // API unavailable, rely on static tips
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A12] text-[#E8ECF0] pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[3px] text-[#00F0FF] mb-3">
          Tips &amp; Tricks
        </p>
        <h1 className="font-display text-3xl sm:text-4xl mb-4">
          Tips &amp; Tricks
        </h1>
        <p className="text-[#8A8F98] text-sm mb-10">
          General tips for playing The Freak Circus. Save management,
          exploration strategies, and advice for new players.
        </p>

        {/* API Tips */}
        {loading && (
          <section className="mb-12">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-[#12121A] border border-[#1E1E2A] animate-pulse"
                >
                  <div className="h-3 bg-[#1E1E2A] rounded w-1/3 mb-3" />
                  <div className="h-2 bg-[#1E1E2A] rounded w-full mb-2" />
                  <div className="h-2 bg-[#1E1E2A] rounded w-2/3" />
                </div>
              ))}
            </div>
          </section>
        )}

        {!loading && apiTips.length > 0 && (
          <section className="mb-12">
            <h2 className="font-display text-xl text-[#00F0FF] mb-4">
              📋 Community Tips
            </h2>
            <div className="space-y-4">
              {apiTips.map((tip) => (
                <div
                  key={tip.id}
                  className="p-5 rounded-xl bg-[#12121A] border border-[#1E1E2A]"
                >
                  <h3 className="font-display text-sm text-[#E8ECF0] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[#C8CCD4] leading-relaxed">
                    {tip.content}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Static Tips */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#FF4F7F] mb-4">
            🎯 Essential Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {staticTips.map((tip, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-[#12121A] border border-[#1E1E2A]"
              >
                <span className="text-[10px] font-mono text-[#FF4F7F] tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-sm text-[#E8ECF0] mt-1 mb-2">
                  {tip.title}
                </h3>
                <p className="text-xs text-[#8A8F98] leading-relaxed">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="p-4 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
          <p className="text-xs text-[#8A8F98]">
            <strong className="text-[#FFB84D]">Note:</strong> These tips are
            based on the v0.2 prototype. Mechanics and content may change in
            future updates.
          </p>
        </div>
      </div>
    </main>
  );
}
