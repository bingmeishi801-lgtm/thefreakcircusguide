"use client";
import { useEffect, useState, useRef } from "react";
import { Gamepad2, Search, X, Maximize2, Minimize2 } from "lucide-react";

interface Character {
  id: number;
  name: string;
  slug: string;
  role: string;
  personality: string;
}

function useStats() {
  const [stats, setStats] = useState({ characters: 0, routes: 0, endings: 0 });
  useEffect(() => {
    Promise.all([
      fetch("/api/characters").then((r) => r.json() as Promise<{ data: unknown[] }>).catch(() => ({ data: [] })),
      fetch("/api/routes").then((r) => r.json() as Promise<{ data: unknown[] }>).catch(() => ({ data: [] })),
      fetch("/api/endings").then((r) => r.json() as Promise<{ data: unknown[] }>).catch(() => ({ data: [] })),
    ]).then(([c, r, e]) => {
      setStats({
        characters: c.data?.length || 0,
        routes: r.data?.length || 0,
        endings: e.data?.length || 0,
      });
    });
  }, []);
  return stats;
}

const HERO_BG = "/images/game/hero.png";

export function HeroSection() {
  const stats = useStats();
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [results, setResults] = useState<Character[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!gameContainerRef.current) return;
    if (!document.fullscreenElement) {
      gameContainerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  useEffect(() => {
    fetch("/api/characters")
      .then((r) => r.json() as Promise<{ data: Character[] }>)
      .then((d) => setCharacters(d.data || []))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setShowDropdown(false);
      return;
    }
    const q = query.toLowerCase();
    const matched = characters.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.personality.toLowerCase().includes(q)
    );
    setResults(matched);
    setShowDropdown(matched.length > 0);
  }, [query, characters]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="hero" className="pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Game Art Hero Banner — no border, blends into bg */}
        <div className="relative overflow-hidden mb-10">
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
            {/* Static hero background */}
            <img
              src={HERO_BG}
              alt="The Freak Circus — Game Art"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Gradient fades image into the dark page background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
            {/* Overlay text */}
            <div className="absolute bottom-10 left-8 right-8 z-10">
              <p className="font-mono text-sm uppercase tracking-widest text-[#00F0FF] mb-3">
                The Freak Circus — Horror Visual Novel
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#E8ECF0] drop-shadow-lg">
                Enter the Circus. Face Your Fears.
              </h2>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#8A8F98] mb-4">Unofficial Fan Guide</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-tight text-[#E8ECF0] mb-5">
              Stop Guessing.<br />Find Every Ending.
            </h1>
            <p className="font-body text-base text-[#8A8F98] mb-8 max-w-lg">
              Step-by-step guides for all {stats.characters || "5"} characters and {stats.endings || "13"} endings in The Freak Circus. Play the game and read the guide on the same page.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="#characters" className="cta-red">Browse Character Guides &mdash; Free</a>
              <a href="#play" className="cta-cyan">Play The Freak Circus Now</a>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 max-w-sm relative" ref={wrapperRef}>
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8F98] z-10 pointer-events-none" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => results.length > 0 && setShowDropdown(true)}
                  placeholder="Search characters, routes, endings..."
                  className="w-full bg-[#12121A] border border-[#1E1E2A] rounded pl-9 pr-9 py-2.5 text-sm text-[#E8ECF0] placeholder-[#8A8F98] focus:border-[#00F0FF] focus:outline-none transition-colors"
                />
                {query && (
                  <button
                    onClick={() => { setQuery(""); setShowDropdown(false); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A8F98] hover:text-[#E8ECF0]"
                  >
                    <X size={14} />
                  </button>
                )}
                {showDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-[#12121A] border border-[#1E1E2A] rounded-lg overflow-hidden shadow-xl z-50 max-h-64 overflow-y-auto">
                    {results.map((c) => (
                      <a
                        key={c.id}
                        href={`/characters/${c.slug}`}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[#1E1E2A] transition-colors border-b border-[#1E1E2A] last:border-b-0"
                      >
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#00F0FF] bg-[#00F0FF]/10 px-1.5 py-0.5 rounded">
                          {c.role}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-body text-sm text-[#E8ECF0] truncate">{c.name}</p>
                          <p className="font-body text-xs text-[#8A8F98] truncate">{c.personality}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <p className="font-body text-xs text-[#8A8F98] flex items-center gap-2">
              <Gamepad2 size={14} style={{ color: "#00F0FF" }} />
              Free &middot; No signup &middot; Updated for v0.2
            </p>
          </div>

          {/* Right: Game Container */}
          <div id="play" ref={gameContainerRef} className="hud-frame bg-[#12121A] border border-[#1E1E2A] rounded-lg p-1 relative min-h-[360px]">
            <span className="hud-id absolute top-2 right-3 z-10">VIGILANCE_CONTAINER.01</span>
            <button
              onClick={toggleFullscreen}
              className="absolute top-2 left-3 z-10 bg-black/60 hover:bg-[#00F0FF]/20 border border-[#1E1E2A] hover:border-[#00F0FF]/40 rounded p-1.5 transition-all cursor-pointer"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 size={16} color="#00F0FF" /> : <Maximize2 size={16} color="#00F0FF" />}
            </button>
            <iframe
              src="/game/index.html"
              className="w-full rounded-lg"
              style={{ minHeight: isFullscreen ? "100vh" : "480px", border: "none" }}
              title="The Freak Circus — Play Now"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
