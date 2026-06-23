export interface GalleryItem {
  id: number;
  title: string;
  category: 'pagar' | 'kanopi' | 'teralis' | 'railing' | 'pintu';
  imageUrl: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  avatarUrl: string;
  date: string;
}

export interface PricePackage {
  name: string;
  badge?: string;
  priceStart: string;
  unit: string;
  description: string;
  materials: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface OrderData {
  name: string;
  phone: string;
  address: string;
  serviceType: string;
  additionalNotes: string;
}
