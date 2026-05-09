import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — The Freak Circus Guide",
  description: "Privacy policy for The Freak Circus Guide fan site.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto prose-invert">
        <h1 className="font-display text-3xl text-[#E8ECF0] mb-8">Privacy Policy</h1>
        <div className="font-body text-sm text-[#8A8F98] space-y-6">
          <p><strong className="text-[#E8ECF0]">Last updated:</strong> May 2026</p>

          <h2 className="font-display text-lg text-[#E8ECF0] mt-8">1. Information We Collect</h2>
          <p>
            The Freak Circus Guide does not require user accounts. We collect minimal, anonymized usage data
            via Cloudflare Web Analytics (privacy-friendly, no cookies, no personal data).
          </p>

          <h2 className="font-display text-lg text-[#E8ECF0] mt-8">2. Cookies</h2>
          <p>
            We do not use tracking cookies. Cloudflare Web Analytics operates without cookies and does not
            store personal information.
          </p>

          <h2 className="font-display text-lg text-[#E8ECF0] mt-8">3. Third-Party Services</h2>
          <p>
            This site embeds the game via itch.io&apos;s embed feature. itch.io may collect data according to
            their own privacy policy. We also link to external sites (Reddit, Fandom Wiki) which have their
            own privacy practices.
          </p>

          <h2 className="font-display text-lg text-[#E8ECF0] mt-8">4. Data Retention</h2>
          <p>
            Analytics data is aggregated and anonymized. We do not retain personally identifiable information.
          </p>

          <h2 className="font-display text-lg text-[#E8ECF0] mt-8">5. Contact</h2>
          <p>
            For privacy concerns, contact us at{" "}
            <a href="mailto:bingmeishi801@gmail.com" className="text-[#00F0FF] hover:underline">
              bingmeishi801@gmail.com
            </a>
            .
          </p>

          <h2 className="font-display text-lg text-[#E8ECF0] mt-8">6. Changes</h2>
          <p>
            We may update this policy from time to time. Changes will be posted on this page with an updated
            date.
          </p>
        </div>
      </div>
    </main>
  );
}
