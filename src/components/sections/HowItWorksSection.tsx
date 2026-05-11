import { User, Map, Trophy } from "lucide-react";

const STEPS = [
  { num: "01", icon: User, title: "Pick a Character", desc: "Choose from 5 characters. Each has a unique route and endings." },
  { num: "02", icon: Map, title: "Read the Guide", desc: "Route hints and ending details. Spoilers hidden until you click." },
  { num: "03", icon: Trophy, title: "Track Your Progress", desc: "See which endings you've unlocked. Discover new ones as the game updates." },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-display text-2xl sm:text-[28px] text-[#E8ECF0] mb-10">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STEPS.map((s) => (
            <div key={s.num} className="glow-border bg-[#12121A] rounded-xl p-8 flex flex-col gap-4">
              <span className="font-display text-5xl text-[#00F0FF]/15 select-none">{s.num}</span>
              <s.icon size={28} style={{ color: "#00F0FF" }} />
              <h3 className="font-display text-lg text-[#E8ECF0]">{s.title}</h3>
              <p className="font-body text-sm text-[#8A8F98]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
