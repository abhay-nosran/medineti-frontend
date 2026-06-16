import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { companyConfig } from '../config/companyConfig';
import { fadeInUp } from '../constants/animationVariants';

export const AboutPage: React.FC = () => {
  return (
    <PageWrapper title="About Us">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className="space-y-16"
      >
        {/* Company Header */}
        <motion.div
          key="header"
          variants={fadeInUp}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            About {companyConfig.companyName}
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            {companyConfig.description}
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div
          key="mvv"
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg border border-secondary-200">
            {/* <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-5">
              <span className="text-primary-600 font-bold text-xl">M</span>
            </div> */}
            <h3 className="text-xl font-bold text-secondary-900 mb-3">Mission</h3>
            <p className="text-secondary-600">
              To empower healthcare organizations to achieve and maintain the highest standards of quality, safety, and compliance through expert guidance and innovative solutions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-secondary-200">
            {/* <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-5">
              <span className="text-primary-600 font-bold text-xl">V</span>
            </div> */}
            <h3 className="text-xl font-bold text-secondary-900 mb-3">Vision</h3>
            <p className="text-secondary-600">
              To be the leading healthcare consulting firm that transforms healthcare delivery across India by driving excellence in accreditation, compliance, and quality improvement.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-secondary-200">
            {/* <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-5">
              <span className="text-primary-600 font-bold text-xl">V</span>
            </div> */}
            <h3 className="text-xl font-bold text-secondary-900 mb-3">Values</h3>
            <div className="space-y-3">
              {companyConfig.coreValues.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <span className="text-primary-600">•</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900">{value.title}</h4>
                    <p className="text-sm text-secondary-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why Healthcare Organizations Choose Us */}
        <motion.div
          key="why-choose"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-secondary-900 mb-6">
            Why Healthcare Organizations Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyConfig.whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-md transition-shadow border border-secondary-200">
                <div className="flex items-start space-x-4">
                  {/* <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-primary-600 font-bold">{item.icon.charAt(0).toUpperCase()}</span>
                  </div> */}
                  <div>
                    <h3 className="text-lg font-bold text-secondary-900">{item.title}</h3>
                    <p className="text-secondary-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Growth Journey Timeline */}
       
      </motion.div>
    </PageWrapper>
  );
};




