
import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full text-black pb-16 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto px-4 pt-16 bg-white">
        {/* Logo and email signup */}
        <div className="mb-10">
          <h2 className="font-bold mb-4 text-2xl text-left">Alyssa Ray®</h2>
        </div>
        
        {/* New Links */}
        <div className="mb-10">
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="opacity-75 text-sm space-y-3">
            <li><Link to="/about" className="hover:text-gray-600">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-600">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-gray-600">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions" className="hover:text-gray-600">Terms & Conditions</Link></li>
            <li><Link to="/refund-policy" className="hover:text-gray-600">Refund Policy</Link></li>
            <li><Link to="/faq" className="hover:text-gray-600">FAQ</Link></li>
            <li><Link to="/disclaimer" className="hover:text-gray-600">Disclaimer</Link></li>
          </ul>
        </div>
        
        {/* Legal Disclaimer */}
        <div className="border-t border-gray-300 pt-6 mb-8">
          <p className="opacity-75 leading-5 text-center text-xs">
            DISCLAIMER: The profit figures stated above are my personal figures from the last 5 years. Please understand these results can vary, I'm not implying you'll duplicate them (or do anything for that matter). The average person who buys any "how to" information gets little to no results. I'm using these references for example purposes only. Your results will vary and depend on many factors… including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort and action. If you're not willing to accept that, please DO NOT ATTEND THIS TRAINING.
            <br /><br />
            This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        </div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col items-center">
          <div className="flex gap-2 text-xs opacity-75 mb-6">
            <span>Alyssa Ray - Copyright © 2025. All Rights Reserved.</span>
          </div>
          
          {/* Payment methods */}
          <p className="text-xs opacity-75 mb-3">We accept</p>
          <div className="grid grid-cols-4 gap-2 mb-6 items-center">
            <img src="/lovable-uploads/10cdf540-7087-4a4e-bbcd-13528bb6a15d.png" alt="Payment methods: Visa, Mastercard, American Express, and PayPal" className="col-span-4 w-2/4 mx-auto h-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
