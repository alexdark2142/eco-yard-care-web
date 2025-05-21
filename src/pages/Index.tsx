
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Simulate image preloading for lazy loading
  useEffect(() => {
    // Mark images as loaded after a short delay
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
