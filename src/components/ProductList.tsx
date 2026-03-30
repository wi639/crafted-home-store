import React, { useState, useMemo } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { AnimatePresence } from 'framer-motion';

interface ProductListProps {
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ onAddToCart, onViewDetails }) => {
  const [category, setCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['All', 'Seating', 'Tables', 'Lighting', 'Storage'];

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    if (category !== 'All') {
      result = result.filter(p => p.category === category);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [category, sortBy]);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Collection</h2>
          <p className="text-gray-500">Discover furniture designed for the modern lifestyle.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-lg border border-gray-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  category === cat 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative flex items-center gap-2 text-sm">
            <SlidersHorizontal size={18} className="text-gray-400" />
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border-none focus:ring-0 font-medium cursor-pointer"
            >
              <option value="featured">Sort by Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};