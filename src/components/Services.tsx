
import React from 'react';
import { Scissors, Trash, Droplets, ShowerHead, Leaf } from "lucide-react";

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
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Calgary Lawn Care Services</h2>
          <p className="section-subtitle">Professional yard care services for Calgary homeowners</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Calgary Lawn Mowing"
            description="Professional grass cutting and lawn maintenance to keep your Calgary yard looking its best year-round, even during our short growing season."
            icon={Scissors}
          />
          <ServiceCard
            title="Bush & Hedge Cutting"
            description="Precise trimming and shaping of bushes and hedges to enhance your Calgary landscape's appearance, adapted to our local climate."
            icon={Scissors}
          />
          <ServiceCard
            title="Edge Trimming"
            description="Clean, sharp edges along Calgary sidewalks, driveways, and garden beds for a professionally manicured look in any neighborhood."
            icon={Scissors}
          />
          <ServiceCard
            title="Garbage Removal"
            description="Efficient removal of any type of garbage, debris, and unwanted items from your Calgary property, following local disposal regulations."
            icon={Trash}
          />
          <ServiceCard
            title="Gutter Cleaning"
            description="Thorough cleaning of gutters throughout Calgary to remove leaves, dirt, and debris, preventing water damage to your home."
            icon={Trash}
          />
          <ServiceCard
            title="Calgary Pressure Washing"
            description="High-quality pressure washing for Calgary driveways, wooden terraces, garage doors, and more - perfect for removing winter salt residue."
            icon={Droplets}
          />
          <ServiceCard
            title="Driveway Deep Cleaning"
            description="Removal of ingrained dirt, Calgary winter salt, moss, and car oil from surfaces - restoring your driveway to like-new condition."
            icon={ShowerHead}
          />
          <ServiceCard
            title="Eco-Friendly Services"
            description="Calgary's choice for environmentally responsible yard care - using exclusively ecological detergents without harm to our local environment."
            icon={Leaf}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
