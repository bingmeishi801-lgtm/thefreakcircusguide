export function Footer() {
  return (
    <footer className="border-t border-[#1E1E2A] py-8 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="/" className="font-display text-lg" style={{ color: "#00F0FF" }}>TFC GUIDE</a>
        <div className="flex gap-6">
          <a href="/terms-of-service" className="font-body text-xs uppercase tracking-widest text-[#8A8F98] hover:text-[#E8ECF0]">TERMS</a>
          <a href="/privacy-policy" className="font-body text-xs uppercase tracking-widest text-[#8A8F98] hover:text-[#E8ECF0]">PRIVACY</a>
        </div>
        <p className="font-body text-xs text-[#8A8F98]">&copy; 2026 THE FREAK CIRCUS GUIDE</p>
      </div>
    </footer>
  );
}
