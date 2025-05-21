
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-green/95 to-brand-light-green/90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3')] bg-cover bg-center bg-[position:50%_65%] mix-blend-overlay" aria-label="Calgary lawn care service in action"></div>
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            CALGARY'S PREMIER ECO-FRIENDLY YARD CARE SERVICES
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
            Professional landscaping and pressure washing services in Calgary, AB — without you lifting a finger!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact}
              className="text-lg px-8 py-6 bg-brand-light-green hover:bg-white hover:text-brand-dark-green transition-all"
              size="lg"
            >
              Get a Free Quote
            </Button>
            <Button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-white text-white bg-transparent hover:bg-white hover:text-brand-dark-green transition-all"
              size="lg"
            >
              Our Calgary Services
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[50px] text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.32,118.92,163.89,80.92,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
