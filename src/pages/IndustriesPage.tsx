import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { companyConfig } from '../config/companyConfig';
import { fadeInUp, staggerContainer } from '../constants/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const IndustriesPage: React.FC = () => {
  return (
    <PageWrapper title="Industries Served">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className="space-y-16"
      >
        {/* Page Header */}
        <motion.div
          key="header"
          variants={fadeInUp}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Industries We Serve
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Expert consulting solutions tailored to diverse healthcare sectors across India
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          key="industries"
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {companyConfig.industries.map((industry) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: companyConfig.industries.indexOf(industry) * 0.05, duration: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-secondary-200"
            >
              {/* <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-primary-600 font-bold text-3xl">
                  {industry.icon.charAt(0).toUpperCase()}
                </span>
              </div> */}
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                {industry.name}
              </h3>
              <p className="text-secondary-600 mb-6">
                {industry.description}
              </p>
              <div className="mt-6 pt-4 border-t border-secondary-200">
                <p className="text-sm font-medium text-secondary-500">
                  Common accreditation and compliance needs for this sector:
                </p>
                <ul className="list-disc list-inset text-secondary-600 mt-2 space-y-1">
                  {industry.id === 'multi-specialty' && (
                    <>
                      <li>Complex multi-department coordination</li>
                      <li>High-volume patient safety standards</li>
                      <li>Advanced diagnostic service compliance</li>
                    </>
                  )}
                  {industry.id === 'specialty' && (
                    <>
                      <li>Specialty-specific clinical guidelines</li>
                      <li>Procedure-based safety protocols</li>
                      <li>Specialized equipment compliance</li>
                    </>
                  )}
                  {industry.id === 'clinics' && (
                    <>
                      <li>Outpatient care standards</li>
                      <li>Preventive service guidelines</li>
                      <li>Electronic health record implementation</li>
                    </>
                  )}
                  {industry.id === 'diagnostic' && (
                    <>
                      <li>Laboratory safety standards</li>
                      <li>Imaging service compliance</li>
                      <li>Report accuracy and timeliness</li>
                    </>
                  )}
                  {industry.id === 'ivf' && (
                    <>
                      <li>Assisted reproductive technology regulations</li>
                      <li>Embryo handling and storage protocols</li>
                      <li>Success rate reporting compliance</li>
                    </>
                  )}
                  {industry.id === 'nursing' && (
                    <>
                      <li>Long-term care standards</li>
                      <li>Elder abuse prevention protocols</li>
                      <li>Medication management systems</li>
                    </>
                  )}
                  {industry.id === 'daycare' && (
                    <>
                      <li>Same-day surgery standards</li>
                      <li>Anesthesia safety protocols</li>
                      <li>Post-operative care guidelines</li>
                    </>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          key="cta"
          variants={fadeInUp}
          className="text-center py-8 bg-primary-50 rounded-xl"
        >
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">
            Is Your Healthcare Facility Ready for Excellence?
          </h2>
          <p className="text-lg text-secondary-600 mb-6">
            Regardless of your healthcare sector, our expert team can guide you through the accreditation and compliance journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-gap-analysis"
              className="flex-1 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Book Gap Analysis
            </a>
            <a
              href="/contact"
              className="flex-1 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
};