import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { companyConfig } from '../config/companyConfig';
import { fadeInUp, staggerContainer } from '../constants/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

export const SuccessPage: React.FC = () => {
  const { ref, controls, variants } = useScrollAnimation(0.2);

  return (
    <PageWrapper title="Success - MediNiti Healthcare Consulting">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="text-center py-20"
      >
        {/* Success Icon */}
        <motion.div
          key="icon"
          variants={fadeInUp}
          className="mb-8"
        >
          <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto">
            <span className="text-primary-600 font-bold text-4xl">✓</span>
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          key="message"
          variants={fadeInUp}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Request Successfully Submitted!
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Thank you for reaching out to {companyConfig.companyName}. We've received your request and will get back to you shortly.
          </p>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          key="next-steps"
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-secondary-900 mb-6">
            What Happens Next?
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-primary-600 font-bold text-2xl">1</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary-900">Review & Analysis</h3>
                <p className="text-secondary-600">
                  Our expert team will review your submission and prepare a personalized response based on your specific needs and requirements.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-primary-600 font-bold text-2xl">2</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary-900">Personalized Response</h3>
                <p className="text-secondary-600">
                  You'll receive a detailed response within 24 hours via email or phone, outlining how we can help you achieve your healthcare excellence goals.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-primary-600 font-bold text-2xl">3</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary-900">Free Consultation</h3>
                <p className="text-secondary-600">
                  Schedule a complimentary consultation to discuss your accreditation, compliance, or quality improvement needs in detail.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          key="cta"
          variants={fadeInUp}
          className="space-y-4"
        >
          <Link
            to="/book-gap-analysis"
            className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors transform hover:scale-105"
          >
            Book a Gap Analysis
          </Link>
          <Link
            to="/services"
            className="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors transform hover:scale-105"
          >
            Explore Our Services
          </Link>
        </motion.div>

        {/* Quick Contact Info */}
        <motion.div
          key="contact-info"
          variants={fadeInUp}
          className="mt-12 p-6 bg-primary-50 rounded-lg"
        >
          <h3 className="text-lg font-bold text-secondary-900 mb-4">Need Immediate Assistance?</h3>
          <p className="text-secondary-600">
            For urgent inquiries, please call us directly at{" "}
            <a
              href={`tel:${companyConfig.contact.phone}`}
              className="text-primary-600 font-medium hover:underline"
            >
              {companyConfig.contact.phone}
            </a>
          </p>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
};