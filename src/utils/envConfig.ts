/**
 * Environment Configuration Validator
 * Ensures all required environment variables are present at build and runtime
 */

interface EnvironmentConfig {
  apiUrl: string;
}

/**
 * Validate required environment variables
 * Throws error if any required variable is missing
 */
export function validateEnvironment(): EnvironmentConfig {
  const errors: string[] = [];

  const apiUrl = import.meta.env.VITE_API_URL;
  if (!apiUrl) {
    errors.push('VITE_API_URL is required');
  }

  if (errors.length > 0) {
    const errorMsg = errors.join('\n- ');
    throw new Error(
      `Missing required environment variables:\n- ${errorMsg}\n\nPlease check your .env file or environment configuration.`
    );
  }

  return {
    apiUrl,
  };
}

/**
 * Get environment config with fallback to validated values
 */
export function getEnvironmentConfig(): EnvironmentConfig {
  try {
    return validateEnvironment();
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Environment validation failed:', error);
    }
    throw error;
  }
}
