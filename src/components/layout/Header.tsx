"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "CHARACTERS", hash: "characters" },
  { label: "ENDINGS", hash: "features" },
  { label: "PLAY", hash: "play" },
  { label: "FAQ", hash: "faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(window.location.pathname === "/");
  }, []);

  const href = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/90 backdrop-blur border-b border-[#1E1E2A]">
      <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl tracking-wider" style={{ color: "#00F0FF" }}>
          TFC GUIDE
        </a>
        <div className="hidden md:flex gap-8">
          {NAV_ITEMS.map((l) => (
            <a key={l.hash} href={href(l.hash)} className="font-body text-sm uppercase tracking-widest text-[#8A8F98] hover:text-[#E8ECF0] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-[#E8ECF0]" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-[#0A0A0F] border-t border-[#1E1E2A] px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((l) => (
            <a key={l.hash} href={href(l.hash)} onClick={() => setOpen(false)} className="font-body text-sm uppercase tracking-widest text-[#8A8F98] hover:text-[#E8ECF0]">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
