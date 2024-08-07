import { useEffect } from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import BusinessPartner from './components/BusinessPartner';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import WhyEveryoneLovesTechwind from './components/SolutionOverview';
import Testimonials from './components/Testimonials';

function App() {
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <BusinessPartner />
      <WhyEveryoneLovesTechwind />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <BackgroundEffects />
    </>
  );
}

export default App;
