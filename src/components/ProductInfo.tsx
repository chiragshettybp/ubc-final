
import React from 'react';

const ProductInfo: React.FC = () => {
  return (
    <div className="w-full px-4 bg-black">
      <h1 className="text-2xl font-bold text-white mt-2 mb-2">
        YOUTUBE INCOME ACADEMY® – Full AI YouTube Automation Course
      </h1>
      
      <p className="text-sm font-bold text-white mb-2">
        🎥 Launch. Automate. Monetize. Turn Content into Passive Income.
      </p>

      <div className="flex items-center mb-4">
        <span className="text-gray-500 line-through text-lg mr-2">$499</span>
        <span className="font-bold mr-4 text-gray-400 text-xl">$197</span>
        <span className="bg-gray-700 font-bold px-4 py-1 rounded-full text-white">
          SAVE 60%
        </span>
      </div>

      <p className="font-semibold text-white mb-2">
        The all-in-one system to build a fully automated YouTube channel.
        Ideal for beginners, creators, and entrepreneurs ready to scale income with AI.
      </p>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-green-400">✅</span>
          <span className="text-white">1-on-1 Coaching with Alyssa Ray</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">✅</span>
          <span className="text-white">Full AI Workflow: Script to Upload</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">✅</span>
          <span className="text-white">Access to Alyssa’s YouTube Analytics Dashboard</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">✅</span>
          <span className="text-white">5 AI-Generated, SEO-Optimized Video Templates</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">✅</span>
          <span className="text-white">Channel Setup + Monetization Blueprint</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">✅</span>
          <span className="text-white">Private Telegram/Discord Community</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">✅</span>
          <span className="text-white">
            Bonus: 50 Viral Video Ideas & Channel Audit Templates <span className="text-gray-400">($397 Value)</span>
          </span>
        </div>
      </div>
      
      <p className="text-white font-semibold mb-1">
        No Camera. No Experience Needed.
      </p>
      <p className="text-white">
        Plug, play, and start growing on YouTube—even while you sleep.
      </p>
    </div>
  );
};

export default ProductInfo;
