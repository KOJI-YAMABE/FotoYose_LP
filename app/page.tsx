import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { ServicesSection } from '@/components/sections/services-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { notoJP, adventPro, libreBaskerville } from '@/utiles/fonts';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div
      className={`${notoJP.variable} ${adventPro.variable} ${libreBaskerville.variable} ${notoJP.className}`}
    >
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
    </main>
  );
}