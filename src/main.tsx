import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { getEnvironmentConfig } from './utils/envConfig';
import './index.css';

// Validate environment variables before rendering
try {
  getEnvironmentConfig();
} catch (error) {
  // Log the error and display a user-friendly message
  const errorMessage = error instanceof Error ? error.message : 'Configuration error';
  document.body.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; background: linear-gradient(to bottom, #fef2f2, #fee2e2); padding: 1rem;">
      <div style="max-width: 500px; width: 100%; background: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
        <h1 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">Configuration Error</h1>
        <p style="color: #666; margin-bottom: 1rem;">The application could not start due to missing configuration.</p>
        <pre style="background: #f5f5f5; padding: 1rem; border-radius: 0.25rem; overflow-x: auto; font-size: 0.875rem; color: #333; white-space: pre-wrap; word-wrap: break-word;">${errorMessage}</pre>
      </div>
    </div>
  `;
  throw error;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);