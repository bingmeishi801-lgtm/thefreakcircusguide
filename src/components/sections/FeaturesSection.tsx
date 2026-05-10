import { Gamepad2, GitBranch, EyeOff, Flag, ListOrdered, Smartphone } from "lucide-react";

const FEATURES = [
  { icon: Gamepad2, title: "Online Play", desc: "Play in browser. Same window as the guide." },
  { icon: GitBranch, title: "13 Ending Maps", desc: "Every branch marked. Bad endings flagged." },
  { icon: EyeOff, title: "Spoiler Controls", desc: "Hidden by default. Click to reveal." },
  { icon: Flag, title: "Save Point Markers", desc: "Know where to save. One playthrough, multiple endings." },
  { icon: ListOrdered, title: "Play Order Guide", desc: "Difficulty ratings. Start smart." },
  { icon: Smartphone, title: "Mobile-First", desc: "Second screen use. No alt-tabbing." },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-display text-2xl sm:text-[28px] text-[#E8ECF0] mb-2">What You Get</h2>
        <p className="font-body text-sm text-[#8A8F98] mb-10">Everything you need to clear every ending.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="glow-border bg-[#12121A] rounded-xl p-6 flex flex-col gap-3">
              <f.icon size={28} style={{ color: "#00F0FF" }} />
              <h3 className="font-display text-base text-[#E8ECF0]">{f.title}</h3>
              <p className="font-body text-sm text-[#8A8F98]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
