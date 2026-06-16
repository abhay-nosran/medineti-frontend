import React from 'react';
import { logger } from '../utils/logger';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorCount: number;
}

/**
 * Error Boundary component to catch React errors
 * Displays a user-friendly error page instead of blank screen
 */
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorCount: 0,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error details
    logger.error('React Error Boundary caught an error', error, {
      componentStack: errorInfo.componentStack,
      errorBoundary: true,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorCount: 0,
    });
    // Optionally reload the page
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 px-4">
          <div className="max-w-md w-full">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-100">
                  <svg
                    className="h-8 w-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 mb-6">
                We encountered an unexpected error. Our team has been notified and is working on a fix.
              </p>

              <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-200 text-left">
                <p className="text-sm text-gray-600 font-mono break-words">
                  {this.state.error.message}
                </p>
              </div>

              <button
                onClick={this.handleReset}
                className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 transition duration-200"
              >
                Return to Home
              </button>

              <p className="text-sm text-gray-500 mt-4">
                Error ID: {this.state.error.name || 'UNKNOWN'}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
