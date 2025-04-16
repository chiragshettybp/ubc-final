import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className="w-full bg-dark text-white pb-16">
      <div className="max-w-md mx-auto px-4 pt-16">
        {/* Logo and email signup */}
        <div className="mb-10">
          <h2 className="font-bold mb-4 text-2xl">REMEMBERFRAME®</h2>
          <p className="text-sm opacity-90 mb-4">
            Join our email list for exclusive offers and the<br />
            latest news.
          </p>
          
          {/* Email signup form - simplified version */}
          <div className="flex">
            
            
          </div>
        </div>
        
        {/* Help Links */}
        <div className="mb-10">
          <h3 className="font-bold mb-4">Need Help?</h3>
          <ul className="opacity-75 text-sm space-y-3">
            <li><Link to="/help-center" className="hover:text-purple-lighter">Help Center</Link></li>
            <li><Link to="/track-order" className="hover:text-purple-lighter">Track Your Order</Link></li>
            <li><Link to="/shipping-delivery" className="hover:text-purple-lighter">Shipping & Delivery</Link></li>
            <li><Link to="/return-refund" className="hover:text-purple-lighter">Return & Refund Policy</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-purple-lighter">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-purple-lighter">Terms of Service</Link></li>
            <li><Link to="/how-to-use" className="hover:text-purple-lighter">How to Use</Link></li>
          </ul>
        </div>
        
        {/* Company Info */}
        
        
        {/* Legal Disclaimer */}
        <div className="border-t border-gray-800 pt-6 mb-8">
          <p className="text-xs opacity-75 leading-5 text-center">
            Safety precautions found at Bleame.com/MustKnows must
            be read before use. In case of discomfort, discontinue use
            immediately. Note that all content and resources provided
            on our website are not medical advice nor should they be
            used as a substitute for professional medical treatment. For
            medical concerns and/or emergencies, consult your health
            care provider and emergency services immediately.
          </p>
        </div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col items-center">
          <div className="flex gap-2 text-xs opacity-75 mb-6">
            <span>© Copyright 2025</span>
            <span className="w-1 h-1 rounded-full bg-gray-500 self-center"></span>
            <span>Bleame</span>
          </div>
          
          {/* Payment methods */}
          <p className="text-xs opacity-75 mb-3">We accept</p>
          <div className="grid grid-cols-4 gap-2 mb-6 items-center">
            <img 
              src="/lovable-uploads/10cdf540-7087-4a4e-bbcd-13528bb6a15d.png"
              alt="Payment methods: Visa, Mastercard, American Express, and PayPal"
              className="col-span-4 w-full h-auto"
            />
          </div>
          
          {/* Social links */}
          <div className="flex gap-4 opacity-75">
            <a href="#" className="hover:opacity-100">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:opacity-100">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:opacity-100">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:opacity-100">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
