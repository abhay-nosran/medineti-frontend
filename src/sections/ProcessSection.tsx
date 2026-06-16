import React from 'react';
import { motion } from 'framer-motion';
import { companyConfig } from '../config/companyConfig';
import { fadeInUp, staggerContainer } from '../constants/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ProcessSection: React.FC = () => {
  const { ref, controls, variants } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-20 bg-white">
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
              Our Proven Process
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
            >
              A systematic approach to healthcare accreditation and compliance excellence
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-primary-200" />

            {/* Timeline Items */}
            <div className="relative">
              {companyConfig.processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative w-full md:w-[48%] ${
                    index % 2 === 0 ? 'ml-auto md:mr-0' : 'mr-auto md:ml-0'
                  }`}
                >
                  {/* Timeline Point */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2.5 w-5 h-5 bg-primary-600 rounded-full shadow-lg" />

                  {/* Timeline Content */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-secondary-200">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-primary-600 font-bold">{step.step}</span>
                      </div>
                      <h3 className="text-lg font-bold text-secondary-900">{step.title}</h3>
                    </div>
                    <p className="text-secondary-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};