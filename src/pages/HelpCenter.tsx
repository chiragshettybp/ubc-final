
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HelpCenter = () => {
  return (
    <div className="max-w-md mx-auto bg-black min-h-screen">
      <Header />
      <div className="flex flex-col items-center pt-10 pb-8 px-4">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-white mb-4">Help Center & Support</h1>
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <p className="text-sm text-center text-white">
              Need assistance? Our support team is here for you. Visit the student dashboard for personalized help or contact us at <a href="mailto:support@yourbrand.com" className="text-gray-400 hover:underline">support@yourbrand.com</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;
