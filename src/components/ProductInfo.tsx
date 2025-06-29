import React from 'react';
// Removed: import SlinkySection from './SlinkySection';

const ProductInfo: React.FC = () => {
  return <div className="w-full px-4 bg-white">
      {/* Removed: <SlinkySection /> */}
      <div className="w-full flex justify-center mb-4">
        <img alt="LaunchPad Pro Pack Banner" className="w-full max-w-md rounded-lg" src="/lovable-uploads/b4eed02e-f9c6-44d3-abd3-b78fa368a55e.png" />
      </div>
      <h1 className="text-black mt-2 mb-2 text-2xl text-center py-[10px] my-[13px] font-extrabold">Steal My All-Inclusive, Done-For-You System to Start Making Money Online with Social Media—Even If You Don't Have Experience!</h1>
      
      {/* New images added below the heading */}
      <div className="w-full flex flex-col items-center space-y-4 mb-6">
        <img alt="Success testimonial about moving to new home" className="w-full max-w-md rounded-lg shadow-md" src="/lovable-uploads/eb9a95f0-2ee3-4b35-b521-322495676a63.png" />
        <img alt="Beautiful modern home interior" className="w-full max-w-md rounded-lg shadow-md" src="/lovable-uploads/462e46e6-4622-479c-84d0-f2b846a4d9c9.png" />
      </div>

      {/* Gloria's Introduction Section */}
      <div className="w-full flex flex-col items-center space-y-4 mb-8">
        <img alt="Meet Gloria - Your Success Guide" className="w-full max-w-md rounded-lg shadow-md" src="/lovable-uploads/18ac57cb-8c68-48de-b143-aeaddf92c215.png" />
        <div className="rounded-lg p-6 max-w-md w-full bg-slate-50 px-[4px]">
          <h2 className="text-lg font-bold text-black mb-3">Hey, nice to meet you! My name is Gloria.</h2>
          <p className="text-sm text-gray-700 mb-3">
            I'm an Italian girl who was always taught to do the right things: go to school and get a college degree so you can find a good job.
          </p>
          <p className="text-sm text-gray-700 mb-3 font-semibold">Well, I did it.</p>
          <p className="text-sm text-gray-700 mb-3">
            I went to school and then to college and I got a degree. But then?
          </p>
          <p className="text-sm text-gray-700">
            I had nothing. With my degree I could barely make $500/month working 8 hours/day as I had no experience and this is what they can offer you.
          </p>
          <p className="text-sm mt-3 font-semibold text-yellow-500">
            Well, they got it wrong.
          </p>
        </div>
      </div>

      {/* Discovery Story Section */}
      <div className="w-full flex flex-col items-center space-y-4 mb-8">
        
        
      </div>

      {/* First Steps Section */}
      <div className="w-full flex flex-col items-center space-y-4 mb-8">
        
        
      </div>

      {/* Success Results Section */}
      <div className="w-full flex flex-col items-center space-y-4 mb-8">
        
        
      </div>

      <p className="text-sm font-bold text-black mb-2">
        💸 Launch. Sell. Profit. Turn Digital Products into Passive Income.
      </p>
      <p className="font-semibold text-black mb-2">
        The all-in-one system to build your automated online business.
        Ideal for beginners, aspiring entrepreneurs, and anyone ready to earn money online with minimal effort.
      </p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-green-600">📁</span>
          <span className="text-black">Step-by-Step Guide: Selling Digital Products</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-600">📁</span>
          <span className="text-black">Free Website Setup & Launch Blueprint</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-600">📁</span>
          <span className="text-black">AI Strategies for Free Customer Acquisition</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-600">📁</span>
          <span className="text-black">Access to 40 Million+ Premium Digital Products</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-600">📁</span>
          <span className="text-black">1000+ High-Ticket Courses with Resell Rights</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-600">📁</span>
          <span className="text-black">200K+ Viral Reels for Instant Content</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-600">📁</span>
          <span className="text-black">300K+ ChatGPT Prompts Bundle</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-600">📁</span>
          <span className="text-black">
            Bonus: Ready-Made, Tested & Proven Ad Templates <span className="text-[#f4d535]">(₹3999 Value Bonus FREE)</span>
          </span>
        </div>
      </div>
      <p className="text-black mb-1 text-base text-center py-[3px] font-bold">
        No Camera. No Experience Needed.
      </p>
    </div>;
};
export default ProductInfo;