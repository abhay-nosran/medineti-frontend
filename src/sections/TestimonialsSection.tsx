import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { companyConfig } from '../config/companyConfig';
import { fadeInUp, staggerContainer } from '../constants/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const TestimonialsSection: React.FC = () => {
  const { ref, controls, variants } = useScrollAnimation(0.2);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = companyConfig.testimonials;
  const totalTestimonials = testimonials.length;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

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
              What Our Clients Say
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
            >
              Hear from healthcare organizations that have achieved excellence with our guidance
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            {/* Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto border border-secondary-200"
            >
              <div className="text-center">
                <p className="text-xl text-secondary-600 italic mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="flex items-center space-x-3 justify-center">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-secondary-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-secondary-500">
                      {testimonials[currentIndex].designation}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-4 space-x-1">
                  {[...Array(totalTestimonials)].map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        idx === currentIndex
                          ? 'bg-primary-600'
                          : 'bg-secondary-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-primary-50 transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-primary-50 transition-colors z-10"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};