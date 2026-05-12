"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "CHARACTERS", href: "/#characters", type: "hash" as const },
  { label: "WALKTHROUGH", href: "/walkthrough", type: "page" as const },
  { label: "GUIDE", href: "/guide", type: "page" as const },
  { label: "LORE", href: "/lore", type: "page" as const },
  { label: "SECRETS", href: "/hidden-scenes", type: "page" as const },
  { label: "ENDINGS", href: "/endings", type: "page" as const },
  { label: "PLAY", href: "/#play", type: "hash" as const },
  { label: "FAQ", href: "/#faq", type: "hash" as const },
  { label: "BUGS", href: "/bugs", type: "page" as const },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const resolve = (item: typeof NAV_ITEMS[number]) => {
    if (item.type === "page") return item.href;
    return isHome ? item.href : item.href.replace("/#", "/#");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/90 backdrop-blur border-b border-[#1E1E2A]">
      <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl tracking-wider" style={{ color: "#00F0FF" }}>
          TFC GUIDE
        </a>
        <div className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={resolve(item)}
              className={`font-body text-sm uppercase tracking-widest transition-colors ${
                pathname === item.href
                  ? "text-[#00F0FF]"
                  : "text-[#8A8F98] hover:text-[#E8ECF0]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-[#E8ECF0]" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-[#0A0A0F] border-t border-[#1E1E2A] px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={resolve(item)}
              onClick={() => setOpen(false)}
              className={`font-body text-sm uppercase tracking-widest ${
                pathname === item.href
                  ? "text-[#00F0FF]"
                  : "text-[#8A8F98] hover:text-[#E8ECF0]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
