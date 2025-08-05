import FAQSection from "@/components/faq-section/FAQSection";
import FeaturesSection from "@/components/features-section/FeaturesSection";
import HeroSection from "@/components/heroSection/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import UserInfo from "@/components/userInfo/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const sessions = await getServerSession(authOptions);
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

      <div className="flex flex-col space-y-1.5 justify-center items-center p-10 bg-amber-100 text-black">
        <UserInfo />
        <p>Server Session {JSON.stringify(sessions)}</p>
      </div>
    </div>
  );
}
