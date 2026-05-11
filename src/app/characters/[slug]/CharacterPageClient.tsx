"use client";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Shield,
  Swords,
  Skull,
  Star,
  Map,
  BookOpen,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { useProgress } from "@/lib/useProgress";

interface Character {
  id: number;
  name: string;
  slug: string;
  role: string;
  personality: string;
  route_hint: string;
  icon: string;
}

interface Route {
  id: number;
  character_slug: string;
  title: string;
  slug: string;
  summary: string;
  difficulty: string;
  ending_count: number;
}

interface Ending {
  id: number;
  route_slug: string;
  name: string;
  slug: string;
  ending_type: string;
  description: string;
  unlock_hint: string;
}

const ENDING_STYLES: Record<
  string,
  { color: string; icon: typeof Star; label: string }
> = {
  good: { color: "#00F0FF", icon: Star, label: "Good Ending" },
  normal: { color: "#FFB800", icon: Shield, label: "Neutral Ending" },
  bad: { color: "#FF3E3E", icon: Skull, label: "Bad Ending" },
};

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: "#00F0FF",
  Normal: "#FFB800",
  Hard: "#FF3E3E",
};

const CHARACTER_BACKGROUNDS: Record<string, string> = {
  luka: "/images/game/ss1.png",
  vesper: "/images/game/ss2.png",
  kazimir: "/images/game/ss3.png",
  nyx: "/images/game/ss4.jpg",
  dmitri: "/images/game/ss5.jpg",
};

const CHARACTER_EMOJIS: Record<string, string> = {
  ringmaster: "🎩",
  fortune: "🔮",
  strongman: "💪",
  trapeze: "🎪",
  fire: "🔥",
};

export function CharacterPageClient({
  character,
  routes,
  endings,
  allCharacters,
}: {
  character: Character;
  routes: Route[];
  endings: Ending[];
  allCharacters?: Character[];
}) {
  const [revealedEndings, setRevealedEndings] = useState<Set<number>>(
    new Set()
  );
  const { progress, toggleEnding, markVisited, getEndingCount, ready } = useProgress();

  const toggleReveal = (id: number) => {
    setRevealedEndings((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  useEffect(() => {
    markVisited(character.slug);
  }, [character.slug, markVisited]);

  const bgImage = CHARACTER_BACKGROUNDS[character.slug];
  const endingIds = endings.map((e) => `ending-${e.id}`);
  const unlockedCount = getEndingCount(endingIds);
  const totalCount = endings.length;
  const progressPct = totalCount > 0 ? Math.round((unlockedCount / totalCount) * 100) : 0;

  return (
    <div className="min-h-screen pb-16">
      {/* Hero banner with game artwork */}
      <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
        {bgImage && (
          <>
            <img
              src={bgImage}
              alt={`${character.name} — The Freak Circus`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-[#12121A]/70 to-[#12121A]/30" />
          </>
        )}
        
        {/* Back link */}
        <a
          href="/"
          className="absolute top-6 left-4 sm:left-6 z-10 inline-flex items-center gap-2 text-sm font-mono text-[#8A8F98] hover:text-[#00F0FF] transition-colors bg-[#12121A]/80 px-3 py-1.5 rounded-lg border border-[#1E1E2A]"
        >
          <ArrowLeft size={14} /> BACK TO GUIDE
        </a>
        
        {/* Character name overlay */}
        <div className="absolute bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{CHARACTER_EMOJIS[character.icon] || "🎭"}</span>
            <span className="inline-block bg-[#1E1E2A]/80 text-[#8A8F98] font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded border border-[#2E2E3A]">
              {character.role}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-[#E8ECF0] drop-shadow-lg">
            {character.name}
          </h1>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 -mt-4 relative z-10">
        {/* Character info card with progress */}
        <div className="hud-frame bg-[#12121A] border border-[#1E1E2A] rounded-xl p-6 mb-8">
          <p className="font-body text-base text-[#8A8F98] mb-4">
            {character.personality}
          </p>
          <div className="flex items-center gap-2 text-sm font-mono mb-4">
            <Swords size={14} style={{ color: "#00F0FF" }} />
            <span className="text-[#8A8F98]">Route hint:</span>
            <span className="text-[#E8ECF0]">{character.route_hint}</span>
          </div>

          {/* Progress bar */}
          {totalCount > 0 && ready && (
            <div className="mt-4 pt-4 border-t border-[#1E1E2A]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#8A8F98] uppercase tracking-wider">Your Progress</span>
                <span className="font-mono text-sm" style={{ color: progressPct === 100 ? "#00F0FF" : "#E8ECF0" }}>
                  {unlockedCount}/{totalCount} endings unlocked
                  {progressPct === 100 && " ✓"}
                </span>
              </div>
              <div className="w-full h-2 bg-[#1E1E2A] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${progressPct}%`,
                    background: progressPct === 100 ? "#00F0FF" : "linear-gradient(90deg, #00F0FF, #FF6B9D)",
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Routes */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Map size={20} style={{ color: "#00F0FF" }} />
            <h2 className="font-display text-xl sm:text-2xl text-[#E8ECF0]">
              Routes
            </h2>
          </div>
          <div className="space-y-4">
            {routes.map((route) => (
              <div
                key={route.id}
                className="glow-border bg-[#12121A] rounded-xl p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                  <h3 className="font-display text-lg text-[#E8ECF0] flex-1">
                    {route.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded"
                      style={{
                        color: DIFFICULTY_COLORS[route.difficulty] || "#8A8F98",
                        background: "rgba(30, 30, 42, 0.8)",
                        border: `1px solid ${DIFFICULTY_COLORS[route.difficulty] || "#1E1E2A"}`,
                      }}
                    >
                      {route.difficulty}
                    </span>
                    <span className="font-mono text-[11px] text-[#8A8F98]">
                      {route.ending_count > 0 ? `${route.ending_count} ending${route.ending_count > 1 ? 's' : ''}` : 'Endings coming soon'}
                    </span>
                  </div>
                </div>
                <p className="font-body text-sm text-[#8A8F98]">
                  {route.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Endings with progress checkboxes */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={20} style={{ color: "#00F0FF" }} />
            <h2 className="font-display text-xl sm:text-2xl text-[#E8ECF0]">
              Endings
            </h2>
          </div>
          <p className="font-body text-sm text-[#8A8F98] mb-6">
            Click the eye to reveal spoilers. Check the circle to mark as unlocked.
          </p>

          <div className="space-y-3">
            {endings.map((ending) => {
              const style = ENDING_STYLES[ending.ending_type] || {
                color: "#8A8F98",
                icon: Star,
                label: "Ending",
              };
              const Icon = style.icon;
              const isRevealed = revealedEndings.has(ending.id);
              const endingKey = `ending-${ending.id}`;
              const isUnlocked = ready && !!progress.endings[endingKey];

              return (
                <div
                  key={ending.id}
                  className="bg-[#12121A] border border-[#1E1E2A] rounded-xl overflow-hidden transition-all"
                  style={isUnlocked ? { borderColor: `${style.color}40` } : undefined}
                >
                  <div className="flex items-center gap-2 p-4">
                    {/* Progress checkbox */}
                    <button
                      onClick={() => toggleEnding(endingKey)}
                      className="flex-shrink-0 p-1 rounded transition-colors hover:bg-[#1E1E2A]"
                      title={isUnlocked ? "Mark as not unlocked" : "Mark as unlocked"}
                      aria-label={isUnlocked ? "Mark as not unlocked" : "Mark as unlocked"}
                    >
                      {isUnlocked ? (
                        <CheckCircle2 size={20} style={{ color: style.color }} />
                      ) : (
                        <Circle size={20} className="text-[#3A3A4A]" />
                      )}
                    </button>

                    {/* Reveal toggle */}
                    <button
                      onClick={() => toggleReveal(ending.id)}
                      aria-expanded={isRevealed}
                      aria-controls={`ending-${ending.id}`}
                      className="flex-1 flex items-center gap-3 text-left hover:bg-[#1E1E2A]/30 transition-colors rounded p-1"
                    >
                      <Icon size={18} style={{ color: style.color }} />
                      <div className="flex-1 min-w-0">
                        <span className={`font-display text-sm block ${isUnlocked ? 'text-[#E8ECF0]' : 'text-[#8A8F98]'}`}>
                          {ending.name}
                        </span>
                        <span
                          className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded inline-block mt-1"
                          style={{
                            color: style.color,
                            background: `${style.color}15`,
                          }}
                        >
                          {style.label}
                        </span>
                      </div>
                      {isRevealed ? (
                        <ChevronUp size={16} className="text-[#8A8F98]" />
                      ) : (
                        <ChevronDown size={16} className="text-[#8A8F98]" />
                      )}
                    </button>
                  </div>

                  {isRevealed && (
                    <div id={`ending-${ending.id}`} className="px-4 pb-4 pl-12 border-t border-[#1E1E2A] pt-3" role="region">
                      <p className="font-body text-sm text-[#8A8F98] mb-3">
                        {ending.description}
                      </p>
                      <div className="flex items-start gap-2">
                        <span className="font-mono text-[11px] text-[#00F0FF] uppercase tracking-wider flex-shrink-0 mt-0.5">
                          Hint:
                        </span>
                        <span className="font-body text-sm text-[#E8ECF0]">
                          {ending.unlock_hint}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Recommended next characters */}
        {allCharacters && allCharacters.length > 1 && (
          <section className="mb-10">
            <h3 className="font-display text-lg text-[#E8ECF0] mb-4">Next Up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {allCharacters
                .filter((c) => c.slug !== character.slug)
                .slice(0, 2)
                .map((c) => (
                  <a
                    key={c.id}
                    href={`/characters/${c.slug}`}
                    className="glow-border bg-[#12121A] rounded-xl p-4 flex items-center gap-3 hover:border-[#00F0FF]/30 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#1E1E2A]">
                      <span className="text-lg">{CHARACTER_EMOJIS[c.icon] || "🎭"}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-display text-sm text-[#E8ECF0] group-hover:text-[#00F0FF] transition-colors block">
                        {c.name}
                      </span>
                      <span className="font-mono text-[10px] text-[#8A8F98] uppercase">{c.role}</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#8A8F98]">→</span>
                  </a>
                ))}
            </div>
          </section>
        )}

        {/* Back to all characters */}
        <div className="text-center">
          <a
            href="/#characters"
            className="cta-cyan inline-block"
          >
            View All Characters
          </a>
        </div>
      </div>
    </div>
  );
}
