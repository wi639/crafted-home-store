import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div 
        className="aspect-square overflow-hidden cursor-pointer bg-gray-50"
        onClick={() => onViewDetails(product)}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer" onClick={() => onViewDetails(product)}>
              {product.name}
            </h3>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            {product.rating}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">${product.price.toLocaleString()}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="p-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};