import { HeroSection } from "@/components/sections/HeroSection";
import { CharactersSection } from "@/components/sections/CharactersSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ScreenshotGallery } from "@/components/sections/ScreenshotGallery";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";

import { FAQSection } from "@/components/sections/FAQSection";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export default async function HomePage() {
  let characters: any[] = [];
  let faq: any[] = [];

  try {
    const { env } = await getCloudflareContext();
    const db = (env as any).DB as D1Database;

    const [charsResult, faqResult] = await Promise.all([
      db.prepare("SELECT * FROM characters ORDER BY id").all(),
      db.prepare("SELECT * FROM faq ORDER BY id").all(),
    ]);

    characters = charsResult.results || [];
    faq = faqResult.results || [];
  } catch (e) {
    // Fallback: client-side fetch will handle it
    console.error("SSR data fetch failed:", e);
  }

  return (
    <>
      <HeroSection />
      <CharactersSection initialData={characters.length > 0 ? characters : undefined} />
      <HowItWorksSection />
      <FeaturesSection />
      <ScreenshotGallery />
      <TrustSection />
      <CTASection />
      <FAQSection initialData={faq.length > 0 ? faq : undefined} />
    </>
  );
}
