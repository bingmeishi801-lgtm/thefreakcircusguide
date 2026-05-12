"use client";
import { useState, useEffect } from "react";
import type { Metadata } from "next";

const SCENES = [
  { id: "mirror", emoji: "🪞", title: "The Mirror Scene", tag: "HIDDEN", tagColor: "#FF4F7F" },
  { id: "bathroom", emoji: "🚿", title: "The Bathroom Scene", tag: "HIDDEN", tagColor: "#FF4F7F" },
  { id: "nose-boop", emoji: "👉", title: "Pierrot's Nose Boop", tag: "EASTER EGG", tagColor: "#00F0FF" },
  { id: "photos", emoji: "📸", title: "Harlequin's Photo Obsession", tag: "HIDDEN", tagColor: "#FF4F7F" },
  { id: "kiss", emoji: "💋", title: "The Player Can Kiss First", tag: "SECRET", tagColor: "#00F0FF" },
  { id: "laugh", emoji: "🤡", title: "Harlequin's Real Laugh", tag: "EASTER EGG", tagColor: "#00F0FF" },
  { id: "doctor-voice", emoji: "🧛", title: "The Doctor's Voice", tag: "DETAIL", tagColor: "#FF4F7F" },
] as const;

function useChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("tfc-hidden-scenes");
      if (saved) setChecked(new Set(JSON.parse(saved)));
    } catch {}
    setReady(true);
  }, []);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem("tfc-hidden-scenes", JSON.stringify([...next]));
      return next;
    });
  };

  return { checked, toggle, ready };
}

export default function HiddenScenesPage() {
  const { checked, toggle, ready } = useChecklist();
  const found = checked.size;
  const total = SCENES.length;

  return (
    <main className="min-h-screen bg-[#0A0A12] text-[#E8ECF0] pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[3px] text-[#00F0FF] mb-3">
          Spoiler Warning
        </p>
        <h1 className="font-display text-3xl sm:text-4xl mb-4">
          Hidden Scenes &amp; Easter Eggs
        </h1>
        <p className="text-[#8A8F98] text-sm mb-6">
          The Freak Circus hides several secret interactions and scenes that most players miss on their first playthrough. Here&apos;s everything the community has found so far.
        </p>

        {/* Progress tracker */}
        {ready && (
          <div className="mb-10 p-4 rounded-xl bg-[#12121A] border border-[#1E1E2A] flex items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#8A8F98]">Discovery Progress</span>
                <span className="font-mono text-sm text-[#00F0FF]">{found}/{total}</span>
              </div>
              <div className="h-2 bg-[#0A0A12] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(found / total) * 100}%`,
                    background: found === total ? "#00F0FF" : "linear-gradient(90deg, #FF4F7F, #00F0FF)",
                  }}
                />
              </div>
            </div>
            {found === total && (
              <span className="font-mono text-xs text-[#00F0FF]">✦ Complete!</span>
            )}
          </div>
        )}

        {/* Scene 1: Mirror */}
        <article className="mb-8 p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => toggle("mirror")}
              className="w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 transition-colors"
              style={{
                borderColor: checked.has("mirror") ? "#00F0FF" : "#3A3A4A",
                background: checked.has("mirror") ? "#00F0FF20" : "transparent",
              }}
            >
              {checked.has("mirror") && <span className="text-[#00F0FF] text-xs">✓</span>}
            </button>
            <span className="text-2xl">🪞</span>
            <h2 className="font-display text-xl text-[#E8ECF0]">The Mirror Scene</h2>
            <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded" style={{ color: "#FF4F7F", background: "#FF4F7F15" }}>HIDDEN</span>
          </div>
          <p className="text-sm text-[#C8CCD4] mb-4">
            After the dressing room scene, <strong>look at the mirror</strong> before leaving. This triggers a unique scene where Pierrot catches you staring — and the dialogue changes depending on whether you&apos;re on a Pierrot or Harlequin route.
          </p>
          <div className="bg-[#0A0A12] rounded-lg p-4 font-mono text-xs text-[#8A8F98]">
            <p className="text-[#00F0FF] mb-2">How to trigger:</p>
            <p>Dressing Room → <span className="text-[#E8ECF0]">Look at mirror</span> (instead of Leave) → Unique dialogue plays</p>
            <p className="mt-2 text-[#FF4F7F]">Note: Very easy to miss — the &quot;Leave&quot; button is more prominent</p>
          </div>
        </article>

        {/* Scene 2: Bathroom */}
        <article className="mb-8 p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => toggle("bathroom")}
              className="w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 transition-colors"
              style={{
                borderColor: checked.has("bathroom") ? "#00F0FF" : "#3A3A4A",
                background: checked.has("bathroom") ? "#00F0FF20" : "transparent",
              }}
            >
              {checked.has("bathroom") && <span className="text-[#00F0FF] text-xs">✓</span>}
            </button>
            <span className="text-2xl">🚿</span>
            <h2 className="font-display text-xl text-[#E8ECF0]">The Bathroom Scene</h2>
            <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded" style={{ color: "#FF4F7F", background: "#FF4F7F15" }}>HIDDEN</span>
          </div>
          <p className="text-sm text-[#C8CCD4] mb-4">
            When given the choice to <strong>take a shower or not</strong> in the bathroom — choose <strong>no</strong>. The creep factor skyrockets, and the scene that follows is one of the most unsettling in the game. Players who chose &quot;yes&quot; miss this entirely.
          </p>
          <div className="bg-[#0A0A12] rounded-lg p-4 font-mono text-xs text-[#8A8F98]">
            <p className="text-[#00F0FF] mb-2">How to trigger:</p>
            <p>Bathroom choice → <span className="text-[#E8ECF0]">Don&apos;t take a shower</span> → Creepy scene plays</p>
            <p className="mt-2 text-[#FF4F7F]">Counter-intuitive — most players pick &quot;yes&quot; instinctively</p>
          </div>
        </article>

        {/* Scene 3: Nose Boop */}
        <article className="mb-8 p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => toggle("nose-boop")}
              className="w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 transition-colors"
              style={{
                borderColor: checked.has("nose-boop") ? "#00F0FF" : "#3A3A4A",
                background: checked.has("nose-boop") ? "#00F0FF20" : "transparent",
              }}
            >
              {checked.has("nose-boop") && <span className="text-[#00F0FF] text-xs">✓</span>}
            </button>
            <span className="text-2xl">👉</span>
            <h2 className="font-display text-xl text-[#E8ECF0]">Pierrot&apos;s Nose Boop</h2>
            <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded" style={{ color: "#00F0FF", background: "#00F0FF15" }}>EASTER EGG</span>
          </div>
          <p className="text-sm text-[#C8CCD4] mb-4">
            During a close-up of Pierrot&apos;s face, <strong>click his nose</strong>. A &quot;boop&quot; sound plays and Pierrot&apos;s expression changes to genuine surprise — one of the rare moments where his mask of composure cracks.
          </p>
          <div className="bg-[#0A0A12] rounded-lg p-4 font-mono text-xs text-[#8A8F98]">
            <p className="text-[#00F0FF] mb-2">How to trigger:</p>
            <p>Close-up scene → <span className="text-[#E8ECF0]">Click Pierrot&apos;s nose</span> → Boop sound + surprised expression</p>
            <p className="mt-2 text-[#00F0FF]">Community favorite — easy to find but delightful</p>
          </div>
        </article>

        {/* Scene 4: Photos */}
        <article className="mb-8 p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => toggle("photos")}
              className="w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 transition-colors"
              style={{
                borderColor: checked.has("photos") ? "#00F0FF" : "#3A3A4A",
                background: checked.has("photos") ? "#00F0FF20" : "transparent",
              }}
            >
              {checked.has("photos") && <span className="text-[#00F0FF] text-xs">✓</span>}
            </button>
            <span className="text-2xl">📸</span>
            <h2 className="font-display text-xl text-[#E8ECF0]">Harlequin&apos;s Photo Obsession</h2>
            <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded" style={{ color: "#FF4F7F", background: "#FF4F7F15" }}>HIDDEN</span>
          </div>
          <p className="text-sm text-[#C8CCD4] mb-4">
            Harlequin has taken <strong>over 200 photos of you</strong>. This detail is revealed through dialogue choices and background details that most players overlook. Pay attention to his phone screen during certain scenes.
          </p>
          <div className="bg-[#0A0A12] rounded-lg p-4 font-mono text-xs text-[#8A8F98]">
            <p className="text-[#00F0FF] mb-2">Details:</p>
            <p>Harlequin&apos;s phone shows a gallery of candid photos → The number &quot;200+&quot; appears in dialogue</p>
            <p className="mt-2 text-[#FF4F7F]">His obsession is deeper than it first appears</p>
          </div>
        </article>

        {/* Scene 5: Kiss */}
        <article className="mb-8 p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => toggle("kiss")}
              className="w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 transition-colors"
              style={{
                borderColor: checked.has("kiss") ? "#00F0FF" : "#3A3A4A",
                background: checked.has("kiss") ? "#00F0FF20" : "transparent",
              }}
            >
              {checked.has("kiss") && <span className="text-[#00F0FF] text-xs">✓</span>}
            </button>
            <span className="text-2xl">💋</span>
            <h2 className="font-display text-xl text-[#E8ECF0]">The Player Can Kiss First</h2>
            <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded" style={{ color: "#00F0FF", background: "#00F0FF15" }}>SECRET</span>
          </div>
          <p className="text-sm text-[#C8CCD4] mb-4">
            Unlike most Yandere VNs where the love interest initiates everything, in The Freak Circus <strong>the player can kiss first</strong>. This changes the dynamic significantly and unlocks unique dialogue.
          </p>
          <div className="bg-[#0A0A12] rounded-lg p-4 font-mono text-xs text-[#8A8F98]">
            <p className="text-[#00F0FF] mb-2">Context:</p>
            <p>Available during certain romance scenes → <span className="text-[#E8ECF0]">Choose the bold option</span> → Player-initiated kiss</p>
            <p className="mt-2 text-[#00F0FF]">Subverts the typical yandere VN dynamic</p>
          </div>
        </article>

        {/* Scene 6: Laugh */}
        <article className="mb-8 p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => toggle("laugh")}
              className="w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 transition-colors"
              style={{
                borderColor: checked.has("laugh") ? "#00F0FF" : "#3A3A4A",
                background: checked.has("laugh") ? "#00F0FF20" : "transparent",
              }}
            >
              {checked.has("laugh") && <span className="text-[#00F0FF] text-xs">✓</span>}
            </button>
            <span className="text-2xl">🤡</span>
            <h2 className="font-display text-xl text-[#E8ECF0]">Harlequin&apos;s Real Laugh</h2>
            <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded" style={{ color: "#00F0FF", background: "#00F0FF15" }}>EASTER EGG</span>
          </div>
          <p className="text-sm text-[#C8CCD4] mb-4">
            Harlequin&apos;s mask only shows a wide grin — but <strong>his real face has been shown once</strong>. Players who caught this detail noticed his genuine expression is very different from the mask he wears.
          </p>
        </article>

        {/* Scene 7: Doctor */}
        <article className="mb-8 p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => toggle("doctor-voice")}
              className="w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 transition-colors"
              style={{
                borderColor: checked.has("doctor-voice") ? "#00F0FF" : "#3A3A4A",
                background: checked.has("doctor-voice") ? "#00F0FF20" : "transparent",
              }}
            >
              {checked.has("doctor-voice") && <span className="text-[#00F0FF] text-xs">✓</span>}
            </button>
            <span className="text-2xl">🧛</span>
            <h2 className="font-display text-xl text-[#E8ECF0]">The Doctor&apos;s Voice</h2>
            <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded" style={{ color: "#FF4F7F", background: "#FF4F7F15" }}>DETAIL</span>
          </div>
          <p className="text-sm text-[#C8CCD4] mb-4">
            The Doctor has a <strong>Dracula-like accent</strong> that&apos;s easy to miss if you&apos;re speed-reading. Fans are actively requesting a romance route for him. His character deepens significantly in Day 2 content.
          </p>
        </article>

        <div className="mt-16 p-6 rounded-xl bg-[#12121A] border border-[#FF4F7F]/20">
          <p className="text-sm text-[#C8CCD4]">
            <strong className="text-[#FF4F7F]">⚠️ Spoiler Note:</strong> This page contains major spoilers for The Freak Circus. If you haven&apos;t played through the game at least once, we recommend doing a blind playthrough first.
          </p>
          <p className="text-sm text-[#8A8F98] mt-3">
            Found a hidden scene we missed? Join our{" "}
            <a href="https://t.me/tfcguide" className="text-[#00F0FF] hover:underline">
              Telegram community
            </a>{" "}
            and share your discovery.
          </p>
        </div>
      </div>
    </main>
  );
}
