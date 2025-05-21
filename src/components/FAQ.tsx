
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Common questions about our Calgary lawn care services</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-medium text-brand-dark-green">
                What areas of Calgary do you service?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We proudly serve all neighborhoods in Calgary including Beltline, Bowness, Bridgeland, Capitol Hill, Crescent Heights, Downtown, Eau Claire, Forest Lawn, Hillhurst, Inglewood, Kensington, Marda Loop, McKenzie Towne, Mission, Mount Royal, Renfrew, Sunnyside, Tuscany, West Hillhurst, and surrounding communities.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-medium text-brand-dark-green">
                How often should I mow my lawn in Calgary's climate?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Given Calgary's shorter growing season, we recommend weekly mowing during peak growing months (May-August) and bi-weekly during spring and fall. Our team adjusts cutting height based on seasonal conditions to ensure your lawn thrives despite Calgary's challenging climate.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-medium text-brand-dark-green">
                What eco-friendly practices do you use for Calgary lawns?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We use environmentally responsible products and practices specifically chosen for Calgary's unique environment. This includes drought-resistant maintenance techniques, organic fertilizers when requested, and eco-friendly cleaning solutions for our pressure washing services that are safe for local waterways.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-medium text-brand-dark-green">
                When is the best time to pressure wash my driveway in Calgary?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                The ideal time for pressure washing in Calgary is late spring (May-June) after winter salt and debris have accumulated, and temperatures consistently stay above freezing. Fall is also a good time to clean before winter to prevent staining from leaves and prepare surfaces for snow and ice.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-medium text-brand-dark-green">
                Do you offer snow removal services in winter?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Yes, we offer snow removal services throughout Calgary during winter months. Our services include driveway clearing, sidewalk shoveling, and ice management to keep your property safe and accessible during Calgary's snowy winters. Contact us for seasonal packages.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-lg font-medium text-brand-dark-green">
                What makes your lawn care services different from other Calgary companies?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We stand out by offering truly eco-friendly services, exceptional attention to detail, and a deep understanding of Calgary's unique climate challenges. Our team has extensive experience with local grass types, soil conditions, and weather patterns, allowing us to provide customized care that produces better results for Calgary properties.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
