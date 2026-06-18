import React from 'react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config/companyConfig';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">{companyConfig.shortName.charAt(0)}</span>
              </div> */}
              <span className="text-2xl font-bold">{companyConfig.companyName}</span>
            </div>
            <p className="text-secondary-300 max-w-sm">
              {companyConfig.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-secondary-400">
                <EnvelopeIcon className="w-5 h-5" />
                <span>{companyConfig.contact.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary-400">
                <PhoneIcon className="w-5 h-5" />
                <span>{companyConfig.contact.phone}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-secondary-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-secondary-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-secondary-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/process" className="text-secondary-400 hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/contact" className="text-secondary-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {companyConfig.services.categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to="/services"
                    state={{ openCategory: category.id }}
                    className="text-secondary-400 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                  key={"LinkedIn"}
                  href={"https://linkedin.com/company/medineti"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={"LinkedIn"}
                >
                  <span className="sr-only">{"LinkedIn"}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 19H5V9h3v10zM6.5 7.732A1.732 1.732 0 1 1 6.5 4.268a1.732 1.732 0 0 1 0 3.464zM20 19h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867 0-2.154 1.459-2.154 2.965V19h-3V9h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.041 0 3.603 2.002 3.603 4.604V19z"/>
                  </svg>
                </a>
            
              <a
                  key={"Facebook"}
                  href={"https://facebook.com/medineti.healthcare"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={"Facebook"}
                >
                  <span className="sr-only">{"Facebook"}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.872v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.236.195 2.236.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
              </a>

              <a
                  key={"Twitter"}
                  href={"https://twitter.com/medineti_health"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={"Twitter"}
                >
                  <span className="sr-only">{"Twitter"}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2H21.5l-7.11 8.128L22.75 22h-6.545l-5.13-6.708L5.2 22H1.94l7.605-8.69L1.5 2h6.71l4.637 6.127L18.244 2zm-1.143 18h1.803L7.23 3.895H5.295L17.1 20z" />
                    </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400">
          <p>
            &copy; {currentYear} {companyConfig.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};