import FAQSection from "@/components/faq-section/FAQSection";
import FeaturesSection from "@/components/features-section/FeaturesSection";
import HeroSection from "@/components/heroSection/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      
      <div>
        <HeroSection />
      </div>

      <div>
        <FeaturesSection />
      </div>

      <div>
        <TestimonialsSection />
      </div>

      <div>
        <FAQSection />
      </div>
    </div>
  );
}
