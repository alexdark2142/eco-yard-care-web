
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-black/30 backdrop-blur-sm py-4'
    }`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={`text-xl font-bold ${isScrolled ? 'text-brand-dark-green' : 'text-white'}`}>
            ECO YARD CARE <span className="whitespace-nowrap">CALGARY</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('services')} 
            className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-brand-light-green' : 'text-white hover:text-brand-light-green/90'} transition-colors`}
          >
            {t('nav.services')}
          </button>
          <button 
            onClick={() => scrollToSection('benefits')} 
            className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-brand-light-green' : 'text-white hover:text-brand-light-green/90'} transition-colors`}
          >
            {t('nav.benefits')}
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-brand-light-green' : 'text-white hover:text-brand-light-green/90'} transition-colors`}
          >
            {t('nav.testimonials')}
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-brand-light-green' : 'text-white hover:text-brand-light-green/90'} transition-colors`}
          >
            {t('nav.faq')}
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-brand-light-green' : 'text-white hover:text-brand-light-green/90'} transition-colors`}
          >
            {t('nav.pricing')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-brand-light-green' : 'text-white hover:text-brand-light-green/90'} transition-colors`}
          >
            {t('nav.contact')}
          </button>
          <LanguageSelector />
        </div>
        
        <div className="hidden md:block">
          <Button 
            onClick={() => scrollToSection('contact')} 
            className={`${isScrolled ? 'bg-brand-light-green hover:bg-brand-dark-green' : 'bg-brand-light-green/90 hover:bg-white hover:text-brand-dark-green'} text-white`}
          >
            {t('nav.freeQuote')}
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button className={`md:hidden ${isScrolled ? 'text-brand-dark-green' : 'text-white'}`} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col py-4">
            <button 
              onClick={() => scrollToSection('services')} 
              className="px-6 py-2 font-medium hover:bg-gray-100 text-left"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="px-6 py-2 font-medium hover:bg-gray-100 text-left"
            >
              {t('nav.benefits')}
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="px-6 py-2 font-medium hover:bg-gray-100 text-left"
            >
              {t('nav.testimonials')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="px-6 py-2 font-medium hover:bg-gray-100 text-left"
            >
              {t('nav.faq')}
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="px-6 py-2 font-medium hover:bg-gray-100 text-left"
            >
              {t('nav.pricing')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-6 py-2 font-medium hover:bg-gray-100 text-left"
            >
              {t('nav.contact')}
            </button>
            <div className="px-6 py-2 flex justify-between items-center">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-brand-light-green hover:bg-brand-dark-green text-white"
              >
                {t('nav.freeQuote')}
              </Button>
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
