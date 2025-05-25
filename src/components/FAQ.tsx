
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">{t('faq.title')}</h2>
          <p className="section-subtitle">{t('faq.subtitle')}</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-medium text-brand-dark-green">
                {t('faq.areas.title')}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {t('faq.areas.content')}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-medium text-brand-dark-green">
                {t('faq.frequency.title')}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {t('faq.frequency.content')}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-medium text-brand-dark-green">
                {t('faq.eco.title')}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {t('faq.eco.content')}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-medium text-brand-dark-green">
                {t('faq.pressure.title')}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {t('faq.pressure.content')}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-medium text-brand-dark-green">
                {t('faq.snow.title')}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {t('faq.snow.content')}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-lg font-medium text-brand-dark-green">
                {t('faq.different.title')}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {t('faq.different.content')}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
