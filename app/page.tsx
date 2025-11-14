import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { MarketsSection } from "@/components/home/markets-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/home/cta-section";
import { Ticker } from "@/components/trading-widget";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <FeaturesSection />
      <MarketsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
