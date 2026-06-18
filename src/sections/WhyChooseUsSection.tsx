import React from 'react';
import { motion } from 'framer-motion';
import { companyConfig } from '../config/companyConfig';
import { fadeInUp, staggerContainer } from '../constants/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const WhyChooseUsSection: React.FC = () => {
  const { ref, controls, variants } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4"
            >
              Why Choose {companyConfig.shortName} Healthcare Consulting?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
            >
              Partner with a trusted advisor dedicated to your healthcare organization's success
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {companyConfig.whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-secondary-200"
              >
                {/* <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-5">
                  <span className="text-primary-600 font-bold text-2xl">
                    {item.icon.charAt(0).toUpperCase()}
                  </span>
                </div> */}
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-secondary-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};