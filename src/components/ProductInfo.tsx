
import React from 'react';
// Removed: import SlinkySection from './SlinkySection';

const ProductInfo: React.FC = () => {
  return (
    <div className="w-full px-4 bg-black">
      {/* Removed: <SlinkySection /> */}
      <h1 className="font-bold text-white mt-2 mb-2 text-2xl text-left py-[19px] animate-fade-in">
        YOUTUBE INCOME ACADEMY by Alyssa Ray®
      </h1>
      <p className="text-sm font-bold text-white mb-2">
        🎥 Launch. Automate. Monetize. Turn Content into Passive Income.
      </p>
      <p className="font-semibold text-white mb-2">
        The all-in-one system to build a fully automated YouTube channel.
        Ideal for beginners, creators, and entrepreneurs ready to scale income with AI.
      </p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📁</span>
          <span className="text-white">1-on-1 Coaching with Alyssa Ray</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📁</span>
          <span className="text-white">Full AI Workflow: Script to Upload</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📁</span>
          <span className="text-white">Access to Alyssa’s YouTube Analytics Dashboard</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📁</span>
          <span className="text-white">5 AI-Generated, SEO-Optimized Video Templates</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📁</span>
          <span className="text-white">Channel Setup + Monetization Blueprint</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📁</span>
          <span className="text-white">Private Telegram/Discord Community</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📁</span>
          <span className="text-white">
            Bonus: 50 Viral Video Ideas & Channel Audit Templates <span className="text-[#f4d535]">($397 Value Bonus FREE)</span>
          </span>
        </div>
      </div>
      <p className="text-white font-semibold mb-1 py-[4px]">
        No Camera. No Experience Needed.
      </p>
    </div>
  );
};
export default ProductInfo;

