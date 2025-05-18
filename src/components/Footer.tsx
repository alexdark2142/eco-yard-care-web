
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-dark-green text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">LANDSCAPING & PRESSURE WASHING</h2>
            <p className="text-brand-cream/70">Keep your yard green, clean & thriving — without lifting a finger!</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="mb-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center">
              <a href="tel:+12049523691" className="hover:text-brand-light-green transition-colors">
                (204) 952-3691
              </a>
              <span className="text-brand-cream/50 hidden sm:inline">|</span>
              <a href="mailto:romanpiddubnyi620@gmail.com" className="hover:text-brand-light-green transition-colors text-sm sm:text-base break-all sm:break-normal">
                Email Us
              </a>
            </div>
            <p className="text-sm text-brand-cream/70">
              © {currentYear} Landscaping & Pressure Washing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
