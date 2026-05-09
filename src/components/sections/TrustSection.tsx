import { Lock, Play, RefreshCw, Heart } from "lucide-react";

const BADGES = [
  { icon: Lock, label: "No Signup" },
  { icon: Play, label: "Browser-Based" },
  { icon: RefreshCw, label: "Updated for v0.2" },
  { icon: Heart, label: "Fan-Made" },
];

export function TrustSection() {
  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-8">
          {BADGES.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-[#8A8F98]">
              <b.icon size={18} style={{ color: "#00F0FF" }} />
              <span className="font-body text-sm">{b.label}</span>
            </div>
          ))}
        </div>
        <p className="font-body text-xs text-[#8A8F98] text-center max-w-xl">
          Guides written from actual playthroughs. Game by{" "}
          <a href="https://garula.itch.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#E8ECF0]">
            Garula
          </a>{" "}
          — support the creator on itch.io.
        </p>
      </div>
    </section>
  );
}
