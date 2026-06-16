import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { companyConfig } from '../config/companyConfig';
import { fadeInUp, staggerContainer } from '../constants/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const FinalCTASection: React.FC = () => {
  const { ref, controls, variants } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary-50 to-white">
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
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6"
            >
              Ready to Begin Your Accreditation Journey?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto"
            >
              Take the first step toward healthcare excellence with a complimentary gap analysis
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/book-gap-analysis"
                className="flex-1 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
              >
                {companyConfig.hero.primaryCTA}
              </Link>
              <Link
                to="/contact"
                className="flex-1 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
              >
                {companyConfig.hero.secondaryCTA}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};