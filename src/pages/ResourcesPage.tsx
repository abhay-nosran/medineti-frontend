import React, { useState } from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { companyConfig } from '../config/companyConfig';
import { fadeInUp, staggerContainer } from '../constants/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

export const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { ref, controls, variants } = useScrollAnimation(0.2);

  const filteredResources = companyConfig.resourceCategories.filter(
    (category) =>
      selectedCategory === 'All' ||
      category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  return (
    <PageWrapper title="Resources & Blog">
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
            Resources & Blog
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-secondary-600 max-w-2xl mx-auto"
          >
            Stay informed with the latest insights, updates, and best practices in healthcare accreditation, compliance, and quality improvement
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          key="search-filter"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="All">All Categories</option>
            {companyConfig.resourceCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          key="resources"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Mock resource cards - in a real app, these would come from a CMS or API */}
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-secondary-200"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full">
                  {companyConfig.resourceCategories[idx % companyConfig.resourceCategories.length]}
                </span>
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-3">
                Understanding NABH Standards for {['Hospitals', 'Clinics', 'Diagnostic Centers', 'Nursing Homes'][idx % 4]}
              </h3>
              <p className="text-secondary-600 mb-4">
                Learn about the latest NABH standards and how they apply to your healthcare facility. This comprehensive guide covers essential requirements and implementation strategies.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary-500">
                  June {15 + idx}, 2026
                </span>
                <Link
                  to="/resources"
                  className="text-primary-600 font-medium hover:text-primary-700"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          key="cta"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center py-8 bg-primary-50 rounded-xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-secondary-900 mb-4"
          >
            Want Regular Updates on Healthcare Quality Standards?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-secondary-600 mb-6"
          >
            Subscribe to our newsletter for monthly insights, regulatory updates, and best practices delivered straight to your inbox.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 sm:w-96"
            />
            <button
              className="px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors sm:w-32"
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
};