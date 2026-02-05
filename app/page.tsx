import MarketPulse from './components/MarketPulse';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import JobsGrid from './components/JobsGrid';
import BenefitsEmployer from './components/BenefitsEmployer';
import BentoGrid from './components/BentoGrid';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import PartnerTicker from './components/PartnerTicker';
import HowItWorks from './components/HowItWorks';
import IndustryCategories from './components/IndustryCategories';
import TestimonialsSection from './components/TestimonialsSection';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <div className="overflow-hidden">
        <MarketPulse />
      </div>
      <Navbar />
      <div className="px-4 md:px-8 lg:px-12 xl:px-20 py-4">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-brand-primary/5">
          <Hero />
          <PartnerTicker />
          <TrustIndicators />
          <JobsGrid />
          <HowItWorks />
          <IndustryCategories />
          <BenefitsEmployer />
          <TestimonialsSection />
          <BentoGrid />
          <CTASection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
