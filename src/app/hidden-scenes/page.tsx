import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hidden Details & Secrets — The Freak Circus Guide",
  description:
    "Details and secrets found in The Freak Circus v0.2 prototype by the community.",
  alternates: { canonical: "https://thefreakcircusguide.com/hidden-scenes" },
};

export default function HiddenScenesPage() {
  return (
    <main className="min-h-screen bg-[#0A0A12] text-[#E8ECF0] pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[3px] text-[#00F0FF] mb-3">
          Spoiler Warning
        </p>
        <h1 className="font-display text-3xl sm:text-4xl mb-4">
          Hidden Details &amp; Secrets
        </h1>
        <p className="text-[#8A8F98] text-sm mb-10">
          Community-discovered details and secrets from The Freak Circus v0.2
          prototype. This page will be updated as more content is found and
          verified.
        </p>

        {/* Known Details */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#FF4F7F] mb-4">
            🔍 Confirmed Details
          </h2>
          <div className="space-y-4">
            <article className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🧛</span>
                <h3 className="font-display text-lg text-[#E8ECF0]">
                  The Doctor&apos;s Russian Accent
                </h3>
                <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded text-[#FF4F7F] bg-[#FF4F7F]/15">
                  DETAIL
                </span>
              </div>
              <p className="text-sm text-[#C8CCD4]">
                The Doctor has a Russian accent. If you&apos;re speed-reading,
                you might miss it. Fans are actively requesting a romance route
                for him.
              </p>
            </article>

            <article className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🤡</span>
                <h3 className="font-display text-lg text-[#E8ECF0]">
                  Harlequin&apos;s Heterochromatic Eyes
                </h3>
                <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded text-[#00F0FF] bg-[#00F0FF]/15">
                  DESIGN
                </span>
              </div>
              <p className="text-sm text-[#C8CCD4]">
                Harlequin has heterochromatic eyes (two different eye colors).
                This is part of his character design and ties into his dual
                nature as a seductive but dangerous rival.
              </p>
            </article>

            <article className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🤡</span>
                <h3 className="font-display text-lg text-[#E8ECF0]">
                  Harlequin&apos;s Mask
                </h3>
                <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded text-[#00F0FF] bg-[#00F0FF]/15">
                  DESIGN
                </span>
              </div>
              <p className="text-sm text-[#C8CCD4]">
                Harlequin wears a mask that only shows a wide grin. His real
                expressions are hidden behind it, making it hard to tell what
                he&apos;s actually thinking or feeling.
              </p>
            </article>

            <article className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔪</span>
                <h3 className="font-display text-lg text-[#E8ECF0]">
                  Pierrot&apos;s Shark-Like Teeth
                </h3>
                <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded text-[#FF4F7F] bg-[#FF4F7F]/15">
                  DESIGN
                </span>
              </div>
              <p className="text-sm text-[#C8CCD4]">
                Pierrot has shark-like teeth — a distinctive design choice that
                adds to his unsettling presence as a silent yandere character.
              </p>
            </article>

            <article className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎭</span>
                <h3 className="font-display text-lg text-[#E8ECF0]">
                  The Ticket System
                </h3>
                <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded text-[#FFB84D] bg-[#FFB84D]/15">
                  MECHANIC
                </span>
              </div>
              <p className="text-sm text-[#C8CCD4]">
                The game uses a ticket system tied to character routes. Red
                tickets are associated with Pierrot, green tickets with
                Harlequin. The Ticket Taker character controls this system.
              </p>
            </article>
          </div>
        </section>

        {/* Community Contributions */}
        <section className="mb-12">
          <h2 className="font-display text-xl text-[#FFB84D] mb-4">
            📝 Help Us Document More
          </h2>
          <div className="p-6 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
            <p className="text-sm text-[#C8CCD4] leading-relaxed mb-4">
              The Freak Circus has many hidden details that the community is
              still discovering. If you&apos;ve found a secret scene, easter egg,
              or hidden detail in your playthrough, we want to hear about it.
            </p>
            <p className="text-sm text-[#8A8F98]">
              This page will be updated with verified community findings as the
              game develops.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="p-4 rounded-xl bg-[#12121A] border border-[#1E1E2A]">
          <p className="text-xs text-[#8A8F98]">
            <strong className="text-[#FFB84D]">Note:</strong> All entries on
            this page are verified against in-game content from the v0.2
            prototype. Unverified claims are not included.
          </p>
        </div>
      </div>
    </main>
  );
}
