import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HelpCircle, Search, MessageSquare, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  return (
    <div className="max-w-md mx-auto bg-black">
      <Header />
      <div className="flex flex-col items-center pt-4 pb-8 px-4">
        <div className="w-full max-w-md mx-auto py-8">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle size={32} className="text-gray-400 mr-2" />
            <h1 className="text-2xl font-bold text-white">Help Center</h1>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <p className="text-sm text-center text-white">
              Find answers about your Hand Grips Strengthener Kit or get in touch with our support team.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="border border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow bg-gray-900">
              <div className="flex items-center mb-3">
                <Search size={20} className="text-gray-400 mr-2" />
                <h2 className="text-lg font-semibold text-white">Frequently Asked Questions</h2>
              </div>
              <p className="text-sm text-gray-300 mb-2">
                Browse our most common questions about the Hand Grips Strengthener Kit.
              </p>
              <div className="space-y-3 mt-4">
                <Link to="/how-to-use" className="block text-sm text-gray-400 hover:underline">
                  How do I use the Hand Grips Strengthener Kit properly?
                </Link>
                <Link to="/shipping-delivery" className="block text-sm text-gray-400 hover:underline">
                  What are the shipping times for my hand grip kit?
                </Link>
                <Link to="/return-refund" className="block text-sm text-gray-400 hover:underline">
                  What is your refund policy for the grip strengthener?
                </Link>
                <Link to="/track-order" className="block text-sm text-gray-400 hover:underline">
                  How can I track my Hand Grip Kit order?
                </Link>
              </div>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow bg-gray-900">
              <div className="flex items-center mb-3">
                <MessageSquare size={20} className="text-gray-400 mr-2" />
                <h2 className="text-lg font-semibold text-white">Contact Support</h2>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                FitBeast's 24/7 customer support team is here to help with any questions about your Hand Grips Strengthener Kit.
              </p>
              <div className="space-y-3">
                <a href="mailto:handgrip@gmail.com" className="flex items-center text-sm text-gray-400 hover:underline">
                  <Mail size={16} className="mr-2" />
                  handgrip@gmail.com
                </a>
                <a href="tel:815-857-8366" className="flex items-center text-sm text-gray-400 hover:underline">
                  <MessageSquare size={16} className="mr-2" />
                  815-857-8366
                </a>
              </div>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow bg-gray-900">
              <h2 className="text-lg font-semibold mb-3 text-white">Popular Resources</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/shipping-delivery" className="text-sm text-gray-400 hover:underline">
                    Shipping & Delivery Information
                  </Link>
                </li>
                <li>
                  <Link to="/return-refund" className="text-sm text-gray-400 hover:underline">
                    Return & Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-sm text-gray-400 hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-sm text-gray-400 hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;
