import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — The Freak Circus Guide",
  description: "Terms of service for The Freak Circus Guide fan site.",
  alternates: {
    canonical: "https://thefreakcircusguide.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto prose-invert">
        <h1 className="font-display text-3xl text-[#E8ECF0] mb-8">Terms of Service</h1>
        <div className="font-body text-sm text-[#8A8F98] space-y-6">
          <p><strong className="text-[#E8ECF0]">Last updated:</strong> May 2026</p>

          <h2 className="font-display text-lg text-[#E8ECF0] mt-8">1. Acceptance</h2>
          <p>
            By accessing The Freak Circus Guide, you agree to these terms. If you do not agree, please
            do not use this site.
          </p>

          <h2 className="font-display text-lg text-[#E8ECF0] mt-8">2. Fan Site Disclaimer</h2>
          <p>
            This is an unofficial fan site. The Freak Circus game is owned by its respective creators.
            We are not affiliated with, endorsed by, or connected to the game developers.
          </p>

          <h2 className="font-display text-lg text-[#E8ECF0] mt-8">3. Content</h2>
          <p>
            All game-related content (characters, storylines, artwork) is the property of the original
            creators. Guide content is written by fans for educational and entertainment purposes.
          </p>

          <h2 className="font-display text-lg text-[#E8ECF0] mt-8">4. Use License</h2>
          <p>
            You may view and use the site for personal, non-commercial purposes. You may not reproduce,
            distribute, or create derivative works without permission.
          </p>

          <h2 className="font-display text-lg text-[#E8ECF0] mt-8">5. Disclaimer</h2>
          <p>
            The site is provided &ldquo;as is&rdquo; without warranties. We are not responsible for any
            damages arising from use of this site.
          </p>

          <h2 className="font-display text-lg text-[#E8ECF0] mt-8">6. Contact</h2>
          <p>
            For questions, contact{" "}
            <a href="mailto:bingmeishi801@gmail.com" className="text-[#00F0FF] hover:underline">
              bingmeishi801@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
