"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Skull, Eye, Shield, Wind, Flame } from "lucide-react";

interface Character {
  id: number;
  name: string;
  slug: string;
  role: string;
  personality: string;
  route_hint: string;
  icon: string;
}

const CHARACTER_BACKGROUNDS: Record<string, string> = {
  luka: "/images/game/ss1.png",
  vesper: "/images/game/ss2.png",
  kazimir: "/images/game/ss3.png",
  nyx: "/images/game/ss4.jpg",
  dmitri: "/images/game/ss5.jpg",
};

const CHARACTER_ICONS: Record<string, typeof Skull> = {
  ringmaster: Skull,
  fortune: Eye,
  strongman: Shield,
  trapeze: Wind,
  fire: Flame,
};

export function CharactersSection({ initialData }: { initialData?: Character[] }) {
  const [characters, setCharacters] = useState<Character[]>(initialData || []);
  const [loading, setLoading] = useState(!initialData);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    if (initialData) return;
    fetch("/api/characters")
      .then((r) => r.json() as Promise<{ data: Character[] }>)
      .then((d) => setCharacters(d.data || []))
      .catch(() => setCharacters([]))
      .finally(() => setLoading(false));
  }, [initialData]);

  useEffect(() => {
    const handler = (e: Event) => {
      const q = (e as CustomEvent).detail || "";
      setSearchActive(q.length > 0);
    };
    window.addEventListener("hero-search", handler);
    return () => window.removeEventListener("hero-search", handler);
  }, []);

  return (
    <section id="characters" className="py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-display text-2xl sm:text-[28px] text-[#E8ECF0] mb-2">Characters</h2>
        <p className="font-body text-sm text-[#8A8F98] mb-10">
          {loading ? "Loading characters..." : `${characters.length} characters. Each with unique routes and endings.`}
        </p>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${searchActive ? "hidden" : ""}`}>
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="glow-border bg-[#12121A] rounded-xl p-6 min-h-[180px] animate-pulse">
                  <div className="h-4 w-20 bg-[#1E1E2A] rounded mb-4" />
                  <div className="h-5 w-24 bg-[#1E1E2A] rounded mb-3" />
                  <div className="h-3 w-full bg-[#1E1E2A] rounded mb-2" />
                  <div className="h-3 w-3/4 bg-[#1E1E2A] rounded" />
                </div>
              ))
            : characters.map((c, i) => {
                const Icon = CHARACTER_ICONS[c.icon] || Skull;
                const bgImage = CHARACTER_BACKGROUNDS[c.slug];
                
                return (
                  <a
                    key={c.id}
                    href={`/characters/${c.slug}`}
                    className={`relative overflow-hidden glow-border bg-[#12121A] rounded-xl flex flex-col group ${
                      i < 2 ? "sm:col-span-2 min-h-[280px]" : "min-h-[220px]"
                    }`}
                  >
                    {/* Background image */}
                    {bgImage && (
                      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                        <img
                          src={bgImage}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-[#12121A]/80 to-transparent" />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 flex flex-col gap-3 h-full">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(0, 240, 255, 0.1)", border: "1px solid rgba(0, 240, 255, 0.2)" }}>
                          <Icon size={16} style={{ color: "#00F0FF" }} />
                        </div>
                        <span className="inline-block bg-[#1E1E2A] text-[#8A8F98] font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded">
                          {c.role}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-lg sm:text-xl text-[#E8ECF0] group-hover:text-[#00F0FF] transition-colors">
                        {c.name}
                      </h3>
                      
                      <p className="font-body text-sm text-[#8A8F98] line-clamp-2 flex-1">
                        {c.personality}
                      </p>
                      
                      <span className="font-body text-sm flex items-center gap-1 mt-auto" style={{ color: "#00F0FF" }}>
                        View Guide <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/5 to-transparent" />
                    </div>
                  </a>
                );
              })}
        </div>
      </div>
    </section>
  );
}
