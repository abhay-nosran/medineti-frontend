import React, { useState } from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { companyConfig } from '../config/companyConfig';
import { fadeInUp } from '../constants/animationVariants';

// ─── Per-step content ────────────────────────────────────────────────────────

const keyActivities: Record<number, string[]> = {
  1: [
    'Current state assessment against NABH standards',
    'Gap identification and prioritization',
    'Stakeholder interviews and documentation review',
  ],
  2: [
    'Strategic planning with timeline development',
    'Resource allocation and budget planning',
    'Risk assessment and mitigation planning',
  ],
  3: [
    'Policy and procedure development',
    'Documentation customization and templating',
    'Staff awareness and training planning',
  ],
  4: [
    'Training needs assessment',
    'Curriculum development and delivery',
    'Competency evaluation and certification',
  ],
  5: [
    'Implementation planning and coordination',
    'Change management and staff engagement',
    'Monitoring and feedback mechanisms',
  ],
  6: [
    'Mock assessment conduction',
    'Identification of remaining gaps',
    'Corrective action planning',
  ],
  7: [
    'On-site support during assessment',
    'Real-time guidance to staff',
    'Issue resolution and documentation support',
  ],
  8: [
    'Performance monitoring and reporting',
    'Continuous improvement planning',
    'Re-accreditation preparation',
  ],
};

const expectedOutcomes: Record<number, string[]> = {
  1: [
    'Comprehensive gap analysis report',
    'Prioritized action plan',
    'Baseline performance metrics',
  ],
  2: [
    'Strategic roadmap with timelines',
    'Resource allocation plan',
    'Risk mitigation strategy',
  ],
  3: [
    'Complete policy and procedure manual',
    'Staff training curriculum',
    'Documentation compliance matrix',
  ],
  4: [
    'Trained and competent staff',
    'Training completion records',
    'Competency assessment results',
  ],
  5: [
    'Implemented quality management system',
    'Standard operating procedures in practice',
    'Monitoring and reporting mechanisms',
  ],
  6: [
    'Mock assessment report',
    'Action plan for final preparation',
    'Staff readiness assessment',
  ],
  7: [
    'Successful accreditation assessment',
    'Positive assessor feedback',
    'Documentation of best practices',
  ],
  8: [
    'Sustained compliance and quality improvement',
    'Ongoing monitoring and reporting',
    'Preparation for next accreditation cycle',
  ],
};

// ─── Component ───────────────────────────────────────────────────────────────

export const ProcessPage: React.FC = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggle = (step: number) => {
    setOpenStep(openStep === step ? null : step);
  };

  return (
    <PageWrapper title="Our Process">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className="space-y-16"
      >
        {/* Page Header */}
        <motion.div variants={fadeInUp} className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Our Proven 8-Step Process
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            A systematic approach to healthcare accreditation and compliance excellence
          </p>
        </motion.div>

        {/* Process Overview */}
        <motion.div variants={fadeInUp} className="text-center">
          <p className="text-xl text-secondary-600">
            From initial assessment to continuous improvement, we guide healthcare
            organizations through every step of their quality journey with proven
            methodologies and expert support.
          </p>
        </motion.div>

        {/* Accordion Steps */}
        <motion.div variants={fadeInUp} className="space-y-4">
          {companyConfig.processSteps.map((step, idx) => {
            const isOpen = openStep === step.step;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04, duration: 0.35 }}
                className="border border-secondary-200 rounded-lg overflow-hidden"
              >
                {/* Header / trigger */}
                <button
                  type="button"
                  onClick={() => toggle(step.step)}
                  aria-expanded={isOpen}
                  className="w-full bg-primary-50 px-6 py-4 flex items-center justify-between hover:bg-primary-100 transition-colors text-left"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900">{step.title}</h3>
                  </div>
                  <motion.svg
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-5 h-5 text-primary-600 shrink-0 ml-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </button>

                {/* Animated body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 border-t border-secondary-200 space-y-5">
                        <p className="text-secondary-600">{step.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Key Activities */}
                          <div>
                            <h5 className="text-sm font-semibold text-secondary-800 uppercase tracking-wide mb-2">
                              Key Activities
                            </h5>
                            <ul className="list-disc list-inside text-secondary-600 space-y-1">
                              {(keyActivities[step.step] ?? []).map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Expected Outcomes */}
                          <div>
                            <h5 className="text-sm font-semibold text-secondary-800 uppercase tracking-wide mb-2">
                              Expected Outcomes
                            </h5>
                            <ul className="list-disc list-inside text-secondary-600 space-y-1">
                              {(expectedOutcomes[step.step] ?? []).map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
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
            Ready to Begin Your Accreditation Journey?
          </h2>
          <p className="text-lg text-secondary-600 mb-6">
            Our expert team is ready to guide you through each step of the accreditation
            process with proven methodologies and personalized support.
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
