"use client";
import { useState } from "react";
import { Mail, Send, CheckCircle2, MessageCircle } from "lucide-react";

export function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl text-[#E8ECF0] mb-3">
          Stay Updated
        </h2>
        <p className="font-body text-sm text-[#8A8F98] mb-8">
          Get notified when new endings, routes, or guides are added.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Email subscribe */}
          <div className="glow-border bg-[#12121A] rounded-xl p-6 text-left">
            <div className="flex items-center gap-2 mb-3">
              <Mail size={18} style={{ color: "#00F0FF" }} />
              <span className="font-display text-sm text-[#E8ECF0]">Email Updates</span>
            </div>

            {status === "success" ? (
              <div className="flex items-center gap-2 py-3">
                <CheckCircle2 size={18} style={{ color: "#00F0FF" }} />
                <span className="font-body text-sm text-[#00F0FF]">Subscribed! We&apos;ll only email when there&apos;s real new content.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-[#0A0A12] border border-[#1E1E2A] rounded-lg px-3 py-2 text-sm text-[#E8ECF0] placeholder:text-[#3A3A4A] focus:outline-none focus:border-[#00F0FF]/40 font-body"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#00F0FF] hover:bg-[#00D4E0] text-[#0A0A12] font-mono text-xs font-bold px-3 py-2 rounded-lg transition-all disabled:opacity-50 cursor-pointer"
                >
                  {status === "loading" ? "..." : <Send size={14} />}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="font-mono text-[11px] text-[#FF3E3E] mt-2">Something went wrong. Try again.</p>
            )}
          </div>

          {/* Telegram */}
          <a
            href="https://t.me/tfcguide"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-border bg-[#12121A] rounded-xl p-6 text-left hover:border-[#229ED9]/40 transition-all group"
          >
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle size={18} style={{ color: "#229ED9" }} />
              <span className="font-display text-sm text-[#E8ECF0] group-hover:text-[#229ED9] transition-colors">Telegram Channel</span>
            </div>
            <p className="font-body text-sm text-[#8A8F98]">
              Join for instant update alerts, tips, and community discussion.
            </p>
            <span className="inline-block mt-3 font-mono text-[11px] text-[#229ED9] uppercase tracking-wider">
              Join Channel →
            </span>
          </a>
        </div>

        <p className="font-mono text-[11px] text-[#3A3A4A]">
          No spam. Unsubscribe anytime. We only notify for real content updates.
        </p>
      </div>
    </section>
  );
}
