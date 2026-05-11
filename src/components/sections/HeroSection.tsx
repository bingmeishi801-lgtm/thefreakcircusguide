"use client";
import { useEffect, useState, useRef } from "react";
import { Gamepad2, Search, X, ChevronLeft, ChevronRight } from "lucide-react";

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

const GAME_SCREENSHOTS = [
  { src: "/images/game/hero.png", alt: "The Freak Circus — Game Art" },
  { src: "/images/game/ss1.png", alt: "The Freak Circus — Gameplay Screenshot 1" },
  { src: "/images/game/ss2.png", alt: "The Freak Circus — Gameplay Screenshot 2" },
  { src: "/images/game/ss3.png", alt: "The Freak Circus — Gameplay Screenshot 3" },
  { src: "/images/game/ss4.jpg", alt: "The Freak Circus — Gameplay Screenshot 4" },
  { src: "/images/game/ss5.jpg", alt: "The Freak Circus — Gameplay Screenshot 5" },
  { src: "/images/game/ss6.jpg", alt: "The Freak Circus — Gameplay Screenshot 6" },
];

export function HeroSection() {
  const stats = useStats();
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [results, setResults] = useState<Character[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GAME_SCREENSHOTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % GAME_SCREENSHOTS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + GAME_SCREENSHOTS.length) % GAME_SCREENSHOTS.length);

  return (
    <section id="hero" className="pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Game Art Hero Banner */}
        <div className="relative rounded-xl overflow-hidden mb-10 border border-[#1E1E2A]">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
            {GAME_SCREENSHOTS.map((img, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === currentSlide ? 1 : 0 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-transparent to-transparent" />
              </div>
            ))}
            
            {/* Carousel controls */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#12121A]/80 border border-[#1E1E2A] flex items-center justify-center text-[#8A8F98] hover:text-[#00F0FF] hover:border-[#00F0FF]/30 transition-colors z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#12121A]/80 border border-[#1E1E2A] flex items-center justify-center text-[#8A8F98] hover:text-[#00F0FF] hover:border-[#00F0FF]/30 transition-colors z-10"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {GAME_SCREENSHOTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentSlide
                      ? "bg-[#00F0FF] w-6"
                      : "bg-[#8A8F98]/50 hover:bg-[#8A8F98]"
                  }`}
                />
              ))}
            </div>

            {/* Overlay text */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <p className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] mb-2">
                The Freak Circus — Horror Visual Novel
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-[#E8ECF0]">
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
          <div id="play" className="hud-frame bg-[#12121A] border border-[#1E1E2A] rounded-lg p-1 relative min-h-[360px]">
            <span className="hud-id absolute top-2 right-3 z-10">VIGILANCE_CONTAINER.01</span>
            <iframe
              src="/game/index.html"
              className="w-full rounded-lg"
              style={{ minHeight: "480px", border: "none" }}
              title="The Freak Circus — Play Now"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
