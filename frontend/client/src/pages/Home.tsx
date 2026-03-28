/**
 * Home - 히든 피씨방 메인 홈페이지
 * 네온 느와르 디자인: 다크 배경 + 네온 글로우 + 글래스모피즘
 * 섹션: Hero → About → Facilities → Food → Interior → Franchise → Contact → Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import FoodSection from "@/components/FoodSection";
import InteriorSection from "@/components/InteriorSection";
import FranchiseSection from "@/components/FranchiseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <div className="neon-divider" />
        <AboutSection />
        <div className="neon-divider" />
        <FacilitiesSection />
        <div className="neon-divider" />
        <FoodSection />
        <div className="neon-divider" />
        <InteriorSection />
        <div className="neon-divider" />
        <FranchiseSection />
        <div className="neon-divider" />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
