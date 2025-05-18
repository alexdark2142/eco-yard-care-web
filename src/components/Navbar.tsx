
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-brand-dark-green">
            LANDSCAPING & <span className="whitespace-nowrap">PRESSURE WASHING</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('services')} className="font-medium hover:text-brand-light-green transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('benefits')} className="font-medium hover:text-brand-light-green transition-colors">
            Benefits
          </button>
          <button onClick={() => scrollToSection('pricing')} className="font-medium hover:text-brand-light-green transition-colors">
            Pricing
          </button>
          <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-brand-light-green transition-colors">
            Contact
          </button>
        </div>
        
        <div className="hidden md:block">
          <Button 
            onClick={() => scrollToSection('contact')} 
            className="bg-brand-light-green hover:bg-brand-dark-green text-white"
          >
            Book Now
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-brand-dark-green" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col py-4">
            <button 
              onClick={() => scrollToSection('services')} 
              className="px-6 py-2 font-medium hover:bg-gray-100"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="px-6 py-2 font-medium hover:bg-gray-100"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="px-6 py-2 font-medium hover:bg-gray-100"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-6 py-2 font-medium hover:bg-gray-100"
            >
              Contact
            </button>
            <div className="px-6 py-2">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="w-full bg-brand-light-green hover:bg-brand-dark-green text-white"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
