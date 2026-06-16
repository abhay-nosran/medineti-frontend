import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { companyConfig } from '../config/companyConfig';
import { fadeInUp, staggerContainer } from '../constants/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ServicesOverview: React.FC = () => {
  const { ref, controls, variants } = useScrollAnimation();

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
              Our Services
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
            >
              Comprehensive consulting services to help healthcare organizations achieve and maintain excellence
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {companyConfig.services.categories.map((category) => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-secondary-200"
              >
                {/* <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-primary-600 font-bold text-xl">
                    {category.name.charAt(0)}
                  </span>
                </div> */}
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {category.name}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {category.description}
                </p>
                <Link
                  to={`/services#${category.id}`}
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};