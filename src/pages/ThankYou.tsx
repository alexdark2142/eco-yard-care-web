import React, { useEffect, useState } from 'react';
import { CheckCircle, Home, Copy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';

const ThankYouContent = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  // Set page title for SEO
  useEffect(() => {
    document.title = 'Thank You - AB Calgary Landscaping | Service Request Received';
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Thank you for your service request. AB Calgary Landscaping will contact you within 24 hours to discuss your landscaping needs in Calgary, AB.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Thank you for your service request. AB Calgary Landscaping will contact you within 24 hours to discuss your landscaping needs in Calgary, AB.';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  const handleReturnHome = () => {
    navigate('/');
  };

  const phone = '+12049523691';
  const phoneDisplay = '(204) 952-3691';

  const handleCopy = () => {
    navigator.clipboard.writeText(phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Detect if device is mobile
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream to-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-light-green rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-brand-dark-green mb-4">
              {t('thankYou.title')}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              {t('thankYou.subtitle')}
            </p>

            {/* Contact Information */}
            <div className="bg-brand-cream rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-brand-dark-green mb-3">
                {t('thankYou.nextSteps.title')}
              </h2>
              <div className="space-y-2 text-left max-w-md mx-auto">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-brand-light-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">{t('thankYou.nextSteps.item1')}</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-brand-light-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">{t('thankYou.nextSteps.item2')}</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-600 mb-3 text-sm">
                {t('thankYou.assistance')}
              </p>
              <div className="text-brand-dark-green text-sm flex flex-col items-center gap-2">
                {isMobile ? (
                  <a href={`tel:${phone}`} className="font-medium underline hover:text-brand-light-green transition-colors duration-150">
                    {phoneDisplay}
                  </a>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="font-medium select-all">{phoneDisplay}</span>
                    <button
                      onClick={handleCopy}
                      className="p-1 rounded hover:bg-brand-cream focus:outline-none"
                      title="Copy phone number"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    {copied && <span className="text-xs text-brand-light-green ml-1">Copied!</span>}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Single Action Button */}
          <Button 
            onClick={handleReturnHome}
            className="bg-brand-dark-green hover:bg-brand-light-green text-white px-8 py-3 text-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            {t('thankYou.returnHome')}
          </Button>
        </div>
      </div>
    </div>
  );
};

const ThankYou = () => {
  return (
    <LanguageProvider>
      <ThankYouContent />
    </LanguageProvider>
  );
};

export default ThankYou; 