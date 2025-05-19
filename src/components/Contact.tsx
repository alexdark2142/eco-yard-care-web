import React, { useState } from 'react';
import { Phone, Mail, Instagram, Calendar, User, MessageSquare, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  _subject: z.string().optional(),
  _captcha: z.literal("false").optional(),
  _honey: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      _captcha: "false",
      _honey: "",
    },
  });

  // Map service values to readable names for the subject line
  const serviceLabels: { [key: string]: string } = {
    "lawn-mowing": "Lawn Mowing",
    "bush-cutting": "Bush Cutting",
    "edge-trimming": "Edge Trimming",
    "garbage-removal": "Garbage Removal",
    "gutter-cleaning": "Gutter Cleaning",
    "pressure-washing": "Pressure Washing",
    "other": "Other Service",
  };

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      
      // Set the subject line based on the selected service
      data._subject = `Service Request: ${serviceLabels[data.service] || data.service}`;
      
      // Create FormData for submission
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      // Submit the form to FormSubmit.co with updated email
      const response = await fetch("https://formsubmit.co/romanpiddubnyi620@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });
      
      if (response.ok) {
        // Reset the form
        form.reset();
        
        // Show success message
        toast({
          title: "Request Submitted!",
          description: "Thank you for your interest. We'll contact you shortly.",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="bg-white p-8 rounded-lg shadow-md"
                action="https://formsubmit.co/romanpiddubnyi620@gmail.com"
                method="POST"
              >
                {/* Hidden fields for FormSubmit.co */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_honey" />
                <input type="hidden" name="_subject" value="New Service Request" />
                
                <h3 className="text-2xl font-bold mb-6 text-brand-dark-green">Book Your Service</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <User size={16} className="text-brand-light-green" />
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="John Doe" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Phone size={16} className="text-brand-light-green" />
                          Phone
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="(123) 456-7890" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="flex items-center gap-2">
                        <Mail size={16} className="text-brand-light-green" />
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="your.email@example.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="flex items-center gap-2">
                        <Calendar size={16} className="text-brand-light-green" />
                        Service Needed
                      </FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="lawn-mowing">Lawn Mowing</SelectItem>
                          <SelectItem value="bush-cutting">Bush Cutting</SelectItem>
                          <SelectItem value="edge-trimming">Edge Trimming</SelectItem>
                          <SelectItem value="garbage-removal">Garbage Removal</SelectItem>
                          <SelectItem value="gutter-cleaning">Gutter Cleaning</SelectItem>
                          <SelectItem value="pressure-washing">Pressure Washing</SelectItem>
                          <SelectItem value="other">Other (please specify)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="flex items-center gap-2">
                        <MessageSquare size={16} className="text-brand-light-green" />
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          placeholder="Tell us about your needs, property size, or any special requirements..."
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-light-green hover:bg-brand-dark-green text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send size={16} />
                      Request Service
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
