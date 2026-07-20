export interface Service {
  id: string;
  title: string;
  category: 'motos' | 'patinetes' | 'triciclos' | 'hoverboards' | 'bicicletas' | 'scooters' | 'vendas';
  description: string;
  longDescription: string;
  iconName: string;
  priceEstimate?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  vehicle: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
