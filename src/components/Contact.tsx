import React, { useState } from 'react';
import { Phone, Mail, Instagram, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactItem = ({ 
  icon: Icon, 
  title, 
  content, 
  link 
}: { 
  icon: React.ElementType; 
  title: string; 
  content: string;
  link?: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="p-3 bg-brand-cream rounded-full">
        <Icon className="text-brand-dark-green" size={24} />
      </div>
      <div className="max-w-full overflow-hidden">
        <h3 className="font-medium text-brand-dark-green">{title}</h3>
        {link ? (
          <a href={link} className="text-brand-light-green hover:underline break-all">{content}</a>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Request Submitted!",
      description: "Thank you for your interest. We'll contact you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-brand-cream">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Book your service or request a quote today</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-brand-dark-green">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                <ContactItem 
                  icon={Phone} 
                  title="Phone" 
                  content="(204) 952-3691"
                  link="tel:+12049523691"
                />
                <ContactItem 
                  icon={Mail} 
                  title="Email" 
                  content="romanpiddubnyi620@gmail.com"
                  link="mailto:romanpiddubnyi620@gmail.com"
                />
                <ContactItem 
                  icon={Instagram} 
                  title="Instagram" 
                  content="landscaping_4_calgary"
                  link="https://instagram.com/landscaping_4_calgary"
                />
                <ContactItem 
                  icon={Calendar} 
                  title="Working Hours" 
                  content="Monday to Saturday, 8am - 6pm"
                />
              </div>
              
              <div className="p-4 bg-brand-cream rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Note:</span> We serve all areas in Calgary and surrounding communities. Contact us for availability in your area.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-brand-dark-green">Book Your Service</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-green"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-green"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700">Service Needed</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-green"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="lawn-mowing">Lawn Mowing</option>
                  <option value="bush-cutting">Bush Cutting</option>
                  <option value="edge-trimming">Edge Trimming</option>
                  <option value="garbage-removal">Garbage Removal</option>
                  <option value="gutter-cleaning">Gutter Cleaning</option>
                  <option value="pressure-washing">Pressure Washing</option>
                  <option value="other">Other (please specify)</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-green"
                  placeholder="Tell us about your needs, property size, or any special requirements..."
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-brand-light-green hover:bg-brand-dark-green text-white py-3"
              >
                Request Service
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
