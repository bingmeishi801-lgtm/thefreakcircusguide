"use client";
import { useEffect, useState } from "react";
import { Gamepad2, Search } from "lucide-react";

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

export function HeroSection() {
  const stats = useStats();
  return (
    <section id="hero" className="pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center">
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
            <div className="flex-1 max-w-sm relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8F98]" />
              <input
                type="text"
                placeholder="Search characters, routes, endings..."
                className="w-full bg-[#12121A] border border-[#1E1E2A] rounded pl-9 pr-4 py-2.5 text-sm text-[#E8ECF0] placeholder-[#8A8F98] focus:border-[#00F0FF] focus:outline-none transition-colors"
              />
            </div>
          </div>
          <p className="font-body text-xs text-[#8A8F98] flex items-center gap-2">
            <Gamepad2 size={14} style={{ color: "#00F0FF" }} />
            Free &middot; No signup &middot; Updated for v0.2
          </p>
        </div>

        {/* Right: Game Container */}
        <div id="play" className="hud-frame bg-[#12121A] border border-[#1E1E2A] rounded-lg p-1 relative min-h-[360px]">
          <span className="hud-id absolute top-2 right-3 z-10">VIGILANCE_CONTAINER.01</span>
          <iframe
            src="https://html-classic.itch.zone/html/16572088/index.html"
            className="w-full rounded-lg"
            style={{ minHeight: "480px", border: "none" }}
            title="The Freak Circus — Play Now"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
