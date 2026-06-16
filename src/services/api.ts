import { companyConfig } from '../config/companyConfig';

// ─── Base URL ─────────────────────────────────────────────────────────────────

const API_BASE_URL =
  (import.meta.env.VITE_API_URL as string | undefined) ?? 'http://localhost:5000';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  organization: string;
  designation: string;
  email: string;
  phone: string;
  message: string;
}

export interface GapAnalysisFormData {
  name: string;
  hospitalName: string;
  hospitalType: string;
  numberOfBeds: number;
  city: string;
  state: string;
  email: string;
  phone: string;
  accreditationStatus: string;
  preferredConsultationDate: string;
  additionalNotes: string;
}

export interface ApiResult {
  success: boolean;
  message: string;
}

// ─── HTTP helper ──────────────────────────────────────────────────────────────

async function postJSON<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    credentials: 'include',
  });

  // Always parse as JSON — the backend always returns a JSON body
  const data = (await res.json()) as T;
  return data;
}

// ─── API Service ──────────────────────────────────────────────────────────────

class ApiService {
  /**
   * Submit the Contact form.
   * Calls POST /api/contact on the Express backend which:
   *   1. Saves the submission to PostgreSQL
   *   2. Sends a confirmation email to the user
   *   3. Sends an admin notification to the company inbox
   */
  async submitContactForm(data: ContactFormData): Promise<ApiResult> {
    try {
      return await postJSON<ApiResult>('/api/contact', data);
    } catch (error) {
      console.error('Contact form submission error:', error);
      return {
        success: false,
        message: 'Failed to send message. Please check your connection and try again.',
      };
    }
  }

  /**
   * Submit the Gap Analysis booking form.
   * Calls POST /api/gap-analysis on the Express backend which:
   *   1. Saves the booking to PostgreSQL
   *   2. Sends a confirmation email to the user
   *   3. Sends an admin notification to the company inbox
   */
  async submitGapAnalysisForm(data: GapAnalysisFormData): Promise<ApiResult> {
    try {
      return await postJSON<ApiResult>('/api/gap-analysis', data);
    } catch (error) {
      console.error('Gap analysis form submission error:', error);
      return {
        success: false,
        message: 'Failed to submit booking. Please check your connection and try again.',
      };
    }
  }

  // ─── Static data helpers (unchanged) ───────────────────────────────────────

  async getServices() {
    return companyConfig.services.items;
  }

  async getIndustries() {
    return companyConfig.industries;
  }

  async getProcessSteps() {
    return companyConfig.processSteps;
  }

  async getTestimonials() {
    return companyConfig.testimonials;
  }

  async getStatistics() {
    return companyConfig.statistics;
  }
}

export const apiService = new ApiService();
export default ApiService;
