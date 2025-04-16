
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Info, HelpCircle } from 'lucide-react';

const HowToUse = () => {
  return (
    <div className="max-w-md mx-auto bg-white">
      <Header />
      <div className="flex flex-col items-center pt-4 pb-8 px-4">
        <div className="w-full max-w-md mx-auto py-8">
          <div className="flex items-center justify-center mb-6">
            <Info size={32} className="text-[#FF0B55] mr-2" />
            <h1 className="text-2xl font-bold">How to Use Bleame</h1>
          </div>
          
          <div className="bg-[#FF0B55]/10 p-4 rounded-lg mb-6">
            <p className="text-sm text-center">
              Follow these simple instructions to get the most out of your Bleame product.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold mb-2">Step 1: Preparation</h2>
              <p className="text-sm text-gray-600">
                Ensure your skin is clean and dry before use. Remove any lotions, oils, or makeup from the area you wish to treat.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold mb-2">Step 2: Application</h2>
              <p className="text-sm text-gray-600">
                Hold the crystal at a 45-degree angle to your skin. Using gentle, circular motions, move the crystal over the desired area.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold mb-2">Step 3: Maintenance</h2>
              <p className="text-sm text-gray-600">
                After each use, clean your Bleame crystal with a soft cloth or rinse with warm water. Allow it to dry completely before storing.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>Do not use on broken, irritated, or sunburnt skin</li>
                <li>Avoid using on sensitive areas like around the eyes</li>
                <li>Discontinue use if skin irritation occurs</li>
                <li>Keep out of reach of children</li>
              </ul>
            </div>
            
            <div className="pt-2">
              <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
              <p className="text-sm text-gray-600">
                If you have any questions or concerns about using your Bleame product, please contact our customer support team at <a href="mailto:hello@bleame.com" className="text-purple-600 hover:underline">hello@bleame.com</a>.
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
