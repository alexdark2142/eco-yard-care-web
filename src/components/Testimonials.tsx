
import React from 'react';
import { Star } from "lucide-react";

const TestimonialCard = ({ name, location, text, rating }: { name: string; location: string; text: string; rating: number }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
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
  return (
    <section id="testimonials" className="py-20 bg-brand-cream">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">What Calgary Homeowners Say</h2>
          <p className="section-subtitle">Trusted by homeowners throughout Calgary, AB</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            name="Michael Thompson"
            location="Kensington, Calgary"
            text="Best lawn service I've used in Calgary! My yard looks amazing all summer and their pressure washing made my driveway look brand new after our harsh winter."
            rating={5}
          />
          
          <TestimonialCard
            name="Jennifer Williams"
            location="McKenzie Towne, Calgary"
            text="I've tried several lawn care companies in Calgary over the years, but none compare to this team. They're professional, on-time, and their eco-friendly approach makes me feel good about my choice."
            rating={5}
          />
          
          <TestimonialCard
            name="Robert Johnson"
            location="Mount Royal, Calgary"
            text="The team did an incredible job pressure washing our patio and driveway. They removed years of Calgary winter grime and made everything look new again."
            rating={5}
          />
          
          <TestimonialCard
            name="Sarah Peterson"
            location="Bridgeland, Calgary"
            text="As a busy professional, I don't have time to maintain my yard. Their weekly service is reliable and my lawn is the envy of my Calgary neighborhood!"
            rating={5}
          />
          
          <TestimonialCard
            name="David Martinez"
            location="Inglewood, Calgary"
            text="The bush trimming service transformed our front yard. Their attention to detail and knowledge of plants suited to Calgary's climate was impressive."
            rating={5}
          />
          
          <TestimonialCard
            name="Amanda Chen"
            location="Sunnyside, Calgary"
            text="After the spring thaw, our gutters were a mess. The team cleaned them thoroughly and even made small repairs at no extra charge. Best service in Calgary!"
            rating={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
