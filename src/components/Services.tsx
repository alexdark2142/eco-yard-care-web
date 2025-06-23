import React from 'react';
import { Scissors, Trash, Droplets, ShowerHead, Leaf, Snowflake } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
}) => {
  return (
    <div className="service-card group">
      <div className="mb-4 p-3 rounded-full inline-block bg-brand-light-green/10 text-brand-light-green group-hover:bg-brand-light-green group-hover:text-white transition-all">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-brand-dark-green">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title={t('services.lawnMowing.title')}
            description={t('services.lawnMowing.description')}
            icon={Scissors}
          />
          <ServiceCard
            title={t('services.bushHedge.title')}
            description={t('services.bushHedge.description')}
            icon={Scissors}
          />
          <ServiceCard
            title={t('services.edgeTrimming.title')}
            description={t('services.edgeTrimming.description')}
            icon={Scissors}
          />
          <ServiceCard
            title={t('services.garbageRemoval.title')}
            description={t('services.garbageRemoval.description')}
            icon={Trash}
          />
          <ServiceCard
            title={t('services.gutterCleaning.title')}
            description={t('services.gutterCleaning.description')}
            icon={Trash}
          />
          <ServiceCard
            title={t('services.pressureWashing.title')}
            description={t('services.pressureWashing.description')}
            icon={Droplets}
          />
          <ServiceCard
            title={t('services.snowRemoval.title')}
            description={t('services.snowRemoval.description')}
            icon={Snowflake}
          />
          <ServiceCard
            title={t('services.drivewayDeepCleaning.title')}
            description={t('services.drivewayDeepCleaning.description')}
            icon={ShowerHead}
          />
          <ServiceCard
            title={t('services.ecoFriendly.title')}
            description={t('services.ecoFriendly.description')}
            icon={Leaf}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
