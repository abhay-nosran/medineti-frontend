import React, { useState, useEffect } from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { companyConfig } from '../config/companyConfig';
import { fadeInUp } from '../constants/animationVariants';
import { Link, useLocation } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const location = useLocation();

  // All closed by default; open a specific one if navigated from footer
  const [openCategory, setOpenCategory] = useState<string | null>(() => {
    const state = location.state as { openCategory?: string } | null;
    return state?.openCategory ?? null;
  });

  // Handle back-navigation or re-visits where state changes
  useEffect(() => {
    const state = location.state as { openCategory?: string } | null;
    if (state?.openCategory) {
      setOpenCategory(state.openCategory);
      // Scroll to the accordion after a brief paint delay
      setTimeout(() => {
        const el = document.getElementById(`category-${state.openCategory}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }, [location.state]);

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <PageWrapper title="Our Services">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className="space-y-16"
      >
        {/* Page Header */}
        <motion.div variants={fadeInUp} className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Our Comprehensive Services
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Tailored solutions to help healthcare organizations achieve excellence in
            accreditation, compliance, and quality improvement
          </p>
        </motion.div>

        {/* Service Categories */}
        <motion.div variants={fadeInUp} className="space-y-4">
          {companyConfig.services.categories.map((category, idx) => {
            const isOpen = openCategory === category.id;
            return (
              <motion.div
                key={category.id}
                id={`category-${category.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="border border-secondary-200 rounded-lg overflow-hidden"
              >
                {/* Accordion header */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={isOpen}
                  className="w-full bg-primary-50 px-6 py-4 flex items-center justify-between hover:bg-primary-100 transition-colors"
                >
                  <h3 className="text-xl font-bold text-secondary-900 text-left">
                    {category.name}
                  </h3>
                  <motion.svg
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-5 h-5 text-primary-600 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </button>

                {/* Accordion body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' as const }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 space-y-4 border-t border-secondary-200">
                        {companyConfig.services.items
                          .filter((service) => service.category === category.id)
                          .map((service) => (
                            <div
                              key={service.id}
                              className="p-4 bg-white rounded-lg border border-secondary-200"
                            >
                              <h4 className="text-lg font-bold text-secondary-900 mb-2">
                                {service.title}
                              </h4>
                              <p className="text-secondary-600 mb-3">{service.description}</p>

                              <div className="space-y-1">
                                <h5 className="text-sm font-medium text-secondary-800">
                                  Key Benefits:
                                </h5>
                                <ul className="list-disc list-inside text-secondary-600 space-y-1">
                                  {service.benefits.map((benefit, i) => (
                                    <li key={i}>{benefit}</li>
                                  ))}
                                </ul>
                              </div>

                              <div className="space-y-1 mt-3">
                                <h5 className="text-sm font-medium text-secondary-800">
                                  Our Process:
                                </h5>
                                <ol className="list-decimal list-inside text-secondary-600 space-y-1">
                                  {service.process.map((step, i) => (
                                    <li key={i}>{step}</li>
                                  ))}
                                </ol>
                              </div>

                              <Link
                                to="/contact"
                                className="mt-4 inline-block text-primary-600 font-medium hover:text-primary-700"
                              >
                                Learn More →
                              </Link>
                            </div>
                          ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          className="text-center py-8 bg-primary-50 rounded-xl"
        >
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">
            Ready to Transform Your Healthcare Organization?
          </h2>
          <p className="text-lg text-secondary-600 mb-6">
            Contact us today to learn how our expert consulting services can help you achieve
            your accreditation and compliance goals.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Get Started Today
          </Link>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
};
