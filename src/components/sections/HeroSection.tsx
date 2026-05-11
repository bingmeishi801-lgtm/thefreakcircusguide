"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Search, X, Gamepad2, Maximize2, Minimize2 } from "lucide-react";

const HERO_BG = "/images/game/hero.png";

interface Character {
  id: number;
  name: string;
  slug: string;
  role: string;
  personality: string;
}

interface SiteStats {
  characters: number;
  endings: number;
}

export function HeroSection() {
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [results, setResults] = useState<Character[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [stats, setStats] = useState<SiteStats>({ characters: 0, endings: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/characters")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCharacters(data);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((data) => setStats(data as SiteStats))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    setResults(
      characters.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.role.toLowerCase().includes(q) ||
          c.personality.toLowerCase().includes(q)
      )
    );
  }, [query, characters]);

  const toggleFullscreen = useCallback(() => {
    if (!gameContainerRef.current) return;
    if (!document.fullscreenElement) {
      gameContainerRef.current.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  }, []);

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="hero" className="pt-24 pb-16">
      {/* ========== Full-bleed Hero — dissolves into bg ========== */}
      <div className="relative mb-10 overflow-hidden" style={{ minHeight: '500px' }}>
        <img
          src={HERO_BG}
          alt="The Freak Circus — Game Art"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Edge fade: vignette on all 4 sides so image dissolves into #0A0A0F bg */}
        <div className="absolute inset-0" style={{
          background: `
            linear-gradient(to bottom, #0A0A0F 0%, transparent 20%),
            linear-gradient(to top, #0A0A0F 0%, transparent 40%),
            linear-gradient(to right, #0A0A0F 0%, transparent 18%),
            linear-gradient(to left, #0A0A0F 0%, transparent 18%)
          `
        }} />
        {/* Overlay text — small, tucked at very bottom, aligned with content below */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#00F0FF] mb-1"
              style={{ textShadow: '0 0 15px rgba(0,240,255,0.3)' }}>
              The Freak Circus — Horror Visual Novel
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-tight text-white"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9)' }}>
              Enter the Circus. Face Your Fears.
            </h2>
          </div>
        </div>
      </div>

      {/* ========== Main content grid ========== */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
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
