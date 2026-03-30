import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />
        
        <motion.div
          layoutId={`product-${product.id}`}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white shadow-md"
          >
            <X size={20} />
          </button>

          <div className="md:w-1/2 h-[300px] md:h-auto overflow-hidden bg-gray-50">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
            <div className="mb-6">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{product.category}</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h2>
              <div className="flex items-center gap-2 mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-500">{product.rating} Rating</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-8">
              <h4 className="font-semibold mb-4">Key Features</h4>
              <ul className="grid grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={14} className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex items-center justify-between gap-6 border-t pt-8">
              <div>
                <p className="text-sm text-gray-400 mb-1">Total Price</p>
                <span className="text-3xl font-bold text-gray-900">${product.price.toLocaleString()}</span>
              </div>
              <button 
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="flex-1 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag size={20} />
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};