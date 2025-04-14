import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="w-full bg-dark text-white pb-16">
      <div className="max-w-md mx-auto px-4 pt-16">
        {/* Logo and email signup */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-4">BLEAME</h2>
          <p className="text-sm opacity-90 mb-4">
            Join our email list for exclusive offers and the<br />
            latest news.
          </p>
          
          {/* Email signup form - simplified version */}
          <div className="flex gap-2 mt-6">
            <input type="email" placeholder="Your email" className="px-4 py-2 rounded-md bg-gray-700 text-white flex-1 text-sm border border-gray-600 focus:outline-none focus:border-purple" />
            <button className="bg-purple rounded-md px-4 py-2 text-sm font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
        
        {/* Help Links */}
        <div className="mb-10">
          <h3 className="font-bold mb-4">Need Help?</h3>
          <ul className="opacity-75 text-sm space-y-3">
            <li><Link to="/" className="hover:text-purple-lighter">How to Use</Link></li>
            <li><Link to="/" className="hover:text-purple-lighter">Help Center</Link></li>
            <li><Link to="/" className="hover:text-purple-lighter">Track Your Order</Link></li>
            <li><Link to="/" className="hover:text-purple-lighter">Shipping & Delivery</Link></li>
            <li><Link to="/" className="hover:text-purple-lighter">Return & Refund Policy</Link></li>
            <li><Link to="/" className="hover:text-purple-lighter">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-purple-lighter">Terms of Service</Link></li>
            <li><Link to="/" className="hover:text-purple-lighter">Membership Cancelation</Link></li>
          </ul>
        </div>
        
        {/* Company Info */}
        <div className="mb-10">
          <h3 className="font-bold mb-4">Bleame</h3>
          <p className="opacity-75 text-sm leading-6">
            Our mission is to make hygienic care more<br />
            accessible for anyone in need.<br />
            <a href="mailto:hello@bleame.com" className="flex items-center gap-2 mt-2 hover:text-purple-lighter">
              <Mail className="w-4 h-4" /> hello@bleame.com
            </a>
            <a href="tel:815-857-8366" className="flex items-center gap-2 mt-2 hover:text-purple-lighter">
              <Phone className="w-4 h-4" /> 815-857-8366
            </a>
          </p>
        </div>
        
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
          <div className="grid grid-cols-4 gap-2 mb-6">
            <div className="h-6 w-10 bg-gray-700 rounded-md"></div>
            <div className="h-6 w-10 bg-gray-700 rounded-md"></div>
            <div className="h-6 w-10 bg-gray-700 rounded-md"></div>
            <div className="h-6 w-10 bg-gray-700 rounded-md"></div>
            <div className="h-6 w-10 bg-gray-700 rounded-md"></div>
            <div className="h-6 w-10 bg-gray-700 rounded-md"></div>
            <div className="h-6 w-10 bg-gray-700 rounded-md"></div>
            <div className="h-6 w-10 bg-gray-700 rounded-md"></div>
          </div>
          
          {/* Social links */}
          
        </div>
      </div>
    </footer>;
};
export default Footer;