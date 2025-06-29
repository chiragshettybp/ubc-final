
import React from 'react';
import { Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <Header />
      <div className="px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Contact</h1>
        
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Got a question or need support?<br />
            We're here to help!
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Mail size={18} className="text-gray-600" />
              <span className="font-semibold">Email:</span>
            </div>
            <p className="text-gray-700">alyssaray@coutk.com</p>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">
            Please allow 24–48 hours for a response.
          </p>
          
          <p className="text-sm text-gray-600 italic">
            <strong>Note:</strong> Delivery of your bundle depends on availability of slots. Once your slot is confirmed, access will be sent via email.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
