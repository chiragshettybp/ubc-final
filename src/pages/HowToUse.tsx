
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Info, HelpCircle } from 'lucide-react';

const HowToUse = () => {
  return (
    <div className="max-w-md mx-auto bg-black">
      <Header />
      <div className="flex flex-col items-center pt-4 pb-8 px-4">
        <div className="w-full max-w-md mx-auto py-8">
          <div className="flex items-center justify-center mb-6">
            <Info size={32} className="text-gray-400 mr-2" />
            <h1 className="text-2xl font-bold text-white">How to Use Hand Grips Strengthener Kit</h1>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <p className="text-sm text-center text-white">
              Follow these simple instructions to get the most out of your Hand Grips Strengthener Kit - 5 Pack®.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="border-b border-gray-700 pb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">Step 1: Start with the Right Tool</h2>
              <p className="text-sm text-gray-300">
                Begin with the Stress Relief Grip Ball or the lowest resistance setting on the Adjustable Hand Grip Strengthener (22 lbs). This helps you learn proper form and avoid strain.
              </p>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">Step 2: Use the Finger Exerciser</h2>
              <p className="text-sm text-gray-300">
                Place individual fingers through the resistance bands. Press down slowly and release. Start with 10-15 repetitions per finger. Perfect for musicians and office workers.
              </p>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">Step 3: Progress with the Grip Strengthener</h2>
              <p className="text-sm text-gray-300">
                Gradually increase resistance from 22 lbs to 132 lbs as your strength improves. Hold the squeeze for 2-3 seconds, then slowly release. Focus on controlled movements.
              </p>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">Step 4: Balance with Finger Stretcher</h2>
              <p className="text-sm text-gray-300">
                Use the Finger Stretcher Resistance Band to counteract gripping exercises. Place around fingertips and spread fingers apart. This prevents muscle imbalances and reduces strain.
              </p>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">Important Safety Tips</h2>
              <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1">
                <li>Always warm up with light stretches before exercising</li>
                <li>Start with lower resistance and gradually increase</li>
                <li>Stop if you feel pain or excessive fatigue</li>
                <li>Use 2-3 times per day, 10-15 repetitions per exercise</li>
                <li>Watch the FREE online video tutorial for proper form</li>
              </ul>
            </div>
            
            <div className="pt-2">
              <h2 className="text-lg font-semibold mb-2 text-white">Need Help?</h2>
              <p className="text-sm text-gray-300">
                If you have any questions about using your Hand Grips Strengthener Kit, contact FitBeast's 24/7 support team at <a href="mailto:rememberframe@gmail.com" className="text-gray-400 hover:underline">rememberframe@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowToUse;
