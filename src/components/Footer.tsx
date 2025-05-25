
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-brand-dark-green text-white py-12">
      <div className="container px-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">{t('footer.title')}</h2>
            <p className="text-brand-cream/70">{t('footer.description')}</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <div className="mb-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center max-w-full">
              <a href="tel:+12049523691" className="hover:text-brand-light-green transition-colors">
                (204) 952-3691
              </a>
              <span className="text-brand-cream/50 hidden sm:inline">|</span>
              <a href="mailto:romanpiddubnyi620@gmail.com" className="hover:text-brand-light-green transition-colors text-sm sm:text-base break-all sm:break-normal px-4 sm:px-0">
                romanpiddubnyi620@gmail.com
              </a>
            </div>
            <div className="mb-4 text-center md:text-right text-sm text-brand-cream/70">
              <p>{t('footer.serving')}</p>
              <p>{t('footer.hours')}</p>
            </div>
            <p className="text-sm text-brand-cream/70">
              © {currentYear} {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
