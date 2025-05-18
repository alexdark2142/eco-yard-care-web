
import React from 'react';
import { CheckCircle } from 'lucide-react';

const BenefitItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start space-x-3 mb-4">
      <CheckCircle className="text-brand-light-green mt-1 flex-shrink-0" size={20} />
      <p className="text-lg">{text}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-brand-cream">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">The benefits of our professional service</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-brand-dark-green">Eco-Friendly</h3>
            <div className="space-y-3">
              <BenefitItem text="100% ecological detergents" />
              <BenefitItem text="Safe for pets and children" />
              <BenefitItem text="Environmentally conscious practices" />
              <BenefitItem text="Sustainable lawn care methods" />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-brand-dark-green">Professional</h3>
            <div className="space-y-3">
              <BenefitItem text="Experienced and trained staff" />
              <BenefitItem text="High-quality equipment" />
              <BenefitItem text="Attention to detail" />
              <BenefitItem text="Consistent, reliable service" />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-brand-dark-green">Customer-Focused</h3>
            <div className="space-y-3">
              <BenefitItem text="Convenient scheduling options" />
              <BenefitItem text="Responsive customer service" />
              <BenefitItem text="Tailored service packages" />
              <BenefitItem text="Satisfaction guaranteed" />
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-brand-dark-green text-white p-8 rounded-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Book today and enjoy tomorrow!</h3>
              <p className="text-brand-cream/90">Get 10% off your first service when you book now</p>
            </div>
            <a 
              href="#contact" 
              className="inline-block py-3 px-8 bg-brand-light-green hover:bg-white hover:text-brand-dark-green transition-all rounded-lg font-medium text-center whitespace-nowrap"
            >
              Book Your Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
