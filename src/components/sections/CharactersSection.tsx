import { ArrowRight } from "lucide-react";

const CHARACTERS = [
  { name: "Pierrot", role: "THE YANDERE", desc: "The white-faced clown who smiles too wide. Pierrot\'s love is absolute — and so is their jealousy.", large: true },
  { name: "Harlequin", role: "THE RIVAL", desc: "Quick, sharp, and dangerous. Every choice you make around them is a gamble.", large: true },
  { name: "Columbina", role: "THE MYSTIC", desc: "She knows more than she lets on. Pay attention to what she doesn\'t say.", large: false },
  { name: "Jester", role: "THE TRICKSTER", desc: "Laugh now, regret later. Every joke has a punchline.", large: false },
  { name: "Doctor", role: "THE COLD PROFESSIONAL", desc: "Calm. Precise. Emotionally unavailable. The most puzzle-like route.", large: false },
  { name: "Ticket Taker", role: "THE GATEKEEPER", desc: "They decide who gets in and who stays out.", large: false },
  { name: "MC", role: "YOU", desc: "The protagonist. Your choices shape the story — but the story also shapes you.", large: false },
  { name: "Carol", role: "THE INNOCENT", desc: "The only person who seems... normal. Safety is an illusion here.", large: false },
  { name: "Boss", role: "THE AUTHORITY", desc: "The one running the show. Obedience is rewarded. Questioning is not.", large: false },
  { name: "Fools", role: "THE COLLECTIVE", desc: "Not one person. Many. The hardest route to unlock.", large: false },
];

export function CharactersSection() {
  return (
    <section id="characters" className="py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-display text-2xl sm:text-[28px] text-[#E8ECF0] mb-2">Characters</h2>
        <p className="font-body text-sm text-[#8A8F98] mb-10">10 characters. 50 endings. One circus.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHARACTERS.map((c) => (
            <a
              key={c.name}
              href={`/characters/${c.name.toLowerCase().replace(/ /g, "-")}`}
              className={`glow-border bg-[#12121A] rounded-xl p-6 flex flex-col gap-3 group ${
                c.large ? "sm:col-span-2 min-h-[240px]" : "min-h-[180px]"
              }`}
            >
              <span className="inline-block bg-[#1E1E2A] text-[#8A8F98] font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded self-start">
                {c.role}
              </span>
              <h3 className="font-display text-lg sm:text-xl text-[#E8ECF0]">{c.name}</h3>
              <p className="font-body text-sm text-[#8A8F98] line-clamp-2 flex-1">{c.desc}</p>
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
