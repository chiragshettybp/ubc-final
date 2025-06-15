
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => (
  <div className="max-w-md mx-auto bg-black min-h-screen text-white">
    <Header />
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-300 text-center">
        We respect your privacy. Read how your data is collected, used, and secured on this website.
      </p>
    </div>
    <Footer />
  </div>
);

export default PrivacyPolicy;
