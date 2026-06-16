import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyConfig } from '../config/companyConfig';

interface PageWrapperProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  title,
  description,
  children,
}) => {
  const pageTitle = title
    ? `${title} | ${companyConfig.companyName}`
    : companyConfig.seo.title;
  const pageDescription = description || companyConfig.seo.description;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </div>
      </div>
    </>
  );
};