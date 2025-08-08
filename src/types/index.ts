// Contact form shape
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Project card shape
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  gif?: string;
  technologies?: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}
