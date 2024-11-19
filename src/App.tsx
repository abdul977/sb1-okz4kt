import React from 'react';
import { Battery, Wifi, Activity, Watch, MessageCircle, Phone, Heart, Bluetooth, Timer, Smartphone, MonitorSmartphone } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductMedia from './components/ProductMedia';
import FeatureCard from './components/FeatureCard';
import ReviewCard from './components/ReviewCard';
import OrderForm from './components/OrderForm';

function App() {
  const originalPrice = 25500;
  const discountPercentage = 10;
  const discountedPrice = originalPrice * (1 - discountPercentage / 100);
  const deliveryFee = 3500;

  const features = [
    { icon: MessageCircle, title: 'Social Integration', description: 'WhatsApp, Facebook & SMS' },
    { icon: Phone, title: 'Call Features', description: 'Make & receive calls' },
    { icon: Heart, title: 'Health Monitoring', description: 'BP, SpO2 & fitness tracking' },
    { icon: Battery, title: 'Long Battery Life', description: 'Extended usage time' },
    { icon: Bluetooth, title: 'Wireless Connection', description: 'Bluetooth enabled' },
    { icon: Timer, title: 'Smart Reminders', description: 'Sedentary alerts' },
    { icon: Watch, title: '49mm Premium Strap', description: 'Dual straps included' },
    { icon: MonitorSmartphone, title: 'Smart Features', description: 'Raise to wake & custom faces' }
  ];

  const reviews = [
    {
      name: 'Oluwaseun Adebayo',
      location: 'Lagos, Nigeria',
      rating: 5,
      comment: 'This smartwatch is amazing! The health features are accurate and the battery life is exceptional. The dual straps are a great bonus.',
      image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80',
      productImage: 'https://images.unsplash.com/photo-1617043983671-adaadcaa2460?auto=format&fit=crop&q=80',
      date: '2 weeks ago'
    },
    {
      name: 'Chidinma Okonkwo',
      location: 'Abuja, Nigeria',
      rating: 5,
      comment: 'The call quality is crystal clear and WhatsApp integration works perfectly. Worth every naira!',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80',
      productImage: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80',
      date: '1 month ago'
    },
    {
      name: 'Babajide Ogunleye',
      location: 'Port Harcourt, Nigeria',
      rating: 4,
      comment: 'Great fitness tracking features and comfortable to wear. The blue strap looks very premium.',
      image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80',
      productImage: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&q=80',
      date: '3 weeks ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProductMedia />

          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                  Limited Time Offer - 10% OFF
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                  2 Days Left
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">SmartWatch Series 9 Ultra</h1>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-indigo-600">₦{discountedPrice.toLocaleString()}</span>
                <span className="text-lg text-gray-500 line-through">₦{originalPrice.toLocaleString()}</span>
              </div>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  Experience the ultimate smartwatch with comprehensive health monitoring, seamless connectivity, and premium design.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-indigo-600 mr-2">•</span>
                    Includes 2 premium straps (Blue & Black)
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-600 mr-2">•</span>
                    Charging adapter included
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-600 mr-2">•</span>
                    Delivery fee: ₦{deliveryFee.toLocaleString()}
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Place Your Order</h2>
            <OrderForm price={discountedPrice} deliveryFee={deliveryFee} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;