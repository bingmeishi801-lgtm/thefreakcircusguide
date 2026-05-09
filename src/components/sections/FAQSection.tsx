"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  { q: "Is this the official game site?", a: "No. This is an unofficial fan site. The official game is available on itch.io by Garula." },
  { q: "Is it free?", a: "Yes. The game is free on itch.io. You can also play it directly on this site." },
  { q: "How many endings are there?", a: "50 total — 5 per character, 10 characters. Our guides cover every one." },
  { q: "Will this spoil the story?", a: "Spoiler controls are on by default. Content is hidden until you click to reveal it." },
  { q: "Can I play on mobile?", a: "The game itself is PC/browser only. The guide pages work great on phones as a second screen." },
  { q: "Do I need an account?", a: "No. Everything is free and open. No signup required." },
  { q: "How do I unlock the Fools true ending?", a: "You need to complete at least one other character route first. Check our Fools guide for details." },
  { q: "Who made the game?", a: "Garula, under the NekoBoyDreams label. Support them on itch.io." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-display text-2xl sm:text-[28px] text-[#E8ECF0] mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border border-[#1E1E2A] rounded-lg bg-[#12121A] overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-body text-sm font-medium text-[#E8ECF0]">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={`faq-icon text-[#8A8F98] flex-shrink-0 ml-4 ${open === i ? "rotate-180" : ""}`}
                  style={{ transition: "transform 0.3s" }}
                />
              </button>
              <div
                className="px-6 overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "200px" : "0", paddingBottom: open === i ? "16px" : "0" }}
              >
                <p className="font-body text-sm text-[#8A8F98]">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
