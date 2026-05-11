"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Gamepad2, Maximize2, Minimize2 } from "lucide-react";

const HERO_BG = "/images/game/hero.png";

interface SiteStats {
  characters: number;
  endings: number;
}

export function HeroSection() {
  const [stats, setStats] = useState<SiteStats>({ characters: 0, endings: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((data) => setStats(data as SiteStats))
      .catch(() => {});
  }, []);

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
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-[#00F0FF] mb-2"
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
              Your Fan Guide to<br />The Freak Circus
            </h1>
            <p className="font-body text-base text-[#8A8F98] mb-8 max-w-lg">
              Character profiles, route hints, and ending guides for The Freak Circus by Garula. Updated as the game develops — currently covering all 5 characters.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="#characters" className="cta-red">Browse Character Guides &mdash; Free</a>
              <a href="#play" className="cta-cyan">Play The Freak Circus Now</a>
            </div>
            <p className="font-body text-xs text-[#8A8F98] flex items-center gap-2">
              <Gamepad2 size={14} style={{ color: "#00F0FF" }} />
              Free &middot; No signup &middot; Updated for v0.2
            </p>
          </div>

          {/* Right: Game Container */}
          <div id="play" ref={gameContainerRef} className="hud-frame bg-[#12121A] border border-[#1E1E2A] rounded-lg p-1 relative min-h-[360px]">
            <button
              onClick={toggleFullscreen}
              className="absolute bottom-2 right-3 z-10 bg-black/60 hover:bg-[#00F0FF]/20 border border-[#1E1E2A] hover:border-[#00F0FF]/40 rounded p-1.5 transition-all cursor-pointer"
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
