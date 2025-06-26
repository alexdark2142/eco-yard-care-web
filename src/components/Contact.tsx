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
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

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
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Create validation schema with translated messages
  const formSchema = z.object({
    name: z.string().min(2, { message: t('contact.form.validation.nameRequired') }),
    email: z.string().email({ message: t('contact.form.validation.emailInvalid') }),
    phone: z.string().min(10, { message: t('contact.form.validation.phoneRequired') }),
    service: z.string().min(1, { message: t('contact.form.validation.serviceRequired') }),
    _subject: z.string().optional(),
    _captcha: z.literal("false").optional(),
    _honey: z.string().optional(),
  });

  type FormValues = z.infer<typeof formSchema>;
  
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
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
    "snow-removal": "Snow Removal"
  };

  // Додаємо обробник відправки форми
  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        toast({ title: t('contact.form.successTitle'), description: t('contact.form.successText'), variant: 'success' });
        form.reset();
        navigate('/thank-you');
      } else {
        toast({ title: t('contact.form.errorTitle'), description: t('contact.form.errorText'), variant: 'destructive' });
      }
    } catch (error) {
      toast({ title: t('contact.form.errorTitle'), description: t('contact.form.errorText'), variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-brand-cream">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-brand-dark-green">{t('contact.getInTouch')}</h3>
              
              <div className="space-y-6 mb-8">
                <ContactItem 
                  icon={Phone} 
                  title={t('contact.phone')}
                  content="(204) 952-3691"
                  link="tel:+12049523691"
                />
                <ContactItem 
                  icon={Mail} 
                  title={t('contact.email')}
                  content="romanpiddubnyi620@gmail.com"
                  link="mailto:romanpiddubnyi620@gmail.com"
                />
                <ContactItem 
                  icon={Instagram} 
                  title={t('contact.instagram')}
                  content="landscaping_4_calgary"
                  link="https://instagram.com/landscaping_4_calgary"
                />
                <ContactItem 
                  icon={Calendar} 
                  title={t('contact.workingHours')}
                  content={t('contact.workingHoursValue')}
                />
              </div>
              
              <div className="p-4 bg-brand-cream rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">{t('contact.note')}</span> {t('contact.noteText')}
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <Form {...form}>
              <form 
                className="bg-white p-8 rounded-lg shadow-md"
                onSubmit={form.handleSubmit(handleSubmit)}
                autoComplete="off"
              >
                <h3 className="text-2xl font-bold mb-6 text-brand-dark-green">{t('contact.bookService')}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <User size={16} className="text-brand-light-green" />
                          {t('contact.form.name')}
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder={t('contact.form.namePlaceholder')} />
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
                          {t('contact.form.phone')}
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder={t('contact.form.phonePlaceholder')} />
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
                        {t('contact.form.email')}
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder={t('contact.form.emailPlaceholder')} />
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
                        {t('contact.form.service')}
                      </FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('contact.form.servicePlaceholder')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="lawn-mowing">{t('services.lawnMowing.title')}</SelectItem>
                          <SelectItem value="bush-cutting">{t('services.bushHedge.title')}</SelectItem>
                          <SelectItem value="edge-trimming">{t('services.edgeTrimming.title')}</SelectItem>
                          <SelectItem value="garbage-removal">{t('services.garbageRemoval.title')}</SelectItem>
                          <SelectItem value="gutter-cleaning">{t('services.gutterCleaning.title')}</SelectItem>
                          <SelectItem value="pressure-washing">{t('services.pressureWashing.title')}</SelectItem>
                          <SelectItem value="snow-removal">{t('services.snowRemoval.title')}</SelectItem>
                        </SelectContent>
                      </Select>
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
                      {t('contact.form.submitting')}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send size={16} />
                      {t('contact.form.submit')}
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
