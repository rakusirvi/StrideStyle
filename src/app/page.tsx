import Features from "@/features/home/Sections/FeaturesSection";

import Hero from "@/features/home/Sections/HeroSection";
import TrendingSection from "@/features/home/Sections/TrendingSection";
import ContactUs from "@/features/home/Sections/ContactUs";

const Home = () => {
  return (
    <div className="h-full w-full ">
      <Hero />
      <Features />
      <TrendingSection />
      <ContactUs />
    </div>
  );
};

export default Home;
