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
        <img 
          alt="Success testimonial about moving to new home" 
          className="w-full max-w-md rounded-lg shadow-md" 
          src="/lovable-uploads/eb9a95f0-2ee3-4b35-b521-322495676a63.png" 
        />
        <img 
          alt="Beautiful modern home interior" 
          className="w-full max-w-md rounded-lg shadow-md" 
          src="/lovable-uploads/462e46e6-4622-479c-84d0-f2b846a4d9c9.png" 
        />
      </div>

      {/* Gloria's Introduction Section */}
      <div className="w-full flex flex-col items-center space-y-4 mb-8">
        <img 
          alt="Meet Gloria - Your Success Guide" 
          className="w-full max-w-md rounded-lg shadow-md" 
          src="/lovable-uploads/cea682d6-6583-431c-92ea-be7522a15e80.png" 
        />
        <div className="bg-blue-50 rounded-lg p-6 max-w-md w-full">
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
          <p className="text-sm text-gray-700 mt-3 font-semibold text-red-600">
            Well, they got it wrong.
          </p>
        </div>
      </div>

      {/* Discovery Story Section */}
      <div className="w-full flex flex-col items-center space-y-4 mb-8">
        <img 
          alt="The moment everything changed" 
          className="w-full max-w-md rounded-lg shadow-md" 
          src="/lovable-uploads/d89fee55-77a1-4abf-b054-ff70619758a7.png" 
        />
        <div className="bg-green-50 rounded-lg p-6 max-w-md w-full">
          <p className="text-sm text-gray-700 mb-3">
            One day, scrolling on Instagram I stumbled upon Digital Marketing and saw how ordinary people and graduates like me were changing their lives making money online with no experience.
          </p>
          <p className="text-sm text-gray-700 mb-3 font-semibold text-green-600">
            They were making $500/day! WHAT?
          </p>
          <p className="text-sm text-gray-700 mb-3">
            They had no boss, no working hours, no rush in the traffic. I wanted that life.
          </p>
          <p className="text-sm text-gray-700 mb-3">
            So I decided to give it a try since I had nothing to lose.
          </p>
          <p className="text-sm text-gray-700">
            Oh and if you're asking, yes, I was scared. I was skeptical as well.
          </p>
          <p className="text-sm text-gray-700 mt-3 font-semibold">
            But I'm the kind of person who has to try it herself before giving up.
          </p>
        </div>
      </div>

      {/* First Steps Section */}
      <div className="w-full flex flex-col items-center space-y-4 mb-8">
        <img 
          alt="Taking the first step" 
          className="w-full max-w-md rounded-lg shadow-md" 
          src="/lovable-uploads/d1984f48-28aa-4a00-b9f4-34816a9a1ffa.png" 
        />
        <div className="bg-yellow-50 rounded-lg p-6 max-w-md w-full">
          <p className="text-sm text-gray-700 mb-3">
            I didn't want to ask my parents so I worked 2 jobs for 8 months: I was a nanny in the morning and a secretary in a law firm in the afternoon. I saved up the money I needed to learn the skills so I could finally build my own future. And I took the first step, I bought the course.
          </p>
          <p className="text-sm text-gray-700 font-semibold">
            It's been a journey. It takes consistency and faith.
          </p>
          <p className="text-sm text-gray-700 mt-3 font-bold text-orange-600">
            But since that first step...
          </p>
        </div>
      </div>

      {/* Success Results Section */}
      <div className="w-full flex flex-col items-center space-y-4 mb-8">
        <img 
          alt="Living life on my own terms" 
          className="w-full max-w-md rounded-lg shadow-md" 
          src="/lovable-uploads/cf23bf65-631a-476a-8e7f-1f9f64dfb48f.png" 
        />
        <div className="bg-purple-50 rounded-lg p-6 max-w-md w-full">
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">⭐</span>
              <span className="text-sm text-gray-700">I can travel the world without asking for permission</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">⭐</span>
              <span className="text-sm text-gray-700">I got to choose my working hours depending on how I feel every day</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">⭐</span>
              <span className="text-sm text-gray-700">I spend more time with my family</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">⭐</span>
              <span className="text-sm text-gray-700">I can wake up with no alarm clock</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">⭐</span>
              <span className="text-sm text-gray-700">I finally feel valuable, capable and proud of myself</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">⭐</span>
              <span className="text-sm text-gray-700">I live life on my own terms</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">⭐</span>
              <span className="text-sm text-gray-700">I'm creating a bright future for my boyfriend and I</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">⭐</span>
              <span className="text-sm text-gray-700">I help others escape their stressful jobs to gain back their own time and financial freedom thanks to digital marketing</span>
            </div>
          </div>
        </div>
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
