
import React from 'react';
import { motion } from 'framer-motion';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-md mx-auto">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-green-200">
            <div className="text-4xl mb-4">🛡️</div>
            <h2 className="text-2xl font-bold text-black mb-4">
              30-Day Money-Back Guarantee
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              We're so confident in LaunchPad Pro Pack that we offer a full 30-day money-back guarantee. 
              If you're not completely satisfied with your results, get a full refund - no questions asked.
            </p>
            <div className="bg-green-100 rounded-lg p-4 border border-green-300">
              <div className="text-lg font-bold text-green-800 mb-1">
                100% Risk-Free Investment
              </div>
              <div className="text-sm text-green-700">
                Your success is guaranteed or your money back
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
