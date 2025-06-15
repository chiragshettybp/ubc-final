import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="w-full text-white pb-16 bg-black">
      <div className="max-w-md mx-auto px-4 pt-16 bg-black">
        {/* Logo and email signup */}
        <div className="mb-10">
          <h2 className="font-bold mb-4 text-2xl text-left">Alyssa Ray®</h2>
          
        </div>
        
        {/* Help Links */}
        <div className="mb-10">
          <h3 className="font-bold mb-4">Need Help?</h3>
          <ul className="opacity-75 text-sm space-y-3">
            <li><Link to="/help-center" className="hover:text-gray-400">Help Center</Link></li>
            <li><Link to="/track-order" className="hover:text-gray-400">Track Your Order</Link></li>
            <li><Link to="/shipping-delivery" className="hover:text-gray-400">Shipping & Delivery</Link></li>
            <li><Link to="/return-refund" className="hover:text-gray-400">Return & Refund Policy</Link></li>
            <li><Link to="/reviews" className="hover:text-gray-400">Customer Reviews</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-gray-400">Terms of Service</Link></li>
            <li><Link to="/how-to-use" className="hover:text-gray-400">How to Use</Link></li>
          </ul>
        </div>
        
        {/* Legal Disclaimer */}
        <div className="border-t border-gray-700 pt-6 mb-8">
          <p className="opacity-75 leading-5 text-center text-xs">By purchasing and enrolling in this course, you agree to our Terms and Conditions and acknowledge that all course content is provided for educational purposes only. Class start dates may vary or be delayed due to the scheduling and completion of existing student batches. We operate on a structured intake system to ensure quality delivery, and as such, we do not offer refunds for delayed starts. Please enroll only if you understand and accept this scheduling policy.



Results are entirely dependent on your commitment, consistency, and individual effort. While many of our students have achieved outstanding results, we make no guarantees of specific outcomes. By enrolling, you accept full responsibility for your progress and understand that lack of results does not qualify for a refund. This course is a self-responsibility-based learning program, and your success ultimately depends on your actions.</p>
        </div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col items-center">
          <div className="flex gap-2 text-xs opacity-75 mb-6">
            <span>© Copyright 2025</span>
            <span className="w-1 h-1 rounded-full bg-gray-500 self-center"></span>
            <span>Alyssa Ray®</span>
          </div>
          
          {/* Payment methods */}
          <p className="text-xs opacity-75 mb-3">We accept</p>
          <div className="grid grid-cols-4 gap-2 mb-6 items-center">
            <img src="/lovable-uploads/10cdf540-7087-4a4e-bbcd-13528bb6a15d.png" alt="Payment methods: Visa, Mastercard, American Express, and PayPal" className="col-span-4 w-2/4 mx-auto h-auto" />
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;