export interface Package {
  name: string;
  idealFor: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  popular?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  email: string;
  credentials?: string[];
  bio?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  business: string;
  location: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  investment: string;
  result: string;
}

export interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  industry: string;
  turnover: string;
  primaryNeed: string;
  currentSituation: string;
  message: string;
  contactMethod: string;
  preferredTime?: string;
}
