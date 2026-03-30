import React from 'react';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onCartClick: () => void;
  onHomeClick: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onCartClick, onHomeClick, cartCount }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu size={20} />
            </button>
            <div 
              onClick={onHomeClick}
              className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent cursor-pointer"
            >
              MODERN<span className="font-light">HOME</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
            <button onClick={onHomeClick} className="hover:text-black transition-colors">Collection</button>
            <button className="hover:text-black transition-colors">Modernism</button>
            <button className="hover:text-black transition-colors">Sustainability</button>
            <button className="hover:text-black transition-colors">About</button>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
              <User size={20} />
            </button>
            <button 
              onClick={onCartClick}
              className="p-2 hover:bg-gray-100 rounded-full text-gray-600 relative"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-0 right-0 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};