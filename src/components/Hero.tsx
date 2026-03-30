import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white text-xs font-semibold tracking-wider text-gray-500 mb-6 shadow-sm uppercase">
            New Collection 2024
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
            Design for <br /> Better Living.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Explore our curated selection of modern furniture that combines functionality with high-end craftsmanship.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
              Shop Now <ArrowRight size={18} />
            </button>
            <button className="bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Our Story
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-4 bg-white/40 blur-3xl rounded-full" />
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/759ddfe7-69f7-40d6-997d-4f797112d952/modern-lounge-chair-cc0a382b-1774848903036.webp" 
            alt="Hero furniture" 
            className="relative z-10 w-full h-auto object-cover rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};