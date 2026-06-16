import React, { useState } from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { companyConfig } from '../config/companyConfig';
import { fadeInUp, staggerContainer } from '../constants/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { apiService } from '../services/api';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    designation: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const { ref, controls, variants } = useScrollAnimation(0.2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.organization.trim()) {
      errors.organization = 'Organization is required';
    }

    if (!formData.designation.trim()) {
      errors.designation = 'Designation is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Phone number must be exactly 10 digits';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormStatus('loading');
      try {
        const result = await apiService.submitContactForm(formData);
        if (result.success) {
          setFormStatus('success');
          setFormData({
            name: '',
            organization: '',
            designation: '',
            email: '',
            phone: '',
            message: '',
          });
        } else {
          setFormStatus('error');
          // Surface backend validation messages as field errors when possible
          if (result.message) {
            setFormErrors((prev) => ({ ...prev, _server: result.message }));
          }
        }
      } catch (error) {
        setFormStatus('error');
      }
    }
  };

  return (
    <PageWrapper title="Contact Us">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="space-y-16"
      >
        {/* Page Header */}
        <motion.div
          key="header"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4"
          >
            Contact {companyConfig.companyName}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-secondary-600 max-w-2xl mx-auto"
          >
            We're here to help you achieve healthcare excellence. Reach out to our expert team for any inquiries or to discuss your accreditation and compliance needs.
          </motion.p>
        </motion.div>

        {/* Contact Info and Form */}
        <motion.div
          key="contact-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              {/* <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-primary-600 font-bold text-2xl">📍</span>
              </div> */}
              <div>
                <h3 className="text-lg font-bold text-secondary-900">Our Office</h3>
                <p className="text-secondary-600">
                  {companyConfig.contact.address}<br />
                  {companyConfig.contact.city}, {companyConfig.contact.state} {companyConfig.contact.zipCode}<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              {/* <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-primary-600 font-bold text-2xl">📞</span>
              </div> */}
              <div>
                <h3 className="text-lg font-bold text-secondary-900">Phone</h3>
                <p className="text-secondary-600">
                  <a href={`tel:${companyConfig.contact.phone}`} className="text-primary-600 hover:underline">
                    {companyConfig.contact.phone}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              {/* <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-primary-600 font-bold text-2xl">✉️</span>
              </div> */}
              <div>
                <h3 className="text-lg font-bold text-secondary-900">Email</h3>
                <p className="text-secondary-600">
                  <a href={`mailto:${companyConfig.contact.email}`} className="text-primary-600 hover:underline">
                    {companyConfig.contact.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              {/* <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-primary-600 font-bold text-2xl">🌐</span>
              </div> */}
              <div>
                <h3 className="text-lg font-bold text-secondary-900">Social Media</h3>
                <div className="flex space-x-3">
                   <a
                    href="https://linkedin.com/company/mediniti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-secondary-200 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors text-secondary-700 hover:text-primary-700"
                    aria-label="LinkedIn"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 19H5V9h3v10zM6.5 7.732A1.732 1.732 0 1 1 6.5 4.268a1.732 1.732 0 0 1 0 3.464zM20 19h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867 0-2.154 1.459-2.154 2.965V19h-3V9h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.041 0 3.603 2.002 3.603 4.604V19z"/>
                    </svg>
                  </a>
            
                  <a
                    href="https://facebook.com/mediniti.healthcare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-secondary-200 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors text-secondary-700 hover:text-primary-700"
                    aria-label="Facebook"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.872v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.236.195 2.236.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>

                  <a
                    href="https://twitter.com/mediniti_health"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-secondary-200 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors text-secondary-700 hover:text-primary-700"
                    aria-label="Twitter"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2H21.5l-7.11 8.128L22.75 22h-6.545l-5.13-6.708L5.2 22H1.94l7.605-8.69L1.5 2h6.71l4.637 6.127L18.244 2zm-1.143 18h1.803L7.23 3.895H5.295L17.1 20z"/>
                    </svg>
                  </a>


                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary-900 mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      formErrors.name ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your full name"
                  />
                  {formErrors.name && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      formErrors.organization ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your organization name"
                  />
                  {formErrors.organization && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.organization}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      formErrors.designation ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your designation"
                  />
                  {formErrors.designation && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.designation}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      formErrors.email ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your email address"
                  />
                  {formErrors.email && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    className={`w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      formErrors.phone ? 'border-red-500' : ''
                    }`}
                    placeholder="10-digit phone number"
                  />
                  {formErrors.phone && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.phone}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      formErrors.message ? 'border-red-500' : ''
                    }`}
                    placeholder="How can we help you with your accreditation and compliance needs?"
                  />
                  {formErrors.message && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.message}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className={`px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    formStatus === 'loading' ? 'animate-pulse' : ''
                  }`}
                >
                  {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {/* Form Status Messages */}
              {formStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded-lg text-green-800">
                  Thank you for your message! We'll get back to you within 24 hours.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-200 rounded-lg text-red-800">
                  {formErrors._server || 'There was an error sending your message. Please try again or contact us directly.'}
                </div>
              )}
            </form>
          </div>
        </motion.div>

        {/* Form Success Message */}
        {formStatus === 'success' && (
          <motion.div
            key="success-message"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center py-12 bg-primary-50 rounded-xl"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-secondary-900 mb-4"
            >
              Thank You for Contacting Us!
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-secondary-600 max-w-2xl mx-auto mb-6"
            >
              We've received your message and will get back to you within 24 hours. In the meantime, feel free to explore our resources or book a complimentary gap analysis.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-gap-analysis"
                className="flex-1 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Book Gap Analysis
              </a>
              <a
                href="/services"
                className="flex-1 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        )}
      </motion.div>
    </PageWrapper>
  );
};