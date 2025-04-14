
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, AlertTriangle, Scale, Mail } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="max-w-md mx-auto bg-white">
      <Header />
      <div className="flex flex-col items-center pt-4 pb-8 px-4">
        <div className="w-full max-w-md mx-auto py-8">
          <div className="flex items-center justify-center mb-6">
            <FileText size={32} className="text-purple-600 mr-2" />
            <h1 className="text-2xl font-bold">Terms of Service</h1>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-center">
              Effective Date: April 14, 2025. These Terms of Service govern your use of the Bleame website and products.
            </p>
          </div>
          
          <div className="space-y-6 text-sm text-gray-600">
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">1. Acceptance of Terms</h2>
              <p>
                By accessing or using our website, placing an order, or using any of our products, you agree to be bound by these Terms of Service. If you do not agree to all the terms, you may not use our services.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">2. Products and Orders</h2>
              <p className="mb-2">
                All products are subject to availability. We reserve the right to discontinue any product at any time. Prices for products are subject to change without notice.
              </p>
              <p>
                We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <div className="flex items-center mb-2">
                <AlertTriangle size={20} className="text-purple-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">3. Product Disclaimers</h2>
              </div>
              <p className="mb-2">
                Our products are not intended to diagnose, treat, cure, or prevent any disease or health condition. Results from products may vary from person to person.
              </p>
              <p>
                We recommend consulting with a healthcare professional before using any of our products if you have a pre-existing medical condition or concerns.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <div className="flex items-center mb-2">
                <Scale size={20} className="text-purple-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">4. Intellectual Property</h2>
              </div>
              <p>
                All content included on this website, such as text, graphics, logos, images, and software, is the property of Bleame or its content suppliers and is protected by international copyright laws.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">5. User Accounts</h2>
              <p>
                If you create an account on our website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">6. Limitation of Liability</h2>
              <p>
                In no event shall Bleame, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any use of our products, website, or services.
              </p>
            </div>
            
            <div className="pt-2">
              <div className="flex items-center mb-2">
                <Mail size={20} className="text-purple-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">7. Contact Information</h2>
              </div>
              <p>
                If you have any questions about these Terms of Service, please contact us at <a href="mailto:hello@bleame.com" className="text-purple-600 hover:underline">hello@bleame.com</a>.
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
