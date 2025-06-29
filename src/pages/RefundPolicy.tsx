
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RefundPolicy = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <Header />
      <div className="px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Refund Policy</h1>
        
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
            Please note: We do not offer refunds on digital products.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Once a purchase is made, it is considered final. This ensures the integrity and intellectual property of our content is maintained.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Delivery may take time depending on slot availability. Access is sent via email once a slot is confirmed.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
