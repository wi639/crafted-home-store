import React from 'react';
import { Globe, Mail, Phone, Info } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
              MODERN<span className="font-light">HOME</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              High-end furniture designed for the modern lifestyle. Quality materials and craftsmanship in every piece.
            </p>
            <div className="flex gap-4">
              <Globe size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Mail size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Phone size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Info size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Shop</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">All Collections</li>
              <li className="hover:text-white cursor-pointer">Living Room</li>
              <li className="hover:text-white cursor-pointer">Dining Room</li>
              <li className="hover:text-white cursor-pointer">Bedroom</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Shipping Policy</li>
              <li className="hover:text-white cursor-pointer">Returns & Refunds</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex gap-2">
              <input 
                placeholder="Your email" 
                className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-white"
              />
              <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold">Join</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          © 2024 MODERN HOME Furniture. All rights reserved. Built with passion for design.
        </div>
      </div>
    </footer>
  );
};