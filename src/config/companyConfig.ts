// Company Configuration - Single source of truth for all branding
// IMPORTANT: Company name and all branding must ONLY be referenced from this file

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  benefits: string[];
  process: string[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Team {
  name: string;
  designation: string;
}

export const companyConfig = {
  // Core Company Information
  companyName: "MediNeti Solution",
  shortName: "MediNeti",
  tagline: "Your Vision our Strategy",
  description: "Premier healthcare consulting firm specializing in NABH accreditation, compliance management, and quality improvement programs for healthcare organizations across India.",

  // Contact Information
  contact: {
    email: "info@medineti.com",
    phone: "+91 9667224884",
    address: "Today's King Park",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    zipCode: "201310",
  } as ContactInfo,

  // Social Media Links
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/medineti",
      icon: "linkedin",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/medineti_health",
      icon: "twitter",
    },
    {
      platform: "Facebook",
      url: "https://facebook.com/medineti.healthcare",
      icon: "facebook",
    },
  ] as SocialLink[],

  // SEO Configuration
  seo: {
    title: "MediNeti Healthcare Consulting | NABH Accreditation & Compliance Experts",
    description: "Leading healthcare quality and compliance consulting firm. Specializing in NABH accreditation, hospital compliance, quality improvement programs, and staff training.",
    keywords: "NABH accreditation, healthcare compliance, hospital quality, medical consulting, accreditation consulting, healthcare training",
  },

  // Hero Section
  hero: {
    headline: "Helping Healthcare Organizations Achieve Excellence Through Accreditation, Compliance, and Quality Transformation",
    subheadline: "From gap analysis to successful accreditation, we guide healthcare providers through every step of their quality journey with expert consulting and proven methodologies.",
    primaryCTA: "Book Gap Analysis",
    secondaryCTA: "Contact Us",
  },

  // Why Choose Us
  whyChooseUs: [
    {
      title: "Proven Track Record",
      description: "100+ successful accreditation projects across India",
      icon: "trophy",
    },
    {
      title: "Expert Team",
      description: "Certified healthcare quality professionals with decades of experience",
      icon: "users",
    },
    {
      title: "End-to-End Support",
      description: "From assessment to accreditation, we're with you every step",
      icon: "shield",
    },
    {
      title: "Compliance Focus",
      description: "Ensuring all regulatory requirements are met efficiently",
      icon: "check-circle",
    },
  ],

  // Core Values
  coreValues: [
    {
      title: "Patient Safety First",
      description: "Every recommendation prioritizes patient well-being and safety",
      icon: "heart",
    },
    {
      title: "Excellence in Quality",
      description: "Upholding the highest standards in healthcare quality",
      icon: "star",
    },
    {
      title: "Integrity & Trust",
      description: "Building long-term relationships through transparent practices",
      icon: "shield-check",
    },
    {
      title: "Innovation Driven",
      description: "Leveraging technology for modern healthcare solutions",
      icon: "lightbulb",
    },
  ],

  // Services
  services: {
    categories: [
      {
        id: "accreditation",
        name: "Accreditation Consulting",
        icon: "certificate",
        description: "Comprehensive support for NABH accreditation journey",
      },
      {
        id: "compliance",
        name: "Compliance Services",
        icon: "clipboard-check",
        description: "Regulatory compliance management for healthcare facilities",
      },
      {
        id: "quality",
        name: "Quality Management",
        icon: "chart-line",
        description: "Continuous quality improvement and monitoring solutions",
      },
      {
        id: "training",
        name: "Training Programs",
        icon: "graduation-cap",
        description: "Professional development for healthcare staff",
      },
      {
        id: "digital",
        name: "Digital Solutions",
        icon: "tablet-alt",
        description: "Technology-enabled compliance and quality tools",
      },
    ],
    items: [
      // Accreditation Consulting
      {
        id: "nabh-entry",
        title: "NABH Entry Level",
        category: "accreditation",
        description: "Streamlined pathway to achieve NABH Entry Level accreditation for small healthcare facilities",
        benefits: [
          "Faster accreditation process",
          "Cost-effective solution",
          "Focused implementation",
          "Expert guidance throughout",
        ],
        process: [
          "Initial gap assessment",
          "Documentation development",
          "Staff training program",
          "Mock assessment",
          "Final accreditation support",
        ],
      },
      {
        id: "full-nabh",
        title: "Full NABH Accreditation",
        category: "accreditation",
        description: "Complete accreditation consulting for hospitals seeking full NABH certification",
        benefits: [
          "Comprehensive assessment",
          "Full documentation support",
          "Multi-department coordination",
          "Higher accreditation standards",
        ],
        process: [
          "Detailed gap analysis",
          "Strategic planning",
          "Policy development",
          "Implementation support",
          "Assessment preparation",
        ],
      },
      {
        id: "assessment-prep",
        title: "Assessment Preparation",
        category: "accreditation",
        description: "Targeted preparation services for upcoming accreditation assessments",
        benefits: [
          "Focused preparation",
          "Last-minute corrections",
          "Mock assessments",
          "Confidence building",
        ],
        process: [
          "Pre-assessment audit",
          "Gap identification",
          "Corrective action plan",
          "Final readiness check",
        ],
      },
      {
        id: "documentation-support",
        title: "Documentation Support",
        category: "accreditation",
        description: "End-to-end documentation development for accreditation compliance",
        benefits: [
          "Professional templates",
          "Customizable documents",
          "Regulatory alignment",
          "Easy implementation",
        ],
        process: [
          "Current state review",
          "Template provision",
          "Customization support",
          "Final review",
        ],
      },
      // Compliance Services
      {
        id: "regulatory-compliance",
        title: "Regulatory Compliance",
        category: "compliance",
        description: "Comprehensive regulatory compliance management for healthcare facilities",
        benefits: [
          "Stay compliant with regulations",
          "Avoid penalties and fines",
          "Regular compliance audits",
          "Updated compliance frameworks",
        ],
        process: [
          "Regulation mapping",
          "Compliance audit",
          "Action planning",
          "Implementation",
        ],
      },
      {
        id: "biomedical-waste",
        title: "Biomedical Waste Compliance",
        category: "compliance",
        description: "Safe disposal management and regulatory compliance for biomedical waste",
        benefits: [
          "Legal compliance",
          "Safe disposal protocols",
          "Staff training",
          "Documentation support",
        ],
        process: [
          "Waste audit",
          "Policy development",
          "Training sessions",
          "Compliance monitoring",
        ],
      },
      {
        id: "infection-control",
        title: "Infection Control Compliance",
        category: "compliance",
        description: "Comprehensive infection prevention and control program implementation",
        benefits: [
          "Patient safety focus",
          "Staff protection",
          "Regulatory adherence",
          "Monitoring systems",
        ],
        process: [
          "Current practice review",
          "IPC policy development",
          "Training implementation",
          "Continuous monitoring",
        ],
      },
      {
        id: "fire-safety",
        title: "Fire & Safety Compliance",
        category: "compliance",
        description: "Fire safety and workplace safety compliance for healthcare facilities",
        benefits: [
          "Patient & staff safety",
          "Regulatory compliance",
          "Risk mitigation",
          "Emergency preparedness",
        ],
        process: [
          "Safety audit",
          "Hazard identification",
          "Safety plan development",
          "Implementation & training",
        ],
      },
      // Quality Management
      {
        id: "internal-audits",
        title: "Internal Audits",
        category: "quality",
        description: "Regular internal audits to ensure quality standards are maintained",
        benefits: [
          "Early problem detection",
          "Continuous improvement",
          "Regulatory readiness",
          "Performance insights",
        ],
        process: [
          "Audit scheduling",
          "Department review",
          "Finding documentation",
          "Improvement planning",
        ],
      },
      {
        id: "kpi-monitoring",
        title: "KPI Monitoring",
        category: "quality",
        description: "Key Performance Indicator tracking and reporting systems",
        benefits: [
          "Data-driven decisions",
          "Performance visibility",
          "Trend analysis",
          "Improvement tracking",
        ],
        process: [
          "KPI selection",
          "Monitoring setup",
          "Reporting dashboard",
          "Regular review",
        ],
      },
      {
        id: "risk-management",
        title: "Risk Management",
        category: "quality",
        description: "Comprehensive risk identification and mitigation strategies",
        benefits: [
          "Patient safety",
          "Legal protection",
          "Financial security",
          "Operational continuity",
        ],
        process: [
          "Risk assessment",
          "Mitigation planning",
          "Implementation",
          "Monitoring",
        ],
      },
      {
        id: "quality-improvement",
        title: "Quality Improvement",
        category: "quality",
        description: "Systematic quality improvement initiatives for healthcare facilities",
        benefits: [
          "Better patient outcomes",
          "Improved efficiency",
          "Staff satisfaction",
          "Competitive advantage",
        ],
        process: [
          "Baseline assessment",
          "Improvement planning",
          "Implementation",
          "Evaluation",
        ],
      },
      // Training Programs
      {
        id: "staff-training",
        title: "Staff Training",
        category: "training",
        description: "Comprehensive training programs for healthcare personnel",
        benefits: [
          "Skilled workforce",
          "Compliance knowledge",
          "Better patient care",
          "Career development",
        ],
        process: [
          "Training needs analysis",
          "Program design",
          "Delivery",
          "Assessment",
        ],
      },
      {
        id: "auditor-training",
        title: "Internal Auditor Training",
        category: "training",
        description: "Specialized training for internal audit team members",
        benefits: [
          "Audit expertise",
          "Quality knowledge",
          "Efficient audits",
          "Consistent standards",
        ],
        process: [
          "Curriculum overview",
          "Practical sessions",
          "Case studies",
          "Certification",
        ],
      },
      {
        id: "patient-safety",
        title: "Patient Safety Training",
        category: "training",
        description: "Focused training on patient safety protocols and best practices",
        benefits: [
          "Reduced incidents",
          "Better outcomes",
          "Staff confidence",
          "Compliance",
        ],
        process: [
          "Safety assessment",
          "Training program",
          "Practical exercises",
          "Follow-up support",
        ],
      },
      // Digital Solutions
      {
        id: "compliance-tracking",
        title: "Compliance Tracking",
        category: "digital",
        description: "Digital platform for tracking compliance requirements and deadlines",
        benefits: [
          "Real-time visibility",
          "Automated reminders",
          "Centralized records",
          "Easy reporting",
        ],
        process: [
          "Platform setup",
          "Data migration",
          "User training",
          "Ongoing support",
        ],
      },
      {
        id: "audit-management",
        title: "Audit Management",
        category: "digital",
        description: "Digital audit scheduling, tracking, and reporting system",
        benefits: [
          "Efficient scheduling",
          "Central repository",
          "Automated reports",
          "Trend analysis",
        ],
        process: [
          "System configuration",
          "Workflow setup",
          "User onboarding",
          "Implementation",
        ],
      },
      {
        id: "sop-management",
        title: "SOP Management",
        category: "digital",
        description: "Digital standard operating procedure management and version control",
        benefits: [
          "Easy access",
          "Version control",
          "Approval workflows",
          "Search functionality",
        ],
        process: [
          "SOP digitization",
          "Workflow setup",
          "User training",
          "Go-live",
        ],
      },
      {
        id: "quality-dashboards",
        title: "Quality Dashboards",
        category: "digital",
        description: "Interactive dashboards for quality metrics and KPIs",
        benefits: [
          "Visual insights",
          "Real-time data",
          "Customizable views",
          "Export capabilities",
        ],
        process: [
          "Metrics identification",
          "Dashboard design",
          "Data integration",
          "User training",
        ],
      },
    ] as Service[],
  },

  // Industries Served
  industries: [
    {
      id: "multi-specialty",
      name: "Multi-Specialty Hospitals",
      description: "Comprehensive accreditation and compliance solutions for large hospitals",
      icon: "hospital",
    },
    {
      id: "specialty",
      name: "Specialty Hospitals",
      description: "Specialized consulting for cardiology, orthopedic, and other specialty centers",
      icon: "stethoscope",
    },
    {
      id: "clinics",
      name: "Clinics",
      description: "Streamlined quality and compliance services for outpatient clinics",
      icon: "clinic",
    },
    {
      id: "diagnostic",
      name: "Diagnostic Centers",
      description: "Quality management solutions tailored for diagnostic facilities",
      icon: "microscope",
    },
    {
      id: "ivf",
      name: "IVF Centers",
      description: "Specialized accreditation consulting for fertility treatment centers",
      icon: "baby",
    },
    {
      id: "nursing",
      name: "Nursing Homes",
      description: "Comprehensive support for nursing home accreditation and compliance",
      icon: "home-heart",
    },
    {
      id: "daycare",
      name: "Day Care Centers",
      description: "Quality improvement and accreditation guidance for day care surgery centers",
      icon: "sun",
    },
  ] as Industry[],

  // Process Steps
  processSteps: [
    {
      step: 1,
      title: "Gap Assessment",
      description: "Comprehensive evaluation of current practices against accreditation standards",
      icon: "search",
    },
    {
      step: 2,
      title: "Planning & Roadmap",
      description: "Strategic planning with timeline and resource allocation",
      icon: "map",
    },
    {
      step: 3,
      title: "Documentation Development",
      description: "Creation and customization of required policies and procedures",
      icon: "file-alt",
    },
    {
      step: 4,
      title: "Staff Training",
      description: "Comprehensive training programs for all personnel",
      icon: "chalkboard-teacher",
    },
    {
      step: 5,
      title: "Implementation",
      description: "Guided implementation of all quality and compliance measures",
      icon: "rocket",
    },
    {
      step: 6,
      title: "Mock Assessment",
      description: "Pre-assessment simulation to identify remaining gaps",
      icon: "clipboard-check",
    },
    {
      step: 7,
      title: "Final Assessment Support",
      description: "On-site support during official accreditation assessment",
      icon: "handshake",
    },
    {
      step: 8,
      title: "Continuous Improvement",
      description: "Ongoing support to maintain and improve standards",
      icon: "arrow-up",
    },
  ] as ProcessStep[],

  // Testimonials
  testimonials: [
    {
      name: "Dr. Shivendra singh Kasana",
      designation: "Medical Director, SPES Super Speciality  Hospital,Graeter Noida",
      content: "MediNeti's guidance was instrumental in achieving our NABH accreditation. Their systematic approach and expert knowledge made the process seamless.",
      rating: 5,
    },
    {
      name: "Dr. Rajesh Kumar",
      designation: "CEO, CareWell Clinic",
      content: "The team's dedication to quality improvement transformed our operations. We've seen measurable improvements in patient satisfaction since working with them.",
      rating: 5,
    },
    {
      name: "Dr. Sandeep Dhiaya",
      designation: "Director, Satish Hospital,Neemrana",
      content: "Professional, knowledgeable, and results-oriented. MediNeti helped us achieve accreditation ahead of schedule and under budget.",
      rating: 5,
    },
    {
      name: "Dr. Khusboo  ",
      designation: "Director, Sheela Neuro Multi super speciality  Hospital,Rewari",
      content: "Working with MediNeti was a valuable investment. Their practical recommendations, responsive support, and focus on outcomes helped us meet accreditation standards efficiently, saving both time and resources throughout the process.",
      rating: 5,
    },
    {
      name: "Dr. Sunder Singh  ",
      designation: "Director, RCC Hospital,ROHTAK",
      content: "The professionalism and deep industry knowledge of MediNeti were instrumental to our success. They identified critical gaps early, streamlined our preparation, and enabled us to secure accreditation on time and within budget.",
      rating: 5,
    },
  ],

  // Statistics
  statistics: [
    { value: 100, label: "Hospitals Accredited", suffix: "+" },
    { value: 95, label: "Success Rate", suffix: "%" },
    { value: 10, label: "Years Experience", suffix: "+" },
    // { value: 50, label: "Expert Consultants", suffix: "+" },
  ],

  // FAQ
  faqs: [
    {
      question: "What is NABH accreditation and why is it important?",
      answer: "NABH (National Accreditation Board for Hospitals & Healthcare Providers) accreditation is a recognition of quality and safety standards in healthcare. It demonstrates commitment to patient care excellence and can improve your organization's reputation, quality of care, and marketability.",
    },
    {
      question: "How long does the accreditation process typically take?",
      answer: "The timeline varies based on your organization's current state and size. Typically, Entry Level accreditation takes 3-6 months, while Full NABH accreditation may take 6-12 months. We provide a detailed timeline after the initial gap assessment.",
    },
    {
      question: "What support do you provide during the assessment?",
      answer: "We provide comprehensive on-site support during the final assessment, including coordination with assessors, real-time guidance to your staff, and immediate problem-solving for any issues that arise.",
    },
    {
      question: "Do you provide training for our staff?",
      answer: "Yes, we offer comprehensive training programs tailored to your needs, including general staff training, internal auditor training, and specialized patient safety training.",
    },
  ],

  // Hospital Types for Book Gap Analysis form
  hospitalTypes: [
    "Hospital",
    "Clinic",
    "Diagnostic Centre",
    "Nursing Home",
    "Other",
  ],

  // Accreditation Status options
  accreditationStatus: [
    "Not Started",
    "Planning Stage",
    "In Progress",
    "Previously Accredited",
    "Renewal Due",
  ],

  // States list for forms
  states: [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ],

  // Resources/Blog categories
  resourceCategories: [
    "NABH Accreditation",
    "Compliance",
    "Patient Safety",
    "Hospital Quality",
    "Infection Control",
  ],
} as const;

export type CompanyConfig = typeof companyConfig;