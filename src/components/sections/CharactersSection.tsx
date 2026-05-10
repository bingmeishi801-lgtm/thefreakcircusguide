"use client";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface Character {
  id: number;
  name: string;
  slug: string;
  role: string;
  personality: string;
  route_hint: string;
  icon: string;
}

export function CharactersSection() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/characters")
      .then((r) => r.json() as Promise<{ data: Character[] }>)
      .then((d) => setCharacters(d.data || []))
      .catch(() => setCharacters([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="characters" className="py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-display text-2xl sm:text-[28px] text-[#E8ECF0] mb-2">Characters</h2>
        <p className="font-body text-sm text-[#8A8F98] mb-10">
          {loading ? "Loading characters..." : `${characters.length} characters. Each with unique routes and endings.`}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="glow-border bg-[#12121A] rounded-xl p-6 min-h-[180px] animate-pulse">
                  <div className="h-4 w-20 bg-[#1E1E2A] rounded mb-4" />
                  <div className="h-5 w-24 bg-[#1E1E2A] rounded mb-3" />
                  <div className="h-3 w-full bg-[#1E1E2A] rounded mb-2" />
                  <div className="h-3 w-3/4 bg-[#1E1E2A] rounded" />
                </div>
              ))
            : characters.map((c, i) => (
                <a
                  key={c.id}
                  href={`/characters/${c.slug}`}
                  className={`glow-border bg-[#12121A] rounded-xl p-6 flex flex-col gap-3 group ${
                    i < 2 ? "sm:col-span-2 min-h-[240px]" : "min-h-[180px]"
                  }`}
                >
                  <span className="inline-block bg-[#1E1E2A] text-[#8A8F98] font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded self-start">
                    {c.role}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl text-[#E8ECF0]">{c.name}</h3>
                  <p className="font-body text-sm text-[#8A8F98] line-clamp-2 flex-1">{c.personality}</p>
                  <span className="font-body text-sm flex items-center gap-1 mt-auto" style={{ color: "#00F0FF" }}>
                    View Guide <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              ))}
        </div>
      </div>
    </section>
  );
}
