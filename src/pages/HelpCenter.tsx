
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HelpCircle, Search, MessageSquare, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  return (
    <div className="max-w-md mx-auto bg-white">
      <Header />
      <div className="flex flex-col items-center pt-4 pb-8 px-4">
        <div className="w-full max-w-md mx-auto py-8">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle size={32} className="text-purple-600 mr-2" />
            <h1 className="text-2xl font-bold">Help Center</h1>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-center">
              Find answers to frequently asked questions or get in touch with our support team.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Search size={20} className="text-purple-600 mr-2" />
                <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Browse our most common questions and answers.
              </p>
              <div className="space-y-3 mt-4">
                <Link to="/how-to-use" className="block text-sm text-purple-600 hover:underline">
                  How do I use my Bleame product?
                </Link>
                <Link to="/shipping-delivery" className="block text-sm text-purple-600 hover:underline">
                  What are the shipping times?
                </Link>
                <Link to="/return-refund" className="block text-sm text-purple-600 hover:underline">
                  What is your return policy?
                </Link>
                <Link to="/track-order" className="block text-sm text-purple-600 hover:underline">
                  How can I track my order?
                </Link>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <MessageSquare size={20} className="text-purple-600 mr-2" />
                <h2 className="text-lg font-semibold">Contact Support</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Our customer support team is here to help with any questions or concerns.
              </p>
              <div className="space-y-3">
                <a href="mailto:hello@bleame.com" className="flex items-center text-sm text-purple-600 hover:underline">
                  <Mail size={16} className="mr-2" />
                  hello@bleame.com
                </a>
                <a href="tel:815-857-8366" className="flex items-center text-sm text-purple-600 hover:underline">
                  <MessageSquare size={16} className="mr-2" />
                  815-857-8366
                </a>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold mb-3">Popular Resources</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/shipping-delivery" className="text-sm text-purple-600 hover:underline">
                    Shipping & Delivery Information
                  </Link>
                </li>
                <li>
                  <Link to="/return-refund" className="text-sm text-purple-600 hover:underline">
                    Return & Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-sm text-purple-600 hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-sm text-purple-600 hover:underline">
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
