
import React from 'react';
import { motion } from 'framer-motion';

const PricingSection: React.FC = () => {
  const handlePurchase = () => {
    window.open('https://rzp.io/rzp/g3w6qRIO', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-black mb-4">
            Choose Your Success Package
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Start your online income journey today
          </p>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border-2 border-yellow-300 shadow-lg mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-4">
            <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-xs font-bold uppercase">
              Most Popular
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-black text-center mb-2">
            LaunchPad Pro Pack
          </h3>
          
          <div className="text-center mb-4">
            <span className="text-gray-500 line-through text-lg">₹997</span>
            <span className="text-3xl font-bold text-black ml-2">₹99</span>
            <div className="text-xs text-gray-600 mt-1">Limited Time Offer</div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm text-black">
              <span className="text-green-500 mr-2">✓</span>
              Complete Digital Product Creation System
            </div>
            <div className="flex items-center text-sm text-black">
              <span className="text-green-500 mr-2">✓</span>
              40 Million+ Premium Digital Products
            </div>
            <div className="flex items-center text-sm text-black">
              <span className="text-green-500 mr-2">✓</span>
              1000+ High-Ticket Courses with Resell Rights
            </div>
            <div className="flex items-center text-sm text-black">
              <span className="text-green-500 mr-2">✓</span>
              200K+ Viral Reels for Content Creation
            </div>
            <div className="flex items-center text-sm text-black">
              <span className="text-green-500 mr-2">✓</span>
              300K+ ChatGPT Prompts Bundle
            </div>
            <div className="flex items-center text-sm text-black">
              <span className="text-green-500 mr-2">✓</span>
              AI Customer Acquisition Strategies
            </div>
            <div className="flex items-center text-sm text-black">
              <span className="text-green-500 mr-2">✓</span>
              Ready-Made Ad Templates (₹3999 Value)
            </div>
          </div>

          <button 
            onClick={handlePurchase}
            className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors relative overflow-hidden"
          >
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shine_3s_infinite]" />
            </span>
            <span className="relative z-10">GET INSTANT ACCESS NOW</span>
          </button>
          
          <div className="text-center mt-3 text-xs text-gray-600">
            🔒 Secure Payment • Instant Download
          </div>
        </motion.div>

        <div className="text-center text-xs text-gray-500">
          30-Day Money Back Guarantee • No Questions Asked
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
