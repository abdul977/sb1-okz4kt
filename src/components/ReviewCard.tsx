import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
  productImage: string;
  date: string;
}

export default function ReviewCard({ name, location, rating, comment, image, productImage, date }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <img
        src={productImage}
        alt="Product Review"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{name}</h3>
                <p className="text-sm text-gray-500">{location}</p>
              </div>
              <span className="text-sm text-gray-500">{date}</span>
            </div>
            <div className="flex items-center mt-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm">{comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}