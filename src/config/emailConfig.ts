// EmailJS Configuration
// Set these values in your .env file (never commit real keys to git)
//
// SETUP STEPS:
// 1. Go to https://www.emailjs.com and sign in
// 2. Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID
// 3. Create TWO email templates (see comments below) → copy the Template IDs
// 4. Go to Account > API Keys → copy your Public Key
// 5. Create a .env file in the project root and paste the values below

export const emailConfig = {
  publicKey:    import.meta.env.VITE_EMAILJS_PUBLIC_KEY    as string,
  serviceId:    import.meta.env.VITE_EMAILJS_SERVICE_ID    as string,

  // Template sent TO MediNiti — receives all form data
  adminTemplateId: import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID as string,

  // Template sent TO the user — confirmation / thank-you email
  userTemplateId:  import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID  as string,
} as const;

// Required template variables for the ADMIN template:
// Contact form:
//   {{form_type}}, {{from_name}}, {{from_email}}, {{phone}},
//   {{organization}}, {{designation}}, {{message}}, {{to_email}}
//
// Gap Analysis form:
//   {{form_type}}, {{from_name}}, {{from_email}}, {{phone}},
//   {{hospital_name}}, {{hospital_type}}, {{number_of_beds}},
//   {{city}}, {{state}}, {{accreditation_status}},
//   {{preferred_date}}, {{additional_notes}}, {{to_email}}
//
// Required template variables for the USER template:
//   {{to_name}}, {{to_email}}, {{company_name}}, {{company_email}}, {{company_phone}}
