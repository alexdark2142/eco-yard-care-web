
import React from 'react';
import { CheckCircle, Percent, CircleDollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PriceCard = ({
  title,
  price,
  period,
  features,
  isPopular = false,
}: {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}) => {
  return (
    <div className={`rounded-lg overflow-hidden ${isPopular ? 'ring-2 ring-brand-light-green' : 'border border-gray-200'}`}>
      {isPopular && (
        <div className="bg-brand-light-green text-white p-2 text-center font-medium">
          Most Popular
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
          Book Now
        </Button>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Pricing</h2>
          <p className="section-subtitle">Affordable rates for quality service</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PriceCard
            title="Single Lawn Mowing"
            price="$30"
            period="per visit"
            features={[
              "Professional grass cutting",
              "Edge trimming",
              "Debris cleanup",
              "One-time service",
            ]}
          />
          
          <PriceCard
            title="Monthly Lawn Maintenance"
            price="$100"
            period="/month"
            features={[
              "Weekly grass mowing",
              "Edge trimming",
              "Debris removal",
              "Consistent care all month",
            ]}
            isPopular={true}
          />
          
          <PriceCard
            title="Pressure Washing"
            price="$40+"
            period=""
            features={[
              "Driveway cleaning",
              "Patio and deck washing",
              "Removal of tough stains",
              "Price varies by area size",
            ]}
          />
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4 border-b border-gray-200 pb-4 mb-4">
            <div className="p-3 bg-brand-cream rounded-full">
              <Percent className="text-brand-dark-green" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-dark-green">First-Time Customer Discount</h3>
              <p className="text-gray-600">Enjoy 10% off your first service booking!</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="p-3 bg-brand-cream rounded-full">
              <CircleDollarSign className="text-brand-dark-green" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-dark-green">Custom Pricing</h3>
              <p className="text-gray-600">Contact us for custom care plans and special requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
