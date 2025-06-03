
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, AlertTriangle, Scale, Mail } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="max-w-md mx-auto bg-black">
      <Header />
      <div className="flex flex-col items-center pt-4 pb-8 px-4">
        <div className="w-full max-w-md mx-auto py-8">
          <div className="flex items-center justify-center mb-6">
            <FileText size={32} className="text-gray-400 mr-2" />
            <h1 className="text-2xl font-bold text-white">Terms of Service</h1>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <p className="text-sm text-center text-white">
              Effective Date: April 14, 2025. These Terms of Service govern your use of the Hand Grips Strengthener Kit and FitBeast website.
            </p>
          </div>
          
          <div className="space-y-6 text-sm text-gray-300">
            <div className="border-b border-gray-700 pb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing or using our website, placing an order for the Hand Grips Strengthener Kit, or using any of our fitness products, you agree to be bound by these Terms of Service. If you do not agree to all the terms, you may not use our services.
              </p>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">2. Products and Orders</h2>
              <p className="mb-2">
                All Hand Grips Strengthener Kits are subject to availability. We reserve the right to discontinue any product at any time. Prices for our grip strengthener kits are subject to change without notice.
              </p>
              <p>
                We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.
              </p>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <div className="flex items-center mb-2">
                <AlertTriangle size={20} className="text-gray-400 mr-2" />
                <h2 className="text-lg font-semibold text-white">3. Health and Safety Disclaimers</h2>
              </div>
              <p className="mb-2">
                The Hand Grips Strengthener Kit is designed for fitness and rehabilitation purposes. Results may vary from person to person. This product is not intended to diagnose, treat, cure, or prevent any medical condition.
              </p>
              <p>
                We recommend consulting with a healthcare professional before starting any new exercise program, especially if you have pre-existing hand, wrist, or arm conditions.
              </p>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <div className="flex items-center mb-2">
                <Scale size={20} className="text-gray-400 mr-2" />
                <h2 className="text-lg font-semibold text-white">4. Intellectual Property</h2>
              </div>
              <p>
                All content related to the Hand Grips Strengthener Kit, including product designs, instructional materials, videos, and website content, is the property of FitBeast and is protected by international copyright laws.
              </p>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">5. User Accounts</h2>
              <p>
                If you create an account on our website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account.
              </p>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">6. Limitation of Liability</h2>
              <p>
                In no event shall FitBeast, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any use of our Hand Grips Strengthener Kit, website, or services.
              </p>
            </div>
            
            <div className="pt-2">
              <div className="flex items-center mb-2">
                <Mail size={20} className="text-gray-400 mr-2" />
                <h2 className="text-lg font-semibold text-white">7. Contact Information</h2>
              </div>
              <p>
                If you have any questions about these Terms of Service regarding the Hand Grips Strengthener Kit, please contact us at <a href="mailto:rememberframe@gmail.com" className="text-gray-400 hover:underline">rememberframe@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
