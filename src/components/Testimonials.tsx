
import React from 'react';
import { Star } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialCard = ({ name, location, text, rating }: { name: string; location: string; text: string; rating: number }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star size={16} className="text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      );
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex mb-2 items-center gap-2">
        <div className="flex">{renderStars()}</div>
        <span className="text-sm text-gray-600">({rating}/5)</span>
      </div>
      <p className="mb-4 text-gray-700 italic">"{text}"</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useLanguage();
  
  return (
    <section id="testimonials" className="py-20 bg-brand-cream">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-subtitle">{t('testimonials.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            name="Michael Thompson"
            location="Calgary, AB"
            text="Great service, very thorough with the lawn care. We always get exactly what was promised and the pricing is fair."
            rating={4.5}
          />
          
          <TestimonialCard
            name="Jennifer Williams"
            location="Calgary, AB"
            text="Professional and reliable service. Our lawn looks fantastic and the pressure washing really made a difference to our driveway."
            rating={5}
          />
          
          <TestimonialCard
            name="Robert Johnson"
            location="Calgary, AB"
            text="Good quality work on our patio cleaning. Showed up on time and cleaned up after themselves. Would recommend."
            rating={4}
          />
          
          <TestimonialCard
            name="Sarah Peterson"
            location="Calgary, AB"
            text="We've been using their service for over a year now. Consistent quality and very reasonable rates. Happy with the results."
            rating={4.5}
          />
          
          <TestimonialCard
            name="David Martinez"
            location="Calgary, AB"
            text="Excellent bush trimming service. They knew exactly how to shape our shrubs and left the yard looking much better."
            rating={5}
          />
          
          <TestimonialCard
            name="Amanda Chen"
            location="Calgary, AB"
            text="Helpful service for gutter cleaning. They even pointed out a small issue and gave us advice on maintenance. Solid work."
            rating={4}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
