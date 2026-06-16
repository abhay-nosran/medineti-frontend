import React, { useState } from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { companyConfig } from '../config/companyConfig';
import { fadeInUp, staggerContainer } from '../constants/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { apiService } from '../services/api';
import { logger } from '../utils/logger';

export const BookGapAnalysisPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    hospitalName: '',
    hospitalType: '',
    numberOfBeds: '',
    city: '',
    state: '',
    email: '',
    phone: '',
    accreditationStatus: '',
    preferredConsultationDate: '',
    additionalNotes: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const { ref, controls, variants } = useScrollAnimation(0.2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

    if (!formData.hospitalName.trim()) {
      errors.hospitalName = 'Hospital name is required';
    }

    if (!formData.hospitalType) {
      errors.hospitalType = 'Hospital type is required';
    }

    if (!formData.numberOfBeds || Number(formData.numberOfBeds) <= 0) {
      errors.numberOfBeds = 'Please enter a valid number of beds';
    }

    if (!formData.city.trim()) {
      errors.city = 'City is required';
    }

    if (!formData.state) {
      errors.state = 'State is required';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Phone number must be exactly 10 digits';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid email address';
    }

    if (!formData.accreditationStatus) {
      errors.accreditationStatus = 'Accreditation status is required';
    }

    if (!formData.preferredConsultationDate) {
      errors.preferredConsultationDate = 'Preferred consultation date is required';
    } else {
      const selected = new Date(formData.preferredConsultationDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errors.preferredConsultationDate = 'Please select today or a future date';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormStatus('loading');
      // Clear any previous server error
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next._server;
        return next;
      });
      try {
        // Ensure numberOfBeds is sent as a number
        const payload = {
          ...formData,
          numberOfBeds: Number(formData.numberOfBeds),
        };
        const result = await apiService.submitGapAnalysisForm(payload);
        if (result.success) {
          setFormStatus('success');
          setFormData({
            name: '',
            hospitalName: '',
            hospitalType: '',
            numberOfBeds: '',
            city: '',
            state: '',
            email: '',
            phone: '',
            accreditationStatus: '',
            preferredConsultationDate: '',
            additionalNotes: '',
          });
        } else {
          setFormStatus('error');
          if (result.message) {
            setFormErrors((prev) => ({ ...prev, _server: result.message }));
          }
        }
      } catch (error) {
        logger.error('Gap analysis form submission error', error);
        setFormStatus('error');
      }
    }
  };

  return (
    <PageWrapper title="Book Gap Analysis">
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
            Book Your Complimentary Gap Analysis
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-secondary-600 max-w-2xl mx-auto mb-4"
          >
            Take the first step toward healthcare excellence with a free, no-obligation gap analysis assessment
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-sm text-secondary-500 max-w-2xl mx-auto"
          >
            Our expert consultants will evaluate your current state against NABH standards and provide a prioritized action plan for accreditation success.
          </motion.p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          key="form-section"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Success Message */}
          {formStatus === 'success' && (
            <motion.div
              key="success"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center py-8 bg-primary-50 rounded-lg mb-8"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold text-secondary-900 mb-4"
              >
                Thank You for Booking Your Gap Analysis!
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-secondary-600 max-w-2xl mx-auto mb-6"
              >
                We've received your request and one of our expert consultants will contact you within 24 hours to schedule your complimentary gap analysis assessment.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/services"
                  className="flex-1 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Explore Our Services
                </a>
                <a
                  href="/about"
                  className="flex-1 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          )}

          {/* Error Message */}
          {formStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
              {formErrors._server || 'Something went wrong while sending your request. Please try again or contact us directly at'}{' '}
              {!formErrors._server && (
                <a href={`mailto:${companyConfig.contact.email}`} className="underline font-medium">
                  {companyConfig.contact.email}
                </a>
              )}
            </div>
          )}

          {/* Form */}
          {formStatus !== 'success' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    required
                  />
                  {formErrors.name && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Hospital / Facility Name
                  </label>
                  <input
                    type="text"
                    name="hospitalName"
                    value={formData.hospitalName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      formErrors.hospitalName ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your hospital or facility name"
                    required
                  />
                  {formErrors.hospitalName && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.hospitalName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Hospital Type
                  </label>
                  <select
                    name="hospitalType"
                    value={formData.hospitalType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      formErrors.hospitalType ? 'border-red-500' : ''
                    }`}
                    required
                  >
                    <option value="">Select Hospital Type</option>
                    {companyConfig.hospitalTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {formErrors.hospitalType && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.hospitalType}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Number of Beds
                  </label>
                  <input
                    type="number"
                    name="numberOfBeds"
                    value={formData.numberOfBeds || ''}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      formErrors.numberOfBeds ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter number of beds"
                    min="1"
                    required
                  />
                  {formErrors.numberOfBeds && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.numberOfBeds}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      formErrors.city ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter city"
                    required
                  />
                  {formErrors.city && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.city}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    State
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      formErrors.state ? 'border-red-500' : ''
                    }`}
                    required
                  >
                    <option value="">Select State</option>
                    {companyConfig.states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {formErrors.state && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.state}</p>
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
                    required
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
                    required
                  />
                  {formErrors.phone && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Current Accreditation Status
                  </label>
                  <select
                    name="accreditationStatus"
                    value={formData.accreditationStatus}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      formErrors.accreditationStatus ? 'border-red-500' : ''
                    }`}
                    required
                  >
                    <option value="">Select Accreditation Status</option>
                    {companyConfig.accreditationStatus.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                  {formErrors.accreditationStatus && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.accreditationStatus}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Preferred Consultation Date
                  </label>
                  <input
                    type="date"
                    name="preferredConsultationDate"
                    value={formData.preferredConsultationDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      formErrors.preferredConsultationDate ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  {formErrors.preferredConsultationDate && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.preferredConsultationDate}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Additional Notes or Requirements
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      formErrors.additionalNotes ? 'border-red-500' : ''
                    }`}
                    placeholder="Any specific concerns, timelines, or additional information you'd like us to know?"
                  />
                  {formErrors.additionalNotes && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.additionalNotes}</p>
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
                  {formStatus === 'loading' ? 'Submitting...' : 'Book Gap Analysis'}
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          key="benefits"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-secondary-900 text-center mb-8"
          >
            What You'll Get from Your Gap Analysis
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-secondary-200">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-primary-600 font-bold text-2xl">📊</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary-900">Comprehensive Assessment</h4>
                  <p className="text-secondary-600">
                    Detailed evaluation of your current practices against NABH standards across all departments and functions
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-secondary-200">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-primary-600 font-bold text-2xl">🎯</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary-900">Prioritized Action Plan</h4>
                  <p className="text-secondary-600">
                    Clear, step-by-step roadmap with timelines and resource requirements for achieving accreditation
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-secondary-200">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-primary-600 font-bold text-2xl">💰</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary-900">Cost & Timeline Estimate</h4>
                  <p className="text-secondary-600">
                    Transparent pricing and realistic timeline for your accreditation journey based on facility size and complexity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
};