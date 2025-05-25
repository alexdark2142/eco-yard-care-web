
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr' | 'uk';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.benefits': 'Benefits',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',
    
    // Hero
    'hero.title': 'KEEP YOUR YARD GREEN, CLEAN & THRIVING',
    'hero.subtitle': 'Professional landscaping and pressure washing services in Calgary, AB — without you lifting a finger!',
    'hero.bookNow': 'Book Now',
    'hero.services': 'Our Calgary Services',
    
    // Testimonials
    'testimonials.title': 'What Calgary Homeowners Say',
    'testimonials.subtitle': 'Trusted by homeowners throughout Calgary, AB',
    
    // Contact
    'contact.title': 'Get Your Free Quote Today',
    'contact.subtitle': 'Ready to transform your yard? Contact us for a free consultation.',
    
    // Footer
    'footer.title': 'ECO YARD CARE CALGARY',
    'footer.description': 'Professional lawn care & pressure washing services throughout Calgary, AB',
    'footer.serving': 'Serving all Calgary neighborhoods and surrounding areas',
    'footer.hours': 'Monday to Saturday, 8am - 6pm MT',
    'footer.copyright': 'Eco Yard Care Calgary. All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.services': 'Services',
    'nav.benefits': 'Avantages',
    'nav.testimonials': 'Témoignages',
    'nav.faq': 'FAQ',
    'nav.pricing': 'Tarifs',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Réserver',
    
    // Hero
    'hero.title': 'GARDEZ VOTRE JARDIN VERT, PROPRE ET PROSPÈRE',
    'hero.subtitle': 'Services professionnels d\'aménagement paysager et de nettoyage haute pression à Calgary, AB — sans que vous leviez le petit doigt!',
    'hero.bookNow': 'Réserver',
    'hero.services': 'Nos Services Calgary',
    
    // Testimonials
    'testimonials.title': 'Ce que disent les propriétaires de Calgary',
    'testimonials.subtitle': 'Fait confiance par les propriétaires de Calgary, AB',
    
    // Contact
    'contact.title': 'Obtenez votre devis gratuit aujourd\'hui',
    'contact.subtitle': 'Prêt à transformer votre jardin? Contactez-nous pour une consultation gratuite.',
    
    // Footer
    'footer.title': 'ECO YARD CARE CALGARY',
    'footer.description': 'Services professionnels d\'entretien de pelouse et de nettoyage haute pression dans tout Calgary, AB',
    'footer.serving': 'Desservant tous les quartiers de Calgary et les environs',
    'footer.hours': 'Lundi au samedi, 8h - 18h MT',
    'footer.copyright': 'Eco Yard Care Calgary. Tous droits réservés.',
  },
  uk: {
    // Navigation
    'nav.services': 'Послуги',
    'nav.benefits': 'Переваги',
    'nav.testimonials': 'Відгуки',
    'nav.faq': 'Питання',
    'nav.pricing': 'Ціни',
    'nav.contact': 'Контакти',
    'nav.bookNow': 'Замовити',
    
    // Hero
    'hero.title': 'ТРИМАЙТЕ ВАШ ДВІР ЗЕЛЕНИМ, ЧИСТИМ ТА КВІТУЧИМ',
    'hero.subtitle': 'Професійні послуги ландшафтного дизайну та мийки під тиском в Калгарі, AB — без ваших зусиль!',
    'hero.bookNow': 'Замовити',
    'hero.services': 'Наші Послуги в Калгарі',
    
    // Testimonials
    'testimonials.title': 'Що кажуть власники будинків Калгарі',
    'testimonials.subtitle': 'Довіряють власники будинків по всьому Калгарі, AB',
    
    // Contact
    'contact.title': 'Отримайте безкоштовну оцінку сьогодні',
    'contact.subtitle': 'Готові перетворити ваш двір? Зв\'яжіться з нами для безкоштовної консультації.',
    
    // Footer
    'footer.title': 'ECO YARD CARE CALGARY',
    'footer.description': 'Професійні послуги догляду за газоном та мийки під тиском по всьому Калгарі, AB',
    'footer.serving': 'Обслуговуємо всі райони Калгарі та околиці',
    'footer.hours': 'Понеділок - субота, 8:00 - 18:00 MT',
    'footer.copyright': 'Eco Yard Care Calgary. Всі права захищені.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && ['en', 'fr', 'uk'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
