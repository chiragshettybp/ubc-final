import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShieldCheck, Lock, Database, Eye } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-md mx-auto bg-white">
      <Header />
      <div className="flex flex-col items-center pt-4 pb-8 px-4">
        <div className="w-full max-w-md mx-auto py-8">
          <div className="flex items-center justify-center mb-6">
            <ShieldCheck size={32} className="text-[#FF0B55] mr-2" />
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
          </div>
          
          <div className="bg-[#FF0B55]/10 p-4 rounded-lg mb-6">
            <p className="text-sm text-center">
              Effective Date: April 14, 2025. This Privacy Policy describes how Bleame collects and uses your personal information.
            </p>
          </div>
          
          <div className="space-y-6 text-sm text-gray-600">
            <div className="border-b pb-4">
              <div className="flex items-center mb-2">
                <Database size={20} className="text-[#FF0B55] mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">Information We Collect</h2>
              </div>
              <p className="mb-2">
                We collect information that you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Create an account or place an order</li>
                <li>Contact customer service</li>
                <li>Sign up for our newsletter</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="mt-2">
                This may include your name, email address, postal address, phone number, payment information, and any other information you choose to provide.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <div className="flex items-center mb-2">
                <Eye size={20} className="text-[#FF0B55] mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">How We Use Your Information</h2>
              </div>
              <p className="mb-2">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about products, services, and promotions</li>
                <li>Improve our website and customer experience</li>
                <li>Detect and prevent fraud and abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
            
            <div className="border-b pb-4">
              <div className="flex items-center mb-2">
                <Lock size={20} className="text-[#FF0B55] mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">Data Security</h2>
              </div>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and collect certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">Your Rights</h2>
              <p className="mb-2">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to rectify or update your personal information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to our processing of your personal information</li>
              </ul>
            </div>
            
            <div className="pt-2">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@bleame.com" className="text-[#FF0B55] hover:underline">hello@bleame.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
