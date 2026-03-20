import { HeroSection } from "@/components/sections/HeroSection";
import  MetalRatesSection  from "@/components/sections/MetalRatesSection";
import { CollectionsSection } from "@/components/sections/CollectionsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyBJSection } from "@/components/sections/WhyBJSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetalRatesSection />
      <CollectionsSection />
      <StatsSection />
      <WhyBJSection />
      <TestimonialsSection />
      <FAQSection />
      <AppointmentSection />
    </>
  );
}
