import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { DeliveryBanner } from "@/components/sections/DeliveryBanner";
import { BrandShowcase } from "@/components/sections/BrandShowcase";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { CategoryCards } from "@/components/sections/CategoryCards";
import { WhyCrownWalk } from "@/components/sections/WhyCrownWalk";
import { TrendingSection } from "@/components/sections/TrendingSection";
import { LifestyleBanner } from "@/components/sections/LifestyleBanner";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DeliveryBanner />
      <BrandShowcase />
      <FeaturedProducts />
      <CategoryCards />
      <WhyCrownWalk />
      <TrendingSection />
      <LifestyleBanner />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
