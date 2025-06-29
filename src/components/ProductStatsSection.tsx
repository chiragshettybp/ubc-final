import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
const ProductStatsSection: React.FC = () => {
  const statItems = [{
    percent: "96%",
    description: "Launched their online income stream within the first 2 weeks of purchase"
  }, {
    percent: "91%",
    description: "Gained confidence using AI tools to create and publish digital products and content"
  }, {
    percent: "88%",
    description: "Started earning from sales, affiliate links, or digital products within 60 days"
  }];
  const handleButtonClick = () => {
    window.open('https://www.paypal.com/ncp/payment/RGV3ZRLJ8V448', '_blank', 'noopener,noreferrer');
  };
  return <section className="w-full py-12 px-4 bg-[#fffffd]">
      <motion.div className="max-w-md mx-auto" initial={{
      opacity: 0,
      y: 50
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        {/* Main Headings */}
        <h2 className="text-3xl font-bold mb-1 text-yellow-900">BUILD YOUR INCOME ONLINE®</h2>
        <p className="text-md font-semibold mb-7 text-yellow-800">
          Smarter Content, Passive Growth 💻✨
        </p>

        {/* Stats Grid */}
        <div className="divide-y divide-yellow-200 mb-8">
          {statItems.map((item, index) => <div key={index} className="flex items-center py-5 space-x-6">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-yellow-400 shadow-lg">
                <span className="font-bold text-lg text-yellow-900">{item.percent}</span>
              </div>
              <div>
                <p className="text-yellow-900 font-medium leading-relaxed">{item.description}</p>
              </div>
            </div>)}
        </div>
        
        <p className="text-xs text-yellow-700 mt-2 mb-5 font-medium">
          * As reported by active LaunchPad Pro Pack users. Individual results depend on consistency and effort.
        </p>
        
        {/* Order Button */}
        <button onClick={handleButtonClick} className="w-44 h-12 bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold rounded-lg mb-8 relative overflow-hidden shadow-lg transition-all duration-300">
          {/* Shining effect overlay */}
          <span className="absolute inset-0 overflow-hidden flex items-center justify-center">
            <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shine_3s_infinite]" />
          </span>
          <span className="relative z-10 text-xl font-extrabold">GET ACCESS </span>
        </button>
      </motion.div>
    </section>;
};
export default ProductStatsSection;