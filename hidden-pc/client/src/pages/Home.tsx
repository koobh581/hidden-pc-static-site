import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpecsSection from "@/components/SpecsSection";
import SeatingSection from "@/components/SeatingSection";
// import EventsSection from "@/components/EventsSection"; // 제거됨
import DeliveryVapeSection from "@/components/DeliveryVapeSection";
import FranchiseSection from "@/components/FranchiseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SpecsSection />
      <SeatingSection />
      {/* <EventsSection /> 제거됨 */}
      <DeliveryVapeSection />
      <FranchiseSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
