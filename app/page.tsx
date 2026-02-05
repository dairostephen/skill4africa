import MarketPulse from './components/MarketPulse';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import JobsGrid from './components/JobsGrid';
import BentoGrid from './components/BentoGrid';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <div className="overflow-hidden">
        <MarketPulse />
      </div>
      <Navbar />
      <Hero />
      <TrustIndicators />
      <JobsGrid />
      <BentoGrid />
      <CTASection />
      <Footer />
    </main>
  );
}
