import React from 'react';
import { CheckCircle, Percent, CircleDollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const PriceCard = ({
  title,
  price,
  period,
  features,
  isPopular = false,
}: {
  title: string;
  price: string;
  period?: string;
  features: string[];
  isPopular?: boolean;
}) => {
  const { t } = useLanguage();
  
  return (
    <div className={`rounded-lg overflow-hidden ${isPopular ? 'ring-2 ring-brand-light-green' : 'border border-gray-200'}`}>
      {isPopular && (
        <div className="bg-brand-light-green text-white p-2 text-center font-medium">
          {t('pricing.mostPopular')}
        </div>
      )}
      <div className="p-8 bg-white">
        <h3 className="text-xl font-bold text-brand-dark-green mb-2">{title}</h3>
        <div className="flex items-end mb-6">
          <span className="text-4xl font-bold">{price}</span>
          {period && <span className="text-gray-500 ml-1">{period}</span>}
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle size={18} className="text-brand-light-green mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className={`w-full ${isPopular ? 'bg-brand-light-green hover:bg-brand-dark-green' : 'bg-brand-dark-green hover:bg-brand-light-green'}`}
        >
          {t('pricing.bookNow')}
        </Button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const { t } = useLanguage();
  
  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">{t('pricing.title')}</h2>
          <p className="section-subtitle">{t('pricing.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PriceCard
            title={t('pricing.singleMowing.title')}
            price={t('pricing.singleMowing.price')}
            period={t('pricing.singleMowing.period')}
            features={[
              t('pricing.singleMowing.feature1'),
              t('pricing.singleMowing.feature2'),
              t('pricing.singleMowing.feature3'),
              t('pricing.singleMowing.feature4'),
            ]}
          />
          
          <PriceCard
            title={t('pricing.monthlyMaintenance.title')}
            price={t('pricing.monthlyMaintenance.price')}
            period={t('pricing.monthlyMaintenance.period')}
            features={[
              t('pricing.monthlyMaintenance.feature1'),
              t('pricing.monthlyMaintenance.feature2'),
              t('pricing.monthlyMaintenance.feature3'),
              t('pricing.monthlyMaintenance.feature4'),
            ]}
            isPopular={true}
          />
          
          <PriceCard
            title={t('pricing.pressureWashing.title')}
            price={t('pricing.pressureWashing.price')}
            features={[
              t('pricing.pressureWashing.feature1'),
              t('pricing.pressureWashing.feature2'),
              t('pricing.pressureWashing.feature3'),
              t('pricing.pressureWashing.feature4'),
            ]}
          />
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4 border-b border-gray-200 pb-4 mb-4">
            <div className="p-3 bg-brand-cream rounded-full">
              <Percent className="text-brand-dark-green" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-dark-green">{t('pricing.firstTimeDiscount.title')}</h3>
              <p className="text-gray-600">{t('pricing.firstTimeDiscount.subtitle')}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="p-3 bg-brand-cream rounded-full">
              <CircleDollarSign className="text-brand-dark-green" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-dark-green">{t('pricing.customPricing.title')}</h3>
              <p className="text-gray-600">{t('pricing.customPricing.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
