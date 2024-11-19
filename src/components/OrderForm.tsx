import React, { useState } from 'react';
import { Phone, Mail, User, MapPin } from 'lucide-react';

interface OrderFormProps {
  price: number;
  deliveryFee: number;
}

export default function OrderForm({ price, deliveryFee }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    color: 'blue',
    quantity: 1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const total = (price + deliveryFee) * formData.quantity;
    
    const message = `New Order Details:%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Email: ${formData.email}%0A
Address: ${formData.address}%0A
Strap Color: ${formData.color}%0A
Quantity: ${formData.quantity}%0A
Total Amount: ₦${total.toLocaleString()}%0A
Product: SmartWatch Series 9 Ultra`;

    window.open(`https://wa.me/2348144493361?text=${message}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <div className="relative">
            <User className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              required
              placeholder="Your full name"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <div className="relative">
            <Phone className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              required
              placeholder="Your phone number"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Strap Color</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            value={formData.color}
            onChange={(e) => setFormData({ ...formData, color: e.target.value })}
          >
            <option value="blue">Blue</option>
            <option value="black">Black</option>
          </select>
        </div>

        <div className="relative md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address</label>
          <div className="relative">
            <MapPin className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
            <textarea
              required
              placeholder="Your delivery address"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              rows={3}
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
          <input
            type="number"
            min="1"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: Math.max(1, parseInt(e.target.value)) })}
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Total Amount</label>
          <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-lg font-semibold text-gray-900">
            ₦{((price + deliveryFee) * formData.quantity).toLocaleString()}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-8 bg-indigo-600 text-white py-4 px-8 rounded-xl font-medium hover:bg-indigo-700 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        Place Order via WhatsApp
      </button>
    </form>
  );
}