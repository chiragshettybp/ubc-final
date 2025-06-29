
import React from 'react';
import { motion } from 'framer-motion';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 bg-green-50">
      <div className="max-w-md mx-auto">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-300">
            <div className="text-6xl mb-4">🛡️</div>
            
            <h2 className="text-2xl font-bold text-black mb-4">
              100% Money-Back Guarantee
            </h2>
            
            <div className="bg-green-100 rounded-lg p-4 mb-6">
              <div className="text-3xl font-bold text-green-600 mb-2">30 DAYS</div>
              <div className="text-sm text-gray-700">
                Risk-Free Trial Period
              </div>
            </div>
            
            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
              We're so confident that the LaunchPad Pro Pack will help you start making money online, 
              we offer a complete 30-day money-back guarantee. If you're not completely satisfied 
              with your results, simply contact us and we'll refund every penny - no questions asked.
            </p>
            
            <div className="space-y-3 text-left">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                Full 30-day access to all materials
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                No questions asked refund policy
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                Keep all bonuses even if you refund
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                24/7 customer support
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-100 rounded-lg border border-yellow-300">
              <div className="text-sm font-bold text-black mb-1">
                "This is the best investment I've made for my online business!"
              </div>
              <div className="text-xs text-gray-600">
                - Sarah M., Verified Customer
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
