
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <Header />
      <div className="px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Privacy Policy</h1>
        
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            We respect your privacy.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Any personal data collected (such as email address) is used solely to deliver your digital product and provide customer support. We do not share, sell, or misuse your information.
          </p>
          
          <p className="text-gray-700 leading-relaxed font-medium">
            Your trust is important to us.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
