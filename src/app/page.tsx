import { HeroSection } from "@/components/sections/HeroSection";
import { CharactersSection } from "@/components/sections/CharactersSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CharactersSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TrustSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
