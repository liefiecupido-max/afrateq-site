import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhyLocal from '@/components/WhyLocal';
import Services from '@/components/Services';
import Infrastructure from '@/components/Infrastructure';
import Solutions from '@/components/Solutions';
import Differentiators from '@/components/Differentiators';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <Stats />
      <WhyLocal />
      <Services />
      <Differentiators />
      <Infrastructure />
      <Solutions />
      <CTASection />
      <Footer />
    </main>
  );
}
