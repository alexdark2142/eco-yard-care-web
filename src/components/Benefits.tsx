
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BenefitItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start space-x-3 mb-4">
      <CheckCircle className="text-brand-light-green mt-1 flex-shrink-0" size={20} />
      <p className="text-lg">{text}</p>
    </div>
  );
};

const Benefits = () => {
  const { t } = useLanguage();
  
  return (
    <section id="benefits" className="py-20 bg-brand-cream">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">{t('benefits.title')}</h2>
          <p className="section-subtitle">{t('benefits.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-brand-dark-green">{t('benefits.ecoFriendly.title')}</h3>
            <div className="space-y-3">
              <BenefitItem text={t('benefits.ecoFriendly.item1')} />
              <BenefitItem text={t('benefits.ecoFriendly.item2')} />
              <BenefitItem text={t('benefits.ecoFriendly.item3')} />
              <BenefitItem text={t('benefits.ecoFriendly.item4')} />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-brand-dark-green">{t('benefits.professional.title')}</h3>
            <div className="space-y-3">
              <BenefitItem text={t('benefits.professional.item1')} />
              <BenefitItem text={t('benefits.professional.item2')} />
              <BenefitItem text={t('benefits.professional.item3')} />
              <BenefitItem text={t('benefits.professional.item4')} />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-brand-dark-green">{t('benefits.customerFocused.title')}</h3>
            <div className="space-y-3">
              <BenefitItem text={t('benefits.customerFocused.item1')} />
              <BenefitItem text={t('benefits.customerFocused.item2')} />
              <BenefitItem text={t('benefits.customerFocused.item3')} />
              <BenefitItem text={t('benefits.customerFocused.item4')} />
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-brand-dark-green text-white p-8 rounded-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{t('benefits.cta.title')}</h3>
              <p className="text-brand-cream/90">{t('benefits.cta.subtitle')}</p>
            </div>
            <a 
              href="#contact" 
              className="inline-block py-3 px-8 bg-brand-light-green hover:bg-white hover:text-brand-dark-green transition-all rounded-lg font-medium text-center whitespace-nowrap"
            >
              {t('benefits.cta.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
