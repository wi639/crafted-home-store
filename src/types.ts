export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Seating' | 'Tables' | 'Lighting' | 'Storage';
  image: string;
  rating: number;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export type View = 'home' | 'product-detail' | 'checkout';