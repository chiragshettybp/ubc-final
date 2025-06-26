
import React from 'react';
// Removed: import SlinkySection from './SlinkySection';

const ProductInfo: React.FC = () => {
  return <div className="w-full px-4 bg-black">
      {/* Removed: <SlinkySection /> */}
      <div className="w-full flex justify-center mb-4">
        <img 
          src="https://i.postimg.cc/BZHnGmJq/mainbanner-png-1.png" 
          alt="LaunchPad Pro Pack Banner" 
          className="w-full max-w-md rounded-lg"
        />
      </div>
      <h1 className="font-bold text-white mt-2 mb-2 text-2xl text-left py-[19px]">
        LAUNCHPAD PRO PACK - YOUR DIGITAL MONEY MACHINE
      </h1>
      <p className="text-sm font-bold text-white mb-2">
        💸 Launch. Sell. Profit. Turn Digital Products into Passive Income.
      </p>
      <p className="font-semibold text-white mb-2">
        The all-in-one system to build your automated online business.
        Ideal for beginners, aspiring entrepreneurs, and anyone ready to earn money online with minimal effort.
      </p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📁</span>
          <span className="text-white">Step-by-Step Guide: Selling Digital Products</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📁</span>
          <span className="text-white">Free Website Setup & Launch Blueprint</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📁</span>
          <span className="text-white">AI Strategies for Free Customer Acquisition</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📁</span>
          <span className="text-white">Access to 40 Million+ Premium Digital Products</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📁</span>
          <span className="text-white">1000+ High-Ticket Courses with Resell Rights</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📁</span>
          <span className="text-white">200K+ Viral Reels for Instant Content</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📁</span>
          <span className="text-white">300K+ ChatGPT Prompts Bundle</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📁</span>
          <span className="text-white">
            Bonus: Ready-Made, Tested & Proven Ad Templates <span className="text-[#f4d535]">(₹3999 Value Bonus FREE)</span>
          </span>
        </div>
      </div>
      <p className="text-white mb-1 text-base text-center py-[3px] font-bold">
        No Camera. No Experience Needed.
      </p>
    </div>;
};

export default ProductInfo;
