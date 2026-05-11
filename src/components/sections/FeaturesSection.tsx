import { Gamepad2, GitBranch, EyeOff, Flag, ListOrdered, Smartphone } from "lucide-react";

const FEATURES = [
  { icon: Gamepad2, title: "Online Play", desc: "Play the demo in your browser. Same window as the guide.", href: "#play" },
  { icon: GitBranch, title: "Character Routes", desc: "Pierrot & Harlequin route guides. Others updated as the game develops.", href: "#characters" },
  { icon: EyeOff, title: "Hidden Scenes", desc: "Mirror scene, nose boop, bathroom secret — all documented.", href: "/hidden-scenes" },
  { icon: Flag, title: "Ending Tracker", desc: "Track which endings you've found. 1 confirmed so far (v0.2).", href: "#characters" },
  { icon: ListOrdered, title: "Lore & Background", desc: "The story of Columbina, the ringmaster's curse, and the love triangle.", href: "/lore" },
  { icon: Smartphone, title: "Known Bugs", desc: "Workarounds for save import, texture glitches, and more.", href: "/bugs" },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-display text-2xl sm:text-[28px] text-[#E8ECF0] mb-2">What You Get</h2>
        <p className="font-body text-sm text-[#8A8F98] mb-10">Everything you need to explore every route.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => {
            const inner = (
              <>
                <f.icon size={28} style={{ color: "#00F0FF" }} />
                <h3 className="font-display text-base text-[#E8ECF0]">{f.title}</h3>
                <p className="font-body text-sm text-[#8A8F98]">{f.desc}</p>
                {f.href && <span className="text-xs text-[#00F0FF] mt-auto">Explore →</span>}
              </>
            );
            return f.href ? (
              <a
                key={f.title}
                href={f.href}
                className="glow-border bg-[#12121A] rounded-xl p-6 flex flex-col gap-3 hover:border-[#00F0FF]/40 transition-colors no-underline"
              >
                {inner}
              </a>
            ) : (
              <div key={f.title} className="glow-border bg-[#12121A] rounded-xl p-6 flex flex-col gap-3">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
