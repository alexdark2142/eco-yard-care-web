
import React from 'react';
import { Scissors, Trash, Droplets, Shower, Leaf } from "lucide-react";

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
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Professional yard care you can rely on</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Lawn Mowing"
            description="Professional grass cutting and lawn maintenance to keep your yard looking its best."
            icon={Scissors}
          />
          <ServiceCard
            title="Bush & Hedge Cutting"
            description="Precise trimming and shaping of bushes and hedges to enhance your landscape's appearance."
            icon={Scissors}
          />
          <ServiceCard
            title="Edge Trimming"
            description="Clean, sharp edges along sidewalks, driveways, and garden beds for a manicured look."
            icon={Scissors}
          />
          <ServiceCard
            title="Garbage Removal"
            description="Removal of any type of garbage, debris, and unwanted items from your property."
            icon={Trash}
          />
          <ServiceCard
            title="Gutter Cleaning"
            description="Thorough cleaning of gutters to remove leaves, dirt, and debris, preventing water damage."
            icon={Trash}
          />
          <ServiceCard
            title="Pressure Washing"
            description="High-quality pressure washing for driveways, wooden terraces, garage doors, and more."
            icon={Droplets}
          />
          <ServiceCard
            title="Deep Cleaning"
            description="Removal of ingrained dirt, winter salt, moss, and car oil from surfaces."
            icon={Shower}
          />
          <ServiceCard
            title="Eco-Friendly Cleaning"
            description="Using exclusively ecological detergents without harm to the environment, animals, and human health."
            icon={Leaf}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
