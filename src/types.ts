export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  category: 'Consultation' | 'Design' | 'Management' | 'Education';
  details: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  price: number;
  image: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  designation: string;
  qualifications: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Factories' | 'Hotels' | 'Interior' | 'Installations' | 'Education' | 'Events' | 'Construction';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  rating: number;
  text: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
