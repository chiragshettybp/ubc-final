
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
            <h1 className="text-2xl font-bold text-white">How to Use Train Like a Spartan</h1>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <p className="text-sm text-center text-white">
              Follow these simple instructions to get the most out of your Spartan training program.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="border-b border-gray-700 pb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">Step 1: Download Your Program</h2>
              <p className="text-sm text-gray-300">
                After purchase, you'll receive instant access to download your 60+ page PDF. Save it to your device for offline access during workouts.
              </p>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">Step 2: Choose Your Battle Rhythm</h2>
              <p className="text-sm text-gray-300">
                Select from 3-day, 4-day, or 6-day training splits based on your current fitness level and schedule. Start with the 3-day split if you're new to this style of training.
              </p>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">Step 3: Master the Fundamentals</h2>
              <p className="text-sm text-gray-300">
                Begin with the bodyweight-only warrior workouts. Focus on proper form and the Spartan training philosophy before advancing to more intense sessions.
              </p>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">Important Notes</h2>
              <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1">
                <li>Always perform the warrior warm-up routine before training</li>
                <li>Follow the recovery and stretching protocols</li>
                <li>Track your progress using the included accountability sheets</li>
                <li>Listen to your body and adjust intensity as needed</li>
              </ul>
            </div>
            
            <div className="pt-2">
              <h2 className="text-lg font-semibold mb-2 text-white">Need Help?</h2>
              <p className="text-sm text-gray-300">
                If you have any questions about your Spartan training program, please contact our support team at <a href="mailto:rememberframe@gmail.com" className="text-gray-400 hover:underline">rememberframe@gmail.com</a>.
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
