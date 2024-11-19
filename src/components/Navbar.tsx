import React from 'react';
import { Watch, Heart, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Watch className="h-8 w-8 text-indigo-600" />
          <span className="font-bold text-xl text-gray-900">SmartChrono</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Heart className="h-6 w-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
}