
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Disclaimer = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <Header />
      <div className="px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Disclaimer</h1>
        
        <div className="prose prose-sm max-w-none space-y-4">
          <p className="text-gray-700 leading-relaxed">
            This site is not a part of the Facebook™ or Instagram™ website or Meta™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Results shown are not typical. All information is provided for educational purposes only.
          </p>
          
          <p className="text-gray-700 leading-relaxed font-semibold">
            No guarantees of earnings are made.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            This is a digital product — no refunds will be issued, and delivery may depend on slot availability. For questions, contact alyssaray@coutk.com
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Disclaimer;
