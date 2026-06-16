import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ScrollToTop } from './components/ScrollToTop';
import { companyConfig } from './config/companyConfig';
import { Helmet } from 'react-helmet-async';

const LandingPage = React.lazy(() => import('./pages/LandingPage').then(m => ({ default: m.LandingPage })));
const AboutPage = React.lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const IndustriesPage = React.lazy(() => import('./pages/IndustriesPage').then(m => ({ default: m.IndustriesPage })));
const ProcessPage = React.lazy(() => import('./pages/ProcessPage').then(m => ({ default: m.ProcessPage })));
const ContactPage = React.lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const BookGapAnalysisPage = React.lazy(() => import('./pages/BookGapAnalysisPage').then(m => ({ default: m.BookGapAnalysisPage })));
const SuccessPage = React.lazy(() => import('./pages/SuccessPage').then(m => ({ default: m.SuccessPage })));

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Helmet>
        <title>{companyConfig.seo.title}</title>
        <meta name="description" content={companyConfig.seo.description} />
        <meta name="keywords" content={companyConfig.seo.keywords} />
        <meta property="og:title" content={companyConfig.seo.title} />
        <meta property="og:description" content={companyConfig.seo.description} />
        <meta property="og:type" content="website" />
      </Helmet>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.3 }}
          className="min-h-screen flex flex-col"
        >
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes location={location}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/book-gap-analysis" element={<BookGapAnalysisPage />} />
              <Route path="/success" element={<SuccessPage />} />
            </Routes>
            </Suspense>
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-secondary-700">
      <AnimatedRoutes />
    </div>
  );
}

export default App;